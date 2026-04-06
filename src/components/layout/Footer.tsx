'use client';

import { Instagram, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const nav = useTranslations('Header');

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-layout">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <span className="brand-mark">H</span>
              <span className="brand-text">
                HORIZON<span>PRIME</span>
              </span>
            </a>
            <p>{t('description')}</p>
          </div>

          <div className="footer-links">
            <a href="#solution">{nav('solution')}</a>
            <a href="#tracker">{nav('tracker')}</a>
            <a href="#benefits">{nav('benefits')}</a>
            <a href="#about">{nav('about')}</a>
          </div>

          <div className="footer-social">
            <a href="https://wa.me/5531973373728" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/danielfjesus08/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-ferreira-de-jesus-3184631a1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Horizon Prime. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
