'use client';

import { Instagram, Linkedin, Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

export default function Header() {
  const t = useTranslations('Header');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#solution', label: t('solution') },
    { href: '#how-it-works', label: t('howItWorks') },
    { href: '#tracker', label: t('tracker') },
    { href: '#benefits', label: t('benefits') },
    { href: '#about', label: t('about') },
  ];

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-widest text-white">
          HORIZON<span className="text-blue-500">PRIME</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex gap-4 mr-4 border-r border-slate-800 pr-5">
            <a href="https://www.instagram.com/danielfjesus08/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://www.linkedin.com/in/daniel-ferreira-de-jesus-3184631a1/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
          <a
            href="https://wa.me/5531973373728"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-blue-500/50 text-blue-400 text-sm font-semibold hover:bg-blue-500/10 transition-all"
          >
            {t('contact')}
          </a>
          <a
            href="https://wa.me/5531973373728?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            {t('demo')}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-slate-300 hover:text-white">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-base font-medium text-slate-300 hover:text-white transition-colors py-2" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className="flex gap-4 py-2">
            <a href="https://www.instagram.com/danielfjesus08/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/daniel-ferreira-de-jesus-3184631a1/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
          <a href="https://wa.me/5531973373728?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer"
            className="mt-2 py-3 rounded-full bg-blue-600 text-white text-center font-semibold shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            {t('demo')}
          </a>
        </div>
      )}
    </header>
  );
}
