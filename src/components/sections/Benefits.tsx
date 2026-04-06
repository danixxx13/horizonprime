import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Benefits() {
  const t = useTranslations('Benefits');

  const benefits = [t('b1'), t('b2'), t('b3'), t('b4'), t('b5'), t('b6')];

  return (
    <section id="benefits" className="site-section section-muted">
      <div className="site-container">
        <SectionHeader badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <article key={benefit} className="benefit-item">
              <CheckCircle2 size={24} color="#3b82f6" />
              <span>{benefit}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
