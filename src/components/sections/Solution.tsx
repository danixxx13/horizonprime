import { BarChart3, Crosshair, Database, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Solution() {
  const t = useTranslations('Solution');

  const solutions = [
    { title: t('s1'), description: t('d1'), icon: BarChart3 },
    { title: t('s2'), description: t('d2'), icon: Crosshair },
    { title: t('s3'), description: t('d3'), icon: Database },
    { title: t('s4'), description: t('d4'), icon: Zap },
  ];

  return (
    <section id="solution" className="site-section section-dark">
      <div className="section-halo section-halo-right" />
      <div className="site-container">
        <Reveal>
          <SectionHeader badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />
        </Reveal>

        <div className="cards-grid cards-grid-2">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <Reveal key={solution.title} delay={0.06 * index}>
                <article className="glass-card solution-card">
                  <div className="icon-frame">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3>{solution.title}</h3>
                    <p>{solution.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
