'use client';

import { Instagram, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="text-xl font-bold text-white tracking-widest">HORIZON<span className="text-blue-500">PRIME</span></span>
            <p className="mt-2 max-w-sm text-sm">
              {t('description')}
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://wa.me/5531973373728" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              WhatsApp
            </a>
            <a href="https://www.instagram.com/danielfjesus08/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/daniel-ferreira-de-jesus-3184631a1/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs opacity-60 flex items-center justify-center">
          &copy; {new Date().getFullYear()} Horizon Prime. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
