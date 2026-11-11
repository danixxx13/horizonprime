/* ============================================================
   HORIZON PRIME — Produtos Page Initializer
   ============================================================ */

import { registerPage } from '../router.js';

registerPage('produtos', async function initProdutos() {
  const { products } = window.HorizonData;

  let activePillar = 'todos';
  let activeCategory = 'todos';

  renderGrid(products);
  initFilters(products);

  if (window.lucide) lucide.createIcons();

  function getFiltered() {
    return products.filter(p => {
      const pillarOk = activePillar === 'todos' || p.pillar.toLowerCase() === activePillar;
      const catOk = activeCategory === 'todos' || p.category === activeCategory;
      return pillarOk && catOk;
    });
  }

  function renderGrid(filtered) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:var(--s9);color:var(--color-text-muted);">
          <i data-lucide="search-x" style="width:48px;height:48px;margin:0 auto var(--s4);display:block;"></i>
          <p>Nenhum produto encontrado para os filtros selecionados.</p>
        </div>
      `;
      if (window.lucide) lucide.createIcons();
      return;
    }

    grid.innerHTML = filtered.map((p, i) => `
      <div class="card product-card" data-aos="fade-up" data-aos-delay="${(i % 3) * 80}">
        <div class="product-card-badge">
          <span class="badge badge-${p.pillar.toLowerCase()}">${p.pillar === 'TECH' ? 'HORIZON TECH' : 'HORIZON BIZ'}</span>
          <span class="badge" style="background:rgba(255,255,255,0.06);color:var(--color-text-muted);font-size:0.65rem;">${p.category}</span>
        </div>
        <div class="product-card-icon" style="background:var(--${p.colorVar}-dim);color:var(--${p.colorVar});">
          <span style="font-size:1.6rem">${p.emoji}</span>
        </div>
        <h4 class="product-card-title">${p.name}</h4>
        <p class="product-card-tagline">${p.description}</p>
        <ul class="product-card-features">
          ${p.features.slice(0, 4).map(f => `
            <li>
              <svg class="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
        <div class="product-card-price">
          Parceiro a partir de <strong>R$ ${p.pricing.partner_start.toLocaleString('pt-BR')}</strong>/mês
        </div>
        <div class="product-card-actions">
          <button class="btn btn-primary btn-sm" onclick="window.__openModal('${p.id}')">Ver Detalhes</button>
          <a href="#contato" class="btn btn-secondary btn-sm">Solicitar Demo</a>
        </div>
      </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
    if (window.AOS) AOS.refresh();
  }

  function initFilters(products) {
    // Pillar filter
    document.querySelectorAll('#pillar-filter .filter-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#pillar-filter .filter-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activePillar = btn.dataset.pillar;
        fadeAndRender();
      });
    });

    // Category filter
    document.querySelectorAll('#category-filter .filter-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('#category-filter .filter-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.category;
        fadeAndRender();
      });
    });
  }

  function fadeAndRender() {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    grid.style.opacity = '0';
    setTimeout(() => {
      renderGrid(getFiltered());
      grid.style.opacity = '1';
    }, 180);
  }

  // Global modal opener for product cards
  window.__openModal = function(productId) {
    const p = products.find(x => x.id === productId);
    if (p && window.Alpine) {
      Alpine.store('produtos').openModal(p);
      setTimeout(() => { if (window.lucide) lucide.createIcons(); }, 50);
    }
  };
});
