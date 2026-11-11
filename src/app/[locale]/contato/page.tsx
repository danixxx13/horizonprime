import {PageHero} from '@/components/site/PageHero';
import {Button} from '@/components/ui/Button';
import {SectionHeader} from '@/components/ui/SectionHeader';
import {createWhatsAppLink, defaultWhatsAppMessage, siteContent, whatsappDisplay} from '@/content/site';

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow={siteContent.contactPage.eyebrow}
        title={siteContent.contactPage.title}
        description={siteContent.contactPage.description}
        actions={[
          {
            label: siteContent.contactPage.whatsappButton,
            href: createWhatsAppLink()
          }
        ]}
        asideTitle={siteContent.contactPage.whatsappTitle}
        asideDescription={siteContent.contactPage.whatsappDescription}
        asideItems={[
          `WhatsApp: ${whatsappDisplay}`,
          siteContent.contactPage.humanNote,
          `Mensagem pronta: "${defaultWhatsAppMessage}"`
        ]}
      />

      <section className="px-6 py-12 md:py-14">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <div className="premium-panel premium-outline rounded-[1.8rem] p-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">Canal principal</span>
            <p className="mt-3 text-3xl font-semibold text-white">WhatsApp</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">Contato direto, humano e orientado a contexto de negócio.</p>
          </div>
          <div className="premium-panel premium-outline rounded-[1.8rem] p-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">Abordagem</span>
            <p className="mt-3 text-3xl font-semibold text-white">Consultiva</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">O objetivo é entender cenário, prioridade e melhor caminho de solução.</p>
          </div>
          <div className="premium-panel premium-outline rounded-[1.8rem] p-5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">Mensagem pronta</span>
            <p className="mt-3 text-3xl font-semibold text-white">1 clique</p>
            <p className="mt-2 text-sm leading-7 text-slate-300">A conversa já começa com texto preparado para reduzir fricção.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            badge="Fale com a equipe"
            title="Contato humano, direto e com contexto."
            subtitle="A ideia aqui é simplificar a primeira conversa. Você escolhe o motivo do contato e já cai no WhatsApp com uma mensagem pronta."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {siteContent.contactPage.cards.map((card) => {
              const Icon = card.icon;

              return (
                <article
                  key={card.title}
                  className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.84),rgba(2,8,23,0.94))] p-6"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-300/10 text-cyan-100">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display mt-5 text-2xl text-white">{card.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">{card.description}</p>
                  <div className="mt-6">
                    <Button
                      href={createWhatsAppLink(card.message)}
                      className="w-full"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {card.label}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-slate-950/35 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-emerald-300/18 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(3,17,29,0.95))] px-6 py-10 shadow-[0_20px_70px_rgba(0,0,0,0.22)] md:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
                WhatsApp em destaque
              </span>
              <h2 className="font-display mt-4 text-3xl text-white md:text-4xl">{whatsappDisplay}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100/90">
                Se preferir, basta usar o botão abaixo. A mensagem já sai pronta e a conversa começa de forma simples, com sensação de atendimento real.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Button
                href={createWhatsAppLink()}
                size="lg"
                className="bg-white text-slate-950 hover:bg-slate-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir WhatsApp agora
              </Button>
              <Button href="/softwares" size="lg" variant="secondary">
                Voltar para softwares
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
