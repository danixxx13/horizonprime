import { Compass, Database, TrendingUp } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export function Hook() {
  const t = useTranslations('Hook');

  const features = [
    { icon: Database, title: t('b1'), description: t('d1') },
    { icon: TrendingUp, title: t('b2'), description: t('d2') },
    { icon: Compass, title: t('b3'), description: t('d3') },
  ];

  return (
    <section className="site-section section-dark" id="hook">
      <div className="site-container">
        <div className="section-header">
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-description">{t('subtitle')}</p>
        </div>

        <div className="cards-grid cards-grid-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article key={feature.title} className="glass-card">
                <div className="icon-frame">
                  <Icon size={24} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>

        <div className="section-cta">
          <Button
            href="https://wa.me/5531973373728?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20apresenta%C3%A7%C3%A3o."
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
