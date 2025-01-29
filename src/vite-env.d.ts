/// <reference types="vite/client" />
declare module "@left4code/tw-starter/dist/js/dom";
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_ENCRYPTION_KEY: string;
  // Add more environment variables as needed...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
