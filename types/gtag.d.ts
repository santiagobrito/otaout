interface Window {
  gtag: (
    command: 'consent' | 'config' | 'event' | 'set' | 'js',
    ...args: unknown[]
  ) => void;
  dataLayer: unknown[];
}
