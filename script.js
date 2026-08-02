document.documentElement.classList.add("js");

const header = document.querySelector("#site-header");
const scrollProgress = document.querySelector(".scroll-progress");
const brandLink = document.querySelector(".command-brand");
const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector("#workspace-sidebar");
const drawerBackdrop = document.querySelector(".drawer-backdrop");
const workspaceMain = document.querySelector("#main-content");
const navLinks = [...document.querySelectorAll('.workspace-nav a[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];
const revealItems = [...document.querySelectorAll(".reveal")];
const languageButtons = [...document.querySelectorAll("[data-language]")];
const filterToolbar = document.querySelector(".filter-toolbar");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const deliverableCards = [...document.querySelectorAll(".deliverable-card[data-category]")];
const filterCount = document.querySelector(".filter-count");
const interfaceStatus = document.querySelector("#interface-status");
const yearElement = document.querySelector("#current-year");
const descriptionMeta = document.querySelector('meta[name="description"]');
const openGraphTitle = document.querySelector('meta[property="og:title"]');
const openGraphDescription = document.querySelector('meta[property="og:description"]');
const desktopBreakpoint = window.matchMedia("(min-width: 1101px)");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const englishCopy = Object.create(null);

document.querySelectorAll("[data-i18n]").forEach((element) => {
  const key = element.dataset.i18n;
  if (!(key in englishCopy)) {
    englishCopy[key] = element.textContent.replace(/\s+/g, " ").trim();
  }
});

document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
  const key = element.dataset.i18nAriaLabel;
  if (!(key in englishCopy)) {
    englishCopy[key] = element.getAttribute("aria-label") || "";
  }
});

const germanCopy = {
  accounting: "Rechnungswesen",
  aiReviewTag: "KI-Review",
  aiReviewTagLong: "KI-gestützte Code-Reviews",
  apiPackageTitle: "Performance hochvolumiger APIs",
  approvedEvidence: "IM LEBENSLAUF BELEGT",
  associateRoadmapText: "Capgemini · Projektmanagement & technische Umsetzung",
  associateRole: "Associate Consultant",
  backToOverview: "Zurück zur Übersicht",
  basedIn: "Standort",
  brandLabel: "Aditya Wanmali, Übersicht",
  briefCode: "01 · Projektauftrag",
  briefIntro:
    "Aufbauend auf technischer Delivery-Erfahrung richte ich meinen Weg auf Rollen aus, in denen Planung, Stakeholder-Abstimmung, Risikomanagement und Umsetzung im Mittelpunkt stehen.",
  briefTitle: "Der Auftrag für den nächsten Schritt.",
  capabilitiesCode: "05 · Kompetenzmatrix",
  capabilitiesIntro:
    "Keine abstrakten Bewertungen: Jede Kompetenz ist durch konkrete Stationen im Lebenslauf belegt.",
  capabilitiesTitle: "Kompetenzen mit konkreten Nachweisen.",
  capgeminiLocation: "Bangalore, Indien",
  capPeopleFour: "Abstimmung zwischen Fachbereich und Technologie",
  capPeopleOne: "Delivery mit Agile, Scrum & SAFe",
  capPeopleThree: "Anforderungen & User Stories",
  capPeopleTitle: "Agile Delivery & Stakeholder",
  capPeopleTwo: "Stakeholder- & Partnermanagement",
  capProjectFour: "Meilensteintracking & Statusberichte",
  capProjectOne: "IT-Projektkoordination",
  capProjectThree: "Release-, Cutover- & Migrationsmanagement",
  capProjectTitle: "Projektsteuerung",
  capProjectTwo: "Risiko-, Problem- & Abhängigkeitsmanagement",
  capTechFour: "Last- & Performance-Tests",
  capTechTitle: "Technisches Verständnis",
  charterStatement:
    "Ich verbinde praktische Softwarekenntnisse mit Verantwortung im operativen Delivery-Alltag. So übersetze ich technische Rahmenbedingungen in klare Pläne, Risiken, Entscheidungen und Stakeholder-Updates.",
  clientLabel: "Kunde",
  closeNavigation: "Portfolio-Navigation schließen",
  completed: "Abgeschlossen",
  contactCode: "08 · Projekt-Kickoff",
  contactDetailsLabel: "Kontaktdaten",
  contactIntro:
    "Ich suche IT-Projektmanagement-Positionen, in denen technisches Verständnis, strukturierte Umsetzung und klare Stakeholder-Kommunikation zählen.",
  contactTitle: "Bereit für die nächste Delivery-Aufgabe.",
  contributionLabel: "Beitrag",
  contributionsLabel: "Zentrale Beiträge",
  credentialDescription:
    "Weiterbildung zu strukturierter Initiierung, Planung, agiler Delivery, Umsetzung und praxisnaher Anwendung im Projektmanagement.",
  credentialPhase: "Zertifizierung",
  credentialRoadmapText: "Strukturierte Projektmanagement-Praxis",
  credentialsCode: "07 · Nachweise",
  credentialsTitle: "Formale Weiterbildung und Sprachkompetenz.",
  currentStatus: "Aktueller Status",
  cutoverPackageTitle: "Cutover- & Release-Koordination",
  cutoverTag: "Cutover",
  deliverableFourContribution:
    "Konzeption eines wiederverwendbaren Lasttest-Frameworks und eines KI-gestützten Tools für Code-Reviews.",
  deliverableFourObjective: "Performance- und Codequalitätsrisiken vor dem Produktivbetrieb erkennen.",
  deliverableFourOutcome:
    "Das Test-Framework wurde projektweit eingesetzt, um Engpässe früher zu erkennen.",
  deliverableFourSummary: "Wiederverwendbare Lasttests und KI-gestützte Pull-Request-Reviews.",
  deliverableOneContribution:
    "Alleinige Delivery-Verantwortung für die Koordination von Bereitschaft, Teams, Abhängigkeiten und Stakeholder-Kommunikation.",
  deliverableOneObjective:
    "Händlerauftragsdaten dem richtigen Produktions- oder Betriebsstandort zuordnen.",
  deliverableOneOutcome: "Mehr als 30 System-Cutovers und Migrationen abgeschlossen.",
  deliverableOneSummary:
    "Globale Koordination zwischen Mercedes-Benz AG und regionalen Teams.",
  deliverablesCode: "04 · Berufliche Projekte",
  deliverablesIntro:
    "Filtern Sie die im Lebenslauf belegten Arbeitspakete und öffnen Sie ein Element für Ziel, Beitrag und verifiziertes Ergebnis.",
  deliverablesTitle: "Berufliche Projekte mit belegten Delivery-Nachweisen.",
  deliverableThreeContribution:
    "Java-/Spring-Boot-REST-APIs und zugehörige Integrationen entwickelt und optimiert.",
  deliverableThreeObjective:
    "Durchsatz und Antwortzeiten bei hochvolumigen Datentransfers verbessern.",
  deliverableThreeOutcome: "Die durchschnittliche Antwortzeit um rund 30 % reduziert.",
  deliverableThreeSummary:
    "Sichere REST-Services für mehr als 10.000 Transaktionen täglich.",
  deliverableTwoContribution:
    "Meilensteine, Risiken, Blocker und Maßnahmen verfolgt und technische sowie regionale Stakeholder koordiniert.",
  deliverableTwoObjective:
    "Releases mit abgestimmten Teams, Risiken und Abhängigkeiten durch den Cutover führen.",
  deliverableTwoSummary:
    "Planung, Bereitschaft, Deployment, Smoke-Tests und Nachbereitung nach dem Release.",
  deliveredStatus: "Umgesetzt",
  deliveryModelLabel: "Vorgehensmodell",
  deliveryModelValue: "Agile · Scrum · SAFe",
  deliveryPhase: "Delivery-Erfahrung",
  directionLabel: "Ausrichtung",
  directionValue: "IT-Projektmanagement & Agile Delivery",
  downloadCv: "Lebenslauf herunterladen",
  downloadCvLabel: "Lebenslauf von Aditya Wanmali als PDF herunterladen",
  email: "E-Mail",
  emailMe: "E-Mail senden",
  english: "Englisch",
  evidenceLabel: "Nachweise",
  experienceLabel: "Erfahrung",
  experienceNumber: "3,5",
  experienceValue: "3,5 Jahre · Technische Delivery",
  exploreEvidence: "Delivery-Nachweise ansehen",
  filterAll: "Alle",
  filterProject: "Projektsteuerung",
  filterTechnical: "Technische Umsetzung",
  filterToolbarLabel: "Berufliche Projekte filtern",
  finance: "Finanzen",
  focusLabel: "Fokus",
  focusValue: "Planung · Risiken · Stakeholder · Umsetzung",
  footerNote: "Projekt-Delivery-Portfolio · Klar strukturiert",
  foundationLabel: "Fundament",
  foundationPhase: "Fundament",
  foundationValue: "Maschinenbau + Software-Delivery",
  german: "Deutsch",
  globalCollaboration: "Globale Zusammenarbeit",
  heroLead:
    "MBA-Absolvent mit 3,5 Jahren Erfahrung bei Capgemini in der Umsetzung technischer Projekte für Mercedes-Benz R&D mit globalen Teams.",
  heroTitle: "Technische Tiefe. Fokus auf Projektsteuerung.",
  improving: "Im Aufbau",
  itemsLabel: "Elemente",
  languagePanelNote:
    "In München ansässig und mit kontinuierlichem Ausbau der Deutschkenntnisse.",
  languageReadiness: "SPRACHKOMPETENZ",
  languageSelectorLabel: "Sprache auswählen",
  languagesLabel: "Sprachen",
  languageSummary: "Englisch · Deutsch A2",
  locationLabel: "Standort",
  locationValue: "München, Deutschland",
  managementLayerLabel: "Management-Kompetenz",
  managementLayerValue: "MBA, General Management",
  managementPhase: "Management-Kompetenz",
  marketing: "Marketing",
  mbaFocusLabel: "MBA-Schwerpunkte",
  mechanicalDegree: "Bachelor, Maschinenbau",
  metricCutovers: "Cutovers & Migrationen",
  metricCutoversMeta: "Globale Delivery",
  metricExperience: "Jahre bei Capgemini",
  metricResponse: "Kürzere Antwortzeit",
  metricResponseMeta: "Performance-Verbesserung",
  metricsLabel: "Belegte Delivery-Kennzahlen",
  metricTransactions: "Transaktionen pro Tag",
  navBrief: "Projektauftrag",
  navCapabilities: "Kompetenzen",
  navContact: "Kickoff",
  navCredentials: "Nachweise",
  navDeliverables: "Berufliche Projekte",
  navOverview: "Übersicht",
  navPersonalProject: "Persönliches Projekt",
  navRoadmap: "Karrierepfad",
  navWorkstreams: "Berufserfahrung",
  nextPhase: "Nächste Phase",
  objectiveLabel: "Ziel",
  objectiveValue: "Wechsel in das IT-Projektmanagement",
  openCase: "Details öffnen",
  openNavigation: "Portfolio-Navigation öffnen",
  organisationLabel: "Unternehmen",
  outcomeLabel: "Ergebnis",
  overviewCode: "00 · Übersicht",
  performanceTag: "Performance",
  periodLabel: "Zeitraum",
  phaseTransition: "BERUFLICHE NEUAUSRICHTUNG",
  personalProjectEvidenceState: "Wird mit dem Projektfortschritt ergänzt",
  personalProjectFormat: "Durchgängige Fallstudie",
  personalProjectPlaceholderDescription:
    "Dieser Bereich dokumentiert ein Projekt von der Problemdefinition über Planung und Umsetzung bis zu Validierung und Release.",
  personalProjectPlaceholderTitle: "Fallstudie zum persönlichen Projekt",
  personalProjectRole: "Projektmanager & Entwickler",
  personalProjectsCode: "03 · Persönliches Projekt",
  personalProjectsIntro:
    "Vorgesehen für eine eigenständige Fallstudie, die Projektmanagement und Softwareentwicklung als durchgängige Delivery-Geschichte zeigt.",
  personalProjectsTitle: "Ein Projekt. Zwei verbundene Disziplinen.",
  personalProjectStatus: "In Arbeit",
  personalProjectWipNote:
    "Nur Layout-Vorschau - Projektdetails und Nachweise werden mit dem Fortschritt ergänzt.",
  caseStudyPreview: "VORSCHAU DER FALLSTUDIE",
  comingSoon: "Folgt in Kürze",
  devTrackArchitecture: "Architektur & Technologie-Stack",
  devTrackBuild: "Inkrementelle Entwicklung",
  devTrackIntro: "Wie die Lösung konzipiert, entwickelt, getestet und veröffentlicht wird.",
  devTrackTesting: "Tests & Deployment",
  devTrackTitle: "Entwicklung",
  documentsPlaceholder: "Projektauftrag, Roadmap, Risikoregister und Retrospektive",
  documentsTitle: "Projektdokumente",
  flowDiagramPlaceholder: "Prozess- und Architekturansichten",
  flowDiagramTitle: "Flussdiagramme",
  pmTrackCharter: "Projektauftrag & Umfang",
  pmTrackIntro: "Wie die Arbeit definiert, priorisiert, gesteuert und kommuniziert wird.",
  pmTrackRisk: "Risiken & Entscheidungen",
  pmTrackRoadmap: "Roadmap & Meilensteine",
  pmTrackTitle: "Projektmanagement",
  principleAlignText:
    "Stakeholder-Anforderungen in User Stories, technische Spezifikationen, Meilensteine und klare Maßnahmen übersetzen.",
  principleAlignTitle: "Ausrichten",
  principleDeliverText:
    "Bereitschaft, Release, Smoke-Tests, Nachbereitung und Statusberichte bis zum Abschluss koordinieren.",
  principleDeliverTitle: "Umsetzen",
  principleDeriskText:
    "Abhängigkeiten und Blocker zwischen Engineering, Security, Deployment und regionalen Teams früh sichtbar machen.",
  principleDeriskTitle: "Risiken reduzieren",
  professionalUse: "Im Lebenslauf angegeben",
  projectDelivery: "Projektsteuerung",
  projectEvidenceTagsLabel: "Nachweise zur Projektsteuerung",
  projectEvidencePreviewTitle: "Vorgesehene Nachweisbereiche",
  projectFormatLabel: "Format",
  projectLifecycleLabel: "Geplanter Ablauf des persönlichen Projekts",
  projectLifecycleTitle: "Geplanter Delivery-Ablauf",
  projectManagement: "Projektmanagement",
  projectTracksLabel: "Zwei verbundene Delivery-Arbeitsströme",
  puneUniversity: "Pune University, Indien",
  qualityPackageTitle: "Engineering-Qualitätssicherung",
  railRole: "Projektmanagement & technische Umsetzung",
  riskTag: "Risiko",
  roadmapCode: "06 · Karrierepfad",
  roadmapIntro:
    "Engineering schuf das analytische Fundament, Delivery lieferte die Praxisnachweise und das Managementstudium definierte die nächste Ausrichtung.",
  roadmapTitle: "Ein gezielter Schritt in Richtung Projektleitung.",
  roleDiscipline: "Projektmanagement & technische Umsetzung",
  roleLabel: "Rolle",
  roleRecordLabel: "Rollenprofil bei Capgemini",
  roleValue: "Associate Consultant",
  scopeLabel: "Umfang",
  sectionNavLabel: "Portfolio-Bereiche",
  skipLink: "Zum Hauptinhalt springen",
  snapshotLabel: "Projektübersicht zur Karriere",
  screenshotsPlaceholder: "Produktansichten mit Kontext",
  screenshotsTitle: "Screenshots",
  stageBuild: "Entwickeln",
  stageBuildText: "Inkrementelle Umsetzung",
  stageDiscover: "Verstehen",
  stageDiscoverText: "Problem & Nutzer",
  stagePlan: "Planen",
  stagePlanText: "Umfang, Roadmap & Risiken",
  stageRelease: "Veröffentlichen",
  stageReleaseText: "Deployment & Retrospektive",
  stageValidate: "Validieren",
  stageValidateText: "Tests & Feedback",
  stakeholdersTag: "Stakeholder",
  startConversation: "Gespräch starten",
  statusValue: "Offen für PM-Positionen",
  strategy: "Strategie",
  supplyChain: "Supply-Chain-Management",
  targetLabel: "Zielrolle",
  targetPhase: "Ziel",
  targetRoadmapText:
    "Technisches Verständnis für eine durchgängige Delivery-Verantwortung einsetzen.",
  targetRole: "IT-Projektmanagement",
  targetRoleLabel: "Zielrolle",
  technicalDelivery: "Technische Umsetzung",
  technicalDevelopment: "Technische Entwicklung",
  technicalEvidenceTagsLabel: "Nachweise zur technischen Umsetzung",
  toolRegisterLabel: "Tool-Übersicht",
  toolsLabel: "Tools",
  viewLabel: "Ansicht",
  workspaceName: "Projekt-Workspace",
  workspaceNavLabel: "Portfolio-Workspace",
  workspaceOwner: "Workspace-Inhaber",
  workstreamOneBulletFour:
    "Backlog Refinement, Sprint Planning, Reviews, Meilensteine, Risiken, Blocker und Maßnahmen in Jira und Confluence gesteuert.",
  workstreamOneBulletOne: "Mehr als 30 System-Cutovers und Migrationen abgeschlossen.",
  workstreamOneBulletThree:
    "Integrationsblocker, technische Abhängigkeiten, Firewall-Freigaben und Delivery-Risiken gesteuert.",
  workstreamOneBulletTwo:
    "Readiness-Checks, Deployment-Teams, Smoke-Tests und Nachbereitung nach dem Release koordiniert.",
  workstreamOneScope:
    "Händlerauftragsdaten über mehrere Regionen und Zeitzonen an den passenden Produktions- oder Betriebsstandort übertragen.",
  workstreamOneSummary:
    "Alleinige Delivery-Verantwortung für die Koordination deutscher und regionaler Teams weltweit.",
  workstreamsCode: "02 · Berufserfahrung",
  workstreamsIntro:
    "Eine Rolle mit Projektkoordination, globaler Cutover-Delivery und praktischer Softwareentwicklung für Mercedes-Benz R&D.",
  workstreamsTitle: "Nachweisbare professionelle Delivery-Erfahrung.",
  workstreamTwoBulletFour:
    "Ein KI-gestütztes Pull-Request-Review-Tool für frühzeitige Qualitäts- und Risikoprüfungen entwickelt.",
  workstreamTwoBulletOne:
    "REST-APIs für mehr als 10.000 Transaktionen pro Tag entwickelt.",
  workstreamTwoBulletThree:
    "Ein wiederverwendbares Lasttest-Framework entwickelt, das projektweit eingesetzt wurde.",
  workstreamTwoBulletTwo: "Die durchschnittliche Antwortzeit um rund 30 % reduziert.",
  workstreamTwoScope:
    "Responsive Benutzeroberflächen und sichere Services für Authentifizierung und hochvolumige Datentransfers entwickeln.",
  workstreamTwoSummary:
    "Java, Spring Boot, Angular, REST-APIs, Performance und Engineering-Qualität.",
  years: "Jahre",
};

