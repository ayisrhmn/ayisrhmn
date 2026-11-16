import { PROJECTS } from "@/lib/constants";
import { techKeysFor } from "@/lib/tech";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { SectionHeading } from "../ui/section-heading";

const pad = (value: number) => String(value).padStart(2, "0");

export function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading index="03" title="Projects" meta={`${pad(PROJECTS.length)} selected`} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(440px,100%),1fr))] gap-8">
        {PROJECTS.map((project, index) => (
          <article
            key={project.name}
            data-techs={techKeysFor(project.tags, project.description)}
            className="group reveal flex flex-col border border-border bg-card transition-colors hover:border-border-strong"
          >
            <div className="flex items-center justify-between gap-3 border-b border-border px-4 font-mono text-xs text-subtle-foreground">
              <span aria-hidden="true" className="transition-colors group-hover:text-highlight">
                {pad(index + 1)}
              </span>
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
            <div className="overflow-hidden border-b border-border">
              <img
                src={project.image}
                alt={`${project.name} preview`}
                loading="lazy"
                decoding="async"
                className="aspect-[16/10] w-full origin-top object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-2.5 px-6 pt-[22px] pb-5">
              <h3 className="font-display text-[22px] leading-tight font-semibold tracking-[-0.02em] transition-colors">
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
        ))}
      </div>
    </section>
  );
}
