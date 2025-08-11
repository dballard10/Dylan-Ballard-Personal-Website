/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PROD: boolean;
  readonly DEV: boolean;
  readonly MODE: string;
  // Add any custom environment variables here
  // readonly VITE_CUSTOM_VAR: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