const metadata = {
  en: {
    title: "Aditya Wanmali | Project Delivery Workspace",
    description:
      "Aditya Wanmali's project-delivery portfolio: 3.5 years of technical delivery experience, 30+ system cutovers and migrations, Agile delivery, and stakeholder management.",
    openGraphDescription: "Technical delivery experience. Project management direction.",
  },
  de: {
    title: "Aditya Wanmali | Projekt-Delivery-Workspace",
    description:
      "Aditya Wanmalis Projekt-Delivery-Portfolio: 3,5 Jahre technische Delivery-Erfahrung, mehr als 30 System-Cutovers und Migrationen, Agile Delivery und Stakeholder-Management.",
    openGraphDescription: "Technische Delivery-Erfahrung. Klare Ausrichtung auf Projektmanagement.",
  },
};

const interfaceCopy = {
  en: {
    filterResult: (count) => `${count} ${count === 1 ? "item" : "items"}`,
    filterAnnouncement: (count) =>
      `${count} ${count === 1 ? "deliverable is" : "deliverables are"} visible.`,
    languageAnnouncement: "Language changed to English.",
  },
  de: {
    filterResult: (count) => `${count} ${count === 1 ? "Element" : "Elemente"}`,
    filterAnnouncement: (count) =>
      `${count} ${count === 1 ? "Ergebnis wird" : "Ergebnisse werden"} angezeigt.`,
    languageAnnouncement: "Sprache auf Deutsch geändert.",
  },
};

