import { useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { FileSearch, EyeOff, Activity, History, BrainCircuit } from 'lucide-react';

export function Problem() {
  const t = useTranslations('Problem');

  const problems = [
    { id: 1, title: t('p1'), desc: t('d1'), icon: FileSearch },
    { id: 2, title: t('p2'), desc: t('d2'), icon: EyeOff },
    { id: 3, title: t('p3'), desc: t('d3'), icon: Activity },
    { id: 4, title: t('p4'), desc: t('d4'), icon: History },
    { id: 5, title: t('p5'), desc: t('d5'), icon: BrainCircuit },
  ];

  return (
    <section id="problem" className="py-24 md:py-32 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-6">
        <SectionHeader badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
            <div key={prob.id} className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{prob.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{prob.desc}</p>
            </div>
          )})}
        </div>
      </div>
    </section>
  );
}
