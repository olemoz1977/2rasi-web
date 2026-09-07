(() => {
  if (!window.WORKSTYLE15) throw new Error("WORKSTYLE15 data spec is missing before label overrides.");

  const publicDomainLabels = {
    execution: "Įgyvendinimas",
    adaptation: "Adaptacija",
    collaboration: "Atvirumas kitiems",
    influence: "Poveikis",
    "self-regulation": "Savireguliacija"
  };

  window.WORKSTYLE15.domains.forEach(domain => {
    if (publicDomainLabels[domain.id]) domain.lt = publicDomainLabels[domain.id];
  });
})();
