'use client';

import {motion} from 'framer-motion';
import {
  ArrowRightLeft,
  BadgeDollarSign,
  Blocks,
  Bot,
  ChartColumnBig,
  CheckCircle2,
  CloudCog,
  Handshake,
  Radar,
  ShieldCheck,
  UsersRound
} from 'lucide-react';

import type {Software, SoftwareIconKey} from '@/content/site';

import {Button} from '@/components/ui/Button';
import {createWhatsAppLink} from '@/content/site';

type SoftwareCardProps = {
  software: Software;
  compact?: boolean;
};

const softwareIconMap: Record<SoftwareIconKey, typeof Radar> = {
  radar: Radar,
  shield: ShieldCheck,
  cloud: CloudCog,
  analytics: ChartColumnBig,
  sync: ArrowRightLeft,
  crm: Handshake,
  finance: BadgeDollarSign,
  erp: Blocks,
  people: UsersRound,
  ai: Bot
};

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 0
  }).format(value);
}

export function SoftwareCard({software, compact = false}: SoftwareCardProps) {
  const Icon = softwareIconMap[software.icon];

  return (
    <motion.article
      initial={{opacity: 0, y: 18}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.15}}
      transition={{duration: 0.4}}
      whileHover={{y: -8}}
      className="premium-panel premium-outline group flex h-full flex-col rounded-[1.9rem] p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 text-cyan-200">
            <Icon size={22} />
          </div>
          <h3 className="font-display mt-5 text-2xl text-white">{software.name}</h3>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.2em] text-emerald-200/85">
            {software.tagline}
          </p>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-300">{software.description}</p>

      <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Problema que resolve
        </span>
        <p className="mt-2 text-sm leading-7 text-slate-200">{software.problem}</p>
      </div>

      <div className="mt-5 rounded-2xl border border-white/8 bg-slate-950/35 p-4">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
          Benefícios
        </span>
        <ul className="mt-3 space-y-3">
          {software.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 text-sm leading-7 text-slate-200">
              <CheckCircle2 size={18} className="mt-1 shrink-0 text-cyan-100" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/8 bg-slate-950/50 p-4">
          <span className="text-xs uppercase tracking-[0.18em] text-slate-400">Preço TI</span>
          <p className="mt-2 text-xl font-semibold text-white">{formatCurrency(software.partnerPrice)}/mês</p>
        </div>
        <div className="rounded-2xl border border-white/8 bg-slate-950/50 p-4">
          <span className="text-xs uppercase tracking-[0.18em] text-slate-400">Cliente final</span>
          <p className="mt-2 text-xl font-semibold text-white">{formatCurrency(software.clientPrice)}/mês</p>
        </div>
      </div>

      <div className="mt-6 flex flex-1 items-end">
        <Button
          href={createWhatsAppLink(
            `Olá! Vim pelo site da Horizon Prime e gostaria de mais informações sobre o ${software.name}.`
          )}
          variant={compact ? 'outline' : 'primary'}
          className="w-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar no WhatsApp
        </Button>
      </div>
    </motion.article>
  );
}
