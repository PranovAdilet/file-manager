"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader2 } from "lucide-react";

import { cn } from "../lib";

type Variant = "default" | "ghost" | "square";

type Props = {
  children?: ReactNode;
  variant?: Variant;
  loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = "default",
  loading = false,
  disabled,
  className,
  ...props
}: Props) => {
  return (
    <button
      disabled={disabled || loading}
      className={cn(
        "transition-colors rounded-md text-sm font-medium",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
        "disabled:pointer-events-none disabled:opacity-50",

        {
          // default
          "px-4 py-2 bg-background-tertiary hover:bg-hover":
            variant === "default",

          // ghost
          "bg-transparent px-1 py-1 text-foreground-muted hover:text-foreground":
            variant === "ghost",

          // square
          "flex items-center justify-center px-3 py-2 bg-background-tertiary hover:bg-hover":
            variant === "square",
        },

        className,
      )}
      {...props}
    >
      {loading ? <Loader2 className="size-4 animate-spin" /> : children}
    </button>
  );
};
