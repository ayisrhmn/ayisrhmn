import { About as AboutType } from "@/lib/apis/about/about-type";
import RenderMarkdown from "../ui/render-markdown";

interface AboutProps {
  about: AboutType;
}

export function About({ about }: AboutProps) {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Hi there! 👋</h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <RenderMarkdown content={about?.content} />
        </div>
      </div>
    </section>
  );
}
