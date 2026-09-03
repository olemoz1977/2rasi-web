import { buildOpen14Plan, FAMILY_SET } from './p3_open14_planner_v02.mjs';
import { assignOpen14ThreeExemplars } from './open14_no_repeat_assigner_v03.mjs';

function syntheticBank(){
  return {
    families:Object.fromEntries(FAMILY_SET.map(f=>[
      f.id,
      {
        macro:f.macro,
        exemplars:[0,1,2].map(i=>({
          id:`${f.id}-${String(i+1).padStart(2,'0')}`,
          runtimePath:`/synthetic/${f.id.toLowerCase()}-${i+1}.webp`,
        })),
      },
    ])),
  };
}

export function smokeThreeExemplarAssigner(iterations=1000){
  const bank=syntheticBank();
  const slotSeen=Object.fromEntries(
    FAMILY_SET.map(f=>[f.id,Array.from({length:3},()=>new Set())])
  );

  for(let i=0;i<iterations;i++){
    const seed=`no-repeat-smoke-${i}`;
    const plan=buildOpen14Plan(seed);
    const assigned=assignOpen14ThreeExemplars(plan,bank,seed);

    if(assigned.audit.exposures!==42) throw new Error(`Seed ${seed}: exposures != 42`);
    if(assigned.audit.uniqueExemplarIds!==42) throw new Error(`Seed ${seed}: unique exemplar IDs != 42`);
    if(assigned.audit.exactImageRepeats!==0) throw new Error(`Seed ${seed}: exact repeat detected`);

    for(const trial of assigned.trials){
      for(const stim of trial.stimuli){
        slotSeen[stim.familyId][stim.exemplarIndex].add(stim.slot);
      }
    }
  }

  for(const family of FAMILY_SET){
    for(let exemplarIndex=0;exemplarIndex<3;exemplarIndex++){
      if(slotSeen[family.id][exemplarIndex].size!==3){
        throw new Error(`${family.id}-${exemplarIndex+1} did not reach all three screen slots across smoke seeds`);
      }
    }
  }

  return {
    iterations,
    passed:true,
    exposuresPerSession:42,
    exactImageRepeatsPerSession:0,
    eachFamilyExemplarOncePerSession:true,
    eachFamilyExemplarReachedAllSlotsAcrossSeeds:true,
  };
}

if(typeof process!=='undefined' && process?.argv?.[1] && import.meta.url===`file://${process.argv[1]}`){
  const iterations=Number(process.argv[2]||1000);
  console.log(JSON.stringify(smokeThreeExemplarAssigner(iterations),null,2));
}
