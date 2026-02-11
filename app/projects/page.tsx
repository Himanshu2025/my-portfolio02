import React from "react";
import ProjectCard, { type Project } from "@/components/project-card";

const projects: Project[] = [
  {
    title: "WeatherTogether",
    subtitle: "Climate Risk Web App",
    description:
      "Built an interactive climate risk web app with Mapbox for geospatial visualization. Delivered the full project in 8 weeks using agile sprints, integrating React frontend with FastAPI backend for a smooth, responsive user experience.",
    tech: ["React", "TypeScript", "FastAPI", "Mapbox", "Tailwind CSS"],
    liveLink: "https://weathertogether.info",
    password: "ie0031",
    accent: "emerald",
  },
  {
    title: "CloudPose",
    subtitle: "Pose Estimation API",
    description:
      "Developed and deployed a pose estimation API using FastAPI and Docker, containerized and scaled on Kubernetes (OCI). Tested performance with Locust, achieved 95% uptime under load testing with 100+ concurrent users.",
    tech: ["Python", "FastAPI", "Docker", "Kubernetes", "Locust"],
    demoLink:
      "https://drive.google.com/file/d/1Uf3bmZud00w5fJJYmsUsI_yxynXbFRVm/view",
    accent: "amber",
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
    accent: "teal",
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
    accent: "sky",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-12 sm:py-16">
      {/* Page header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
          Projects
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-default-500">
          A selection of things I have built. Private repositories are available
          to share upon request.
        </p>
      </div>

      {/* Card grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
