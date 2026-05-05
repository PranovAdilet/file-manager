"use client";

import { Button } from "@/shared/ui";
import { Star } from "lucide-react";

export const ToggleFavoriteButton = () => {
  return (
    <Button onClick={(e) => e.stopPropagation()} variant="ghost">
      <Star size="20" />
    </Button>
  );
};
