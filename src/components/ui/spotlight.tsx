"use client";

import { cn } from "@/lib/utils";
import type * as React from "react";

export function Spotlight({ className, onPointerMove, ...props }: React.ComponentProps<"article">) {
  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    onPointerMove?.(event);
  };

  return (
    <article className={cn("spotlight", className)} onPointerMove={handlePointerMove} {...props} />
  );
}
