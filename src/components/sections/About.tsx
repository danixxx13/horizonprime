import {Button} from '@/components/ui/Button';
import {SectionHeader} from '@/components/ui/SectionHeader';
import {createWhatsAppLink, siteContent, whatsappDisplay} from '@/content/site';

export function About() {
  return (
    <section id="contato-preview" className="border-y border-white/8 bg-slate-950/35 px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
        <div>
          <SectionHeader
            badge={siteContent.contactPreview.eyebrow}
            title={siteContent.contactPreview.title}
            subtitle={siteContent.contactPreview.description}
            align="left"
            className="mb-10"
          />

          <ul className="space-y-4">
            {siteContent.contactPreview.bullets.map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-7 text-slate-200"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="premium-panel premium-outline rounded-[2rem] p-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
                WhatsApp Horizon Prime
              </span>
              <p className="font-display mt-4 text-3xl text-white">{whatsappDisplay}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Atendimento com contexto, linguagem humana e direção comercial para entender o cenário e orientar o próximo passo.
              </p>
            </div>

            <div className="space-y-3">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-7 text-slate-200">
                Mensagem pronta para agilizar o primeiro contato.
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-7 text-slate-200">
                Conversa orientada para software, sob demanda ou estratégia.
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-7 text-slate-200">
                Tom mais consultivo e menos genérico desde o primeiro clique.
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              href={createWhatsAppLink()}
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteContent.contactPreview.primaryCta}
            </Button>
            <Button href="/contato" size="lg" variant="secondary">
              {siteContent.contactPreview.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
