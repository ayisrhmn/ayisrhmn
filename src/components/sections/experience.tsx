import { Badge } from "@/components/ui/badge";
import { EXPERIENCES } from "@/lib/constants";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import RenderMarkdown from "../ui/render-markdown";
import { Reveal } from "../ui/reveal";
import { Spotlight } from "../ui/spotlight";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-shell">
        <Reveal>
          <h2 className="section-label mb-6">
            <span aria-hidden="true">02 — </span>
            Experience
          </h2>
        </Reveal>
        <div className="space-y-3">
          {EXPERIENCES?.map((exp, index) => (
            <Reveal key={index} delay={Math.min(index * 0.06, 0.3)}>
              <Spotlight className="group rounded-lg border border-border bg-card p-5 transition-colors md:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div className="font-medium leading-snug">
                    <a
                      href={exp?.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-start gap-1 transition-colors hover:text-highlight"
                    >
                      <span>
                        {exp?.title} <span className="text-subtle-foreground">·</span>{" "}
                        {exp?.company}
                      </span>
                      <ArrowUpRightIcon className="mt-0.5 size-3.5 shrink-0 text-subtle-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                  <div className="shrink-0 font-mono text-xs text-subtle-foreground">
                    {exp?.period}
                  </div>
                </div>
                <div className="prose-content mt-3 text-sm leading-relaxed text-muted-foreground">
                  <RenderMarkdown content={exp?.description} />
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp?.skills?.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
