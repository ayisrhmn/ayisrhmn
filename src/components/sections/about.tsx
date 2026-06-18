import { ABOUT } from "@/lib/constants";
import RenderMarkdown from "../ui/render-markdown";

export function About() {
  return (
    <section id="about" className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="pixel-panel px-5 py-8 md:px-8">
          <h2 className="pixel-text mb-8 text-2xl leading-relaxed text-secondary md:text-3xl">
            Hi there! 👋
          </h2>
          <div className="space-y-6 border-l-4 border-primary pl-4 text-base leading-8 text-muted-foreground md:text-lg">
            <RenderMarkdown content={ABOUT} />
          </div>
        </div>
      </div>
    </section>
  );
}
