"use client";

import { Input } from "@/shared/ui";
import { Search } from "lucide-react";
import dynamic from "next/dynamic";

export const ThemeSwitch = dynamic(
  () => import("@/features/theme-switch").then((mod) => mod.ThemeSwitch),
  {
    ssr: false,
    loading: () => (
      <div className="w-11 h-6 rounded-full bg-background-tertiary animate-pulse" />
    ),
  },
);

export const Header = () => {
  return (
    <div className="h-20 flex items-center justify-between shrink-0 border-b border-border px-4">
      <h1 className="text-base font-medium">File Manager</h1>
      <div className="flex items-center gap-6">
        <ThemeSwitch />
        <div className="flex items-center gap-3">
          <button>
            <Search className="size-7 text-foreground-muted" />
          </button>
          <Input placeholder="Search" />
        </div>
      </div>
    </div>
  );
};
