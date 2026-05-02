"use client";

import { InputHTMLAttributes } from "react";
import { cn } from "../lib";

type Props = {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

export const Input = ({ value, onChange, disabled, ...props }: Props) => {
  return (
    <input
      type="text"
      className={cn(
        "w-full py-2 px-4 rounded-3xl border border-border-light outline-none focus:border-border focus:ring-0",
        {
          "opacity-50 cursor-not-allowed": disabled,
        },
      )}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
      {...props}
    />
  );
};
