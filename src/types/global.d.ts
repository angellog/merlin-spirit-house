declare global {
  interface Window {
    jivo_api: {
      open: () => void;
      setWidgetColor: (color1: string, color2: string) => void;
    };
    jivo_onLoadCallback: () => void;
    jivo_onMessageSent: () => void;
    jivo_onIntroduction: () => void;
    gtag: (...args: unknown[]) => void;
  }
}

export {};
