import { ABOUT } from "@/lib/constants";
import RenderMarkdown from "../ui/render-markdown";

export function About() {
  return (
    <section id="about" className="pixel-section">
      <div className="mx-auto max-w-5xl">
        <div className="pixel-panel pixel-corner-blocks relative px-5 py-8 md:px-8">
          <h2 className="pixel-text pixel-section-title text-2xl leading-relaxed text-secondary-readable md:text-3xl">
            Hi there! 👋
          </h2>
          <div className="grid gap-6 md:grid-cols-[28px_1fr]">
            <div
              className="hidden border-[3px] border-border bg-primary shadow-[4px_4px_0_var(--pixel-shadow)] md:block"
              aria-hidden="true"
            />
            <div className="pixel-inner-panel space-y-6 p-5 text-base leading-8 text-muted-foreground md:p-6 md:text-lg">
              <RenderMarkdown content={ABOUT} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
