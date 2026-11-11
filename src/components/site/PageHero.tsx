'use client';

import type {ReactNode} from 'react';
import {motion} from 'framer-motion';
import {ArrowUpRight} from 'lucide-react';

import {Button} from '@/components/ui/Button';
import {cn} from '@/lib/utils';

type HeroAction = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: HeroAction[];
  asideTitle?: string;
  asideDescription?: string;
  asideItems?: string[];
  aside?: ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  actions = [],
  asideTitle,
  asideDescription,
  asideItems = [],
  aside,
  className
}: PageHeroProps) {
  return (
    <section className={cn('site-grid relative overflow-hidden border-b border-white/8 px-6 pb-20 pt-24 md:pb-24 md:pt-28', className)}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_34%),radial-gradient(circle_at_right,rgba(16,185,129,0.12),transparent_24%),radial-gradient(circle_at_bottom,rgba(139,92,246,0.12),transparent_28%),linear-gradient(180deg,#03111d_0%,#061727_58%,#081320_100%)]" />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <motion.div
          initial={{opacity: 0, y: 24}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
        >
          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200">
            {eyebrow}
          </span>
          <h1 className="font-display text-balance mt-6 max-w-4xl text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {description}
          </p>

          {actions.length > 0 ? (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {actions.map((action) => (
                <Button key={action.label} href={action.href} variant={action.variant ?? 'primary'} size="lg">
                  {action.label}
                </Button>
              ))}
            </div>
          ) : null}
        </motion.div>

        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.12, duration: 0.55}}
          className="premium-panel premium-outline rounded-[2rem] p-6"
        >
          {aside ? (
            aside
          ) : (
            <>
              <div className="flex items-start justify-between gap-4">
                <div>
                  {asideTitle ? <h2 className="font-display text-2xl text-white">{asideTitle}</h2> : null}
                  {asideDescription ? (
                    <p className="mt-3 text-sm leading-7 text-slate-300">{asideDescription}</p>
                  ) : null}
                </div>
                <div className="hidden rounded-full border border-white/10 bg-white/[0.04] p-3 text-cyan-100 md:inline-flex">
                  <ArrowUpRight size={18} />
                </div>
              </div>

              {asideItems.length > 0 ? (
                <ul className="mt-6 space-y-3">
                  {asideItems.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{opacity: 0, x: 16}}
                      animate={{opacity: 1, x: 0}}
                      transition={{delay: 0.18 + index * 0.06, duration: 0.35}}
                      className="rounded-2xl border border-white/8 bg-slate-950/45 px-4 py-4 text-sm leading-6 text-slate-200"
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              ) : null}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
