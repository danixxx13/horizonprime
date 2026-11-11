const header = document.getElementById('navbar');
const menuToggle = document.querySelector('.menu-toggle');
const mobilePanel = document.getElementById('mobile-panel');
const navLinks = [...document.querySelectorAll('.nav-link')];
const mobileLinks = [...document.querySelectorAll('.mobile-link')];
const revealItems = [...document.querySelectorAll('.reveal')];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

function setHeaderState() {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 24);
}

function closeMenu() {
  if (!menuToggle || !mobilePanel) return;
  menuToggle.classList.remove('is-open');
  menuToggle.setAttribute('aria-expanded', 'false');
  mobilePanel.classList.remove('open');
  document.body.classList.remove('menu-open');
}

function toggleMenu() {
  if (!menuToggle || !mobilePanel) return;
  const isOpen = menuToggle.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  mobilePanel.classList.toggle('open', isOpen);
  document.body.classList.toggle('menu-open', isOpen);
}

function setActiveLink(id) {
  navLinks.forEach((link) => {
    const active = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('active', active);
  });
}

function observeSections() {
  if (!('IntersectionObserver' in window) || sections.length === 0) {
    if (sections[0]?.id) setActiveLink(sections[0].id);
    return;
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry?.target?.id) {
        setActiveLink(visibleEntry.target.id);
      }
    },
    {
      rootMargin: '-35% 0px -45% 0px',
      threshold: [0.15, 0.35, 0.55],
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

function observeReveal() {
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('visible'));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.14,
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

function bindInteractions() {
  menuToggle?.addEventListener('click', toggleMenu);

  [...navLinks, ...mobileLinks].forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  window.addEventListener('scroll', setHeaderState, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1080) closeMenu();
  });
}

function initIcons() {
  if (window.lucide?.createIcons) {
    window.lucide.createIcons();
  }
}

function setYear() {
  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
}

setHeaderState();
setYear();
bindInteractions();
observeSections();
observeReveal();
initIcons();
