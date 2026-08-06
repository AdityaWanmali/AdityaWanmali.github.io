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

document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
  const key = element.dataset.i18nAlt;
  if (!(key in englishCopy)) {
    englishCopy[key] = element.getAttribute("alt") || "";
  }
});

const germanCopy = {
  accounting: "Rechnungswesen",
  aiReviewTag: "KI-Review",
  aiReviewTagLong: "KI-gestützte Code-Reviews",
  apiPackageTitle: "Performance hochvolumiger APIs",
  approvedEvidence: "IM LEBENSLAUF BELEGT",
  associateRoadmapText: "Capgemini · Globale Delivery & Softwareentwicklung",
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
  capProjectOne: "Bereichsübergreifende Projektkoordination",
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
    "Ich suche Positionen in Projektsteuerung und Delivery, in denen technisches Verständnis, strukturierte Umsetzung und klare Stakeholder-Kommunikation zählen.",
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
  directionValue: "Projekte an der Schnittstelle von Business und Technologie",
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
  focusValue: "Agile Delivery · Stakeholder-Management · Technische Koordination",
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
  objectiveValue: "Weiterentwicklung in bereichsübergreifende Projekt- und Delivery-Rollen",
  openCase: "Details öffnen",
  openNavigation: "Portfolio-Navigation öffnen",
  organisationLabel: "Unternehmen",
  outcomeLabel: "Ergebnis",
  overviewCode: "00 · Übersicht",
  performanceTag: "Performance",
  periodLabel: "Zeitraum",
  phaseTransition: "BERUFLICHE NEUAUSRICHTUNG",
  personalProjectEvidenceState: "Quellcode · technische Dokumentation · Build-Audit",
  personalProjectFocusLabel: "Fokus",
  personalProjectFocusValue: "Delivery-Dokumentation & native iOS-Umsetzung",
  personalProjectPlatformLabel: "Plattform",
  personalProjectPlatformValue: "iOS & iPadOS · vollständig lokal",
  personalProjectPlaceholderDescription:
    "Ein nativer iOS- und iPadOS-Prototyp, der Check-ins mit vier Fragen in einen lokalen Verlauf und eine visuelle Baum-Journey überführt.",
  personalProjectPlaceholderTitle: "My Moment Space: Lokales Wohlbefindens-Tagebuch",
  personalProjectsCode: "03 · Persönliches Projekt",
  personalProjectsIntro:
    "My Moment Space zeigt, wie Produktdefinition, Delivery-Planung, native iOS-Umsetzung und Validierung zusammenwirken.",
  personalProjectsTitle: "Ein persönliches Produkt, durchgängig umgesetzt.",
  personalProjectStatus: "Pre-Release-Prototyp",
  personalProjectWipNote:
    "Nachweisgrenze: Quellcode-Umsetzung, Kompilierung und Simulator-Smoke-Test sind abgeschlossen. Automatisierte Tests, Validierung auf einem physischen Gerät, Nutzerwirkung und Distribution sind noch nicht nachgewiesen.",
  coreStackLabel: "Kerntechnologien des Projekts",
  projectTypeLabel: "Produkt",
  projectTypeValue: "Lokales Wohlbefindens-Tagebuch",
  projectStageLabel: "Phase",
  projectStageValue: "Pre-Release-Prototyp",
  productPreviewTitle: "Produktvorschau",
  productPreviewIntro:
    "Fünf Simulator-Aufnahmen, die den umgesetzten Produktablauf zeigen.",
  screenshotSlotLabel: "SCREENSHOT FOLGT",
  pinScreenshotTitle: "PIN & lokaler Zugriff",
  pinScreenshotText: "Vierstelliger Zugangsschutz mit Speicherung im Keychain",
  pinScreenshotAlt:
    "PIN-Eingabebildschirm von My Moment Space mit numerischer Tastatur",
  homeScreenshotTitle: "Home & visueller Fortschritt",
  homeScreenshotText: "Animierter Baum, Zyklusfortschritt und zentrale Aktionen",
  homeScreenshotAlt:
    "Home-Bildschirm von My Moment Space mit animiertem smaragdgrünem Baum und Check-in-Optionen",
  checkinScreenshotTitle: "Check-in mit vier Fragen",
  checkinScreenshotText: "Eine von vier Stufen zur Wohlbefindensbewertung",
  checkinScreenshotAlt:
    "Check-in-Bildschirm von My Moment Space mit vier Auswahlmöglichkeiten zur Wohlbefindensbewertung",
  saveScreenshotTitle: "Speicherbestätigung",
  saveScreenshotText: "Klarer Abschlusszustand nach lokaler Speicherung",
  saveScreenshotAlt:
    "Bestätigungsbildschirm von My Moment Space, dass der Check-in gespeichert wurde",
  settingsScreenshotTitle: "Einstellungen & Journey-Steuerung",
  settingsScreenshotText: "Fortschrittswerte, Baumthemen und Reset-Funktionen",
  settingsScreenshotAlt:
    "Einstellungsbildschirm von My Moment Space mit Journey-Statistiken, Baumthemen und Reset-Funktion",
  historyScreenshotTitle: "Verlauf & Fortschritt",
  historyScreenshotText: "Tageweise Einträge und Journey-Statistiken",
  projectOverviewTitle: "Das Wesentliche",
  projectOverviewIntro:
    "Problem, mein Beitrag und aktueller Delivery-Stand auf einen Blick.",
  projectProblemTitle: "Problem",
  projectProblemText:
    "Persönliche Reflexion kann zeitaufwendig und abstrakt wirken. Dieser Prototyp untersucht einen kürzeren Check-in mit lokalem Verlauf und visuellem Fortschritt. Die Nutzerwirkung wurde noch nicht validiert.",
  myContributionTitle: "Mein Beitrag",
  myContributionText:
    "Ich habe Produktregeln und Nutzerablauf definiert, Architektur, Risiken, Qualität und Release-Bereitschaft dokumentiert, die SwiftUI-App umgesetzt und den Kernablauf im Simulator per Smoke-Test geprüft.",
  projectCurrentStatusTitle: "Aktueller Stand",
  projectCurrentStatusText:
    "Pre-Release-Prototyp. Quellcode-Umsetzung, Debug- und Release-Kompilierung sowie der Simulator-Smoke-Test sind abgeschlossen. Automatisierte Tests und die Validierung auf einem physischen Gerät stehen aus.",
  deliveryJourneyTitle: "Von der Definition zur Release-Vorbereitung",
  deliveryJourneyIntro:
    "Eine kompakte Übersicht darüber, wie Produktdefinition, technische Delivery und Validierung zusammenwirken.",
  deliveryJourneyLabel: "Delivery-Journey von My Moment Space",
  deliveryStepScope: "Umfang definieren",
  deliveryStepScopeText: "Produktablauf, Grenzen & Regeln",
  deliveryStepDesign: "Konzipieren",
  deliveryStepDesignText: "Architektur, Daten & Sicherheit",
  deliveryStepBuild: "Umsetzen",
  deliveryStepBuildText: "SwiftUI & lokale Speicherung",
  deliveryStepValidate: "Validieren",
  deliveryStepValidateText: "Builds & Simulator-Smoke-Test",
  deliveryStepPrepare: "Release vorbereiten",
  deliveryStepPrepareText: "Risiken, Tests & Readiness-Checkliste",
  deliveryJourneyBoundary:
    "Die Release-Vorbereitung ist dokumentiert; dies ist kein Produktions-Release.",
  deliverySnapshotTitle: "Delivery-Ergebnisse",
  deliverySnapshotIntro:
    "Vier Fakten, die Recruiter auf einen Blick nachvollziehen können.",
  builtState: "UMGESETZT",
  builtResultTitle: "Lokaler Produktablauf",
  builtResultText:
    "PIN-Zugriff, Check-in, Verlauf, Baumfortschritt, Einstellungen und Reset sind umgesetzt.",
  testedState: "GETESTET",
  testedResultTitle: "Simulator-Validierung",
  testedResultText:
    "Debug- und Release-Builds kompilieren; der Kernablauf wurde im iOS-Simulator per Smoke-Test geprüft.",
  documentedResultTitle: "Delivery-Nachweise",
  documentedResultText:
    "Umfang, Architektur, Sicherheitsrisiken, geplante Tests und Release-Readiness-Prüfungen sind dokumentiert.",
  nextState: "NÄCHSTER SCHRITT",
  nextResultTitle: "Geräte- und Testvalidierung",
  nextResultText:
    "Automatisierte Tests wiederherstellen, auf einem physischen Gerät validieren und anschließend Lücken bei PIN-Sperre und Barrierefreiheit schließen.",
  projectDecisionsTitle: "Zentrale Produktentscheidungen",
  projectDecisionsIntro:
    "Drei Entscheidungen, die Umfang, Umsetzung und Produkterlebnis geprägt haben.",
  localFirstDecisionTitle: "Local-first",
  localFirstDecisionText:
    "Momente, Zugriffskontrolle und Fortschrittsdaten bleiben auf dem Gerät.",
  decisionReasonLabel: "Grund",
  localFirstReason:
    "Entfernt Backend- und API-Abhängigkeiten aus dem Prototyp.",
  decisionTradeoffLabel: "Abwägung",
  localFirstTradeoff:
    "Keine Synchronisierung, kein Fernzugriff und keine serverseitige Wiederherstellung.",
  nativeIosDecisionTitle: "Native iOS",
  nativeIosDecisionText:
    "Ein SwiftUI-Target mit Apple-nativen Frameworks und ohne Drittanbieterpakete.",
  nativeIosReason: "Hält Umsetzung und Abhängigkeiten kompakt.",
  nativeIosTradeoff:
    "Auf Apple-Plattformen begrenzt; das Verhalten auf physischen Geräten ist noch zu prüfen.",
  visualProgressDecisionTitle: "Visueller Fortschritt",
  visualProgressDecisionText:
    "Ein animierter Baum mit fünf Stufen stellt den Fortschritt über Check-in-Tage dar.",
  visualProgressReason:
    "Macht kontinuierliche Nutzung sichtbar, ohne sich nur auf Diagramme zu stützen.",
  visualProgressTradeoff:
    "Metapher und Barrierefreiheit erfordern noch eine Validierung mit Nutzern.",
  technicalDetailsTitle: "Technische Details",
  technicalDetailsSummary: "Architektur, Umfang, Risiken, Tests und Technologie",
  technicalArchitectureTitle: "Architektur & lokale Speicherung",
  technicalScopeTitle: "Belegter Umfang, Tests & Validierung",
  technicalScopeOne: "PIN, Check-in, Verlauf, Baum, Einstellungen und Reset umgesetzt",
  technicalScopeTwo: "Debug- und Release-Kompilierung abgeschlossen",
  technicalScopeThree: "Kernablauf im iOS-Simulator per Smoke-Test geprüft",
  technicalScopeFour:
    "Automatisierte Tests und Validierung auf einem physischen Gerät folgen",
  technicalRisksTitle: "Offene Risiken & Release-Bereitschaft",
  technicalRiskOne: "Keine PIN-Sperre oder Wartezeit",
  technicalRiskTwo: "Barrierefreiheits- und Performance-Validierung stehen aus",
  technicalRiskThree: "Finale Assets, Signing und Distribution stehen aus",
  technicalRiskFour: "Die Nutzerwirkung wurde noch nicht validiert",
  architectureAbsence: "Kein Backend · Keine externe API · Kein Analytics · Keine Drittanbieterpakete",
  architectureApp: "SwiftUI-Anwendung",
  architectureAppText: "PIN-Sperre · Home und Baum · Check-in · Verlauf · Einstellungen",
  architectureDefaultsText: "Metadaten der Baumgeneration",
  architectureKeychainText: "Vierstellige PIN für den UI-Zugriff",
  architectureSwiftDataText: "Lokale Moment-Einträge",
  architectureText:
    "Eine native Struktur für ein einzelnes Gerät hält Oberfläche, Produktzustand und Speicherung innerhalb der App – ohne Backend, externe API oder Analytics.",
  architectureTitle: "Local-First-Architektur",
  architectureUser: "Einzelner lokaler Nutzer",
  architectureUserText: "PIN-geschützter Zugriff auf einem Gerät",
  buildEvidenceText:
    "Debug- und Release-Builds kompilieren; der Kernablauf wurde im iOS-Simulator per Smoke-Test geprüft.",
  buildEvidenceTitle: "Simulator-Validierung",
  caseDetailsTitle: "Details zur Fallstudie",
  caseEvidenceIntro:
    "Eine kompakte Übersicht darüber, was umgesetzt, validiert, dokumentiert oder noch ausstehend ist.",
  caseEvidenceTitle: "Nachweise und Reifegrad",
  caseStudyPreview: "QUELLENGESTÜTZTE FALLSTUDIE",
  deliveryEvidenceFour: "Geplante Teststrategie und manuelle Release-Checkliste vorbereitet",
  deliveryEvidenceOne: "Funktionaler Umfang und technische Leitplanken dokumentiert",
  deliveryEvidenceThree: "Sicherheitsrisiken, Maßnahmen und technische Schulden festgehalten",
  deliveryEvidenceTitle: "Delivery-Nachweise",
  deliveryEvidenceTwo: "Durchgängiger Nutzerablauf und Modulverantwortung abgebildet",
  devTrackArchitecture: "SwiftUI-Architektur mit einem Target",
  devTrackBuild: "SwiftData, Keychain & UserDefaults",
  devTrackIntro:
    "Eine SwiftUI-App mit einem Target bildet den lokalen Produktablauf mit SwiftData, Keychain und UserDefaults ab – ohne Backend oder Drittanbieterpakete.",
  devTrackTesting: "Check-in-, Verlaufs-, Baum- & Reset-Abläufe",
  devTrackTitle: "Native iOS-Umsetzung",
  devTrackValidation: "Nachweise für Debug- & Release-Kompilierung",
  documentedState: "DOKUMENTIERT",
  documentationEvidenceText:
    "Dokumentation zu Architektur, Daten, Sicherheit, Feature-Abläufen, geplanter Teststrategie und Release-Bereitschaft ist vorhanden.",
  documentationEvidenceTitle: "Delivery-Dokumentation",
  featureScopeFive: "Siebentägiger Generationsfortschritt, Statistiken und Journey-Reset",
  featureScopeFour: "Animierter Baum mit fünf Stufen und vier visuellen Themen",
  featureScopeOne: "PIN-Einrichtung, Entsperren und automatische erneute Sperre",
  featureScopeThree: "Tageweise gruppierter Verlauf und visuelle Gesamtbewertungen",
  featureScopeTitle: "Belegter Funktionsumfang",
  featureScopeTwo: "Wohlbefindens-Check-in aus vier Fragen mit lokaler Speicherung",
  generationDays: "Unterschiedliche Tage pro Generation",
  implementedState: "UMGESETZT",
  nextMilestoneText:
    "Automatisierte Tests wiederherstellen, die Validierung auf einem physischen Gerät abschließen und anschließend prioritäre Lücken bei PIN-Sperre und Barrierefreiheit vor der Release-Validierung schließen. Ein verbindlicher Termin ist nicht belegt.",
  nextMilestoneTitle: "Empfohlener nächster Meilenstein",
  openRiskFour: "Validierung auf einem physischen Gerät, finale Assets, Signing, Distribution und Nachweise zur Nutzerwirkung fehlen",
  openRiskOne: "Automatisiertes Test-Target und Testquellen sind derzeit nicht verfügbar",
  openRiskThree: "Validierungen zu Barrierefreiheit, Sicherheit und Performance stehen aus",
  openRiskTwo: "Für die vierstellige PIN gibt es keine Sperre oder Wartezeit",
  openRisksTitle: "Offene Risiken und Einschränkungen",
  pendingState: "AUSSTEHEND",
  pmTrackCharter: "Umfang & funktionale Leitplanken",
  pmTrackFlow: "Nutzerablauf- & Architekturdokumentation",
  pmTrackIntro:
    "Die Repository-Dokumentation macht Umfang, funktionale Leitplanken, Risiken, Qualitätsplanung und Prüfungen zur Release-Bereitschaft nachvollziehbar.",
  pmTrackRisk: "Sicherheitsrisiken & technische Entscheidungen",
  pmTrackRoadmap: "Qualitätsplan & Release-Checkliste",
  pmTrackTitle: "Delivery-Planung & Nachweise",
  productFramingText:
    "Das Produkt untersucht, ob vier strukturierte Bewertungen, ein lokaler Verlauf und eine visuelle Wachstumsmetapher persönliche Check-ins leichter beibehalten lassen. Dies ist eine Produkthypothese und keine validierte Nutzerforschung.",
  productFramingTitle: "Ein kurzer Moment zur Reflexion.",
  projectFlowBoundary:
    "Im Quellcode umgesetzt und im Simulator per Smoke-Test geprüft; die Prüfung auf einem physischen Gerät steht noch aus.",
  projectLifecycleIntro:
    "Der Quellcode bildet eine lokale Journey vom PIN-geschützten Zugriff über Reflexion und Verlauf bis zum visuellen Fortschritt ab.",
  projectRulesLabel: "Implementierte Produktregeln",
  projectTechnologyLabel: "Projekttechnologien",
  projectTechnologyTitle: "Vollständige Technologieübersicht",
  projectTracksTitle: "Verbundene Delivery- und Entwicklungsstränge",
  ratingDimensions: "Bewertungsdimensionen",
  sourceEvidenceText:
    "PIN-Zugriff, Check-in, Verlauf, Baumfortschritt, Einstellungen und Reset sind im Quellcode umgesetzt.",
  sourceEvidenceTitle: "Umgesetzter Produktablauf",
  treeStages: "Wachstumsstufen des Baums",
  treeThemes: "Visuelle Baumthemen",
  validationLabel: "Validierung",
  validatedState: "VALIDIERT",
  validationValue: "Simulator-Smoke-Test abgeschlossen · physisches Gerät ausstehend",
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
  projectLifecycleLabel: "Implementierter Produktablauf von My Moment Space",
  projectLifecycleTitle: "Implementierter Produktablauf",
  projectManagement: "Projektmanagement",
  puneUniversity: "Pune University, Indien",
  qualityPackageTitle: "Engineering-Qualitätssicherung",
  railRole: "Projekte · Delivery · Technologie",
  riskTag: "Risiko",
  roadmapCode: "06 · Karrierepfad",
  roadmapIntro:
    "Engineering schuf das analytische Fundament, Delivery lieferte die Praxisnachweise und das Managementstudium definierte die nächste Ausrichtung.",
  roadmapTitle: "Ein gezielter Schritt in Richtung bereichsübergreifender Delivery.",
  roleDiscipline: "Projektkoordination & technische Umsetzung",
  roleLabel: "Rolle",
  roleRecordLabel: "Rollenprofil bei Capgemini",
  roleValue: "Associate Consultant",
  scopeLabel: "Umfang",
  sectionNavLabel: "Portfolio-Bereiche",
  skipLink: "Zum Hauptinhalt springen",
  snapshotLabel: "Projektübersicht zur Karriere",
  screenshotsPlaceholder: "Simulator-Aufnahmen mit synthetischen Daten werden für die sichere Veröffentlichung noch benötigt.",
  screenshotsTitle: "Produkt-Screenshots",
  stageBuild: "Lokal speichern",
  stageBuildText: "Moment mit SwiftData speichern",
  stageDiscover: "Entsperren",
  stageDiscoverText: "Vierstellige PIN erstellen oder eingeben",
  stagePlan: "Einchecken",
  stagePlanText: "Vier Dimensionen von 1–4 bewerten",
  stageRelease: "Wachsen",
  stageReleaseText: "Die visuelle Baum-Journey fortsetzen",
  stageValidate: "Zurückblicken",
  stageValidateText: "Momente tageweise gruppiert ansehen",
  stakeholdersTag: "Stakeholder",
  startConversation: "Gespräch starten",
  statusValue: "Offen für Projekt- & Delivery-Rollen",
  strategy: "Strategie",
  supplyChain: "Supply-Chain-Management",
  targetDestination: "Bereichsübergreifende Projektumsetzung",
  targetLabel: "Ausrichtung",
  targetPhase: "Ziel",
  targetRoadmapText:
    "Technisches Verständnis für bereichsübergreifende Projekt-Delivery einsetzen.",
  targetRole: "Projektmanagement & Delivery",
  targetRoleLabel: "Berufliche Ausrichtung",
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
    openGraphDescription: "Technical delivery experience with a focus on projects, coordination, and cross-functional execution.",
  },
  de: {
    title: "Aditya Wanmali | Projekt-Delivery-Workspace",
    description:
      "Aditya Wanmalis Projekt-Delivery-Portfolio: 3,5 Jahre technische Delivery-Erfahrung, mehr als 30 System-Cutovers und Migrationen, Agile Delivery und Stakeholder-Management.",
    openGraphDescription: "Technische Delivery-Erfahrung mit Fokus auf Projekte, Koordination und bereichsübergreifende Umsetzung.",
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

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const copy = getCopy(element.dataset.i18nAlt, currentLanguage);
    if (copy) element.setAttribute("alt", copy);
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
