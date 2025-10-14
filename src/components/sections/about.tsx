import { ABOUT_US } from "@/lib/constants";
import RenderMarkdown from "../ui/render-markdown";

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Hi there! 👋</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <RenderMarkdown content={ABOUT_US} />
        </div>
      </div>
    </section>
  );
}
