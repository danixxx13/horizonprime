import Image from 'next/image';

import {Button} from '@/components/ui/Button';
import {SectionHeader} from '@/components/ui/SectionHeader';
import {siteContent, siteSoftwareGroups} from '@/content/site';

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(value);
}

export function Tracker() {
  return (
    <section id="softwares" className="section-glow px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge={siteContent.softwarePreview.eyebrow}
          title={siteContent.softwarePreview.title}
          subtitle={siteContent.softwarePreview.description}
        />

        <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="space-y-6">
            {siteSoftwareGroups.map((group) => (
              <article
                key={group.id}
                className="premium-panel premium-outline overflow-hidden rounded-[2rem]"
              >
                <div className={`border-b border-white/8 bg-gradient-to-r ${group.accent} px-6 py-5`}>
                  <h3 className="font-display text-2xl text-white">{group.label}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-200">{group.description}</p>
                </div>

                <div className="grid gap-3 p-6">
                  {group.softwares.map((software) => (
                    <div
                      key={software.id}
                      className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white">{software.name}</h4>
                          <p className="mt-1 text-sm leading-6 text-slate-300">{software.tagline}</p>
                        </div>
                        <span className="rounded-full border border-white/8 bg-slate-950/60 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                          {formatCurrency(software.partnerPrice)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="premium-panel premium-outline overflow-hidden rounded-[2.2rem]">
            <div className="flex items-center justify-between border-b border-white/8 px-6 py-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  Visual de catálogo
                </span>
                <h3 className="font-display mt-3 text-3xl text-white">
                  Portfólio com leitura mais comercial e mais premium.
                </h3>
              </div>
            </div>

            <div className="relative aspect-[10/11] border-b border-white/8">
              <Image
                src="/images/mvp.png"
                alt="Painel premium de soluções Horizon Prime"
                fill
                className="object-cover opacity-78"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,29,0.16),rgba(3,17,29,0.72))]" />

              <div className="absolute left-5 right-5 top-5 rounded-[1.4rem] border border-white/10 bg-slate-950/72 p-4 backdrop-blur-xl">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100">
                  O que o catálogo comunica
                </span>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-7 text-slate-200">
                    Produtos organizados por linha para facilitar venda, entendimento e comparação.
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-sm leading-7 text-slate-200">
                    Problema resolvido, preço e direcionamento comercial já aparecem com clareza.
                  </div>
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/10 bg-slate-950/72 p-5 backdrop-blur-xl">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Catálogo
                    </span>
                    <p className="mt-3 text-2xl font-semibold text-white">10 softwares</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Linhas
                    </span>
                    <p className="mt-3 text-2xl font-semibold text-white">Tech + Business</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                      CTA
                    </span>
                    <p className="mt-3 text-2xl font-semibold text-white">WhatsApp direto</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="/softwares" size="lg">
            {siteContent.softwarePreview.ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
