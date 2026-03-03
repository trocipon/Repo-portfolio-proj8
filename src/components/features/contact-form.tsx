import { useState, useRef } from "react";
import { Send } from "../utils/icons";
import { InputField } from "../ui/input-field";

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
  captcha?: string;
}

const errorMessages = {
  required: "Ce champ est requis.",
  emailInvalid: "Format d'email invalide.",
  messageTooShort: "Le message doit contenir au moins 10 caractères.",
};

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
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const firstErrorRef = useRef<HTMLInputElement | null>(null);

  function validate(values: FormState): Errors {
    const newErrors: Errors = {};
    if (!values.name.trim()) newErrors.name = errorMessages.required;
    if (!values.email.trim()) newErrors.email = errorMessages.required;
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) newErrors.email = errorMessages.emailInvalid;
    if (!values.subject.trim()) newErrors.subject = errorMessages.required;
    if (!values.message.trim()) newErrors.message = errorMessages.required;
    else if (values.message.length < 10) newErrors.message = errorMessages.messageTooShort;
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

  function handleCaptchaChange(value: string | null) {
    setCaptchaValue(value);
    setErrors((prev) => ({ ...prev, captcha: "" }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
    fetch("https://formspree.io/f/xbdavaqg", {
      method: "POST",
      body: JSON.stringify(formState),
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
        <div className="flex flex-col items-center justify-center rounded-xl border border-primary/30 bg-primary/5 p-12 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Send className="h-6 w-6 text-primary" />
          </div>
          <h3 className="mt-4 text-lg font-semibold text-foreground">Message envoyé !</h3>
          <p className="mt-2 text-sm text-foreground/80">Merci pour votre message. Je vous répondrai dans les meilleurs délais.</p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormState({ name: "", email: "", subject: "", message: "", honeypot: "" });
              setCaptchaValue(null);
            }}
            className="mt-6 text-sm font-medium text-primary hover:underline"
          >
            Envoyer un autre message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" aria-live="polite" noValidate>
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
          <button type="submit" className={`inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed`} disabled={loading} aria-busy={loading}>
            {loading ? (
              <svg className="animate-spin h-4 w-4 mr-2 text-primary-foreground" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            ) : (
              <Send className="h-4 w-4" />
            )}
            {loading ? "Envoi..." : "Envoyer le message"}
          </button>
        </form>
      )}
    </div>
  );
}
