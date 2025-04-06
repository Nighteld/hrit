interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
    // Add other environment variables here if needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }