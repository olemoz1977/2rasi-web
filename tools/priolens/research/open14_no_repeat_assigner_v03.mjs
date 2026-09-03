import { FAMILY_SET } from './p3_open14_planner_v02.mjs';

function xmur3(str){
  let h=1779033703^str.length;
  for(let i=0;i<str.length;i++){
    h=Math.imul(h^str.charCodeAt(i),3432918353);
    h=h<<13|h>>>19;
  }
  return function(){
    h=Math.imul(h^(h>>>16),2246822507);
    h=Math.imul(h^(h>>>13),3266489909);
    return (h^=h>>>16)>>>0;
  };
}

function mulberry32(a){
  return function(){
    let t=a+=0x6D2B79F5;
    t=Math.imul(t^t>>>15,t|1);
    t^=t+Math.imul(t^t>>>7,t|61);
    return ((t^t>>>14)>>>0)/4294967296;
  };
}

function rngFor(seed){
  return mulberry32(xmur3(String(seed))());
}

function shuffle(arr,rng){
  const out=[...arr];
  for(let i=out.length-1;i>0;i--){
    const j=Math.floor(rng()*(i+1));
    [out[i],out[j]]=[out[j],out[i]];
  }
  return out;
}

export function listThreeExemplarBankProblems(bank,{requireRuntimePaths=true}={}){
  const problems=[];
  for(const family of FAMILY_SET){
    const node=bank?.families?.[family.id];
    if(!node){
      problems.push(`${family.id}:MISSING_FAMILY`);
      continue;
    }
    if(!Array.isArray(node.exemplars) || node.exemplars.length!==3){
      problems.push(`${family.id}:EXPECTED_3_EXEMPLARS`);
      continue;
    }
    const ids=new Set();
    const paths=new Set();
    for(const ex of node.exemplars){
      if(!ex?.id){
        problems.push(`${family.id}:UNNAMED_EXEMPLAR`);
        continue;
      }
      if(ids.has(ex.id)) problems.push(`${family.id}:DUPLICATE_EXEMPLAR_ID:${ex.id}`);
      ids.add(ex.id);
      if(requireRuntimePaths && !ex.runtimePath) problems.push(`${ex.id}:MISSING_RUNTIME_PATH`);
      if(ex.runtimePath){
        if(paths.has(ex.runtimePath)) problems.push(`${family.id}:DUPLICATE_RUNTIME_PATH:${ex.runtimePath}`);
        paths.add(ex.runtimePath);
      }
    }
  }
  return problems;
}

function makeBalancedSlotPatterns(rng){
  // Pattern maps screen slot 0/1/2 -> exemplar index 0/1/2.
  // Three cyclic rotations are distributed across 14 families as 5/5/4.
  // The base exemplar order, short group and family membership all vary by seed.
  const base=shuffle([0,1,2],rng);
  const patterns=[
    [base[0],base[1],base[2]],
    [base[1],base[2],base[0]],
    [base[2],base[0],base[1]],
  ];
  const shortIndex=Math.floor(rng()*3);
  const counts=[5,5,5];
  counts[shortIndex]=4;
  return {base,patterns,counts,shortIndex};
}

