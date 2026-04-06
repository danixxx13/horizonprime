import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function HowItWorks() {
  const t = useTranslations('HowItWorks');

  const steps = [
    { title: t('s1').replace(/^\d+\.\s*/, ''), description: t('d1') },
    { title: t('s2').replace(/^\d+\.\s*/, ''), description: t('d2') },
    { title: t('s3').replace(/^\d+\.\s*/, ''), description: t('d3') },
    { title: t('s4').replace(/^\d+\.\s*/, ''), description: t('d4') },
  ];

  return (
    <section id="how-it-works" className="site-section section-muted">
      <div className="site-container">
        <Reveal>
          <SectionHeader badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />
        </Reveal>

        <div className="timeline">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={0.08 * index}>
              <article className="timeline-step">
                <span className="timeline-index">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
