'use client';

import Image from 'next/image';
import { BrainCircuit, Database } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const t = useTranslations('Hero');

  const metrics = [
    { title: t('metric1Title'), description: t('metric1Desc') },
    { title: t('metric2Title'), description: t('metric2Desc') },
    { title: t('metric3Title'), description: t('metric3Desc') },
  ];

  return (
    <section className="hero-shell" id="top">
      <div className="hero-glow hero-glow-top" />
      <div className="hero-glow hero-glow-right" />
      <div className="grid-fade" />

      <div className="site-container hero-layout">
        <div>
          <motion.span
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48 }}
            className="section-kicker badge-live"
          >
            <span className="live-dot" />
            {t('badge')}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.56, delay: 0.08 }}
            className="hero-title"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.16 }}
            className="hero-subtitle"
          >
            {t('subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.24 }}
            className="hero-actions"
          >
            <Button
              href="https://wa.me/5531973373728?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
            >
              {t('ctaDemo')}
            </Button>
            <Button href="#solution" variant="secondary" size="lg">
              {t('ctaWpp')}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.34 }}
            className="hero-metrics"
          >
            {metrics.map((metric) => (
              <article key={metric.title} className="metric-card">
                <strong>{metric.title}</strong>
                <span>{metric.description}</span>
              </article>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="hero-visual"
        >
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.62, delay: 0.42 }}
            className="floating-chip floating-chip-left"
          >
            <Database size={18} />
            <span>{t('visualChip1')}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.62, delay: 0.5 }}
            className="floating-chip floating-chip-right"
          >
            <BrainCircuit size={18} />
            <span>{t('visualChip2')}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.78, delay: 0.3 }}
            className="hero-window"
          >
            <div className="window-bar">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span>HorizonTracker Dashboard</span>
            </div>
            <div className="hero-window-media">
              <Image
                src="/images/hero.png"
                alt="Horizon Prime monitoring dashboard"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 820px) 100vw, 48vw"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
