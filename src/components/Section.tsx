import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const tones = {
  default: 'bg-background',
  paper: 'bg-paper',
  cream: 'bg-cream',
  dark: 'dark bg-background text-foreground',
} as const;

type SectionProps = {
  id?: string;
  tone?: keyof typeof tones;
  className?: string;
  containerClassName?: string;
  'aria-label'?: string;
  children: ReactNode;
};

export function Section({
  id,
  tone = 'default',
  className,
  containerClassName,
  children,
  ...rest
}: SectionProps) {
  return (
    <section id={id} className={cn('py-14 md:py-24', tones[tone], className)} {...rest}>
      <div className={cn('container-site', containerClassName)}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'mb-3 inline-block text-xs font-semibold tracking-[0.14em] text-brand-ink uppercase',
        className,
      )}
    >
      {children}
    </span>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  as?: 'h1' | 'h2';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lead,
  center,
  as: Heading = 'h2',
  className,
}: SectionHeadingProps) {
  return (
    <div
      data-reveal="stagger"
      className={cn('mb-10 max-w-3xl', center && 'mx-auto text-center', className)}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading className="mb-3 text-4xl md:text-5xl">{title}</Heading>
      {lead && <p className="text-lg text-muted-foreground">{lead}</p>}
    </div>
  );
}

export function CheckList({ items, className }: { items: string[]; className?: string }) {
  return (
    <ul className={cn('mb-6 grid gap-2.5', className)}>
      {items.map((item) => (
        <li
          key={item}
          className="relative pl-8 before:absolute before:top-[0.45em] before:left-0 before:h-2.5 before:w-4 before:-rotate-45 before:border-b-[3px] before:border-l-[3px] before:border-brand"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function IconBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'mb-4 inline-grid size-13 place-items-center rounded-full bg-cream text-brand-ink',
        className,
      )}
    >
      {children}
    </span>
  );
}
