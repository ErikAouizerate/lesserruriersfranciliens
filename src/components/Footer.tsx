import { Link } from 'react-router';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { company } from '@/content/company';
import { navItems } from '@/content/navigation';
import { services } from '@/content/services';

const linkClass = 'transition-colors hover:text-brand';

export function Footer() {
  return (
    <footer className="border-t-[6px] border-brand bg-ink pt-16 pb-28 text-white/85 md:pb-6">
      <div className="container-site grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4 flex items-center gap-3 font-heading text-[1.7rem] leading-none text-white uppercase">
            <img src="/logo-96.png" alt="" width={48} height={48} className="size-12" loading="lazy" />
            {company.name}
          </div>
          <p className="text-sm text-white/65">
            Serrurier en Île-de-France : dépannage, remplacement de serrures et blindage de portes
            pour les syndics, bailleurs, gestionnaires et particuliers.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-2xl text-brand">Contact</h2>
          <ul className="grid gap-2.5 text-sm">
            <li className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-brand" aria-hidden />
              <a href={company.phoneHref} className={linkClass}>
                {company.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5 break-all">
              <Mail className="size-4 shrink-0 text-brand" aria-hidden />
              <a href={`mailto:${company.email}`} className={linkClass}>
                {company.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MessageCircle className="size-4 shrink-0 text-brand" aria-hidden />
              <a href={company.whatsappHref} target="_blank" rel="noreferrer" className={linkClass}>
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="size-4 shrink-0 text-brand" aria-hidden />
              {company.hours}
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="size-4 shrink-0 text-brand" aria-hidden />
              <Link to="/zones-intervention" className={linkClass}>
                Paris et toute l’Île-de-France
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-2xl text-brand">Compétences</h2>
          <ul className="grid gap-2.5 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link to={`/competences#${s.id}`} className={linkClass}>
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/professionnels#syndics" className={linkClass}>
                Serrurier pour syndics
              </Link>
            </li>
            <li>
              <Link to="/professionnels#bailleurs" className={linkClass}>
                Serrurier pour bailleurs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-2xl text-brand">Navigation</h2>
          <ul className="grid gap-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-site mt-12 flex flex-wrap justify-between gap-3 border-t border-white/12 pt-5 text-xs text-white/55">
        <span>
          © {new Date().getFullYear()} {company.name} · SAS · SIRET {company.legal.siret}
        </span>
        <Link to="/mentions-legales" className={linkClass}>
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
