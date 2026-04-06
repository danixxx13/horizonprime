import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Benefits() {
  const t = useTranslations('Benefits');

  const benefits = [t('b1'), t('b2'), t('b3'), t('b4'), t('b5'), t('b6')];

  return (
    <section id="benefits" className="site-section section-muted">
      <div className="site-container">
        <Reveal>
          <SectionHeader badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />
        </Reveal>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit} delay={0.05 * index}>
              <article className="benefit-item">
                <CheckCircle2 size={24} color="#3b82f6" />
                <span>{benefit}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
