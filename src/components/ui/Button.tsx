import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface BaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & BaseProps & { href?: never };
type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & BaseProps & { href: string };

export function Button({ className, variant = 'primary', size = 'md', ...props }: ButtonProps | AnchorProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none rounded-full whitespace-nowrap';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)]',
    secondary: 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700',
    outline: 'border border-blue-500/50 text-blue-400 hover:bg-blue-500/10',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg font-semibold',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if ('href' in props && props.href) {
    const { href, ...rest } = props as AnchorProps;
    if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('#')) {
      return <a className={classes} href={href} {...rest} />;
    }
    return <Link href={href} className={classes} {...rest} />;
  }

  return <button className={classes} {...(props as ButtonProps)} />;
}
