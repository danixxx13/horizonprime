import {SectionHeader} from '@/components/ui/SectionHeader';
import {siteContent} from '@/content/site';

export function Solution() {
  return (
    <section id="como-resolvemos" className="px-6 py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            badge={siteContent.solution.eyebrow}
            title={siteContent.solution.title}
            subtitle={siteContent.solution.description}
            align="left"
          />

          <div className="premium-panel premium-outline rounded-[2rem] p-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100">
              Direção de execução
            </span>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              A Horizon Prime não trata tecnologia como vitrine. A lógica da entrega começa na operação, passa pela arquitetura mais adequada e termina em adoção real, com impacto percebido no negócio.
            </p>
          </div>
        </div>

        <div className="relative space-y-5 lg:pl-12">
          <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-[linear-gradient(180deg,rgba(45,212,191,0.4),rgba(56,189,248,0.08))] lg:block" />

          {siteContent.solution.steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="premium-panel premium-outline relative rounded-[1.8rem] p-6 lg:ml-8"
              >
                <div className="absolute -left-[3.15rem] top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-slate-950 text-sm font-semibold text-cyan-100 lg:flex">
                  {index + 1}
                </div>

                <div className="flex flex-col gap-6 md:flex-row md:items-start">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                    <Icon size={22} />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Etapa {index + 1}
                    </span>
                    <h3 className="font-display mt-3 text-2xl text-white">{step.title}</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">{step.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
