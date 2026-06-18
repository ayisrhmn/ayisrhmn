import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SOCIAL_MEDIAS } from "@/lib/constants";
import { ChatIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";

export function Contact() {
  const email = SOCIAL_MEDIAS?.find((v) => v?.name === "Email");
  const linkedIn = SOCIAL_MEDIAS?.find((v) => v?.name === "LinkedIn");

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