export function assignOpen14ThreeExemplars(plan,bank,seed=plan?.seed||'open14-default',options={}){
  if(!plan?.trials || plan.trials.length!==14) throw new Error('Expected a 14-trial Open14 family plan');

  const problems=listThreeExemplarBankProblems(bank,options);
  if(problems.length) throw new Error(`Open14 three-exemplar bank incomplete: ${problems.join(', ')}`);

  const rng=rngFor(`${seed}::three-exemplar-v0.3`);
  const families=FAMILY_SET.map(x=>x.id);
  const familyOrder=shuffle(families,rng);
  const patternMeta=makeBalancedSlotPatterns(rng);

  const patternByFamily={};
  let cursor=0;
  for(let p=0;p<3;p++){
    for(let i=0;i<patternMeta.counts[p];i++){
      patternByFamily[familyOrder[cursor++]]=patternMeta.patterns[p];
    }
  }
  if(cursor!==families.length) throw new Error(`Internal pattern allocation error: ${cursor}`);

  const trials=plan.trials.map(t=>({
    ...t,
    stimuli:t.positions.map((familyId,slot)=>{
      const family=bank.families[familyId];
      const pattern=patternByFamily[familyId];
      if(!pattern) throw new Error(`Missing exemplar pattern for ${familyId}`);
      const exemplarIndex=pattern[slot];
      const ex=family.exemplars[exemplarIndex];
      return {
        familyId,
        macro:family.macro,
        exemplarIndex,
        exemplarId:ex.id,
        runtimePath:ex.runtimePath||null,
        slot,
      };
    }),
  }));

  const audit=validateThreeExemplarAssignment(trials);
  return {
    schema:'2rasi.priolens.open14.exemplars-v0.3',
    assigner:'balanced-3x1-no-repeat-slot-v0.3',
    seed:String(seed),
    familyOrder,
    patternBase:patternMeta.base,
    patternCounts:patternMeta.counts,
    patternByFamily,
    trials,
    audit,
  };
}

export function validateThreeExemplarAssignment(trials){
  if(!Array.isArray(trials)||trials.length!==14) throw new Error('Expected exactly 14 assigned trials');

  const byFamily=Object.fromEntries(FAMILY_SET.map(x=>[x.id,[0,0,0]]));
  const bySlot=Array.from({length:3},()=>[0,0,0]);
  const global=[0,0,0];
  const ids=new Set();
  const paths=new Set();
  let exposures=0;

  for(const trial of trials){
    if(!Array.isArray(trial.stimuli)||trial.stimuli.length!==3) throw new Error('Each trial must have 3 assigned stimuli');
    for(const stim of trial.stimuli){
      if(!byFamily[stim.familyId]) throw new Error(`Unknown family ${stim.familyId}`);
      if(!Number.isInteger(stim.exemplarIndex)||stim.exemplarIndex<0||stim.exemplarIndex>2){
        throw new Error(`Invalid exemplar index for ${stim.familyId}`);
      }
      byFamily[stim.familyId][stim.exemplarIndex]++;
      bySlot[stim.slot][stim.exemplarIndex]++;
      global[stim.exemplarIndex]++;
      exposures++;
      if(ids.has(stim.exemplarId)) throw new Error(`Exact exemplar repeated: ${stim.exemplarId}`);
      ids.add(stim.exemplarId);
      if(stim.runtimePath){
        if(paths.has(stim.runtimePath)) throw new Error(`Exact runtime path repeated: ${stim.runtimePath}`);
        paths.add(stim.runtimePath);
      }
    }
  }

  if(exposures!==42) throw new Error(`Expected 42 exposures, got ${exposures}`);
  if(ids.size!==42) throw new Error(`Expected 42 unique exemplar IDs, got ${ids.size}`);

  for(const family of FAMILY_SET){
    const c=byFamily[family.id];
    if(c.join(',')!=='1,1,1') throw new Error(`${family.id} exemplar counts ${c.join('/')}, expected 1/1/1`);
  }
  if(global.join(',')!=='14,14,14') throw new Error(`Global exemplar counts ${global.join('/')}, expected 14/14/14`);

  for(let slot=0;slot<3;slot++){
    const counts=bySlot[slot];
    const sorted=[...counts].sort((a,b)=>a-b);
    if(sorted.join(',')!=='4,5,5'){
      throw new Error(`Slot ${slot} exemplar counts ${counts.join('/')}, expected a 4/5/5 permutation`);
    }
  }

  return {
    exposures,
    uniqueExemplarIds:ids.size,
    uniqueRuntimePaths:paths.size,
    byFamily,
    bySlot,
    global,
    exactImageRepeats:0,
  };
}
