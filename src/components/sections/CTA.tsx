import {Button} from '@/components/ui/Button';
import {createWhatsAppLink, siteContent} from '@/content/site';

export function CTA() {
  return (
    <section className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-cyan-300/18 bg-[linear-gradient(135deg,rgba(20,184,166,0.18),rgba(14,165,233,0.24),rgba(3,17,29,0.95))] px-6 py-12 shadow-[0_26px_90px_rgba(0,0,0,0.26)] md:px-10 md:py-14">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl leading-tight text-white md:text-5xl">
            {siteContent.finalCta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-100/90">
            {siteContent.finalCta.description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              href={createWhatsAppLink()}
              size="lg"
              className="bg-white text-slate-950 hover:bg-slate-100"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteContent.finalCta.primaryCta}
            </Button>
            <Button href="/sob-demanda" size="lg" variant="secondary">
              {siteContent.finalCta.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
