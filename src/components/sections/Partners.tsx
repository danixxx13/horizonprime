import { useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/SectionHeader';

const partners = [
  { name: 'Microsoft', logo: '/images/partners/microsoft.png' },
  { name: 'AWS', logo: '/images/partners/aws.png' },
  { name: 'Google', logo: '/images/partners/google.png' },
  { name: 'Linux', logo: '/images/partners/linux.png' },
  { name: 'BitDefender', logo: '/images/partners/bitdefender.png' },
];

export function Partners() {
  const t = useTranslations('Partners');

  return (
    <section id="partners" className="py-24 md:py-32 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-6">
        <SectionHeader badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />
        
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mt-16 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center gap-3 group">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-center p-4 group-hover:border-blue-500/30 group-hover:bg-slate-800/50 transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-all duration-300 grayscale group-hover:grayscale-0"
                />
              </div>
              <span className="text-sm font-medium text-slate-500 group-hover:text-slate-300 transition-colors">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
