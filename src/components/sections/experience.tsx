import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { EXPERIENCES } from "@/lib/constants";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow">
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
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
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
