import { Link } from 'react-router';
import { FileText, Phone } from 'lucide-react';
import { company } from '@/content/company';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Fixed bottom bar on small screens: call or ask for a quote in one tap.
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 bg-ink px-3 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-[0_-6px_20px_rgb(0_0_0/0.2)] md:hidden">
      <a href={company.phoneHref} className={cn(buttonVariants({ size: 'xl' }), 'w-full')}>
        <Phone aria-hidden />
        Appeler
      </a>
      <Link
        to="/contact"
        className={cn(buttonVariants({ size: 'xl', variant: 'outline' }), 'w-full border-white bg-white')}
      >
        <FileText aria-hidden />
        Devis gratuit
      </Link>
    </div>
  );
}
