import { useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function HowItWorks() {
  const t = useTranslations('HowItWorks');

  const steps = [
    { id: 1, title: t('s1'), desc: t('d1') },
    { id: 2, title: t('s2'), desc: t('d2') },
    { id: 3, title: t('s3'), desc: t('d3') },
    { id: 4, title: t('s4'), desc: t('d4') },
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-6">
        <SectionHeader badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />

        <div className="relative mt-20 max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-slate-800 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={step.id} className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-slate-900 border-4 border-slate-950 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.2)] mb-6 text-xl font-bold text-blue-400">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title.replace(/^\d\.\s/, '')}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
