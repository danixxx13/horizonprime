'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Database, TrendingUp, Compass } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function Hook() {
  const t = useTranslations('Hook');

  const features = [
    { icon: Database, title: t('b1'), desc: t('d1') },
    { icon: TrendingUp, title: t('b2'), desc: t('d2') },
    { icon: Compass, title: t('b3'), desc: t('d3') },
  ];

  return (
    <section className="py-24 bg-slate-950 relative border-t border-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
          >
            {t('title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-sm hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-3">{feat.title}</h3>
                <p className="text-slate-400 leading-relaxed font-medium">{feat.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button href="https://wa.me/5531973373728?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o." size="lg" variant="primary">
            {t('cta')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
