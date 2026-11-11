import { Link } from 'react-router';
import { Camera, Phone } from 'lucide-react';
import { company } from '@/content/company';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Props = {
  title?: string;
  text?: string;
};

export function CtaBand({
  title = 'Un projet, une urgence ?',
  text = 'Envoyez-nous des photos de votre porte ou de votre serrure : nous vous répondons rapidement avec une solution adaptée et un devis gratuit.',
}: Props) {
  return (
    <section className="bg-brand py-12 text-ink md:py-18">
      <div className="container-site grid items-center gap-x-12 gap-y-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-2 text-4xl md:text-5xl">{title}</h2>
          <p className="max-w-xl">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <Link
            to="/contact"
            className={cn(buttonVariants({ size: 'xl' }), 'bg-ink text-white hover:bg-anthracite')}
          >
            <Camera aria-hidden />
            Demander un devis
          </Link>
          <a
            href={company.phoneHref}
            className={cn(
              buttonVariants({ size: 'xl', variant: 'outline' }),
              'border-2 border-ink bg-transparent hover:bg-ink hover:text-white',
            )}
          >
            <Phone aria-hidden />
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
