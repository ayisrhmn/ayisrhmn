import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECTS } from "@/lib/constants";
import { ArrowSquareOutIcon, GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function Projects() {
  return (
    <section id="projects" className="pixel-section">
      <div className="pixel-section-shell">
        <h2 className="pixel-text pixel-section-title text-2xl leading-relaxed text-accent md:text-4xl">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden transition-transform duration-150 hover:-translate-y-1"
            >
              <div className="absolute top-3 right-3 z-10 flex gap-1" aria-hidden="true">
                <span className="size-3 border-2 border-border bg-primary" />
                <span className="size-3 border-2 border-border bg-secondary" />
                <span className="size-3 border-2 border-border bg-accent" />
              </div>
              <div className="m-4 bg-background p-2 shadow-[4px_4px_0_var(--pixel-shadow)]">
                <div className="aspect-video overflow-hidden border-[3px] border-border bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-200 ease-linear group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="grid gap-4 sm:grid-cols-[1fr_auto]">
                  <span className="leading-relaxed">{project.title}</span>
                  <div className="flex shrink-0 gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pixel-press flex size-8 items-center justify-center border-2 border-border bg-background text-muted-foreground shadow-[3px_3px_0_var(--pixel-shadow)] hover:text-primary"
                        aria-label="View source code"
                      >
                        <GithubLogoIcon className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pixel-press flex size-8 items-center justify-center border-2 border-border bg-background text-muted-foreground shadow-[3px_3px_0_var(--pixel-shadow)] hover:text-primary"
                      aria-label="View live demo"
                    >
                      <ArrowSquareOutIcon className="w-5 h-5" />
                    </a>
                  </div>
                </CardTitle>
                <CardDescription className="pixel-inner-panel p-4 leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 border-t-2 border-border pt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
