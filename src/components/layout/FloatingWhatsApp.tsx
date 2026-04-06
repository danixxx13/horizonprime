'use client';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5531973373728"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_4px_24px_rgba(34,197,94,0.3)] transition-all hover:scale-110 hover:bg-green-400 focus:outline-none focus:ring-4 focus:ring-green-300"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
