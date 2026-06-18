import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SOCIAL_MEDIAS } from "@/lib/constants";
import { ChatIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";

export function Contact() {
  const email = SOCIAL_MEDIAS?.find((v) => v?.name === "Email");
  const linkedIn = SOCIAL_MEDIAS?.find((v) => v?.name === "LinkedIn");

  return (
    <section id="contact" className="pixel-section">
      <div className="mx-auto max-w-3xl">
        <Card className="pixel-corner-blocks relative">
          <div
            className="mx-5 grid grid-cols-8 gap-1 border-2 border-border bg-background p-1 md:mx-6"
            aria-hidden="true"
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <span
                key={index}
                className={`h-3 border border-border ${
                  index % 3 === 0 ? "bg-accent" : index % 2 === 0 ? "bg-secondary" : "bg-primary"
                }`}
              />
            ))}
          </div>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl leading-relaxed text-primary md:text-3xl">
              Let's Work Together
            </CardTitle>
            <CardDescription className="pt-2 text-base leading-7 md:text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="pixel-inner-panel flex flex-col justify-center gap-4 p-4 sm:flex-row">
              <Button size="lg" asChild className="gap-2">
                <a href={email?.link} target="_self">
                  <EnvelopeSimpleIcon className="w-5 h-5" />
                  Email Me
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent">
                <a href={linkedIn?.link} target="_blank" rel="noopener noreferrer">
                  <ChatIcon className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
            <p className="pixel-text pt-4 text-center text-[9px] text-muted-foreground">
              Usually responds within 24 hours
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
