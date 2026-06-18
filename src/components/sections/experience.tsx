import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EXPERIENCES } from "@/lib/constants";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import RenderMarkdown from "../ui/render-markdown";

export function Experience() {
  return (
    <section id="experience" className="pixel-section">
      <div className="mx-auto max-w-5xl">
        <h2 className="pixel-text pixel-section-title text-2xl leading-relaxed text-primary md:text-4xl">
          Experience
        </h2>
        <div className="relative space-y-8 pl-5 md:pl-10">
          <div
            className="absolute top-4 bottom-4 left-1.5 w-2 border-x-2 border-border bg-secondary shadow-[4px_0_0_var(--pixel-shadow)] md:left-4"
            aria-hidden="true"
          />
          {EXPERIENCES?.map((exp, index) => (
            <div key={index} className="relative">
              <div
                className="absolute top-8 -left-5 size-6 border-[3px] border-border bg-accent shadow-[4px_4px_0_var(--pixel-shadow)] md:-left-10"
                aria-hidden="true"
              />
              <Card className="group transition-[transform,box-shadow] duration-150 ease-linear hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2 flex-1">
                      <CardDescription className="pixel-text inline-flex border-2 border-border bg-background px-2 py-1 text-[9px] text-secondary shadow-[3px_3px_0_var(--pixel-shadow)]">
                        {exp?.period}
                      </CardDescription>
                      <CardTitle className="pt-2 group-hover:text-primary">
                        <a
                          href={exp?.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          {exp?.title} · {exp?.company}
                          <ArrowUpRightIcon className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="pixel-inner-panel p-4 leading-7 text-muted-foreground">
                    <RenderMarkdown content={exp?.description} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp?.skills?.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
