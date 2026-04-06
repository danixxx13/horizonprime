import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface BaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'light' | 'ghost-light';
  size?: 'sm' | 'md' | 'lg';
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & BaseProps & { href?: never };
type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & BaseProps & { href: string };

export function Button({ className, variant = 'primary', size = 'md', ...props }: ButtonProps | AnchorProps) {
  const baseStyles = 'btn whitespace-nowrap disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-outline',
    ghost: 'border border-transparent bg-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white',
    light: 'btn-light',
    'ghost-light': 'btn-ghost-light',
  };

  const sizes = {
    sm: 'min-h-10 px-4 text-sm',
    md: '',
    lg: 'btn-large',
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
