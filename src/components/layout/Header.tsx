'use client';

import { Instagram, Linkedin, Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useMemo, useState } from 'react';
import { Button } from '@/components/ui/Button';

export default function Header() {
  const t = useTranslations('Header');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = useMemo(
    () => [
      { href: '#solution', label: t('solution') },
      { href: '#how-it-works', label: t('howItWorks') },
      { href: '#tracker', label: t('tracker') },
      { href: '#benefits', label: t('benefits') },
      { href: '#about', label: t('about') },
    ],
    [t]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1080) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as Element[];

    if (sections.length === 0 || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.15, 0.35, 0.55],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-container header-inner">
        <a href="#top" className="brand" aria-label="Voltar ao topo">
          <span className="brand-mark">H</span>
          <span className="brand-text">
            HORIZON<span>PRIME</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link ${activeSection === link.href.slice(1) ? 'is-active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <div className="header-social" aria-label="Redes sociais">
            <a
              href="https://www.instagram.com/danielfjesus08/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-ferreira-de-jesus-3184631a1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <Button
            href="https://wa.me/5531973373728"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="desktop-only"
          >
            {t('contact')}
          </Button>
          <Button
            href="https://wa.me/5531973373728?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="desktop-only"
          >
            {t('demo')}
          </Button>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-panel"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div id="mobile-panel" className={`mobile-panel ${menuOpen ? 'is-open' : ''}`}>
        <div className="site-container mobile-panel-inner">
          <nav className="mobile-nav" aria-label="Navegação mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mobile-actions">
            <Button
              href="https://wa.me/5531973373728"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              {t('contact')}
            </Button>
            <Button
              href="https://wa.me/5531973373728?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              {t('demo')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
