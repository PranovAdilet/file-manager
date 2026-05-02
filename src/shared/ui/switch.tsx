"use client";

import { InputHTMLAttributes } from "react";
import { cn } from "../lib";

type Props = {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked">;

export const Switch = ({
  className,
  checked,
  onCheckedChange,
  disabled,
  ...props
}: Props) => {
  return (
    <label
      className={cn(
        "relative inline-flex items-center",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
        className,
      )}
    >
      <input
        role="switch"
        aria-checked={checked}
        checked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        type="checkbox"
        className="sr-only peer"
        disabled={disabled}
        {...props}
      />
      <div className={cn(base, state, focus, thumb, thumbState, hover)}></div>
    </label>
  );
};

const base = "w-11 h-6 rounded-full transition-colors relative";

const state = "bg-background-tertiary peer-checked:bg-primary";

const focus = "peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-focus";

const thumb =
  "after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-background after:border after:border-border after:transition-all";

const thumbState =
  "peer-checked:after:translate-x-full peer-checked:after:border-primary";

const hover = "hover:bg-hover peer-checked:hover:bg-primary-hover";
