/* ============================================================
   HORIZON PRIME — Global Animations (GSAP + ScrollTrigger)
   ============================================================ */

export function initGlobalAnimations() {
  if (!window.gsap || !window.ScrollTrigger) return;

  gsap.registerPlugin(ScrollTrigger);

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  if (navbar) {
    ScrollTrigger.create({
      start: 'top -80',
      onUpdate: (self) => {
        // Alpine handles the class, GSAP only adds extra shadow
        if (self.progress > 0) {
          navbar.style.boxShadow = '0 4px 32px rgba(0,0,0,0.3)';
        } else {
          navbar.style.boxShadow = 'none';
        }
      }
    });
  }
}
