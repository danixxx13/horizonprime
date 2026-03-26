import { useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BarChart3, Crosshair, Database, Zap } from 'lucide-react';

export function Solution() {
  const t = useTranslations('Solution');

  const solutions = [
    { id: 1, title: t('s1'), desc: t('d1'), icon: BarChart3 },
    { id: 2, title: t('s2'), desc: t('d2'), icon: Crosshair },
    { id: 3, title: t('s3'), desc: t('d3'), icon: Database },
    { id: 4, title: t('s4'), desc: t('d4'), icon: Zap },
  ];

  return (
    <section id="solution" className="py-24 md:py-32 bg-[#020617] relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
            <div key={sol.id} className="flex flex-col sm:flex-row gap-6 p-8 rounded-2xl bg-slate-900/40 border border-slate-800/60 hover:bg-slate-800/50 hover:border-blue-500/30 transition-all duration-300">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Icon size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3">{sol.title}</h3>
                <p className="text-slate-400 leading-relaxed">{sol.desc}</p>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
