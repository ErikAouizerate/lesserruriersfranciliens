import { useState, type FormEvent, type ReactNode } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { company } from '@/content/company';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select';
import { Textarea } from '@/components/ui/textarea';

// Web3Forms public access key (safe to expose). Without it, the form opens the
// visitor's mail client instead.
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

const profiles = ['Syndic / copropriété', 'Bailleur / gestionnaire', 'Entreprise / commerce', 'Particulier'];
const requestTypes = ['Demande de devis', 'Intervention urgente', 'Contrat / partenariat', 'Autre'];

type Status = 'idle' | 'sending' | 'sent' | 'error';

const labels: Record<string, string> = {
  profil: 'Profil',
  type: 'Type de demande',
  nom: 'Nom',
  societe: 'Société',
  email: 'E-mail',
  telephone: 'Téléphone',
  code_postal: 'Code postal',
  message: 'Message',
};

function toMailto(data: FormData) {
  const body = Object.keys(labels)
    .map((key) => `${labels[key]} : ${data.get(key) ?? ''}`)
    .join('\n');
  const subject = `${data.get('type')} – ${data.get('nom')}`;
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function Field({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}

const control = 'h-11 bg-background text-base md:text-base';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    if (!ACCESS_KEY) {
      window.location.href = toMailto(data);
      return;
    }

    setStatus('sending');
    data.append('access_key', ACCESS_KEY);
    data.append('subject', `Site web – ${data.get('type')} (${data.get('profil')})`);
    data.append('from_name', company.name);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });
      const result = (await response.json()) as { success: boolean };
      if (!result.success) throw new Error('Submission rejected');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="px-5 py-10 text-center" role="status">
        <CheckCircle2 className="mx-auto mb-3 size-10 text-brand" aria-hidden />
        <h3 className="mb-2 text-3xl">Message envoyé</h3>
        <p>
          Merci, nous revenons vers vous très rapidement. Pour une urgence, appelez-nous au{' '}
          <a href={company.phoneHref} className="font-semibold text-brand-ink">
            {company.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="profil" label="Vous êtes *">
          <NativeSelect id="profil" name="profil" required defaultValue="" className="w-full [&_select]:h-11 [&_select]:bg-background [&_select]:text-base">
            <NativeSelectOption value="" disabled>
              Choisir…
            </NativeSelectOption>
            {profiles.map((p) => (
              <NativeSelectOption key={p}>{p}</NativeSelectOption>
            ))}
          </NativeSelect>
        </Field>
        <Field id="type" label="Votre demande *">
          <NativeSelect id="type" name="type" required defaultValue={requestTypes[0]} className="w-full [&_select]:h-11 [&_select]:bg-background [&_select]:text-base">
            {requestTypes.map((t) => (
              <NativeSelectOption key={t}>{t}</NativeSelectOption>
            ))}
          </NativeSelect>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="nom" label="Nom et prénom *">
          <Input id="nom" name="nom" required autoComplete="name" className={control} />
        </Field>
        <Field id="societe" label="Société / syndic">
          <Input id="societe" name="societe" autoComplete="organization" className={control} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="E-mail *">
          <Input id="email" type="email" name="email" required autoComplete="email" className={control} />
        </Field>
        <Field id="telephone" label="Téléphone *">
          <Input id="telephone" type="tel" name="telephone" required autoComplete="tel" className={control} />
        </Field>
      </div>

      <Field id="code_postal" label="Code postal du lieu d’intervention *">
        <Input
          id="code_postal"
          name="code_postal"
          required
          inputMode="numeric"
          pattern="\d{5}"
          maxLength={5}
          autoComplete="postal-code"
          className={`${control} sm:max-w-48`}
        />
      </Field>

      <Field id="message" label="Votre message *">
        <Textarea
          id="message"
          name="message"
          rows={6}
          required
          className="min-h-36 bg-background text-base md:text-base"
          placeholder="Type de porte, de serrure, nombre de logements ou de portes concernés, délai souhaité…"
        />
      </Field>

      {/* Honeypot field for bots. */}
      <input type="checkbox" name="botcheck" className="sr-only" tabIndex={-1} aria-hidden />

      <div className="flex items-start gap-3">
        <Checkbox id="consentement" name="consentement" value="oui" required className="mt-0.5" />
        <Label htmlFor="consentement" className="text-sm leading-snug font-normal text-muted-foreground">
          J’accepte que mes données soient utilisées pour traiter ma demande. Elles ne sont ni
          revendues ni utilisées à d’autres fins.
        </Label>
      </div>

      {status === 'error' && (
        <p className="text-sm text-destructive" role="alert">
          L’envoi a échoué. Réessayez ou écrivez-nous à{' '}
          <a href={`mailto:${company.email}`} className="underline">
            {company.email}
          </a>
          .
        </p>
      )}

      <Button type="submit" size="xl" className="justify-self-start" disabled={status === 'sending'}>
        <Send aria-hidden />
        {status === 'sending' ? 'Envoi…' : 'Envoyer ma demande'}
      </Button>
    </form>
  );
}
