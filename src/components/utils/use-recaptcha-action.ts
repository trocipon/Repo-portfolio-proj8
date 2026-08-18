import { useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

// Le site est 100% statique : pas de backend pour appeler l'API siteverify
// de Google avec la clé secrète et lire le score renvoyé par reCAPTCHA v3.
// Le jeton obtenu ici ne bloque donc rien côté client ; il est transmis à
// titre indicatif (formulaire de contact) ou sert simplement à garder le
// lien du CV hors du HTML statique, invisible aux robots qui n'exécutent
// pas de JavaScript, sans imposer de friction aux visiteurs humains.
export function useRecaptchaAction(action: string) {
  const { executeRecaptcha } = useGoogleReCaptcha();

  return useCallback(async () => {
    if (!executeRecaptcha) return null;
    return executeRecaptcha(action);
  }, [executeRecaptcha, action]);
}
