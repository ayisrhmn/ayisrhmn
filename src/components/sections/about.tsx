import { ABOUT, ABOUT_LEAD } from "@/lib/constants";
import RenderMarkdown from "../ui/render-markdown";
import { SectionHeading } from "../ui/section-heading";

export function About() {
  return (
    <section id="about" className="section pt-[clamp(4rem,8vw,6.5rem)]">
      <SectionHeading index="01" title="About" />
      <div className="reveal flex flex-wrap gap-x-16 gap-y-8">
        <p className="min-w-0 flex-[2_1_360px] font-display text-[clamp(1.625rem,2.8vw,2.25rem)] leading-[1.2] font-medium tracking-[-0.025em] text-balance">
          {ABOUT_LEAD}
        </p>
        <div className="prose-content min-w-0 flex-[3_1_480px] text-[17px] leading-[1.7] text-pretty text-muted-foreground">
          <RenderMarkdown content={ABOUT} />
        </div>
      </div>
    </section>
  );
}
