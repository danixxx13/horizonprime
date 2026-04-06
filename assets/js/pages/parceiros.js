/* ============================================================
   HORIZON PRIME — Parceiros Page Initializer
   ============================================================ */

import { registerPage } from '../router.js';

registerPage('parceiros', async function initParceiros() {
  if (window.lucide) lucide.createIcons();
});
