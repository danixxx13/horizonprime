import Image from 'next/image';
import { BrainCircuit, Cloud, Monitor, Server } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
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
        <SectionHeader badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />

        <div className="tracker-layout">
          <div className="tracker-sources">
            {sources.map((source) => {
              const Icon = source.icon;

              return (
                <article key={source.title} className="glass-card source-card">
                  <div className="icon-frame">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3>{source.title}</h3>
                    <p>{source.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

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
                className="object-cover"
                sizes="(max-width: 820px) 100vw, 52vw"
              />
            </div>
          </div>
        </div>

        <div className="section-cta">
          <Button
            href="https://wa.me/5531973373728?text=Ol%C3%A1%2C%20queria%20conhecer%20mais%20do%20HorizonTracker."
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            {t('cta')}
          </Button>
        </div>
      </div>
    </section>
  );
}
