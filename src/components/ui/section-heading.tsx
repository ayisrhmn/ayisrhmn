import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  title: string;
  meta?: string;
  // Renders the title as a small label instead of a display heading.
  compact?: boolean;
}

export function SectionHeading({ index, title, meta, compact = false }: SectionHeadingProps) {
  return (
    <div className="flex items-baseline gap-4 border-t border-border-strong pt-5">
      <span aria-hidden="true" className="font-mono text-[13px] text-highlight">
        {index}
      </span>
      <h2
        className={cn(
          compact
            ? "label text-[13px] text-subtle-foreground"
            : "font-display text-[clamp(1.75rem,3.2vw,2.5rem)] leading-[1.1] font-semibold tracking-[-0.03em]",
        )}
      >
        {title}
      </h2>
      {meta && (
        <span className="ml-auto shrink-0 font-mono text-[13px] text-subtle-foreground">
          {meta}
        </span>
      )}
    </div>
  );
}
