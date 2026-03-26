'use client';

import { useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function Benefits() {
  const t = useTranslations('Benefits');

  const benefits = [
    t('b1'), t('b2'), t('b3'), t('b4'), t('b5'), t('b6')
  ];

  return (
    <section id="benefits" className="py-24 md:py-32 bg-slate-950 relative border-t border-slate-900">
      <div className="container mx-auto px-6">
        <SectionHeader badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-16 max-w-5xl mx-auto">
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:bg-slate-900 hover:border-blue-500/30 transition-all duration-300 group"
            >
               <div className="flex-shrink-0 text-blue-500 group-hover:scale-110 transition-transform">
                 <CheckCircle2 size={24} />
               </div>
               <p className="text-slate-200 text-lg font-medium tracking-tight">
                 {benefit}
               </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