let currentLanguage = "en";
let activeFilter = "all";

function getCopy(key, language = currentLanguage) {
  if (language === "de" && key in germanCopy) return germanCopy[key];
  return englishCopy[key] || "";
}

function announce(message) {
  if (!interfaceStatus) return;
  interfaceStatus.textContent = "";
  window.requestAnimationFrame(() => {
    interfaceStatus.textContent = message;
  });
}

function updateMenuLabel() {
  if (!menuToggle) return;
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute(
    "aria-label",
    getCopy(isOpen ? "closeNavigation" : "openNavigation")
  );
}

function updateFilterCount(shouldAnnounce = false) {
  const visibleCount = deliverableCards.filter((card) => !card.hidden).length;
  if (filterCount) {
    filterCount.textContent = interfaceCopy[currentLanguage].filterResult(visibleCount);
  }
  if (shouldAnnounce) {
    announce(interfaceCopy[currentLanguage].filterAnnouncement(visibleCount));
  }
}

function applyLanguage(language, shouldAnnounce = false) {
  currentLanguage = language === "de" ? "de" : "en";
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const copy = getCopy(element.dataset.i18n, currentLanguage);
    if (copy) element.textContent = copy;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const copy = getCopy(element.dataset.i18nAriaLabel, currentLanguage);
    if (copy) element.setAttribute("aria-label", copy);
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
  });

  const pageMetadata = metadata[currentLanguage];
  document.title = pageMetadata.title;
  if (descriptionMeta) descriptionMeta.content = pageMetadata.description;
  if (openGraphTitle) openGraphTitle.content = pageMetadata.title;
  if (openGraphDescription) openGraphDescription.content = pageMetadata.openGraphDescription;

  try {
    localStorage.setItem("portfolio-language", currentLanguage);
  } catch {
    // The page still works when storage is unavailable.
  }

  updateMenuLabel();
  updateFilterCount(false);

  if (shouldAnnounce) {
    announce(interfaceCopy[currentLanguage].languageAnnouncement);
  }
}

