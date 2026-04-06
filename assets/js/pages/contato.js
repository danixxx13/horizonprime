/* ============================================================
   HORIZON PRIME — Contato Page Initializer
   ============================================================ */

import { registerPage } from '../router.js';

registerPage('contato', async function initContato() {
  if (window.lucide) lucide.createIcons();
  // Re-init Alpine for the form component in the page
  const formEl = document.getElementById('contact-form');
  if (formEl && window.Alpine && window.Alpine.initTree) {
    Alpine.initTree(formEl.parentElement);
  }
});
