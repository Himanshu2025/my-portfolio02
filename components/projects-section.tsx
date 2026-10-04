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

export default function ProjectsSection() {
  return (
    <section aria-labelledby="projects-heading" className="scroll-mt-14 border-b border-line py-14" id="projects">
      <h2 className="text-3xl font-extrabold tracking-[-0.02em]" id="projects-heading">
        Projects
      </h2>
      <p className="mt-1.5 text-soft">
        A selection of things I have built. Private repositories are available to share upon request.
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} wide={projects.length % 2 === 1 && i === projects.length - 1} />
        ))}
      </div>
    </section>
  );
}
