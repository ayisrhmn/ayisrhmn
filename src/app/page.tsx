import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { aboutApi, experienceApi, heroApi, socialMediaApi } from "@/lib/apis";
import { safePromise } from "@/lib/utils";
import { notFound } from "next/navigation";
// import { Projects } from "@/components/sections/projects";

const getSiteContent = async () => {
  const [data, fallback] = await safePromise(async () => {
    const hero = await heroApi.getHero();
    const about = await aboutApi.getAbout();
    const experiences = await experienceApi.getExperiences();
    const socialMedias = await socialMediaApi.getSocialMedias();

    return {
      hero: hero?.data?.[0] ?? null,
      about: about?.data?.[0] ?? null,
      experiences: experiences?.data ?? [],
      socialMedias: socialMedias?.data ?? [],
    };
  });

  return data || fallback;
};

export default async function Home() {
  try {
    const { hero, about, experiences, socialMedias } = await getSiteContent();

    return (
      <main className="min-h-screen">
        <Hero hero={hero} socialMedias={socialMedias} />
        <About about={about} />
        <Experience experiences={experiences} />
        {/* <Projects /> */}
        <Contact socialMedias={socialMedias} />
        <Footer socialMedias={socialMedias} />
        <ScrollIndicator />
      </main>
    );
  } catch (error) {
    return notFound();
  }
}
