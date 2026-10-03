/*
  THESIS: The portfolio is a magazine cover story about Himanshu; it refuses the dark card-grid developer template.
  OWN-WORLD: Cover yellow (#ffd500), ink (#0b0b0b), paper white. Archivo across its width axis: expanded black for
  cover lines and titles, normal width for body, condensed bold caps for datelines and controls. Thick 3px ink rules,
  square corners, no cards, no icons.
  STORY: A recruiter or founder learns who Himanshu is and how to reach him on the cover, reads the experience as
  feature chapters, sees shipped work in the contents spread, and emails him from the yellow close.
  FIRST VIEWPORT: Full-bleed yellow. Dateline rule on top; "HI, I AM / HIMANSHU!" at up to 8rem across all columns,
  overlapping the portrait on the right; bio deck, email call-out, and the typographic tech list bottom left.
  FORM: Cover Story (business-magazine feature), candidate 4 of 7, seed 8df069ef; staging: cover, chapters, contents, close.
*/
import { siteConfig } from "@/config/site";
import HeroSection from "@/components/hero-section.client";
import ProjectsSection from "@/components/projects-section";
import ExperienceSection from "@/components/experience-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection
        githubUrl={siteConfig.links.github}
        linkedinUrl={siteConfig.links.linkedin}
      />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
