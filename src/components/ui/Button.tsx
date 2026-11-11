import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import {Link as LocaleLink} from '@/i18n/routing';

interface BaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & BaseProps & { href?: never };
type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & BaseProps & { href: string };

export function Button({ className, variant = 'primary', size = 'md', ...props }: ButtonProps | AnchorProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full font-semibold transition-all active:scale-95 disabled:pointer-events-none disabled:opacity-50 whitespace-nowrap';
  
  const variants = {
    primary:
      'border border-cyan-300/20 bg-[linear-gradient(135deg,#14b8a6,#0ea5e9)] text-slate-950 shadow-[0_20px_45px_rgba(8,145,178,0.3)] hover:-translate-y-0.5 hover:shadow-[0_28px_55px_rgba(8,145,178,0.38)]',
    secondary:
      'border border-white/12 bg-white/8 text-white hover:border-white/20 hover:bg-white/12',
    outline:
      'border border-cyan-300/30 bg-transparent text-cyan-100 hover:bg-cyan-300/10',
    ghost: 'text-slate-200 hover:bg-white/6 hover:text-white',
  };

  const sizes = {
    sm: 'h-10 px-4 text-sm',
    md: 'h-11 px-6 text-[15px]',
    lg: 'h-14 px-8 text-base',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if ('href' in props && props.href) {
    const { href, ...rest } = props as AnchorProps;
    if (
      href.startsWith('http') ||
      href.startsWith('mailto') ||
      href.startsWith('tel') ||
      href.startsWith('#')
    ) {
      return <a className={classes} href={href} {...rest} />;
    }
    return <LocaleLink href={href as never} className={classes} {...rest} />;
  }

  return <button className={classes} {...(props as ButtonProps)} />;
}
