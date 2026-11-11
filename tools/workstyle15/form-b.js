(() => {
  if (!window.WORKSTYLE15) throw new Error("WORKSTYLE15 data spec is missing before form-b configuration.");

  window.WORKSTYLE15.instrument.formId = "workstyle15-lt-v0.4-form-b";
  window.WORKSTYLE15.instrument.formLabel = "B";
  window.WORKSTYLE15.instrument.sectionSize = 15;
  window.WORKSTYLE15.instrument.sectionCount = 5;

  const publicDomainLabels = {
    execution: "Įgyvendinimas",
    adaptation: "Kaita ir mokymasis",
    collaboration: "Darbas su kitais",
    influence: "Poveikis kitiems",
    "self-regulation": "Savireguliacija"
  };

  window.WORKSTYLE15.domains.forEach(domain => {
    if (publicDomainLabels[domain.id]) domain.lt = publicDomainLabels[domain.id];
  });
})();
