import {Button} from '@/components/ui/Button';
import {SectionHeader} from '@/components/ui/SectionHeader';
import {siteContent} from '@/content/site';

export function Benefits() {
  return (
    <section id="sob-demanda" className="border-y border-white/8 bg-slate-950/35 px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            badge={siteContent.customFactory.eyebrow}
            title={siteContent.customFactory.title}
            subtitle={siteContent.customFactory.description}
            align="left"
          />

          <div className="premium-panel premium-outline rounded-[2rem] p-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-100">
              Quando essa frente ganha força
            </span>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              Quando a operação pede aderência real, os softwares genéricos viram limite. É nesse ponto que a Horizon Prime entra com construção sob medida, integração e IA aplicada ao fluxo do cliente.
            </p>
            <div className="mt-6">
              <Button href="/sob-demanda" variant="secondary">
                Ver frente sob demanda
              </Button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {siteContent.customFactory.items.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`rounded-[1.85rem] border border-white/10 p-6 ${index % 2 === 0 ? 'premium-panel premium-outline' : 'bg-[linear-gradient(180deg,rgba(15,23,42,0.84),rgba(2,8,23,0.94))]'}`}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-100">
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
  );
}
