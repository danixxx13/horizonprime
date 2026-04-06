'use client';

import { useTranslations } from 'next-intl';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Monitor, Server, Cloud, ArrowRight, BrainCircuit } from 'lucide-react';
import Image from 'next/image';

export function Tracker() {
  const t = useTranslations('Tracker');

  const sources = [
    { icon: Monitor, title: t('src1'), desc: t('sr1Desc') },
    { icon: Cloud, title: t('src2'), desc: t('sr2Desc') },
    { icon: Server, title: t('src3'), desc: t('sr3Desc') },
  ];

  return (
    <section id="tracker" className="py-24 md:py-32 bg-[#020617] relative border-t border-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader badge={t('badge')} title={t('title')} subtitle={t('desc')} />

        {/* Data Flow Illustration */}
        <div className="mt-20 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl mx-auto">
          
          {/* Left Column: Data Sources */}
          <div className="flex flex-col gap-6 w-full lg:w-1/3">
            {sources.map((src, idx) => {
              const Icon = src.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="flex items-center gap-5 p-5 bg-slate-900/60 border border-slate-800 rounded-2xl hover:border-blue-500/40 hover:bg-slate-800/60 transition-all duration-300 relative group group-hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-100 font-bold mb-1">{src.title}</h4>
                    <p className="text-sm text-slate-400">{src.desc}</p>
                  </div>
                  {/* Connecting Line (Desktop) */}
                  <div className="hidden lg:block absolute top-1/2 -right-16 w-16 h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </div>

          {/* Middle: Arrows (Desktop only) */}
          <div className="hidden lg:flex flex-col gap-12 text-slate-700">
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.3}}><ArrowRight size={32} /></motion.div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.4}}><ArrowRight size={32} /></motion.div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.5}}><ArrowRight size={32} /></motion.div>
          </div>

          {/* Right Column: Core Platform Dashboard */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="w-full lg:w-1/2 relative mt-10 lg:mt-0"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-blue-500/30 bg-slate-900/50 shadow-[0_0_60px_rgba(37,99,235,0.2)] backdrop-blur-md group">
              
              <div className="absolute top-0 left-0 w-full h-12 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-20 flex items-center justify-between px-6">
                <div className="flex items-center gap-2">
                  <BrainCircuit size={18} className="text-blue-500" />
                  <span className="text-xs font-bold text-slate-300 tracking-wider uppercase">{t('core')}</span>
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">{t('coreDesc')}</div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent mix-blend-overlay z-10 pointer-events-none" />
              <Image src="/images/mvp.png" alt="HorizonTracker Central Core Dashboard" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-[2s] ease-out mt-12" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </motion.div>

        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="mt-20 flex justify-center"
        >
          <Button href="https://wa.me/5531973373728?text=Ol%C3%A1%2C%20queria%20conhecer%20mais%20do%20HorizonTracker." size="lg" variant="primary">
            {t('cta')}
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
