import {Button} from '@/components/ui/Button';
import {SectionHeader} from '@/components/ui/SectionHeader';
import {siteContent} from '@/content/site';

export function HowItWorks() {
  const [first, second, third] = siteContent.solutions.items;
  const FirstIcon = first.icon;
  const SecondIcon = second.icon;
  const ThirdIcon = third.icon;

  return (
    <section id="solucoes" className="border-y border-white/8 bg-slate-950/35 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge={siteContent.solutions.eyebrow}
          title={siteContent.solutions.title}
          subtitle={siteContent.solutions.description}
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="premium-panel premium-outline rounded-[2rem] p-7">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-300/10 text-cyan-100">
              <FirstIcon size={22} />
            </div>
            <h3 className="font-display mt-6 text-3xl text-white">{first.title}</h3>
            <p className="mt-4 text-base leading-8 text-slate-300">{first.description}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Quando faz sentido
                </span>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Quando a empresa precisa clarear prioridades antes de escolher uma ferramenta ou projeto.
                </p>
              </div>
              <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-5">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Entrega
                </span>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Direção mais prática para reduzir desperdício técnico e comercial.
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            <article className="rounded-[1.85rem] border border-white/10 bg-[linear-gradient(180deg,rgba(8,19,32,0.9),rgba(8,19,32,0.7))] p-7">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-300/10 text-cyan-100">
                <SecondIcon size={22} />
              </div>
              <h3 className="font-display mt-6 text-2xl text-white">{second.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{second.description}</p>
            </article>

            <article className="rounded-[1.85rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.84),rgba(2,8,23,0.94))] p-7">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/18 bg-emerald-300/10 text-emerald-100">
                <ThirdIcon size={22} />
              </div>
              <h3 className="font-display mt-6 text-2xl text-white">{third.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{third.description}</p>
            </article>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/softwares" variant="secondary">
            Ver softwares
          </Button>
          <Button href="/sob-demanda">Conhecer a fábrica sob demanda</Button>
        </div>
      </div>
    </section>
  );
}
