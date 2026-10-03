import ProjectCard, { type Project } from "@/components/project-card";

const projects: Project[] = [
  {
    title: "Crack On",
    subtitle: "AI-Native Problem Discovery",
    description:
      "Built and shipped independently: an AI-native platform that surfaces and ranks the real problems Australians are actually complaining about, so founders can validate on evidence instead of hunches. Features an automated pipeline that harvests complaints from Reddit, Hacker News, RSS and ProductReview.com.au, uses an LLM to cluster raw noise into distinct problems, and scores each with a deterministic, reproducible \"Itch Score\" in code — gated by human review before anything publishes.",
    tech: ["Next.js", "TypeScript", "LLM (Claude)", "Supabase"],
    liveLink: "https://www.crackon.app",
  },
  {
    title: "Rexfo",
    subtitle: "SaaS Trading Companion",
    description:
      "Built and shipped a full SaaS product independently — a psychology-first trading companion for retail forex traders that intervenes before trades are placed to prevent emotionally-driven losses. Features a split-screen pre-trade checklist with live TradingView chart integration, an AI-powered Strategy Lab with backtesting, and a trade journal with discipline scoring. Integrated Stripe payments and Google OAuth; deployed on Vercel.",
    tech: ["Next.js", "TypeScript", "Supabase", "Stripe", "Google OAuth"],
    liveLink: "https://www.rexfo.app",
  },
  {
    title: "WeatherTogether",
    subtitle: "Climate Risk Web App",
    description:
      "Built an interactive climate risk web app with Mapbox for geospatial visualization. Delivered the full project in 8 weeks using agile sprints, integrating React frontend with FastAPI backend for a smooth, responsive user experience.",
    tech: ["React", "TypeScript", "FastAPI", "Mapbox", "Tailwind CSS"],
    liveLink: "https://weathertogether.info",
    password: "ie0031",
  },
  {
    title: "CloudPose",
    subtitle: "Pose Estimation API",
    description:
      "Developed and deployed a pose estimation API using FastAPI and Docker, containerized and scaled on Kubernetes (OCI). Tested performance with Locust, achieved 95% uptime under load testing with 100+ concurrent users.",
    tech: ["Python", "FastAPI", "Docker", "Kubernetes", "Locust"],
    demoLink:
      "https://drive.google.com/file/d/1Uf3bmZud00w5fJJYmsUsI_yxynXbFRVm/view",
  },
  {
    title: "BirdTag",
    subtitle: "Serverless Wildlife Data Platform",
    description:
      "Built serverless media tagging system for Monash conservation research using Lambda, S3 event triggers, and DynamoDB with automated bird species detection. Developed query APIs achieving sub-300ms response times through DynamoDB GSI optimization and presigned S3 URLs.",
    tech: [
      "AWS Lambda",
      "S3",
      "DynamoDB",
      "API Gateway",
      "SNS",
      "Python",
      "Docker",
    ],
    githubLink: "https://github.com/your-org/birdtag",
  },
  {
    title: "Mindzen",
    subtitle: "Mental Health Platform",
    description:
      "Built full-stack mental health platform with Vue.js frontend and Firebase/Firestore backend, implementing OAuth authentication and serverless cloud functions. Engineered bulk email system, AI-powered chatbot, admin dashboard, and geolocation services with Google Maps API.",
    tech: ["Vue.js", "Firebase", "Firestore", "JavaScript", "Google Maps"],
    demoLink: "https://www.youtube.com/watch?v=y8Y3enaspyY",
    githubLink: "https://github.com/Himanshu2025/mindzen_webapp",
  },
  {
    title: "Freelance BillingOps",
    subtitle: "Billing & Operations Platform",
    description:
      "Built Freelance BillingOps, a cloud-deployed billing and operations platform for freelancers to manage invoices, clients, and payments in a centralized system. Developed the backend using .NET 10 and ASP.NET Core Web API with Entity Framework Core, implementing secure authentication, rate limiting, and automated database migrations. Integrated Swagger/OpenAPI for API documentation and testing, enabling easier API exploration and developer usability. Implemented PDF invoice generation using QuestPDF and deployed the backend on Render, designing the API to support a modern React-based dashboard frontend.",
    tech: [
      ".NET 10",
      "ASP.NET Core",
      "Entity Framework Core",
      "QuestPDF",
      "Swagger/OpenAPI",
      "Render",
      "React",
    ],
    demoLink: "https://freelance-billingops-1.onrender.com/swagger/index.html",
    githubLink: "https://github.com/Himanshu2025/freelance-billingops",
  },
];

const [openers, entries] = [projects.slice(0, 2), projects.slice(2)];

export default function ProjectsSection() {
  return (
    <section className="bg-ink text-paper" id="projects">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <header className="grid grid-cols-12 gap-x-5 pb-10 sm:pb-14">
          <h2 className="col-span-12 font-stretch-expanded text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.84] tracking-[-0.035em] text-cover lg:col-span-8">
            Projects
          </h2>
          <p className="col-span-12 mt-4 max-w-[40ch] self-end text-lg leading-snug text-paper/80 lg:col-span-4 lg:mt-0">
            A selection of things I have built. Private repositories are
            available to share upon request.
          </p>
        </header>

        {openers.map((p) => (
          <ProjectCard key={p.title} project={p} variant="opener" />
        ))}

        <div className="grid gap-x-10 gap-y-12 border-t-[3px] border-paper pt-10 sm:grid-cols-2 sm:pt-14">
          {entries.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