function getSavedLanguage() {
  try {
    const savedLanguage = localStorage.getItem("portfolio-language");
    return savedLanguage === "de" || savedLanguage === "en" ? savedLanguage : "en";
  } catch {
    return "en";
  }
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.language !== currentLanguage) {
      applyLanguage(button.dataset.language, true);
    }
  });
});

function setMenuState(isOpen, { restoreFocus = false } = {}) {
  if (!menuToggle || !sidebar || !drawerBackdrop) return;

  const shouldOpen = Boolean(isOpen) && !desktopBreakpoint.matches;
  menuToggle.setAttribute("aria-expanded", String(shouldOpen));
  sidebar.classList.toggle("is-open", shouldOpen);
  drawerBackdrop.hidden = !shouldOpen;
  document.body.classList.toggle("menu-open", shouldOpen);

  if (workspaceMain && "inert" in workspaceMain) {
    workspaceMain.inert = shouldOpen;
  }

  updateMenuLabel();

  if (shouldOpen) {
    const firstLink = sidebar.querySelector("a[href]");
    window.requestAnimationFrame(() => firstLink?.focus({ preventScroll: true }));
  } else if (restoreFocus) {
    menuToggle.focus({ preventScroll: true });
  }
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuState(!isOpen, { restoreFocus: isOpen });
});

