import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function About() {
  const t = useTranslations('About');

  return (
    <section id="about" className="site-section section-dark">
      <div className="site-container about-layout">
        <Reveal>
          <div>
            <SectionHeader badge={t('badge')} title={t('title')} align="left" className="no-limit" />
            <p className="section-description" style={{ marginLeft: 0, maxWidth: '100%' }}>
              {t('desc')}
            </p>
            <div style={{ marginTop: '1.8rem' }}>
              <Button href="https://wa.me/5531973373728" target="_blank" rel="noopener noreferrer" variant="primary">
                {t('cta')}
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="about-frame">
            <div className="about-frame-media">
              <Image
                src="/images/about.png"
                alt="Horizon Prime team meeting"
                fill
                className="object-cover opacity-75 transition-transform duration-[1600ms] ease-out hover:scale-[1.04]"
                sizes="(max-width: 1080px) 100vw, 50vw"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
