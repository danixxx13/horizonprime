import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';

export function CTA() {
  const t = useTranslations('CTA');

  return (
    <section className="cta-band">
      <div className="site-container">
        <Reveal>
          <div className="cta-panel">
            <h2>{t('title')}</h2>
            <p>{t('desc')}</p>

            <div className="cta-actions">
              <Button
                href="https://wa.me/5531973373728?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o."
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                size="lg"
              >
                {t('btnDemo')}
              </Button>
              <Button
                href="https://wa.me/5531973373728"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost-light"
                size="lg"
              >
                {t('btn')}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
