import { PROJECTS } from "@/lib/constants";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../ui/reveal";
import { SectionHeading } from "../ui/section-heading";

const pad = (value: number) => String(value).padStart(2, "0");

export function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading index="03" title="Projects" meta={`${pad(PROJECTS.length)} selected`} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(440px,100%),1fr))] gap-8">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.name} delay={(index % 2) * 0.08} className="h-full">
            <article className="flex h-full flex-col border border-border bg-card">
              <div className="flex items-center justify-between gap-3 border-b border-border px-4 font-mono text-xs text-subtle-foreground">
                <span aria-hidden="true">{pad(index + 1)}</span>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link min-w-0"
                >
                  <span className="truncate">{project.host}</span>
                  <ArrowUpRightIcon aria-hidden="true" className="size-3 shrink-0" />
                </a>
              </div>
              <img
                src={project.image}
                alt={`${project.name} preview`}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full border-b border-border object-cover object-top"
              />
              <div className="flex flex-1 flex-col gap-2.5 px-6 pt-[22px] pb-5">
                <h3 className="font-display text-[22px] leading-tight font-semibold tracking-[-0.02em]">
                  {project.name}
                </h3>
                <p className="text-sm font-medium">{project.tagline}</p>
                <p className="text-[15px] leading-[1.6] text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-auto flex min-h-11 flex-wrap items-center justify-between gap-x-4 font-mono text-[12.5px] text-subtle-foreground">
                  <span className="py-2">{project.tags.join(" · ")}</span>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-link text-foreground"
                    >
                      Source
                      <ArrowUpRightIcon aria-hidden="true" className="size-3" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
