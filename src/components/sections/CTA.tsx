import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';

export function CTA() {
  const t = useTranslations('CTA');

  return (
    <section className="py-24 md:py-32 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 50% 100%, #1e3a8a 0%, transparent 60%)' }} />
      <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l9.9-9.9h-2.828zM27.998 0l-9.9 9.9 1.415 1.414 9.9-9.9h-2.83z\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-10 leading-tight">
            {t('title')}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="https://wa.me/5531973373728?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o."
              size="lg"
              className="bg-white text-blue-600 hover:bg-slate-100 border-2 border-transparent shadow-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('btnDemo')}
            </Button>
            <Button
              href="https://wa.me/5531973373728"
              size="lg"
              className="bg-transparent text-white border-2 border-white/50 hover:bg-white/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('btn')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
