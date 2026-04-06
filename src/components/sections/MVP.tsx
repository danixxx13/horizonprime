import Image from 'next/image';
import { BrainCircuit, Cloud, Monitor, Server } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Tracker() {
  const t = useTranslations('Tracker');

  const sources = [
    { icon: Monitor, title: t('src1'), description: t('sr1Desc') },
    { icon: Cloud, title: t('src2'), description: t('sr2Desc') },
    { icon: Server, title: t('src3'), description: t('sr3Desc') },
  ];

  return (
    <section id="tracker" className="site-section section-dark tracker-section">
      <div className="grid-fade" />
      <div className="section-halo section-halo-bottom" />
      <div className="site-container">
        <Reveal>
          <SectionHeader badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto -mt-8 mb-14 max-w-4xl text-center text-[1.02rem] leading-relaxed text-slate-400">
            {t('desc')}
          </p>
        </Reveal>

        <div className="tracker-layout">
          <div className="tracker-sources">
            {sources.map((source, index) => {
              const Icon = source.icon;

              return (
                <Reveal key={source.title} delay={0.08 * index} x={-26} y={0}>
                  <article className="glass-card source-card">
                    <div className="icon-frame">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3>{source.title}</h3>
                      <p>{source.description}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal x={26} y={0} delay={0.16}>
            <div className="tracker-screen">
              <div className="tracker-screen-top">
                <div className="tracker-screen-label">
                  <BrainCircuit size={18} />
                  <span>{t('core')}</span>
                </div>
                <small>{t('coreDesc')}</small>
              </div>
              <div className="tracker-screen-media">
                <Image
                  src="/images/mvp.png"
                  alt="HorizonTracker central dashboard"
                  fill
                  className="object-cover transition-transform duration-[1600ms] ease-out hover:scale-[1.03]"
                  sizes="(max-width: 820px) 100vw, 52vw"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="section-cta" delay={0.22}>
          <Button
            href="https://wa.me/5531973373728?text=Ol%C3%A1%2C%20queria%20conhecer%20mais%20do%20HorizonTracker."
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            {t('cta')}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
