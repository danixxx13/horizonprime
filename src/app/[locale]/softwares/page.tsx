import {PageHero} from '@/components/site/PageHero';
import {SoftwareCard} from '@/components/site/SoftwareCard';
import {SectionHeader} from '@/components/ui/SectionHeader';
import {Button} from '@/components/ui/Button';
import {createWhatsAppLink, siteContent, siteSoftwareGroups} from '@/content/site';

export default function SoftwaresPage() {
  return (
    <>
      <PageHero
        eyebrow={siteContent.softwaresPage.eyebrow}
        title={siteContent.softwaresPage.title}
        description={siteContent.softwaresPage.description}
        actions={[
          {
            label: 'Falar no WhatsApp',
            href: createWhatsAppLink()
          },
          {
            label: 'Conhecer sob demanda',
            href: '/sob-demanda',
            variant: 'secondary'
          }
        ]}
        asideTitle={siteContent.softwaresPage.noteTitle}
        asideDescription={siteContent.softwaresPage.note}
        asideItems={[
          'Catálogo separado por perfil de solução para facilitar entendimento comercial.',
          'Cada software apresenta descrição, problema resolvido e faixa de entrada.',
          'Botão direto para WhatsApp em todos os itens.'
        ]}
      />

      <section className="px-6 py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="premium-panel premium-outline rounded-[1.8rem] p-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">Portfólio</span>
            <p className="mt-3 text-3xl font-semibold text-white">10 softwares</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">Catálogo organizado para venda consultiva e leitura comercial clara.</p>
          </div>
          <div className="premium-panel premium-outline rounded-[1.8rem] p-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">Linhas</span>
            <p className="mt-3 text-3xl font-semibold text-white">Tech + Business</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">Separação pensada para facilitar comparação por perfil de problema.</p>
          </div>
          <div className="premium-panel premium-outline rounded-[1.8rem] p-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">Conversão</span>
            <p className="mt-3 text-3xl font-semibold text-white">WhatsApp direto</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">Cada produto já leva a uma conversa comercial com contexto específico.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl space-y-12">
          {siteSoftwareGroups.map((group) => (
            <div key={group.id}>
              <SectionHeader
                badge={group.label}
                title={group.label}
                subtitle={group.description}
                align="left"
              />
              <div className="grid gap-6 lg:grid-cols-2">
                {group.softwares.map((software) => (
                  <SoftwareCard key={software.id} software={software} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 md:pb-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-10 text-center md:px-10">
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Quer entender qual software faz mais sentido para o seu cenário?
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            A Horizon Prime ajuda a comparar alternativas prontas com visão comercial e técnica, sem transformar a decisão em mais complexidade.
          </p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button
              href={createWhatsAppLink(
                'Olá! Vim pelo site da Horizon Prime e gostaria de ajuda para escolher um software.'
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir orientação no WhatsApp
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
