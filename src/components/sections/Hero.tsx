'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';
import {ArrowUpRight, Layers3, ShieldCheck, Workflow} from 'lucide-react';

import {Button} from '@/components/ui/Button';
import {createWhatsAppLink, siteContent} from '@/content/site';

const heroSignals = [
  'Fábrica de software',
  'Consultoria estratégica',
  'Catálogo SaaS'
];

const heroPanels = [
  {
    title: 'Redução de custos',
    description: 'Menos retrabalho, menos esforço manual e melhor aproveitamento da operação.'
  },
  {
    title: 'Produtividade',
    description: 'Times com mais contexto, processos mais claros e menos ruído entre áreas.'
  },
  {
    title: 'Dados centralizados',
    description: 'Mais visão executiva para priorizar, medir e decidir com segurança.'
  }
];

const capabilityCards = [
  {
    title: 'Consultoria estratégica',
    description: 'Clareza para decidir onde investir, integrar ou evoluir.',
    icon: Layers3
  },
  {
    title: 'Software sob demanda',
    description: 'Aderência real ao processo quando o cenário pede solução própria.',
    icon: Workflow
  },
  {
    title: 'Soluções SaaS',
    description: 'Produtos com leitura comercial, implantação mais rápida e visão de expansão.',
    icon: ShieldCheck
  }
];

export function Hero() {
  return (
    <section className="site-shell site-grid relative overflow-hidden px-6 pb-20 pt-24 md:pb-24 md:pt-32">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <motion.div
          initial={{opacity: 0, y: 26}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.55, ease: 'easeOut'}}
          className="relative z-10"
        >
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
            {siteContent.hero.eyebrow}
          </span>

          <h1 className="font-display text-balance mt-6 max-w-5xl text-4xl leading-[1.02] text-white sm:text-5xl lg:text-[4.65rem]">
            {siteContent.hero.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {siteContent.hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              href={createWhatsAppLink()}
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteContent.hero.primaryCta}
            </Button>
            <Button href="/softwares" size="lg" variant="secondary">
              {siteContent.hero.secondaryCta}
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {heroSignals.map((signal, index) => (
              <motion.span
                key={signal}
                initial={{opacity: 0, y: 16}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.18 + index * 0.08, duration: 0.4}}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200"
              >
                {signal}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.2, duration: 0.5}}
            className="premium-panel premium-outline mt-8 rounded-[2rem] p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                  Base de posicionamento
                </span>
                <p className="mt-3 max-w-2xl text-base leading-8 text-slate-200">
                  A Horizon Prime combina 8 anos de experiência no mercado de tecnologia com uma visão moderna de inovação, desenvolvendo soluções que reduzem custos, aumentam a produtividade e apoiam decisões com mais inteligência.
                </p>
              </div>
              <div className="hidden rounded-full border border-white/10 bg-white/[0.04] p-3 text-cyan-100 md:inline-flex">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {capabilityCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.article
                  key={card.title}
                  initial={{opacity: 0, y: 24}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.28 + index * 0.08, duration: 0.45}}
                  whileHover={{y: -6}}
                  className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-300/10 text-cyan-100">
                    <Icon size={20} />
                  </div>
                  <h2 className="font-display mt-4 text-xl text-white">{card.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{card.description}</p>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.15, duration: 0.65, ease: 'easeOut'}}
          className="relative"
        >
          <div className="absolute -left-14 top-10 hidden h-44 w-44 rounded-full bg-cyan-400/12 blur-3xl lg:block" />
          <div className="absolute bottom-8 right-0 hidden h-56 w-56 rounded-full bg-violet-400/10 blur-3xl lg:block" />

          <div className="premium-panel premium-outline overflow-hidden rounded-[2.35rem]">
            <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
                Horizon Prime Command Center
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300">
                Produto + estratégia
              </span>
            </div>

            <div className="relative aspect-[10/11] overflow-hidden">
              <Image
                src="/images/hero.png"
                alt="Painel de dados integrado da Horizon Prime"
                fill
                priority
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 48vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,17,29,0.18),rgba(3,17,29,0.74))]" />

              <motion.div
                initial={{opacity: 0, scale: 0.94}}
                animate={{opacity: 1, scale: 1}}
                transition={{delay: 0.35, duration: 0.45}}
                className="premium-outline absolute left-4 top-4 max-w-[18rem] rounded-[1.4rem] border border-white/12 bg-slate-950/72 p-4 backdrop-blur-xl sm:left-6 sm:top-6"
              >
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100">
                  O que muda na prática
                </span>
                <div className="mt-4 space-y-3">
                  {heroPanels.map((panel) => (
                    <div key={panel.title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                      <p className="text-sm font-semibold text-white">{panel.title}</p>
                      <p className="mt-1 text-xs leading-6 text-slate-300">{panel.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{opacity: 0, y: 18}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.45, duration: 0.45}}
                className="absolute bottom-5 left-4 right-4 rounded-[1.5rem] border border-white/10 bg-slate-950/74 p-4 backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-6 sm:p-5"
              >
                <div className="grid gap-3 sm:grid-cols-3">
                  {siteContent.hero.stats.map((item) => (
                    <div key={item.label} className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] p-4">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        {item.label}
                      </span>
                      <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
