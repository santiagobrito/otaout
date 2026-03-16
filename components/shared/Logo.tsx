interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
}

export default function Logo({ variant = 'light', className = '' }: LogoProps) {
  const otaColor = variant === 'light' ? '#0F172A' : '#f5f5f2';
  const outColor = '#E8440A';

  return (
    <span
      className={`font-syne font-extrabold text-2xl tracking-tight select-none ${className}`}
    >
      <span style={{ color: otaColor }}>OTA</span>
      <span style={{ color: outColor }}>out</span>
    </span>
  );
}
