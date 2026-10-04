import WorkExperienceCard from "@/components/work-experience-card";
import { experiences } from "@/config/experience";

export default function ExperienceSection() {
  return (
    <section aria-labelledby="experience-heading" className="scroll-mt-14 border-b border-line py-14" id="experience">
      <h2 className="text-3xl font-extrabold tracking-[-0.02em]" id="experience-heading">
        Professional Experience
      </h2>
      <p className="mt-1.5 text-soft">Roles, responsibilities, and impact across companies and projects.</p>

      <div className="mt-4">
        {experiences.map((e) => (
          <WorkExperienceCard key={e.company} work={e} />
        ))}
      </div>
    </section>
  );
}
