'use client';

import {Menu, X} from 'lucide-react';
import {useEffect, useState} from 'react';

import {Button} from '@/components/ui/Button';
import {createWhatsAppLink, siteContent} from '@/content/site';
import {Link, usePathname} from '@/i18n/routing';
import {cn} from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/10 bg-slate-950/78 py-3 backdrop-blur-2xl'
          : 'bg-transparent py-5'
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="hidden rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-300 md:inline-flex">
            8 anos em tecnologia
          </div>
          <span className="font-display text-xl tracking-[0.35em] text-white sm:text-2xl">
            HORIZON<span className="text-cyan-200"> PRIME</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1.5 shadow-[0_18px_40px_rgba(0,0,0,0.18)] lg:flex">
          {siteContent.navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/6 hover:text-white',
                  active && 'bg-white/10 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href="/softwares"
            variant="ghost"
            size="sm"
          >
            Ver catálogo
          </Button>
          <Button
            href={createWhatsAppLink()}
            size="sm"
            className="shadow-[0_20px_45px_rgba(8,145,178,0.24)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-slate-100 lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/10 bg-slate-950/96 px-6 pb-6 pt-4 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {siteContent.navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    'rounded-2xl px-4 py-3 text-base text-slate-200 transition-colors hover:bg-white/6',
                    active && 'bg-white/8 text-white'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-4 flex flex-col gap-3">
              <Button href="/softwares" variant="secondary" onClick={() => setMenuOpen(false)}>
                Ver catálogo
              </Button>
              <Button
                href={createWhatsAppLink()}
                onClick={() => setMenuOpen(false)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
