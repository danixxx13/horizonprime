/* ============================================================
   HORIZON PRIME — Preços Page Initializer
   ============================================================ */

import { registerPage } from '../router.js';

registerPage('precos', async function initPrecos() {
  const { products, bundles } = window.HorizonData;

  renderBundles(bundles);
  renderIndividualProducts(products);

  if (window.lucide) lucide.createIcons();
});

function renderBundles(bundles) {
  const grid = document.getElementById('bundles-grid');
  if (!grid) return;

  grid.innerHTML = bundles.map(b => {
    const isFeatured = b.featured;
    const borderClass = isFeatured ? 'card-featured' : '';

    return `
      <div class="card bundle-card ${borderClass} ${isFeatured ? 'featured-bundle' : ''}" data-aos="fade-up">
        ${isFeatured ? '<div class="popular-badge">⭐ Mais Popular</div>' : ''}
        <div class="bundle-header">
          <div class="bundle-name">${b.name}</div>
          <div class="bundle-tagline">${b.tagline}</div>
        </div>
        <div class="bundle-price">
          <sup>R$</sup>${b.partnerPrice.toLocaleString('pt-BR')}<small>/mês parceiro</small>
        </div>
        <div class="bundle-savings">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          ${b.savings}% de economia
        </div>
        <div class="bundle-products-list">${b.products.join(' · ')}</div>
        <ul class="bundle-features">
          ${b.features.map(f => `
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              ${f}
            </li>
          `).join('')}
        </ul>
        <div class="bundle-ideal">${b.ideal}</div>
        <a href="#contato" class="btn ${isFeatured ? 'btn-primary' : 'btn-secondary'}" style="width:100%;">Contratar Suite</a>
      </div>
    `;
  }).join('');
}

function renderIndividualProducts(products) {
  const container = document.getElementById('individual-accordion');
  if (!container) return;

  container.innerHTML = products.map((p, i) => `
    <div class="product-accordion-item" x-data="{ open: false }">
      <div class="product-accordion-header" @click="open = !open">
        <span class="product-acc-emoji">${p.emoji}</span>
        <div class="product-acc-info">
          <div class="product-acc-name">${p.name}</div>
          <div class="product-acc-range">
            <span class="badge badge-${p.pillar.toLowerCase()}" style="margin-right:4px;">${p.pillar}</span>
            Parceiro: R$ ${p.pricing.partner_start.toLocaleString('pt-BR')} – ${p.pricing.partner_end.toLocaleString('pt-BR')}/mês
          </div>
        </div>
        <i data-lucide="chevron-down" class="product-acc-chevron" :class="{open: open}"></i>
      </div>
      <div class="product-accordion-body" x-show="open" x-transition>
        <div class="product-tiers-grid">
          ${p.pricing.tiers.map(tier => `
            <div class="modal-plan ${tier.featured ? 'featured' : ''}">
              ${tier.featured ? '<div style="font-size:0.65rem;color:var(--color-primary);font-weight:700;text-align:center;margin-bottom:4px;">MAIS POPULAR</div>' : ''}
              <div class="plan-name">${tier.name}</div>
              <div class="plan-price">
                ${tier.price === 0
                  ? '<span style="font-size:0.9rem">Consultar</span>'
                  : `R$ <strong>${tier.price.toLocaleString('pt-BR')}</strong><small>/mês</small>`
                }
              </div>
              <ul class="plan-features">
                ${tier.features.map(f => `<li>${f}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
        <div style="margin-top:var(--s4);display:flex;gap:var(--s2);">
          <button class="btn btn-primary btn-sm" onclick="window.__openModal && window.__openModal('${p.id}')">Ver detalhes completos</button>
          <a href="#contato" class="btn btn-secondary btn-sm">Solicitar demo</a>
        </div>
      </div>
    </div>
  `).join('');

  // Re-init Alpine on new content
  if (window.Alpine && window.Alpine.initTree) {
    Alpine.initTree(container);
  }
  if (window.lucide) lucide.createIcons();
}
