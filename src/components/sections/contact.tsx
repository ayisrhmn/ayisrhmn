import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialMedia } from "@/lib/apis/social-media/social-media-type";
import { ChatIcon, EnvelopeSimpleIcon } from "@phosphor-icons/react/dist/ssr";

interface ContactProps {
  socialMedias: SocialMedia[];
}

export function Contact({ socialMedias }: ContactProps) {
  const email = socialMedias?.find((v) => v?.name === "Email");
  const linkedIn = socialMedias?.find((v) => v?.name === "LinkedIn");

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl">Let's Work Together</CardTitle>
            <CardDescription className="text-lg pt-2">
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
            <p className="text-center text-sm text-muted-foreground pt-4">
              Usually responds within 24 hours
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
