import { useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import Image from 'next/image';

export function About() {
  const t = useTranslations('About');

  return (
    <section id="about" className="py-24 md:py-32 bg-[#020617] relative border-t border-slate-900">
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://transparenttextures.com/patterns/cubes.png')] bg-repeat" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
           <SectionHeader badge={t('badge')} title={t('title')} />
           <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
             {t('desc')}
           </p>
           
           <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/80 mb-12 group">
             {/* Imagem da reunião de enterprise */}
             <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply z-10" />
             <div className="relative w-full h-full flex items-center justify-center text-slate-600 bg-slate-950 text-sm overflow-hidden">
                <Image src="/images/about.png" alt="Horizon Prime Enterprise" fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-[1.5s]" sizes="(max-width: 768px) 100vw, 80vw" />
                <span className="absolute z-20">Imagem Reunião B2B (b561c2b5-fc6e-4ccb-b996-5fc7a192809e.webp)</span>
             </div>
           </div>

           <Button href="https://wa.me/5531973373728" size="lg" variant="primary">
             {t('cta')}
           </Button>
        </div>
      </div>
    </section>
  );
}
