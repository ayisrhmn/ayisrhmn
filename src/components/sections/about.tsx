import { ABOUT } from "@/lib/constants";
import RenderMarkdown from "../ui/render-markdown";
import { Reveal } from "../ui/reveal";

export function About() {
  return (
    <section id="about" className="section">
      <Reveal className="section-shell">
        <h2 className="section-label mb-6">
          <span aria-hidden="true">01 — </span>
          Hi there! 👋
        </h2>
        <div className="prose-content leading-relaxed text-muted-foreground md:text-[17px] md:leading-8">
          <RenderMarkdown content={ABOUT} />
        </div>
      </Reveal>
    </section>
  );
}
