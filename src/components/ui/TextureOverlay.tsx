import { cn } from "@/lib/utils";

interface TextureOverlayProps {
  opacity?: number;
  className?: string;
}

export function TextureOverlay({ opacity = 0.05, className }: TextureOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("absolute inset-0 pointer-events-none z-[1]", className)}
      style={{
        backgroundImage: "url('/textures/grain.svg')",
        backgroundSize: "200px 200px",
        backgroundRepeat: "repeat",
        opacity,
      }}
    />
  );
}
