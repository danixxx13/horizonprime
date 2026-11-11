import {SectionHeader} from '@/components/ui/SectionHeader';
import {siteContent} from '@/content/site';

export function Hook() {
  return (
    <section id="visao" className="section-glow px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="premium-panel premium-outline rounded-[2rem] p-7 md:p-8">
          <SectionHeader
            badge={siteContent.overview.eyebrow}
            title={siteContent.overview.title}
            subtitle={siteContent.overview.description}
            align="left"
            className="mb-8"
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                Posicionamento
              </span>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Horizon Prime atua como empresa de software, consultoria estratégica e parceira de evolução tecnológica.
              </p>
            </div>
            <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                Foco
              </span>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Redução de custos, produtividade, automação, centralização de dados e inteligência de negócio.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {siteContent.overview.pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`rounded-[1.85rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_16px_48px_rgba(0,0,0,0.16)] ${index === 1 ? 'md:-translate-y-5' : ''}`}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
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
