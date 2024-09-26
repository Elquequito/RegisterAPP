import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'RegisterAPP',
  webDir: 'www',
  bundledWebRuntime: false, // Esto es opcional, pero si no necesitas el runtime de web, puedes dejarlo en false.
  plugins: {
    BarcodeScanner: {
      // Aquí puedes agregar configuraciones específicas si es necesario
    }
  }
};

export default config;
