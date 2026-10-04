import WorkExperienceCard from "@/components/work-experience-card";
import { experiences } from "@/config/experience";

export default function ExperienceSection() {
  return (
    <section className="bg-paper text-ink" id="experience">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <header className="grid grid-cols-12 gap-x-5 pb-10 sm:pb-14">
          <h2 className="col-span-12 font-stretch-expanded text-[clamp(2.5rem,7vw,5.5rem)] font-black uppercase leading-[0.88] tracking-[-0.035em] lg:col-span-8">
            Professional Experience
          </h2>
          <p className="col-span-12 mt-4 max-w-[40ch] self-end text-lg leading-snug text-ink-soft lg:col-span-4 lg:mt-0">
            Roles, responsibilities, and impact across companies and projects.
          </p>
        </header>

        <div className="border-b-[3px] border-ink">
          {experiences.map((e) => (
            <WorkExperienceCard key={`${e.company}-${e.dateRange}`} work={e} />
          ))}
        </div>
      </div>
    </section>
  );
}