drawerBackdrop?.addEventListener("click", () => {
  setMenuState(false, { restoreFocus: true });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const menuWasOpen = menuToggle?.getAttribute("aria-expanded") === "true";
    setMenuState(false);

    if (!menuWasOpen) return;
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    target.setAttribute("tabindex", "-1");
    window.requestAnimationFrame(() => target.focus({ preventScroll: true }));
  });
});

brandLink?.addEventListener("click", () => setMenuState(false));

document.addEventListener("keydown", (event) => {
  const menuIsOpen = menuToggle?.getAttribute("aria-expanded") === "true";
  if (!menuIsOpen || !menuToggle || !sidebar) return;

  if (event.key === "Escape") {
    event.preventDefault();
    setMenuState(false, { restoreFocus: true });
    return;
  }

  if (event.key !== "Tab") return;

  const sidebarControls = [
    ...sidebar.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
  ];
  const focusableControls = [menuToggle, ...sidebarControls];
  const firstControl = focusableControls[0];
  const lastControl = focusableControls[focusableControls.length - 1];

  if (event.shiftKey && document.activeElement === firstControl) {
    event.preventDefault();
    lastControl.focus();
  } else if (!event.shiftKey && document.activeElement === lastControl) {
    event.preventDefault();
    firstControl.focus();
  }
});

