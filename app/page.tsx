import { siteConfig } from "@/config/site";
import HeroSection from "@/components/hero-section.client";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";

export default function Home() {
  return (
    <>
      <HeroSection
        githubUrl={siteConfig.links.github}
        linkedinUrl={siteConfig.links.linkedin}
      />
      <ProjectsSection />
      <ExperienceSection />
    </>
  );
}
