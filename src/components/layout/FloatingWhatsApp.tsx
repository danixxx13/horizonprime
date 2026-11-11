'use client';
import { MessageCircle } from 'lucide-react';

import {createWhatsAppLink} from '@/content/site';

export default function FloatingWhatsApp() {
  return (
    <a
      href={createWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-emerald-300/30 bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(16,185,129,0.35)] transition-transform hover:-translate-y-1 hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-300/30"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
