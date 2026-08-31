export const FAMILY_SET = [
  {id:'REST', macro:'BASIC'},
  {id:'MASTERY', macro:'GROWTH'},
  {id:'CONNECTION', macro:'SOCIAL'},
  {id:'EXPLORATION', macro:'GROWTH'},
  {id:'BELONGING', macro:'SOCIAL'},
  {id:'RESOURCE', macro:'BASIC'},
  {id:'AUTONOMY', macro:'AGENCY'},
  {id:'SAFETY', macro:'BASIC'},
  {id:'KNOWLEDGE', macro:'GROWTH'},
  {id:'CARE', macro:'SOCIAL'},
  {id:'OPPORTUNITY', macro:'GROWTH'},
  {id:'CONTROL', macro:'AGENCY'},
  {id:'ORDER', macro:'BASIC'},
  {id:'RECOGNITION', macro:'AGENCY'},
];

const FAMILY_BY_ID = Object.fromEntries(FAMILY_SET.map(x => [x.id, x]));

function xmur3(str){
  let h = 1779033703 ^ str.length;
  for(let i=0;i<str.length;i++){
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = h << 13 | h >>> 19;
  }
  return function(){
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}

function mulberry32(a){
  return function(){
    let t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function rngFor(seed){
  const h = xmur3(String(seed))();
  return mulberry32(h);
}

function shuffle(arr,rng){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(rng()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function pairKey(a,b){
  return [a,b].sort().join('::');
}

export function buildOpen14Plan(seed='open14-default'){
  const rng=rngFor(seed);
  const slotPerm=shuffle([0,1,2],rng);
  const base=[];

  for(let i=0;i<14;i++){
    const indices=[i,(i+1)%14,(i+4)%14];
    const roles=indices.map(idx=>FAMILY_SET[idx].id);
    const positions=Array(3);
    roles.forEach((fam,role)=>{ positions[slotPerm[role]]=fam; });
    base.push({
      designIndex:i,
      designRoles:roles,
      positions,
      macros:positions.map(id=>FAMILY_BY_ID[id].macro),
    });
  }

  const trials=shuffle(base,rng).map((t,index)=>({
    trialId:`O14-${String(index+1).padStart(2,'0')}`,
    trialIndex:index+1,
    designIndex:t.designIndex,
    positions:t.positions,
    macros:t.macros,
  }));

  const audit=validateOpen14Plan(trials);

  return {
    schema:'2rasi.priolens.p3.open14.plan-v0.2',
    planner:'cyclic-14x3-diff-1-4-slot-role-v0.2',
    familySetVersion:'open-spectrum-14-v0.2',
    seed:String(seed),
    slotRolePermutation:slotPerm,
    trials,
    audit,
  };
}

export function validateOpen14Plan(trials){
  if(!Array.isArray(trials) || trials.length!==14){
    throw new Error('Expected exactly 14 trials');
  }

  const shown=Object.fromEntries(FAMILY_SET.map(x=>[x.id,0]));
  const slots=Object.fromEntries(FAMILY_SET.map(x=>[x.id,[0,0,0]]));
  const opponents=Object.fromEntries(FAMILY_SET.map(x=>[x.id,new Set()]));
  const pairs=new Set();

  for(const t of trials){
    if(!Array.isArray(t.positions) || t.positions.length!==3){
      throw new Error('Each trial must have 3 positions');
    }
    if(new Set(t.positions).size!==3){
      throw new Error(`Duplicate family in trial ${t.trialId}`);
    }

    const macros=t.positions.map(id=>FAMILY_BY_ID[id]?.macro);
    if(macros.some(x=>!x)){
      throw new Error(`Unknown family in trial ${t.trialId}`);
    }
    if(new Set(macros).size!==3){
      throw new Error(`Macro-domain collision in trial ${t.trialId}: ${macros.join(',')}`);
    }

    t.positions.forEach((id,slot)=>{
      shown[id]++;
      slots[id][slot]++;
    });

    for(let a=0;a<3;a++){
      for(let b=a+1;b<3;b++){
        const left=t.positions[a];
        const right=t.positions[b];
        const key=pairKey(left,right);
        if(pairs.has(key)) throw new Error(`Repeated family pair: ${key}`);
        pairs.add(key);
        opponents[left].add(right);
        opponents[right].add(left);
      }
    }
  }

  for(const f of FAMILY_SET){
    if(shown[f.id]!==3){
      throw new Error(`${f.id} shown ${shown[f.id]} times, expected 3`);
    }
    if(slots[f.id].join(',')!=='1,1,1'){
      throw new Error(`${f.id} slot counts ${slots[f.id].join('/')}, expected 1/1/1`);
    }
    if(opponents[f.id].size!==6){
      throw new Error(`${f.id} meets ${opponents[f.id].size} unique opponents, expected 6`);
    }
  }

  if(pairs.size!==42){
    throw new Error(`Expected 42 unique pair co-occurrences, got ${pairs.size}`);
  }

  return {
    shown,
    slots,
    uniquePairs:pairs.size,
    opponentsPerFamily:Object.fromEntries(Object.entries(opponents).map(([id,set])=>[id,set.size])),
    macroCollisionTrials:0,
  };
}

export function smokeTestOpen14Planner(iterations=1000){
  for(let i=0;i<iterations;i++){
    buildOpen14Plan(`smoke-${i}`);
  }
  return {iterations, passed:true, familySetVersion:'open-spectrum-14-v0.2'};
}

if(import.meta.url===`file://${process.argv[1]}`){
  if(process.argv[2]==='--smoke-1000'){
    console.log(JSON.stringify(smokeTestOpen14Planner(1000),null,2));
  } else {
    const p=buildOpen14Plan(process.argv[2]||'smoke');
    console.log(JSON.stringify(p,null,2));
  }
}
