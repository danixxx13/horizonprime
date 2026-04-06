/* ============================================================
   HORIZON PRIME — Home Page Initializer
   ============================================================ */

import { registerPage } from '../router.js';

registerPage('home', async function initHome() {
  const { products } = window.HorizonData;
  const { testimonials } = window.HorizonData;

  // Render featured products
  renderFeaturedProducts(products);

  // Init particle canvas
  initParticles();

  // Init stats counters
  initCounters();

  // Init testimonials swiper
  initTestimonials(testimonials);

  // Update Lucide icons after DOM mutations
  if (window.lucide) lucide.createIcons();
});

/* ---- Featured Products ---- */
function renderFeaturedProducts(products) {
  const grid = document.getElementById('featured-products-grid');
  if (!grid) return;

  // Show first 6 products by default
  const featured = products.slice(0, 6);

  grid.innerHTML = featured.map(p => `
    <div class="card product-card" data-pillar="${p.pillar.toLowerCase()}" data-aos="fade-up">
      <div class="product-card-badge">
        <span class="badge badge-${p.pillar.toLowerCase()}">${p.pillar === 'TECH' ? 'HORIZON TECH' : 'HORIZON BIZ'}</span>
      </div>
      <div class="product-card-icon" style="background: var(--${p.colorVar}-dim); color: var(--${p.colorVar});">
        <span style="font-size:1.5rem">${p.emoji}</span>
      </div>
      <h4 class="product-card-title">${p.name}</h4>
      <p class="product-card-tagline">${p.tagline}</p>
      <ul class="product-card-features">
        ${p.features.slice(0, 3).map(f => `
          <li>
            <svg class="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>
      <div class="product-card-price">A partir de <strong>R$ ${p.pricing.partner_start.toLocaleString('pt-BR')}</strong>/mês</div>
      <div class="product-card-actions">
        <button class="btn btn-primary btn-sm" onclick="window.__openModal('${p.id}')">Ver Detalhes</button>
        <a href="#contato" class="btn btn-secondary btn-sm">Demo</a>
      </div>
    </div>
  `).join('');

  // Tab filtering
  const tabs = document.querySelectorAll('.filter-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter || tab.textContent.trim().toLowerCase().replace('horizon ', '');
      filterProducts(products, filter === 'todos' ? 'todos' : filter);
    });
  });
}

function filterProducts(products, filter) {
  const grid = document.getElementById('featured-products-grid');
  if (!grid) return;

  const filtered = filter === 'todos'
    ? products.slice(0, 6)
    : products.filter(p => p.pillar.toLowerCase() === filter);

  grid.style.opacity = '0';
  setTimeout(() => {
    grid.innerHTML = filtered.map(p => `
      <div class="card product-card" data-aos="fade-up">
        <div class="product-card-badge">
          <span class="badge badge-${p.pillar.toLowerCase()}">${p.pillar === 'TECH' ? 'HORIZON TECH' : 'HORIZON BIZ'}</span>
        </div>
        <div class="product-card-icon" style="background: var(--${p.colorVar}-dim); color: var(--${p.colorVar});">
          <span style="font-size:1.5rem">${p.emoji}</span>
        </div>
        <h4 class="product-card-title">${p.name}</h4>
        <p class="product-card-tagline">${p.tagline}</p>
        <ul class="product-card-features">
          ${p.features.slice(0, 3).map(f => `
            <li>
              <svg class="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
        <div class="product-card-price">A partir de <strong>R$ ${p.pricing.partner_start.toLocaleString('pt-BR')}</strong>/mês</div>
        <div class="product-card-actions">
          <button class="btn btn-primary btn-sm" onclick="window.__openModal('${p.id}')">Ver Detalhes</button>
          <a href="#contato" class="btn btn-secondary btn-sm">Demo</a>
        </div>
      </div>
    `).join('');
    if (window.lucide) lucide.createIcons();
    if (window.AOS) AOS.refresh();
    grid.style.opacity = '1';
  }, 200);
}

/* ---- Particle Canvas ---- */
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  // Disable on small screens
  if (window.innerWidth < 768) return;

  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const particles = Array.from({ length: 55 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: -Math.random() * 0.5 - 0.2,
    size: Math.random() * 2 + 1,
    color: Math.random() > 0.5 ? '#1D8CF8' : '#00D4FF',
    alpha: Math.random() * 0.4 + 0.1
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
      // Move
      p.x += p.vx;
      p.y += p.vy;

      // Wrap
      if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;

      // Draw particle
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dist = Math.hypot(p.x - q.x, p.y - q.y);
        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = '#1D8CF8';
          ctx.globalAlpha = (1 - dist / 130) * 0.12;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    });

    ctx.globalAlpha = 1;
    if (!document.hidden) requestAnimationFrame(draw);
  }

  draw();
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) draw();
  });
}

/* ---- Stats Counters ---- */
function initCounters() {
  const counters = document.querySelectorAll('.stat-value[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      observer.unobserve(entry.target);
      animateCounter(entry.target);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const decimals = parseInt(el.dataset.decimals || '0');
  const prefix = el.dataset.prefix || '';
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    const value = eased * target;
    el.textContent = prefix + value.toFixed(decimals) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---- Testimonials ---- */
function initTestimonials(testimonials) {
  const wrapper = document.getElementById('testimonials-wrapper');
  if (!wrapper) return;

  wrapper.innerHTML = testimonials.map(t => `
    <div class="swiper-slide">
      <div class="card testimonial-card">
        <div class="testimonial-stars">${'★'.repeat(t.stars)}</div>
        <p class="testimonial-quote">"${t.quote}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">${t.initials}</div>
          <div>
            <div class="testimonial-name">${t.name}</div>
            <div class="testimonial-role">${t.role} · ${t.company}</div>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  if (window.Swiper) {
    new Swiper('.testimonials-swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      autoplay: { delay: 4500, disableOnInteraction: false },
      pagination: { el: '.testimonials-pagination', clickable: true },
      breakpoints: {
        640:  { slidesPerView: 2 },
        1024: { slidesPerView: 3 }
      }
    });
  }
}
