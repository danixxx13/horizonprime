import {createWhatsAppLink, siteContent, whatsappDisplay} from '@/content/site';
import {Link} from '@/i18n/routing';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/80 px-6 py-12 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1.25fr_0.75fr_0.75fr]">
        <div>
          <div className="premium-panel premium-outline rounded-[1.8rem] p-6">
            <span className="font-display text-2xl tracking-[0.3em] text-white">
              HORIZON<span className="text-cyan-200"> PRIME</span>
            </span>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              {siteContent.footer.description}
            </p>
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.03] p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">
            {siteContent.footer.quickLinksTitle}
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            {siteContent.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.03] p-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">
            {siteContent.footer.contactTitle}
          </h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <span>{whatsappDisplay}</span>
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cyan-100 transition-colors hover:text-white"
            >
              Abrir WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/8 pt-6 text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Horizon Prime. Todos os direitos reservados.
      </div>
    </footer>
  );
}
