import { useCallback } from "react";
import { useRecaptchaAction } from "./use-recaptcha-action";

const CV_PATH = "/documents/CV_ROCIPON_Thibaud_2026.pdf";
const CV_FILENAME = "CV_ROCIPON_Thibaud_2026.pdf";

export function useCvDownload() {
  const runRecaptcha = useRecaptchaAction("download_cv");

  return useCallback(async () => {
    await runRecaptcha();
    const link = document.createElement("a");
    link.href = CV_PATH;
    link.download = CV_FILENAME;
    link.click();
  }, [runRecaptcha]);
}
