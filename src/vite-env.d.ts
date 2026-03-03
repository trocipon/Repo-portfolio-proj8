/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  readonly REACT_APP_RECAPTCHA_SITE_KEY: string;
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
