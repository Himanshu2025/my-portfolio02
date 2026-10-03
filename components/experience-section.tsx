import WorkExperienceCard, {
  type WorkExperience,
} from "@/components/work-experience-card";

const experiences: WorkExperience[] = [
  {
    company: "Flectēre",
    role: "Forward Deployed Engineer",
    dateRange: "Sep 2026 - Present",
    bullets: [],
  },
  {
    company: "LaunchKey Lab",
    role: "Full-Stack Developer",
    dateRange: "Apr 2026 - Jun 2026",
    bullets: [
      "Shipped production features end-to-end across a TanStack Start application (TanStack Query, React, TypeScript), owning each feature from technical spec through to deployment.",
      "Delivered 4 timeboxed spike builds (3–5 day prototypes) to validate technical feasibility of new product directions, giving stakeholders working demos that informed go/no-go decisions and avoided weeks of speculative build-out.",
      "Translated Figma designs into pixel-accurate, responsive pages in React + TypeScript, collaborating with design and product teams.",
      "Took part in designing the relational database schema with Prisma ORM, contributing data models and safe, reviewable migrations that established the foundations for new product modules.",
      "Accelerated delivery by ~30% using AI-assisted workflows (Cursor, Claude Code), configuring custom hooks, rules, skills, and MCP integrations to standardise scaffolding, refactoring, and test generation, while maintaining quality through structured code review.",
    ],
  },
  {
    company: "People for Nature",
    role: "Volunteer Frontend Developer",
    dateRange: "Jan 2026 - April 2026",
    bullets: [
      "Developed automated content management system using Next.js, WordPress (headless CMS), and GraphQL to dynamically manage 50+ categorized blog posts across 10+ conservation project pages.",
      "Reduced manual content management overhead by 70%, enabling conservation team to focus on core environmental initiatives rather than technical website maintenance.",
      "Worked with non-technical stakeholders to translate organizational needs into technical solutions, supporting research and conservation teams.",
    ],
  },
  {
    company: "Monash University",
    role: "Full Stack Developer & Project Coordinator",
    dateRange: "Jul 2025 - Oct 2025",
    bullets: [
      "Built a full-stack climate risk web app using React, TypeScript, FastAPI, and Mapbox, with real-time maps that loaded 40% faster.",
      "Created modular APIs and reusable React components, making the codebase easier to maintain and cutting repetition by 30%.",
      "Set up CI/CD pipelines with testing and version control, which halved deployment time and improved build stability.",
    ],
  },
  {
    company: "AI SaaS Startup (Stealth)",
    role: "Full Stack Developer",
    dateRange: "Nov 2024 - Jul 2025",
    bullets: [
      "Delivered 12+ full-stack features from database to UI, building modular React/TypeScript components integrated with Node.js backend.",
      "Implemented user activity logging and seamless frontend-backend data flow for better traceability and user experience.",
      "Worked in agile sprints with the product owner to clarify requirements, deliver MVPs on time, and incorporate feedback quickly.",
    ],
  },
  {
    company: "Jio Platforms Limited",
    role: "Assistant Manager (Headend Playout Engineer)",
    dateRange: "Feb 2023 - Nov 2023",
    bullets: [
      "Monitored video stream reliability, reducing downtime incidents and improving overall service stability.",
      "Collaborated with cross-functional teams to troubleshoot real-time issues, ensuring smooth delivery of high-traffic live events.",
      "Monitored streaming infrastructure and coordinated with technical teams to reduce incident response time, supporting reliable delivery of 100+ live channels to millions of concurrent viewers during IPL 2023.",
    ],
  },
];

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
