import { siteConfig } from "@/config/site";
import HeroSection from "@/components/hero-section.client";

export default function Home() {
  return (
    <HeroSection
      githubUrl={siteConfig.links.github}
      linkedinUrl={siteConfig.links.linkedin}
    />
  );
}
