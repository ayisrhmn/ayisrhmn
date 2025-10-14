import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Experience as ExperienceType } from "@/lib/apis/experience/experience-type";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import RenderMarkdown from "../ui/render-markdown";

interface ExperienceProps {
  experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card key={exp.id} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <CardDescription className="text-sm font-mono">{exp.period}</CardDescription>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2"
                      >
                        {exp.title} · {exp.company}
                        <ArrowUpRightIcon className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-muted-foreground leading-relaxed">
                  <RenderMarkdown content={exp.description} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
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
