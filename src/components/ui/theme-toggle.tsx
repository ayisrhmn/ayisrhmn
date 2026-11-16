"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import type * as React from "react";
import { flushSync } from "react-dom";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || reduceMotion) {
      setTheme(next);
      return;
    }

    // Origin of the circular reveal defined in globals.css; keyboard activation has no pointer
    // position, so it falls back to the center of the button.
    const rect = event.currentTarget.getBoundingClientRect();
    const root = document.documentElement;
    root.style.setProperty("--vt-x", `${event.clientX || rect.left + rect.width / 2}px`);
    root.style.setProperty("--vt-y", `${event.clientY || rect.top + rect.height / 2}px`);

    document.startViewTransition(async () => {
      flushSync(() => setTheme(next));
      // next-themes applies the class in an effect; yield once so the snapshot sees it.
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
  };

  return (
    <button
      type="button"
      aria-label="Toggle light and dark theme"
      onClick={toggle}
      className="relative flex size-11 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
    >
      <SunIcon className="size-[18px] scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90" />
      <MoonIcon className="absolute size-[18px] scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0" />
    </button>
  );
}
