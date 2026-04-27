import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export function WdvsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12", className)} aria-hidden="true">
      <rect x="4" y="10" width="40" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="19" width="40" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="28" width="40" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 38 L44 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 10 L4 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M44 10 L44 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PutzeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12", className)} aria-hidden="true">
      <path d="M10 34 L24 8 L38 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 30 L32 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="20" y="34" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M28 14 Q34 12 36 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 20 Q36 18 38 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function SpachtelIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12", className)} aria-hidden="true">
      <path d="M8 40 L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 40 L14 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 16 L40 10 Q42 18 36 22 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 38 Q20 30 30 26" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 3" />
      <path d="M18 34 Q24 26 34 22" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 3" />
    </svg>
  );
}

export function NatursteinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12", className)} aria-hidden="true">
      <path d="M4 38 L12 14 L22 20 L30 10 L44 38 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 14 L22 38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M22 20 L30 38" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M4 30 L44 30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <circle cx="30" cy="10" r="2" fill="currentColor" />
    </svg>
  );
}

export function TrockenbauIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12", className)} aria-hidden="true">
      <rect x="6" y="8" width="4" height="32" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="38" y="8" width="4" height="32" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="8" width="40" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="37" width="40" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="8" x2="20" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
      <line x1="28" y1="8" x2="28" y2="40" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
    </svg>
  );
}

export function FliesenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12", className)} aria-hidden="true">
      <rect x="4" y="4" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="26" y="4" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="4" y="26" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <rect x="26" y="26" width="18" height="18" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <line x1="13" y1="4" x2="13" y2="22" stroke="currentColor" strokeWidth="0.75" />
      <line x1="4" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

export function KernlochIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={cn("w-12 h-12", className)} aria-hidden="true">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
      <line x1="24" y1="4" x2="24" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="40" x2="24" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="4" y1="24" x2="8" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="40" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const iconMap: Record<string, React.ComponentType<IconProps>> = {
  wdvs: WdvsIcon,
  putze: PutzeIcon,
  spachtel: SpachtelIcon,
  naturstein: NatursteinIcon,
  trockenbau: TrockenbauIcon,
  fliesen: FliesenIcon,
  kernloch: KernlochIcon,
};

interface ServiceIconProps {
  id: string;
  className?: string;
}

export function ServiceIcon({ id, className }: ServiceIconProps) {
  const Icon = iconMap[id] ?? WdvsIcon;
  return <Icon className={className} />;
}
