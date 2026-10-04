/*
  THESIS: Himanshu's career reads as a product's release notes; it refuses the dark card-grid developer template.
  OWN-WORLD: White paper, ink #0d1117, release-tag blue #2346ff, added-green #0a7f3f. Schibsted Grotesk for prose,
  headings, and version tags (Black in the hero, extrabold elsewhere); JetBrains Mono only for dates and metadata.
  Hairline 1px rules, square corners, a sticky version rail, "+" change markers, full-colour tech logos as the
  dependency grid.
  STORY: A recruiter or founder lands on the latest release (who, role, how to email), scans dependencies, reads the
  changelog of roles with highlighted figures, opens shipped packages, and emails from the closing block.
  FIRST VIEWPORT: Version rail left; "Latest release" badge, v2026.09 huge in tag blue, "Hi, I am Himanshu!" with the
  current role, bio, email as the primary black button, and the photo card with mono metadata on the right.
  FORM: Release Notes (software changelog). User-selected prototype D after rejecting the rolled Cover Story; no seed key.
*/
import HeroSection from "@/components/hero-section.client";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import DependenciesSection from "@/components/dependencies-section";
import ReleaseRail from "@/components/release-rail.client";

export default function Home() {
  return (
    <div className="mx-auto grid max-w-[1240px] gap-14 px-5 sm:px-8 lg:grid-cols-[220px_minmax(0,1fr)]">
      <ReleaseRail />
      <div className="min-w-0 pb-24">
        <HeroSection />
        <DependenciesSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
}
