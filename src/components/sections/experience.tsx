import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EXPERIENCES } from "@/lib/constants";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import RenderMarkdown from "../ui/render-markdown";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="pixel-text mb-12 text-2xl leading-relaxed text-primary md:text-4xl">
          Experience
        </h2>
        <div className="space-y-8">
          {EXPERIENCES?.map((exp, index) => (
            <Card key={index} className="group pixel-press">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <CardDescription className="pixel-text text-[9px] text-secondary">
                      {exp?.period}
                    </CardDescription>
                    <CardTitle className="group-hover:text-primary">
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
                <div className="leading-7 text-muted-foreground">
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
          ))}
        </div>
      </div>
    </section>
  );
}
