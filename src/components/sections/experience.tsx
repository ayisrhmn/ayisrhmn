import { EXPERIENCE_RANGE, EXPERIENCES } from "@/lib/constants";
import { techKeysFor } from "@/lib/tech";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import RenderMarkdown from "../ui/render-markdown";
import { SectionHeading } from "../ui/section-heading";

export function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading index="02" title="Experience" meta={EXPERIENCE_RANGE} />
      <div className="flex flex-col border-b border-border">
        {EXPERIENCES.map((exp) => (
          <article
            key={`${exp.company}-${exp.period}`}
            data-techs={techKeysFor(exp.skills, exp.description)}
            className="reveal flex flex-wrap gap-x-8 gap-y-2 border-t border-border py-7"
          >
            <p className="flex h-7 w-[170px] shrink-0 items-center gap-2.5 font-mono text-[13px] text-subtle-foreground">
              {exp.period.includes("Present") && (
                <span aria-hidden="true" className="size-2 bg-highlight" />
              )}
              {exp.period}
            </p>
            <div className="flex min-w-0 flex-[1_1_240px] flex-col items-start">
              <h3 className="font-display text-[21px] leading-7 font-semibold tracking-[-0.02em] transition-colors">
                {exp.title}
              </h3>
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-link text-[15px] text-muted-foreground"
              >
                {exp.company}
                <ArrowUpRightIcon aria-hidden="true" className="size-3" />
              </a>
            </div>
            <div className="flex min-w-0 flex-[2.4_1_420px] flex-col gap-3.5">
              <div className="prose-content text-[15.5px] leading-[1.65] text-pretty text-muted-foreground">
                <RenderMarkdown content={exp.description} />
              </div>
              <p className="font-mono text-[12.5px] leading-[1.7] text-subtle-foreground">
                {exp.skills.join(" · ")}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
