import { useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const CV_PATH = "/documents/CV_ROCIPON_Thibaud_2026.pdf";
const CV_FILENAME = "CV_ROCIPON_Thibaud_2026.pdf";

// Le site est 100% statique : il n'y a pas de backend pour appeler l'API
// siteverify de Google avec la clé secrète et lire le score renvoyé par
// reCAPTCHA v3. L'appel ci-dessous ne bloque donc rien côté client — sa
// vraie valeur est de garder le lien du PDF hors du HTML statique, invisible
// aux robots qui n'exécutent pas de JavaScript, sans imposer la moindre
// friction aux visiteurs humains (pas de case à cocher, pas de popup).
export function useCvDownload() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  return useCallback(async () => {
    if (executeRecaptcha) {
      await executeRecaptcha("download_cv");
    }
    const link = document.createElement("a");
    link.href = CV_PATH;
    link.download = CV_FILENAME;
    link.click();
  }, [executeRecaptcha]);
}
