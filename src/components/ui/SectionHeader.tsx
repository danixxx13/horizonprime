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
    <div className={cn('section-header', align === 'left' && 'section-left', className)}>
      {badge && (
        <span className="section-kicker">
          {badge}
        </span>
      )}
      <h2 className="section-title">
        {title}
      </h2>
      {subtitle && (
        <p className="section-description">
          {subtitle}
        </p>
      )}
    </div>
  );
}
