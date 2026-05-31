import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.learnit3d.electricalfoundations',
  appName: 'LearnIt3D Electrical Foundations',
  webDir: 'dist/web',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: false
  },
  ios: {
    contentInset: 'automatic'
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
