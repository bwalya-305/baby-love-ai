import React from "react";
import { Theme } from "@/data/names";

interface ThemeTagProps {
  theme: Theme;
  selected: boolean;
  onToggle: (theme: Theme) => void;
}

export default function ThemeTag({ theme, selected, onToggle }: ThemeTagProps) {
  return (
    <button
      onClick={() => onToggle(theme)}
      className={`rounded-full border px-4 py-1.5 font-serif text-sm italic transition-all ${
        selected
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-border bg-background text-foreground hover:border-primary/50 hover:bg-secondary"
      }`}
    >
      {theme}
    </button>
  );
}
