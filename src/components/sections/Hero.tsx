'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-[#020617]">
      {/* Background Lighting Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/15 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-900/50 blur-[150px] rounded-full pointer-events-none" />
        {/* Subtle Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Text Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-slate-800 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-blue-400 mb-8 shadow-xl backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Horizon Prime Intelligence
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
          >
            {t('title')}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Button
              href="https://wa.me/5531973373728?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20demonstra%C3%A7%C3%A3o."
              size="lg"
              variant="primary"
              className="text-base px-8 py-4 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('ctaDemo')}
            </Button>
            <Button 
              href="#solution" 
              size="lg" 
              variant="secondary"
              className="text-base px-8 py-4 bg-slate-900 border-slate-700 hover:bg-slate-800"
            >
              {t('ctaWpp')}
            </Button>
          </motion.div>
        </div>
        
        {/* Massive Center Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-6xl relative mt-4"
        >
          {/* Glass floating elements / decorators */}
          <div className="hidden lg:block absolute -left-12 top-1/4 w-48 h-32 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl z-20 shadow-2xl animate-bounce" style={{animationDuration: '4s'}} />
          <div className="hidden lg:block absolute -right-8 bottom-1/4 w-56 h-40 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl z-20 shadow-2xl animate-bounce" style={{animationDuration: '5s', animationDelay: '1s'}} />

          {/* Main Dashboard Image */}
          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-slate-700/50 bg-slate-900/50 shadow-[0_0_80px_rgba(0,0,0,0.8)] backdrop-blur-md group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 pointer-events-none opacity-50" />
            
            {/* Window Controls Header (macOS style for premium look) */}
            <div className="absolute top-0 left-0 w-full h-10 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 z-20 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-700" />
              <div className="w-3 h-3 rounded-full bg-slate-700" />
              <div className="w-3 h-3 rounded-full bg-slate-700" />
              <div className="mx-auto text-xs font-medium text-slate-500 tracking-widest uppercase">HorizonTracker Dashboard</div>
            </div>

            <Image 
              src="/images/hero.png" 
              alt="Horizon Prime Dashboard" 
              fill
              className="object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-[1.5s] ease-out mt-10" 
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
