import {SectionHeader} from '@/components/ui/SectionHeader';
import {siteContent} from '@/content/site';

export function Problem() {
  return (
    <section id="problema" className="border-y border-white/8 bg-slate-950/35 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          badge={siteContent.problem.eyebrow}
          title={siteContent.problem.title}
          subtitle={siteContent.problem.description}
          align="left"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {siteContent.problem.items.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.88),rgba(2,8,23,0.92))] p-6"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/18 bg-emerald-300/10 text-emerald-100">
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
