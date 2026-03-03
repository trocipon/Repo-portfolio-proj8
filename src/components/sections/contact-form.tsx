import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Le nom est requis."),
  email: z.string().email("Veuillez entrer un email valide."),
  message: z.string().min(1, "Le message est requis."),
});

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const validation = contactSchema.safeParse(data);

    if (!validation.success) {
      alert(validation.error.issues.map((err: z.ZodIssue) => err.message).join("\n"));
      return;
    }

    fetch("https://formspree.io/f/xbdavaqg", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
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
      });
  }

  return (
    <div>
      {submitted ? (
        <div className="text-center">
          <h3>Merci pour votre message !</h3>
          <p>Je vous répondrai dans les plus brefs délais.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input type="text" name="name" placeholder="Votre nom" required className="rounded-lg border px-4 py-2" />
          <input type="email" name="email" placeholder="Votre email" required className="rounded-lg border px-4 py-2" />
          <textarea name="message" placeholder="Votre message" required className="rounded-lg border px-4 py-2" />
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded-lg">
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
}
