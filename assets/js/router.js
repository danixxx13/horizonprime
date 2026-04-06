/* ============================================================
   HORIZON PRIME — SPA Router
   Hash-based routing with page lifecycle management
   ============================================================ */

const routes = {
  '':          { page: 'home',      title: 'Horizon Prime — Fábrica de software moderna para operações mais eficientes' },
  'home':      { page: 'home',      title: 'Horizon Prime — Fábrica de software moderna para operações mais eficientes' },
  'produtos':  { page: 'produtos',  title: 'Produtos — Horizon Prime' },
  'precos':    { page: 'precos',    title: 'Planos e Preços — Horizon Prime' },
  'parceiros': { page: 'parceiros', title: 'Programa de Parceiros — Horizon Prime' },
  'sobre':     { page: 'sobre',     title: 'Sobre Nós — Horizon Prime' },
  'contato':   { page: 'contato',   title: 'Contato — Horizon Prime' },
};

// Page initializers registry
const pageInits = {};

export function registerPage(name, initFn) {
  pageInits[name] = initFn;
}

let currentPage = null;

async function navigate(hash) {
  const key = (hash || '').replace(/^#/, '').toLowerCase().split('?')[0];
  const route = routes[key] || routes[''];
  const pageName = route.page;

  if (currentPage === pageName) return;
  currentPage = pageName;

  // Update active route in Alpine store
  if (window.Alpine) {
    Alpine.store('nav').activeRoute = pageName === 'home' ? '' : pageName;
  }

  // Update document title
  document.title = route.title;

  const app = document.getElementById('app');

  // Fade out
  app.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
  app.style.opacity = '0';
  app.style.transform = 'translateY(8px)';

  await new Promise(r => setTimeout(r, 180));

  try {
    // Fetch page HTML
    const response = await fetch(`pages/${pageName}.html`);
    if (!response.ok) throw new Error(`Page not found: ${pageName}`);
    const html = await response.text();

    // Destroy existing Alpine trees to prevent memory leaks
    if (window.Alpine && window.Alpine.destroyTree) {
      try { Alpine.destroyTree(app); } catch(e) {}
    }

    // Inject content
    app.innerHTML = html;

    // Re-initialize Alpine on new content
    if (window.Alpine && window.Alpine.initTree) {
      Alpine.initTree(app);
    }

    // Re-initialize Lucide icons
    if (window.lucide) {
      lucide.createIcons();
    }

    // Re-initialize AOS
    if (window.AOS) {
      AOS.init({
        duration: 700,
        once: true,
        offset: 60,
        easing: 'ease-out-cubic'
      });
      AOS.refresh();
    }

    // Run page-specific initializer
    if (pageInits[pageName]) {
      await pageInits[pageName]();
    }

    // Fade in
    app.style.opacity = '1';
    app.style.transform = 'translateY(0)';

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update footer visibility
    document.getElementById('footer').style.display = '';

  } catch (err) {
    console.error('Router error:', err);
    app.innerHTML = `
      <div style="min-height:80vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:2rem;">
        <div>
          <h2 style="font-size:2rem;margin-bottom:1rem;">Página não encontrada</h2>
          <p style="color:var(--color-text-secondary);margin-bottom:2rem;">Verifique o endereço e tente novamente.</p>
          <a href="#home" class="btn btn-primary">Voltar ao início</a>
        </div>
      </div>
    `;
    app.style.opacity = '1';
    app.style.transform = 'translateY(0)';
  }
}

export const router = {
  init() {
    // Initial render
    navigate(window.location.hash);

    // Listen for hash changes
    window.addEventListener('hashchange', () => {
      navigate(window.location.hash);
    });
  },
  navigate
};
