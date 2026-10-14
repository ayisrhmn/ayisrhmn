import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "@/lib/constants";
import { ArrowSquareOutIcon, GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "../ui/reveal";
import { Spotlight } from "../ui/spotlight";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-shell">
        <Reveal>
          <h2 className="section-label mb-6">
            <span aria-hidden="true">03 — </span>
            Projects
          </h2>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <Reveal key={index} delay={(index % 2) * 0.08} className="h-full">
              <Spotlight className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card transition-colors">
                <div className="aspect-[16/9] overflow-hidden border-b border-border bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover opacity-90 transition duration-500 ease-out group-hover:scale-[1.02] group-hover:opacity-100"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4 md:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-sm leading-snug font-medium">{project.title}</div>
                    <div className="-mt-1.5 -mr-1.5 flex shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex size-7 items-center justify-center rounded-md text-subtle-foreground transition-colors hover:bg-accent hover:text-foreground"
                          aria-label="View source code"
                        >
                          <GithubLogoIcon className="size-4" />
                        </a>
                      )}
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-7 items-center justify-center rounded-md text-subtle-foreground transition-colors hover:bg-accent hover:text-foreground"
                        aria-label="View live demo"
                      >
                        <ArrowSquareOutIcon className="size-4" />
                      </a>
                    </div>
                  </div>
                  <div className="mt-2 flex-1 text-sm leading-relaxed text-subtle-foreground">
                    {project.description}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
