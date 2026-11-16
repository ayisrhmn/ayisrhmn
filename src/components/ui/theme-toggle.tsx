"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle light and dark theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative flex size-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
    >
      <SunIcon className="size-[18px] scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90" />
      <MoonIcon className="absolute size-[18px] scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0" />
    </button>
  );
}
