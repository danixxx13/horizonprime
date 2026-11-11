import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({ title, subtitle, badge, align = 'center', className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-14 flex flex-col gap-4 md:mb-16',
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {badge && (
        <span className="inline-block rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl leading-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-3xl text-lg leading-8 text-slate-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}
