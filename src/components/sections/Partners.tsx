import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';
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
    <section id="partners" className="site-section section-muted">
      <div className="site-container">
        <Reveal>
          <SectionHeader badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />
        </Reveal>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} delay={0.05 * index}>
              <article className="partner-card">
                <Image src={partner.logo} alt={partner.name} width={80} height={80} />
                <span>{partner.name}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
