document.documentElement.classList.add("js");

const header = document.querySelector("#site-header");
const brandLink = document.querySelector(".brand");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
const sections = [...document.querySelectorAll("main section[id]")];
const revealItems = [...document.querySelectorAll(".reveal")];
const yearElement = document.querySelector("#current-year");
const desktopBreakpoint = window.matchMedia("(min-width: 1081px)");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

function setMenuState(isOpen) {
  if (!menuToggle || !navigation) return;

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
  navigation.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);

  if (isOpen) {
    menuToggle.focus({ preventScroll: true });
  }
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  setMenuState(!isOpen);
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

  if (event.key === "Escape" && menuIsOpen) {
    setMenuState(false);
    menuToggle.focus();
  }

  if (event.key !== "Tab" || !menuIsOpen || !navigation || !menuToggle) return;

  const menuLinks = [...navigation.querySelectorAll("a[href]")];
  const focusableMenuItems = [menuToggle, ...menuLinks];
  const firstItem = focusableMenuItems[0];
  const lastItem = focusableMenuItems[focusableMenuItems.length - 1];

  if (event.shiftKey && document.activeElement === firstItem) {
    event.preventDefault();
    lastItem.focus();
  } else if (!event.shiftKey && document.activeElement === lastItem) {
    event.preventDefault();
    firstItem.focus();
  }
});

desktopBreakpoint.addEventListener("change", (event) => {
  if (event.matches) setMenuState(false);
});

let scrollFrameRequested = false;

function updateHeader() {
  header?.classList.toggle("scrolled", window.scrollY > 12);
  scrollFrameRequested = false;
}

window.addEventListener(
  "scroll",
  () => {
    if (!scrollFrameRequested) {
      window.requestAnimationFrame(updateHeader);
      scrollFrameRequested = true;
    }
  },
  { passive: true }
);

updateHeader();

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visibleSections.length) return;

      const activeId = visibleSections[0].target.id;
      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${activeId}`;
        if (isActive) {
          link.setAttribute("aria-current", "true");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    },
    {
      rootMargin: "-28% 0px -58% 0px",
      threshold: [0, 0.15, 0.4],
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));

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
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
