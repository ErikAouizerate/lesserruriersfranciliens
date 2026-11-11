import type { ReactNode } from 'react';
import { Eyebrow } from './Section';

type Props = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export function PageHeader({ eyebrow, title, children }: Props) {
  return (
    <section className="dark relative overflow-hidden border-b-[6px] border-brand bg-background pt-14 pb-10 text-foreground md:pt-28 md:pb-18">
      <div className="container-site">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mb-4 text-5xl md:text-7xl">{title}</h1>
        {children && <p className="max-w-2xl text-lg text-muted-foreground">{children}</p>}
      </div>
    </section>
  );
}
