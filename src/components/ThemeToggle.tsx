"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-8 h-8" />;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-300"
      aria-label="Cambiar tema"
    >
      {theme === "dark"
        ? <Sun size={15} className="text-accent" />
        : <Moon size={15} className="text-foreground/60" />
      }
    </button>
  );
}
