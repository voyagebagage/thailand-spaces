/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_WEB3_FORM_ACCES_KEY: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }