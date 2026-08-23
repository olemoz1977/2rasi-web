(() => {
  const host = window.location.hostname.toLowerCase();
  const params = new URLSearchParams(window.location.search);
  const forced = params.get('lang');
  const lang = (forced === 'lt' || forced === 'en')
    ? forced
    : ((host === '2rasi.lt' || host.endsWith('.2rasi.lt')) ? 'lt' : 'en');
  const lt = lang === 'lt';
  document.documentElement.lang = lang;

  const text = (selector, en, ltText) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = lt ? ltText : en;
  };
  const texts = (selector, pairs) => {
    document.querySelectorAll(selector).forEach((el, i) => {
      if (pairs[i]) el.textContent = lt ? pairs[i][1] : pairs[i][0];
    });
  };

  text('.tool-header nav a:nth-child(1)', 'Experiments', 'Eksperimentai');
  text('.tool-header nav a:nth-child(2)', 'About', 'Apie');
  text('.tool-hero .kicker', 'Cognitive pilot · LT', 'Kognityvinis pilotas · LT');
  text('.tool-hero .lead',
    'A research prototype exploring how people tend to choose between two reasonable ways of working when both can make sense.',
    'Tyrimo prototipas, nagrinėjantis, kaip žmonės renkasi tarp dviejų pagrįstų darbo būdų, kai abu gali būti prasmingi.');
  texts('.tool-meta span', [
    ['34 situations', '34 situacijos'],
    ['8 candidate axes', '8 kandidatinės ašys'],
    ['~8 minutes', '~8 min.'],
    ['Lithuanian pilot', 'Lietuviškas pilotas']
  ]);
  text('.tool-hero .tool-actions a:nth-child(1)', 'Start cognitive pilot →', 'Pradėti kognityvinį pilotą →');
  text('.tool-hero .tool-actions a:nth-child(2)', 'See the current model', 'Peržiūrėti dabartinį modelį');

  const sections = document.querySelectorAll('.tool-section');
  if (sections[0]) {
    text('.tool-section:nth-of-type(1) h2', 'What it explores', 'Ką tiria');
    const ps = sections[0].querySelectorAll('p');
    if (ps[0]) ps[0].textContent = lt
      ? 'WorkStyle nesiekia priskirti žmonių asmenybės tipams. Dabartinis prototipas stebi pasikartojančius pasirinkimus tarp dviejų normalių darbo strategijų: pasiruošti iš anksto ar organizuoti eigoje, išlaikyti metodą ar jį adaptuoti, veikti savarankiškai ar derintis su kitais.'
      : 'WorkStyle is not trying to place people into personality types. The current prototype looks at repeated choices between two normal work strategies: prepare first or organise as you go, keep a method stable or adapt it, act independently or coordinate with others.';
    if (ps[1]) ps[1].textContent = lt
      ? 'Svarbiausias klausimas nėra, kuri pusė „geresnė“. Svarbu, ar situacijos parodo nuoseklią ir suprantamą kryptį, kaip žmogus linkęs dirbti.'
      : 'The important question is not which side is “better”. It is whether the situations reveal a stable and understandable direction in how a person tends to work.';
  }

  text('#model h2', 'Eight candidate work-style contrasts', 'Aštuonios kandidatinės darbo stiliaus priešpriešos');
  texts('#model .model-item strong', [
    ['Structured preparation ↔ Organising as you go', 'Struktūruotas pasiruošimas ↔ Organizavimas eigoje'],
    ['Method consistency ↔ Method adaptation', 'Metodo nuoseklumas ↔ Metodo adaptavimas'],
    ['Local / concrete focus ↔ System / relationship focus', 'Lokalinis / konkretus fokusas ↔ Sisteminis / ryšių fokusas'],
    ['Conclusion stability ↔ Revising with new evidence', 'Išvados stabilumas ↔ Išvados peržiūrėjimas pagal naujus duomenis'],
    ['Opportunity scanning ↔ Risk scanning', 'Galimybių skenavimas ↔ Rizikų skenavimas'],
    ['Independent action ↔ Coordination with others', 'Savarankiškas veikimas ↔ Koordinavimas su kitais'],
    ['Direct disagreement ↔ Seeking alignment', 'Tiesus nesutarimo išsakymas ↔ Derinimosi paieška'],
    ['Active participation ↔ Reserved participation', 'Aktyvus dalyvavimas ↔ Santūrus dalyvavimas']
  ]);
  texts('#model .model-item span', [
    ['How much structure is created before action versus during action.', 'Kiek struktūros sukuriama prieš veiksmą, o kiek jau veikiant.'],
    ['Whether a working method is kept stable or adjusted as conditions change.', 'Ar veikiantis metodas išlaikomas stabilus, ar koreguojamas keičiantis sąlygoms.'],
    ['Whether attention starts with the immediate point or with links across the wider system.', 'Ar dėmesys pirmiausia krypsta į konkrečią vietą, ar į ryšius platesnėje sistemoje.'],
    ['How readily an existing conclusion is reopened when new information appears.', 'Kaip lengvai esama išvada peržiūrima atsiradus naujai informacijai.'],
    ['Whether attention first goes to possible gains or possible failure points.', 'Ar dėmesys pirmiausia krypsta į galimą naudą, ar į galimas nesėkmės vietas.'],
    ['Whether the first move is individual action or alignment with other people.', 'Ar pirmas žingsnis yra savarankiškas veiksmas, ar suderinimas su kitais.'],
    ['Whether disagreement is stated first or common ground is sought first.', 'Ar pirmiausia aiškiai išsakomas nesutarimas, ar ieškoma bendro pagrindo.'],
    ['How quickly and visibly someone tends to enter group discussion.', 'Kaip greitai ir matomai žmogus linkęs įsitraukti į grupės diskusiją.']
  ]);

  if (sections[2]) {
    const h = sections[2].querySelector('h2');
    if (h) h.textContent = lt ? 'Kodėl tai vis dar kognityvinis pilotas' : 'Why this is still a cognitive pilot';
    const ps = sections[2].querySelectorAll('p');
    if (ps[0]) ps[0].textContent = lt
      ? 'Aštuonios ašys yra hipotezės, o ne baigtos skalės. Dabartinis pilotas tikrina, ar formuluotės aiškios, ar abi pusės jaučiasi vienodai legitimos ir ar skirtingos ašys respondentui iš tikrųjų jaučiasi kaip skirtingi klausimai.'
      : 'The eight axes are hypotheses, not finished scales. The current pilot is testing whether the wording is clear, whether the two sides feel equally legitimate and whether different axes actually feel like different questions to the respondent.';
    if (ps[1]) ps[1].textContent = lt
      ? 'Tai svarbu: teoriškai skirtingi konstruktai atsakinėjant gali vis tiek jaustis pasikartojantys. WorkStyle tokį „juntamą skirtingumą“ laiko metodologiniu signalu, o ne vien UX smulkmena.'
      : 'That last point matters: two constructs can look different on paper but still feel repetitive while answering. WorkStyle treats that “felt distinctness” as evidence, not as a cosmetic UX issue.';
  }

  if (sections[3]) {
    const h = sections[3].querySelector('h2');
    if (h) h.textContent = lt ? 'Kaip atsakoma' : 'How answering works';
    const ps = sections[3].querySelectorAll('p');
    if (ps[0]) ps[0].innerHTML = lt
      ? 'Kiekvienoje situacijoje pateikiami du elgesio variantai ir penkios balanso pozicijos: <strong>Visada · Dažniau · Abu panašiai · Dažniau · Visada</strong>. Atsakymo žodis turi semantiškai pratęsti elgesio teiginį, o ne vertinti jį kaip gerą ar blogą.'
      : 'Each situation presents two behaviours and a five-position balance between them: <strong>Always · More often · Both similarly · More often · Always</strong>. The answer word is meant to continue the behaviour statement rather than rate it as good or bad.';
    if (ps[1]) ps[1].textContent = lt
      ? 'Atskiri pasirinkimai skirti atvejams, kai atsakymas iš tiesų priklauso nuo konteksto, situacijos negalima įvertinti, formuluotė neaiški arba situacija per daug primena ankstesnę.'
      : 'Separate options are available when the answer genuinely depends on context, the situation cannot be assessed, the wording is unclear, or a situation feels too similar to an earlier one.';
  }

  if (sections[4]) {
    const h = sections[4].querySelector('h2');
    if (h) h.textContent = lt ? 'Kodėl dar nėra asmeninio profilio' : 'Why there is no personal profile yet';
    const ps = sections[4].querySelectorAll('p');
    if (ps[0]) ps[0].textContent = lt
      ? 'Ši versija tikrina, ar situacijos ir kandidatinės ašys atlaiko realių respondentų bandymą. Gražiai pateiktas rezultatas dabar sudarytų klaidingą įspūdį, kad laikini konstruktai jau yra patvirtinti.'
      : 'This version is testing whether the situations and candidate axes survive contact with real respondents. Returning a polished score now would make provisional constructs look more established than they are.';
    if (ps[1]) ps[1].textContent = lt
      ? 'Todėl pirmasis mažas LT etapas skirtas suprantamumui, ašių skirtingumui, atsakymo trinčiai ir techniniam patikimumui, o ne WorkStyle „rezultatui“ pateikti.'
      : 'The first small LT batch is therefore about comprehension, distinctness, response friction and technical reliability rather than giving people a WorkStyle “result”.';
  }

  if (sections[5]) {
    const h = sections[5].querySelector('h2');
    if (h) h.textContent = lt ? 'Piloto duomenys ir privatumas' : 'Pilot data and privacy';
    const ps = sections[5].querySelectorAll('p');
    if (ps[0]) ps[0].textContent = lt
      ? 'Pilote neprašome vardo, el. pašto ar darbdavio. Pasirenkamas kontekstas apsiriboja bendromis vaidmens, patirties ir darbo aplinkos kategorijomis.'
      : 'The pilot does not ask for a name, email address or employer. Optional context is limited to broad role, experience and work-environment bands.';
    if (ps[1]) ps[1].textContent = lt
      ? 'Dabartinėje piloto versijoje sesija saugoma naršyklėje, o anoniminio JSON eksportas paliktas tyrimui ir diagnostikai. Tiesioginio pateikimo kelias ruošiamas atskirai ir nebus aktyvuotas tyliai.'
      : 'For the current pilot build, the browser keeps the session locally and an anonymous JSON export remains available for research and debugging. A direct pilot-submission path is being prepared separately and will not be activated silently.';
    if (ps[2]) ps[2].textContent = lt
      ? 'WorkStyle v0.7 yra tyrimo prototipas. Tai nėra validuotas diagnostinis instrumentas ir jis neturėtų būti naudojamas atrankai ar darbuotojų vertinimui.'
      : 'WorkStyle v0.7 is a research prototype. It is not a validated diagnostic instrument and should not be used for hiring or employee evaluation.';
  }

  text('.side-card h3', 'What are we testing?', 'Ką tikriname?');
  text('.side-card p',
    'Not whether one pole wins. We are testing whether the choices are understandable, distinct and useful enough to deserve a later measurement model.',
    'Ne kuri pusė „laimi“. Tikriname, ar pasirinkimai yra pakankamai suprantami, skirtingi ir prasmingi, kad vėliau būtų verta kurti matavimo modelį.');
  text('.side-card .button', 'Start cognitive pilot →', 'Pradėti kognityvinį pilotą →');
  text('.tool-footer a', '← Back to experiments', '← Grįžti į eksperimentus');

  const nav = document.querySelector('.tool-header nav');
  if (nav) {
    let switcher = nav.querySelector('.language-switch');
    if (!switcher) {
      switcher = document.createElement('a');
      switcher.className = 'language-switch';
      nav.appendChild(switcher);
    }
    const targetHost = lt ? '2rasi.com' : '2rasi.lt';
    switcher.href = `https://${targetHost}${window.location.pathname}${window.location.hash}`;
    switcher.textContent = lt ? 'EN' : 'LT';
    switcher.setAttribute('aria-label', lt ? 'Switch to English' : 'Perjungti į lietuvių kalbą');
  }
})();
