"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib";

type Variant = "default" | "ghost" | "square";

type Props = {
  children?: ReactNode;
  variant?: Variant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant = "default",
  className,
  ...props
}: Props) => {
  return (
    <button
      className={cn(
        "transition-colors rounded-md text-sm font-medium",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",

        {
          // default
          "px-4 py-2 bg-background-tertiary hover:bg-hover":
            variant === "default",

          // прозрачная
          "bg-transparent px-1 py-1 text-foreground-muted hover:text-foreground":
            variant === "ghost",

          // под иконки
          "flex items-center justify-center px-3 py-2 bg-background-tertiary hover:bg-hover":
            variant === "square",
        },

        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
