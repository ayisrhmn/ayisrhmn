import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PROJECTS } from "@/lib/constants";
import { ArrowSquareOutIcon, GithubLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="pixel-text mb-12 text-2xl leading-relaxed text-accent md:text-4xl">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <Card key={index} className="group overflow-hidden">
              <div className="m-4 aspect-video overflow-hidden border-[3px] border-border bg-muted shadow-[4px_4px_0_var(--pixel-shadow)]">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-200 ease-linear group-hover:scale-[1.03]"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-start justify-between gap-4">
                  <span className="leading-relaxed">{project.title}</span>
                  <div className="flex gap-2">
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
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
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
