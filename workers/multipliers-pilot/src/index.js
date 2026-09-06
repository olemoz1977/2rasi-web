const J={"content-type":"application/json; charset=utf-8"};
const clip=(v,n=1500)=>String(v??"").slice(0,n);
const num=(v,max=1e7)=>{v=Number(v);return Number.isFinite(v)?Math.max(0,Math.min(max,Math.trunc(v))):0};
function allowed(env){return String(env.ALLOWED_ORIGINS||"https://2rasi.lt,https://2rasi.com").split(",").map(x=>x.trim()).filter(Boolean)}
function cors(req,env){const o=req.headers.get("origin")||"",a=allowed(env),v=a.includes(o)?o:a[0]||"null";return{"access-control-allow-origin":v,"access-control-allow-methods":"GET,POST,OPTIONS","access-control-allow-headers":"content-type","access-control-max-age":"86400","vary":"Origin"}}
function json(req,env,x,status=200){return new Response(JSON.stringify(x),{status,headers:{...J,...cors(req,env)}})}
async function body(req){if(!(req.headers.get("content-type")||"").includes("application/json"))throw new Error("JSON body required");return req.json()}
async function ensure(db,p){await db.prepare(`INSERT OR IGNORE INTO pilot_sessions(session_id,bank_version,engine_version,ui_version,started_at,device_type,locale,source_mode,analysis_eligible) VALUES(?,?,?,?,?,?,?,?,?)`).bind(clip(p.sessionId,120),clip(p.bankVersion||"unknown",40),clip(p.engineVersion||"unknown",40),clip(p.uiVersion||"unknown",40),clip(p.startedAt||new Date().toISOString(),60),clip(p.deviceType||"unknown",20),clip(p.locale||"",30),clip(p.sourceMode||"",20),p.analysisEligible===false?0:1).run()}
export default{async fetch(req,env){
 if(req.method==="OPTIONS")return new Response(null,{status:204,headers:cors(req,env)});
 const u=new URL(req.url);
 if(req.method==="GET"&&u.pathname==="/health")return json(req,env,{ok:true,service:"multipliers-pilot-api"});
 const base="/api/multipliers-pilot";if(!u.pathname.startsWith(base))return new Response("Not found",{status:404});
 const route=u.pathname.slice(base.length)||"/";
 try{
  if(req.method==="POST"&&route==="/session"){
   const p=await body(req);if(!p.sessionId)return json(req,env,{ok:false,error:"sessionId required"},400);
   await env.DB.prepare(`INSERT INTO pilot_sessions(session_id,bank_version,engine_version,ui_version,started_at,device_type,locale,source_mode,analysis_eligible,updated_at) VALUES(?,?,?,?,?,?,?,?,?,CURRENT_TIMESTAMP)
    ON CONFLICT(session_id) DO UPDATE SET bank_version=excluded.bank_version,engine_version=excluded.engine_version,ui_version=excluded.ui_version,device_type=excluded.device_type,locale=excluded.locale,source_mode=excluded.source_mode,analysis_eligible=excluded.analysis_eligible,updated_at=CURRENT_TIMESTAMP`)
    .bind(clip(p.sessionId,120),clip(p.bankVersion,40),clip(p.engineVersion,40),clip(p.uiVersion,40),clip(p.startedAt,60),clip(p.deviceType,20),clip(p.locale,30),clip(p.sourceMode||"",20),p.analysisEligible===false?0:1).run();
   return json(req,env,{ok:true});
  }
  if(req.method==="POST"&&route==="/response"){
   const p=await body(req);if(!p.sessionId||!p.questionId||!p.selectedOptionId)return json(req,env,{ok:false,error:"missing fields"},400);await ensure(env.DB,p);
   const order=Array.isArray(p.shownOptionOrder)?p.shownOptionOrder.map(x=>clip(x,40)):[];
   await env.DB.prepare(`INSERT INTO pilot_responses(session_id,question_id,question_position,shown_option_order_json,selected_option_id,direction,response_time_ms,answered_at)
    VALUES(?,?,?,?,?,?,?,?) ON CONFLICT(session_id,question_id) DO UPDATE SET question_position=excluded.question_position,shown_option_order_json=excluded.shown_option_order_json,selected_option_id=excluded.selected_option_id,direction=excluded.direction,response_time_ms=excluded.response_time_ms,answered_at=excluded.answered_at`)
    .bind(clip(p.sessionId,120),clip(p.questionId,20),num(p.shownQuestionPosition,100),JSON.stringify(order),clip(p.selectedOptionId,40),clip(p.direction,4),num(p.responseTimeMs,3600000),clip(p.answeredAt,60)).run();
   return json(req,env,{ok:true});
  }
  if(req.method==="POST"&&route==="/complete"){
   const p=await body(req);if(!p.sessionId)return json(req,env,{ok:false,error:"sessionId required"},400);await ensure(env.DB,p);
   const c=p.multiplierDirectionCounts||{},ad=num(p.accidentalCount,15);
   await env.DB.batch([
    env.DB.prepare("UPDATE pilot_sessions SET completed=1,completed_at=?,ad_count=?,updated_at=CURRENT_TIMESTAMP WHERE session_id=?").bind(clip(p.completedAt,60),ad,clip(p.sessionId,120)),
    env.DB.prepare(`INSERT INTO pilot_results(session_id,tm_count,lb_count,ch_count,dm_count,in_count,multiplier_count,ad_count,risk_counts_json,pattern_json,reflection_question_ids_json,updated_at)
     VALUES(?,?,?,?,?,?,?,?,?,?,?,CURRENT_TIMESTAMP) ON CONFLICT(session_id) DO UPDATE SET tm_count=excluded.tm_count,lb_count=excluded.lb_count,ch_count=excluded.ch_count,dm_count=excluded.dm_count,in_count=excluded.in_count,multiplier_count=excluded.multiplier_count,ad_count=excluded.ad_count,risk_counts_json=excluded.risk_counts_json,pattern_json=excluded.pattern_json,reflection_question_ids_json=excluded.reflection_question_ids_json,updated_at=CURRENT_TIMESTAMP`)
     .bind(clip(p.sessionId,120),num(c.TM,15),num(c.LB,15),num(c.CH,15),num(c.DM,15),num(c.IN,15),num(p.multiplierCount,15),ad,JSON.stringify(p.contributionAtRiskCounts||{}),JSON.stringify(p.pattern||{}),JSON.stringify(Array.isArray(p.reflectionQuestionIds)?p.reflectionQuestionIds:[]))
   ]);
   return json(req,env,{ok:true});
  }
  if(req.method==="POST"&&route==="/feedback"){
   const p=await body(req);if(!p.sessionId)return json(req,env,{ok:false,error:"sessionId required"},400);await ensure(env.DB,p);
   const a=["yes","mostly","no"].includes(p.answeredRealistically)?p.answeredRealistically:null;
   const n=["yes","no","unsure"].includes(p.noticedDifferentOptions)?p.noticedDifferentOptions:null;
   const r=["yes","no","unsure"].includes(p.resultPromptedReflection)?p.resultPromptedReflection:null;
   if(!a||!n||!r)return json(req,env,{ok:false,error:"invalid feedback"},400);
   await env.DB.prepare(`INSERT INTO pilot_feedback(session_id,answered_realistically,noticed_different_options,result_prompted_reflection,comment,updated_at) VALUES(?,?,?,?,?,CURRENT_TIMESTAMP)
    ON CONFLICT(session_id) DO UPDATE SET answered_realistically=excluded.answered_realistically,noticed_different_options=excluded.noticed_different_options,result_prompted_reflection=excluded.result_prompted_reflection,comment=excluded.comment,updated_at=CURRENT_TIMESTAMP`)
    .bind(clip(p.sessionId,120),a,n,r,clip(p.comment,1200)).run();
   return json(req,env,{ok:true});
  }
  if(req.method==="GET"&&route==="/summary"){
   const overview=await env.DB.prepare("SELECT COUNT(*) AS sessions,SUM(CASE WHEN completed=1 THEN 1 ELSE 0 END) AS completed,SUM(CASE WHEN completed=1 AND analysis_eligible=1 THEN 1 ELSE 0 END) AS eligible_completed,ROUND(AVG(CASE WHEN completed=1 AND analysis_eligible=1 THEN ad_count END),2) AS avg_ad FROM pilot_sessions").first();
   const completed=Number(overview?.eligible_completed||0);
   if(completed<5)return json(req,env,{ok:true,minimumReached:false,completed,minimum:5,totalCompleted:Number(overview?.completed||0)});
   const [adDist,dirs,questions,feedback]=await Promise.all([
    env.DB.prepare("SELECT ad_count,COUNT(*) AS n FROM pilot_sessions WHERE completed=1 AND analysis_eligible=1 GROUP BY ad_count ORDER BY ad_count").all(),
    env.DB.prepare("SELECT SUM(r.tm_count) TM,SUM(r.lb_count) LB,SUM(r.ch_count) CH,SUM(r.dm_count) DM,SUM(r.in_count) IN,SUM(r.ad_count) AD FROM pilot_results r JOIN pilot_sessions s ON s.session_id=r.session_id WHERE s.analysis_eligible=1").first(),
    env.DB.prepare(`SELECT question_id,COUNT(*) AS responses,SUM(CASE WHEN direction='AD' THEN 1 ELSE 0 END) AS ad_selected,ROUND(100.0*SUM(CASE WHEN direction='AD' THEN 1 ELSE 0 END)/COUNT(*),1) AS ad_rate_pct,ROUND(AVG(response_time_ms)) AS avg_ms,ROUND(AVG(CASE WHEN direction='AD' THEN response_time_ms END)) AS ad_avg_ms FROM pilot_responses pr JOIN pilot_sessions ps ON ps.session_id=pr.session_id WHERE ps.analysis_eligible=1 GROUP BY question_id ORDER BY question_id`).all(),
    env.DB.prepare(`SELECT COUNT(*) AS n,SUM(CASE WHEN noticed_different_options='yes' THEN 1 ELSE 0 END) AS noticed_yes,SUM(CASE WHEN noticed_different_options='no' THEN 1 ELSE 0 END) AS noticed_no,SUM(CASE WHEN noticed_different_options='unsure' THEN 1 ELSE 0 END) AS noticed_unsure,SUM(CASE WHEN answered_realistically='yes' THEN 1 ELSE 0 END) AS realistic_yes,SUM(CASE WHEN answered_realistically='mostly' THEN 1 ELSE 0 END) AS realistic_mostly,SUM(CASE WHEN answered_realistically='no' THEN 1 ELSE 0 END) AS realistic_no,SUM(CASE WHEN result_prompted_reflection='yes' THEN 1 ELSE 0 END) AS reflect_yes,SUM(CASE WHEN result_prompted_reflection='unsure' THEN 1 ELSE 0 END) AS reflect_unsure,SUM(CASE WHEN result_prompted_reflection='no' THEN 1 ELSE 0 END) AS reflect_no FROM pilot_feedback`).first()
   ]);
   return json(req,env,{ok:true,minimumReached:true,overview,adDistribution:adDist.results||[],directionTotals:dirs||{},questionStats:questions.results||[],feedback:feedback||{}});
  }
  return json(req,env,{ok:false,error:"not found"},404);
 }catch(e){return json(req,env,{ok:false,error:e?.message||"server error"},500)}
}};