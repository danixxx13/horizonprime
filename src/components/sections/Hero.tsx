import Image from 'next/image';
import { BrainCircuit, Database } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const t = useTranslations('Hero');

  const metrics = [
    { title: t('metric1Title'), description: t('metric1Desc') },
    { title: t('metric2Title'), description: t('metric2Desc') },
    { title: t('metric3Title'), description: t('metric3Desc') },
  ];

  return (
    <section className="hero-shell" id="top">
      <div className="hero-glow hero-glow-top" />
      <div className="hero-glow hero-glow-right" />
      <div className="grid-fade" />

      <div className="site-container hero-layout">
        <div>
          <span className="section-kicker badge-live">
            <span className="live-dot" />
            {t('badge')}
          </span>

          <h1 className="hero-title">{t('title')}</h1>
          <p className="hero-subtitle">{t('subtitle')}</p>

          <div className="hero-actions">
            <Button
              href="https://wa.me/5531973373728?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              {t('ctaDemo')}
            </Button>
            <Button href="#solution" variant="secondary" size="lg">
              {t('ctaWpp')}
            </Button>
          </div>

          <div className="hero-metrics">
            {metrics.map((metric) => (
              <article key={metric.title} className="metric-card">
                <strong>{metric.title}</strong>
                <span>{metric.description}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-chip floating-chip-left">
            <Database size={18} />
            <span>{t('visualChip1')}</span>
          </div>
          <div className="floating-chip floating-chip-right">
            <BrainCircuit size={18} />
            <span>{t('visualChip2')}</span>
          </div>

          <div className="hero-window">
            <div className="window-bar">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span>HorizonTracker Dashboard</span>
            </div>
            <div className="hero-window-media">
              <Image
                src="/images/hero.png"
                alt="Horizon Prime monitoring dashboard"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 820px) 100vw, 48vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
