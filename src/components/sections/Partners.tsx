import {SectionHeader} from '@/components/ui/SectionHeader';
import {siteContent} from '@/content/site';

export function Partners() {
  const [first, ...rest] = siteContent.differentials.items;
  const FirstIcon = first.icon;

  return (
    <section id="diferenciais" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge={siteContent.differentials.eyebrow}
          title={siteContent.differentials.title}
          subtitle={siteContent.differentials.description}
        />

        <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <article className="premium-panel premium-outline rounded-[2rem] p-7">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-300/10 text-cyan-100">
              <FirstIcon size={22} />
            </div>
            <h3 className="font-display mt-6 max-w-xl text-3xl text-white">{first.title}</h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{first.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-5 text-sm leading-7 text-slate-200">
                Tecnologia apresentada com linguagem de negócio, sem perder densidade técnica.
              </div>
              <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-5 text-sm leading-7 text-slate-200">
                Uma proposta que parece software real, consultoria real e operação real.
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            {rest.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`rounded-[1.8rem] border border-white/10 p-6 ${index === 1 ? 'premium-panel premium-outline' : 'bg-[linear-gradient(180deg,rgba(15,23,42,0.84),rgba(2,8,23,0.94))]'}`}
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-300/10 text-cyan-100">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display mt-5 text-2xl text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
