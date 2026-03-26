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
    <div className={cn('flex flex-col gap-4 mb-14 md:mb-20', align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left', className)}>
      {badge && (
        <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-lg text-slate-400 mt-2 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
