import { ImageIcon } from 'lucide-react';
import type { ImageSlot } from '@/content/images';
import { cn } from '@/lib/utils';

type Props = {
  slot: ImageSlot;
  className?: string;
  priority?: boolean;
};

// Renders the image when `slot.src` is set, otherwise a labelled placeholder.
export function ImagePlaceholder({ slot, className, priority }: Props) {
  if (slot.src) {
    return (
      <img
        className={cn('w-full rounded-lg object-cover', className)}
        src={slot.src}
        srcSet={`${slot.src.replace(/\.webp$/, '-800.webp')} 800w, ${slot.src} 1600w`}
        sizes="(min-width: 1024px) 560px, calc(100vw - 40px)"
        alt={slot.alt}
        data-reveal={priority ? undefined : 'image'}
        style={{ aspectRatio: slot.ratio }}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
      />
    );
  }

  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-dashed border-brand/45 bg-cream bg-[repeating-linear-gradient(-45deg,--alpha(var(--color-brand)/5%)_0_12px,transparent_12px_24px)] p-5 text-center text-brand-ink',
        className,
      )}
      style={{ aspectRatio: slot.ratio }}
      role="img"
      data-reveal={priority ? undefined : 'image'}
      aria-label={slot.alt}
    >
      <ImageIcon className="size-7" aria-hidden />
      <span className="font-heading text-2xl leading-none tracking-wide uppercase">{slot.id}</span>
      <span className="max-w-[28ch] text-[0.82rem] text-ink/65">{slot.hint}</span>
    </div>
  );
}
