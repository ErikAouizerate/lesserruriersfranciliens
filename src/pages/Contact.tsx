import { Camera, Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router';
import { company } from '@/content/company';
import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/components/ContactForm';
import { PageHeader } from '@/components/PageHeader';
import { Section } from '@/components/Section';

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Demandez votre devis gratuit">
        Nous répondons au plus vite et vous apportons toujours une solution adaptée. Pour une
        urgence, appelez-nous directement.
      </PageHeader>

      <Section>
        <div data-reveal="stagger" className="grid items-start gap-10 lg:grid-cols-[2fr_3fr]">
          <aside className="grid gap-7">
            <a
              href={company.phoneHref}
              className="flex items-center gap-4 rounded-lg bg-brand p-6 text-ink transition-colors hover:bg-brand/90"
            >
              <Phone className="size-7 shrink-0" aria-hidden />
              <span className="font-heading text-[2.6rem] leading-none">
                <small className="mb-1 block font-sans text-xs font-semibold tracking-widest uppercase">
                  Urgence & devis
                </small>
                {company.phone}
              </span>
            </a>

            <ul className="grid gap-3.5">
              <li className="flex items-center gap-3 break-all">
                <Mail className="size-5 shrink-0 text-brand-ink" aria-hidden />
                <a href={`mailto:${company.email}`} className="font-medium hover:underline">
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="size-5 shrink-0 text-brand-ink" aria-hidden />
                <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="font-medium hover:underline">
                  Écrire sur WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="size-5 shrink-0 text-brand-ink" aria-hidden />
                {company.hours}
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="size-5 shrink-0 text-brand-ink" aria-hidden />
                <Link to="/zones-intervention" className="hover:underline">
                  {company.zone} ({company.departments.map((d) => d.code).join(', ')})
                </Link>
              </li>
            </ul>

            <Card className="bg-cream ring-0">
              <CardContent className="flex gap-4">
                <Camera className="size-7 shrink-0 text-brand-ink" aria-hidden />
                <div>
                  <h2 className="mb-2 text-2xl">Envoyez-nous des photos</h2>
                  <p className="text-sm">
                    Pour un échange rapide et un devis précis, envoyez des photos de votre serrure
                    ou de votre porte par e-mail ou sur WhatsApp, en indiquant l’adresse
                    d’intervention.
                  </p>
                </div>
              </CardContent>
            </Card>
          </aside>

          <Card className="bg-paper p-2 md:p-5">
            <CardContent>
              <h2 className="mb-5 text-4xl">Formulaire de contact</h2>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </Section>
    </>
  );
}
