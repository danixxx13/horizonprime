/* ============================================================
   HORIZON PRIME — Sobre Page Initializer
   ============================================================ */

import { registerPage } from '../router.js';

registerPage('sobre', async function initSobre() {
  if (window.lucide) lucide.createIcons();
});
