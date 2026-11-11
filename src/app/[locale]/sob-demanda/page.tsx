import {PageHero} from '@/components/site/PageHero';
import {Button} from '@/components/ui/Button';
import {SectionHeader} from '@/components/ui/SectionHeader';
import {createWhatsAppLink, siteContent} from '@/content/site';

export default function SobDemandaPage() {
  return (
    <>
      <PageHero
        eyebrow={siteContent.customPage.eyebrow}
        title={siteContent.customPage.title}
        description={siteContent.customPage.description}
        actions={[
          {
            label: 'Falar sobre projeto',
            href: createWhatsAppLink(
              'Olá! Vim pelo site da Horizon Prime e gostaria de falar sobre um projeto sob demanda.'
            )
          },
          {
            label: 'Ver softwares',
            href: '/softwares',
            variant: 'secondary'
          }
        ]}
        asideTitle={siteContent.customPage.casesTitle}
        asideItems={siteContent.customPage.cases}
      />

      <section className="px-6 py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="premium-panel premium-outline rounded-[1.8rem] p-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">Construção</span>
            <p className="mt-3 text-3xl font-semibold text-white">Sob medida</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">Soluções desenhadas para aderir ao processo real, não ao template.</p>
          </div>
          <div className="premium-panel premium-outline rounded-[1.8rem] p-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">Execução</span>
            <p className="mt-3 text-3xl font-semibold text-white">Automação + integração</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">Menos ruptura operacional e mais conexão entre áreas e sistemas.</p>
          </div>
          <div className="premium-panel premium-outline rounded-[1.8rem] p-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-100">Evolução</span>
            <p className="mt-3 text-3xl font-semibold text-white">IA aplicada</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">Inteligência prática para análise, triagem e produtividade no dia a dia.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Frentes de atuação"
            title={siteContent.customPage.pillarsTitle}
            subtitle="A Horizon Prime entra quando a empresa precisa sair do improviso e construir uma operação mais aderente ao próprio processo."
            align="left"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.customPage.pillars.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-300/10 text-cyan-100">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display mt-5 text-2xl text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-slate-950/35 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Processo"
            title={siteContent.customPage.processTitle}
            subtitle="Projetos sob demanda precisam nascer com clareza de contexto para não virarem software difícil de usar, caro de manter e pouco aderente à operação."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {siteContent.customPage.process.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.84),rgba(2,8,23,0.94))] p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/18 bg-emerald-300/10 text-emerald-100">
                      <Icon size={22} />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Etapa {index + 1}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-2xl text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
                {siteContent.customPage.ctaTitle}
              </span>
              <h2 className="font-display mt-4 text-3xl leading-tight text-white md:text-4xl">
                Tecnologia sob medida para automatizar, integrar e acelerar a operação.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                {siteContent.customPage.ctaDescription}
              </p>
            </div>

            <div className="space-y-4">
              {siteContent.customPage.cases.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/8 bg-slate-950/45 px-5 py-4 text-sm leading-7 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              href={createWhatsAppLink(
                'Olá! Vim pelo site da Horizon Prime e gostaria de conversar sobre uma solução sob demanda.'
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com a Horizon Prime
            </Button>
            <Button href="/contato" variant="secondary">
              Ir para contato
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
