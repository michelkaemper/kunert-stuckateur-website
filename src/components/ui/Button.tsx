"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm tracking-widest",
  md: "px-7 py-3.5 text-sm tracking-widest",
  lg: "px-10 py-4 text-base tracking-widest",
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-sand text-pitch font-display font-bold hover:bg-sand-dark",
  outline:
    "border border-sand text-sand bg-transparent hover:bg-sand hover:text-pitch",
  ghost:
    "text-stone bg-transparent hover:text-sand",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 font-display uppercase transition-colors duration-200 cursor-pointer";

  const classes = cn(baseClasses, sizeClasses[size], variantClasses[variant], className);

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}
