"use client";

import { useTheme } from "next-themes";

import { Switch } from "@/shared/ui";

export const ThemeSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return <Switch checked={resolvedTheme === "dark"} onCheckedChange={toggle} />;
};
