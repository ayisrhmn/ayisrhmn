import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "pixel-text pixel-press inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none border-[3px] text-[10px] font-normal disabled:pointer-events-none disabled:translate-x-1 disabled:translate-y-1 disabled:opacity-60 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-4 focus-visible:ring-ring/70 aria-invalid:ring-destructive/30 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "border-border bg-primary text-primary-foreground shadow-[4px_4px_0_var(--pixel-shadow)]",
        destructive:
          "border-border bg-destructive text-destructive-foreground shadow-[4px_4px_0_var(--pixel-shadow)]",
        outline:
          "border-border bg-background text-foreground shadow-[4px_4px_0_var(--pixel-shadow)] hover:bg-accent hover:text-accent-foreground",
        secondary:
          "border-border bg-secondary text-secondary-foreground shadow-[4px_4px_0_var(--pixel-shadow)]",
        ghost:
          "border-transparent bg-transparent text-foreground shadow-none hover:border-border hover:bg-muted hover:shadow-[4px_4px_0_var(--pixel-shadow)]",
        link: "border-transparent bg-transparent p-0 text-primary shadow-none underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-10 px-4 py-2 has-[>svg]:px-3",
        sm: "min-h-9 gap-1.5 px-3 py-2 text-[9px] has-[>svg]:px-2.5",
        lg: "min-h-12 px-5 py-3 text-[10px] md:text-xs has-[>svg]:px-4",
        icon: "size-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
