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

export function listMissingRuntimeAssets(bank){
  const missing=[];
  for(const family of FAMILY_SET){
    const node=bank?.families?.[family.id];
    if(!node || !Array.isArray(node.exemplars) || node.exemplars.length!==2){
      missing.push(`${family.id}:EXPECTED_2_EXEMPLARS`);
      continue;
    }
    for(const ex of node.exemplars){
      if(!ex?.id || !ex?.runtimePath) missing.push(ex?.id || `${family.id}:UNNAMED_EXEMPLAR`);
    }
  }
  return missing;
}

export function assignOpen14Exemplars(plan,bank,seed=plan?.seed||'open14-default'){
  if(!plan?.trials || plan.trials.length!==14) throw new Error('Expected a 14-trial Open14 plan');

  const missing=listMissingRuntimeAssets(bank);
  if(missing.length) throw new Error(`Open14 bank incomplete: ${missing.join(', ')}`);

  const rng=rngFor(`${seed}::exemplar-v0.1`);
  const families=FAMILY_SET.map(x=>x.id);
  const shuffledFamilies=shuffle(families,rng);
  const repeatA=new Set(shuffledFamilies.slice(0,7));
  const repeatB=new Set(shuffledFamilies.slice(7));

  // In each repeat group the singleton exemplar is assigned to slots 0/1/2
  // with counts 3/2/2. Matching distributions across the two groups produce
  // exact A/B balance of 7/7 in every screen slot.
  const singletonPattern=[0,0,0,1,1,2,2];
  const slotByFamily={};
  const patternA=shuffle(singletonPattern,rng);
  const patternB=shuffle(singletonPattern,rng);
  [...repeatA].forEach((id,i)=>{slotByFamily[id]=patternA[i];});
  [...repeatB].forEach((id,i)=>{slotByFamily[id]=patternB[i];});

  const exemplarPlan={};
  for(const id of families){
    exemplarPlan[id]={
      repeatedIndex:repeatA.has(id)?0:1,
      singletonIndex:repeatA.has(id)?1:0,
      singletonSlot:slotByFamily[id],
    };
  }

  const trials=plan.trials.map(t=>({
    ...t,
    stimuli:t.positions.map((familyId,slot)=>{
      const family=bank.families[familyId];
      const cfg=exemplarPlan[familyId];
      const exemplarIndex=slot===cfg.singletonSlot?cfg.singletonIndex:cfg.repeatedIndex;
      const ex=family.exemplars[exemplarIndex];
      return {
        familyId,
        macro:family.macro,
        exemplarIndex,
        exemplarId:ex.id,
        runtimePath:ex.runtimePath,
        slot,
      };
    }),
  }));

  const audit=validateExemplarAssignment(trials,exemplarPlan);
  return {
    schema:'2rasi.priolens.p3.open14.exemplars-v0.1',
    assigner:'balanced-2x1-exemplar-slot-v0.1',
    seed:String(seed),
    exemplarPlan,
    trials,
    audit,
  };
}

export function validateExemplarAssignment(trials,exemplarPlan){
  const byFamily=Object.fromEntries(FAMILY_SET.map(x=>[x.id,{A:0,B:0}]));
  const bySlot=[{A:0,B:0},{A:0,B:0},{A:0,B:0}];
  let totalA=0,totalB=0;

  for(const trial of trials){
    if(!Array.isArray(trial.stimuli) || trial.stimuli.length!==3) throw new Error('Each trial must have 3 assigned stimuli');
    for(const stim of trial.stimuli){
      const key=stim.exemplarIndex===0?'A':'B';
      byFamily[stim.familyId][key]++;
      bySlot[stim.slot][key]++;
      if(key==='A') totalA++; else totalB++;
    }
  }

  let repeatedA=0,repeatedB=0;
  for(const family of FAMILY_SET){
    const c=byFamily[family.id];
    if(!((c.A===2&&c.B===1)||(c.A===1&&c.B===2))){
      throw new Error(`${family.id} exemplar counts ${c.A}/${c.B}, expected 2/1 or 1/2`);
    }
    if(exemplarPlan[family.id].repeatedIndex===0) repeatedA++; else repeatedB++;
  }

  if(totalA!==21 || totalB!==21) throw new Error(`Global exemplar counts ${totalA}/${totalB}, expected 21/21`);
  for(let slot=0;slot<3;slot++){
    if(bySlot[slot].A!==7 || bySlot[slot].B!==7){
      throw new Error(`Slot ${slot} exemplar counts ${bySlot[slot].A}/${bySlot[slot].B}, expected 7/7`);
    }
  }
  if(repeatedA!==7 || repeatedB!==7) throw new Error(`Repeated-side family counts ${repeatedA}/${repeatedB}, expected 7/7`);

  return {byFamily,bySlot,totalA,totalB,repeatedA,repeatedB};
}
