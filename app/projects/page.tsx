import React from "react";
import ProjectCard, { type Project } from "@/components/project-card";

const projects: Project[] = [
  {
    title: "WeatherTogether – Climate Risk Web App (React, TypeScript, FastAPI, Mapbox, Tailwind CSS)",
    description:
      "Built an interactive climate risk web app with Mapbox for geospatial visualization. Delivered the full project in 8 weeks using agile sprints, integrating React frontend with FastAPI backend for a smooth, responsive user experience.",
    tech: ["React", "TypeScript", "FastAPI", "Mapbox", "Tailwind CSS"],
    liveLink: "https://weathertogether.info",
    password: "ie0031",
    colorClass: "border-l-4 border-emerald-400",
  },
  {
    title: "CloudPose – Pose Estimation API (Python, FastAPI, Docker, Kubernetes (OCI), Locust)",
    description:
      "Developed and deployed a pose estimation API using FastAPI and Docker, containerized and scaled on Kubernetes (OCI). Tested performance with Locust, achieved 95% uptime under load testing with 100+ concurrent users.",
    tech: ["Python", "FastAPI", "Docker", "Kubernetes", "Locust"],
    demoLink: "https://drive.google.com/file/d/1Uf3bmZud00w5fJJYmsUsI_yxynXbFRVm/view",
    colorClass: "border-l-4 border-amber-400",
    size: "lg",
  },
  {
    title: "BirdTag - Serverless Wildlife Data Platform (Lambda, S3, DynamoDB, API Gateway, SNS)",
    description:
      "Built serverless media tagging system for Monash conservation research using Lambda, S3 event triggers, and DynamoDB with automated bird species detection. Developed query APIs achieving sub-300ms response times through DynamoDB GSI optimization and presigned S3 URLs. Engineered audio processing pipeline with Lambda containerization, ML inference, and FFmpeg format conversion for automated species identification across diverse media formats.",
    tech: ["AWS Lambda", "S3", "DynamoDB", "API Gateway", "SNS", "FFmpeg", "Machine Learning", "Python", "Docker"],
    colorClass: "border-l-4 border-teal-400",
    size: "lg",
    githubLink: "https://github.com/your-org/birdtag",
  },
  {
    title: "Mindzen - Mental health website",
    description:
      "Built full-stack mental health platform with Vue.js frontend and Firebase/Firestore backend, implementing OAuth authentication and serverless cloud functions. Engineered bulk email system, AI-powered chatbot integration, admin dashboard with calendar and booking features, and geolocation services with Google Maps API while ensuring WCAG accessibility.",
    tech: ["Vue.js", "Firebase", "Firestore", "JavaScript", "Google Maps"],
    demoLink: "https://www.youtube.com/watch?v=y8Y3enaspyY",
    githubLink: "https://github.com/Himanshu2025/mindzen_webapp",
    colorClass: "border-l-4 border-sky-400",
    size: "lg",
  },
];

export default function ProjectsPage() {
  return (
    <section className="space-y-8 py-12">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Projects
        </h2>
        <p className="text-default-600 max-w-3xl">Selected projects showcasing full-stack work, APIs, and scalable systems.</p>
        <p className="text-sm text-default-500 mt-1">Private repositories are available to share upon request.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}