desktopBreakpoint.addEventListener("change", (event) => {
  if (event.matches) setMenuState(false);
});

function applyFilter(filter, shouldAnnounce = true) {
  activeFilter = ["all", "project", "technical"].includes(filter) ? filter : "all";

  filterButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === activeFilter));
  });

  deliverableCards.forEach((card) => {
    const shouldShow = activeFilter === "all" || card.dataset.category === activeFilter;
    card.hidden = !shouldShow;
    if (!shouldShow) card.open = false;
    if (shouldShow && shouldAnnounce) card.classList.add("is-visible");
  });

  updateFilterCount(shouldAnnounce);
  updateScrollState();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => applyFilter(button.dataset.filter));
});

filterToolbar?.addEventListener("keydown", (event) => {
  if (!filterButtons.includes(event.target)) return;

  const currentIndex = filterButtons.indexOf(event.target);
  let nextIndex = currentIndex;

  if (event.key === "ArrowRight" || event.key === "ArrowDown") {
    nextIndex = (currentIndex + 1) % filterButtons.length;
  } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
    nextIndex = (currentIndex - 1 + filterButtons.length) % filterButtons.length;
  } else if (event.key === "Home") {
    nextIndex = 0;
  } else if (event.key === "End") {
    nextIndex = filterButtons.length - 1;
  } else {
    return;
  }

  event.preventDefault();
  filterButtons[nextIndex].focus();
});

let scrollFrameRequested = false;

function updateScrollState() {
  header?.classList.toggle("scrolled", window.scrollY > 12);

  const scrollableDistance = document.documentElement.scrollHeight - window.innerHeight;
  const rawProgress = scrollableDistance > 0 ? window.scrollY / scrollableDistance : 0;
  const progress = Math.min(1, Math.max(0, rawProgress));
  scrollProgress?.style.setProperty("--scroll-progress", String(progress));

  const readingLine = window.scrollY + window.innerHeight * 0.38;
  let activeId = sections[0]?.id;

  sections.forEach((section) => {
    if (section.offsetTop <= readingLine) activeId = section.id;
  });

  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
    activeId = sections[sections.length - 1]?.id;
  }

  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeId}`;
    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  scrollFrameRequested = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (scrollFrameRequested) return;
    scrollFrameRequested = true;
    window.requestAnimationFrame(updateScrollState);
  },
  { passive: true }
);

window.addEventListener("resize", updateScrollState, { passive: true });

if (reducedMotion.matches || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.08,
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

if (yearElement) yearElement.textContent = new Date().getFullYear();

applyLanguage(getSavedLanguage());
applyFilter("all", false);
updateScrollState();
