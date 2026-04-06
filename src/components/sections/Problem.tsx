import { Activity, BrainCircuit, EyeOff, FileSearch, History } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Problem() {
  const t = useTranslations('Problem');

  const problems = [
    { title: t('p1'), description: t('d1'), icon: FileSearch },
    { title: t('p2'), description: t('d2'), icon: EyeOff },
    { title: t('p3'), description: t('d3'), icon: Activity },
    { title: t('p4'), description: t('d4'), icon: History },
    { title: t('p5'), description: t('d5'), icon: BrainCircuit },
  ];

  return (
    <section id="problem" className="site-section section-muted">
      <div className="site-container">
        <Reveal>
          <SectionHeader badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />
        </Reveal>

        <div className="cards-grid cards-grid-3 problem-grid">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <Reveal key={problem.title} delay={0.05 * index}>
                <article className="glass-card">
                  <div className="icon-frame">
                    <Icon size={24} />
                  </div>
                  <h3>{problem.title}</h3>
                  <p>{problem.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
