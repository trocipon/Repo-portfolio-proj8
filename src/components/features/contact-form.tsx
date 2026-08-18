import { useState, useRef, useEffect } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Send } from "../utils/icons";
import { InputField } from "../ui/input-field";
import { Button } from "../ui/button";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

interface Errors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  honeypot?: string;
}

const errorMessages = {
  required: "Ce champ est requis.",
  emailInvalid: "Format d'email invalide.",
  nameTooShort: "Le nom doit contenir au moins 2 caractères.",
  nameInvalid: "Le nom ne peut contenir que des lettres, espaces, tirets ou apostrophes.",
  subjectTooShort: "Le sujet doit contenir au moins 3 caractères.",
  messageTooShort: "Le message doit contenir au moins 10 caractères.",
};

const namePattern = /^[a-zA-ZÀ-ÿ\s'-]+$/;

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const successHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  useEffect(() => {
    if (submitted) successHeadingRef.current?.focus();
  }, [submitted]);

  function validate(values: FormState): Errors {
    const newErrors: Errors = {};
    const trimmedName = values.name.trim();
    if (!trimmedName) newErrors.name = errorMessages.required;
    else if (trimmedName.length < 2) newErrors.name = errorMessages.nameTooShort;
    else if (!namePattern.test(trimmedName)) newErrors.name = errorMessages.nameInvalid;

    if (!values.email.trim()) newErrors.email = errorMessages.required;
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) newErrors.email = errorMessages.emailInvalid;

    const trimmedSubject = values.subject.trim();
    if (!trimmedSubject) newErrors.subject = errorMessages.required;
    else if (trimmedSubject.length < 3) newErrors.subject = errorMessages.subjectTooShort;

    if (!values.message.trim()) newErrors.message = errorMessages.required;
    else if (values.message.trim().length < 10) newErrors.message = errorMessages.messageTooShort;

    if (values.honeypot) {
      console.warn("Honeypot triggered: potential spam detected.");
      newErrors.honeypot = "Spam détecté.";
    }
    return newErrors;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(formState);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstErrorKey);
      if (el) el.focus();
      return;
    }
    setLoading(true);

    // Vérification invisible en complément du honeypot déjà en place ; comme
    // pour le téléchargement du CV, le score n'est pas exploitable côté
    // client (pas de backend pour appeler l'API siteverify avec la clé
    // secrète), le jeton est transmis à Formspree à titre indicatif.
    const recaptchaToken = executeRecaptcha ? await executeRecaptcha("contact_form") : null;

    fetch("https://formspree.io/f/xbdavaqg", {
      method: "POST",
      body: JSON.stringify({ ...formState, recaptchaToken }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setSubmitted(true);
        } else {
          alert("Une erreur est survenue. Veuillez réessayer.");
        }
      })
      .catch(() => {
        alert("Une erreur réseau est survenue. Veuillez réessayer.");
      })
      .finally(() => setLoading(false));
  }

  return (
    <div className="lg:col-span-2">
      {submitted ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-primary/5 p-12 text-center" role="status" aria-live="polite">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Send className="h-6 w-6 text-primary" />
          </div>
          <h3 ref={successHeadingRef} tabIndex={-1} className="mt-4 text-lg font-semibold text-foreground outline-none">
            Message envoyé !
          </h3>
          <p className="mt-2 text-sm text-foreground/80">Merci pour votre message. Je vous répondrai dans les meilleurs délais.</p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormState({ name: "", email: "", subject: "", message: "", honeypot: "" });
            }}
            className="mt-6 text-sm font-medium text-primary hover:underline cursor-pointer"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
          <input type="text" name="honeypot" value={formState.honeypot} onChange={handleChange} style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
          <div className="grid gap-5 sm:grid-cols-2">
            <InputField id="name" label="Nom complet" type="text" value={formState.name} onChange={handleChange} error={errors.name} placeholder="Votre nom" />
            <InputField id="email" label="Email" type="email" value={formState.email} onChange={handleChange} error={errors.email} placeholder="votre@email.com" />
          </div>
          <InputField id="subject" label="Sujet" type="text" value={formState.subject} onChange={handleChange} error={errors.subject} placeholder="Sujet de votre message" />
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-foreground">
              Message
            </label>
            <textarea id="message" name="message" required rows={5} value={formState.message} onChange={handleChange} className={`resize-none rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${errors.message ? "border-red-400" : "border-input"}`} placeholder="Contenu de votre message" aria-required="true" aria-invalid={!!errors.message} aria-describedby={errors.message ? "error-message" : undefined} />
            {errors.message && (
              <span id="error-message" className="text-xs text-red-500 mt-1" role="alert">
                {errors.message}
              </span>
            )}
          </div>
          {/* Les deux mentions légales (consentement + reCAPTCHA) forment un
              même bloc de lecture : gap réduit entre elles, indépendant du
              gap-5 du formulaire qui les sépare des champs au-dessus et du
              bouton en dessous. */}
          <div className="flex flex-col gap-1">
            <p className="text-xs text-muted-foreground text-left italic">En envoyant ce formulaire, vous acceptez que vos données soient utilisées pour vous répondre, conformément aux mentions légales.</p>
            {/* Mention requise par Google en contrepartie du masquage du badge
                flottant reCAPTCHA (voir globals.css) — le badge visuel par
                défaut est disproportionné sur mobile, cette mention textuelle
                le remplace au point d'usage. */}
            <p className="text-xs text-muted-foreground text-left italic">
              Ce site est protégé par reCAPTCHA, la{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                politique de confidentialité
              </a>{" "}
              et les{" "}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">
                conditions d'utilisation
              </a>{" "}
              de Google s'appliquent.
            </p>
          </div>
          <div className="flex justify-center sm:justify-start">
            <Button type="submit" variant="primary" className="w-fit disabled:opacity-60 disabled:cursor-not-allowed" disabled={loading} aria-busy={loading}>
              {loading ? (
                <svg className="animate-spin h-4 w-4 mr-2 text-primary-foreground" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              ) : (
                <Send className="h-4 w-4" />
              )}
              {loading ? "Envoi..." : "Envoyer le message"}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
