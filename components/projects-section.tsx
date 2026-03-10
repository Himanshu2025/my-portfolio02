"use client";

import React from "react";
import { motion } from "framer-motion";
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
  {
    title: "Freelance BillingOps",
    subtitle: "Billing & Operations Platform",
    description:
      "Built a cloud-deployed billing and operations platform for freelancers to manage invoices, clients, and payments through a centralized system. Developed the backend using .NET 10 and ASP.NET Core Web API with Entity Framework Core, implementing secure authentication, rate limiting, and automated database migrations. Integrated Swagger/OpenAPI for API documentation and PDF invoice generation using QuestPDF.",
    tech: [".NET", "C#", "ASP.NET Core", "Entity Framework", "Swagger"],
    liveLink: "https://freelance-billingops-1.onrender.com/swagger/index.html",
    accent: "violet",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20">
      <div className="mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block text-[11px] font-medium uppercase tracking-widest text-default-400 mb-2">
            Selected Work
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
            Projects
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-default-500 max-w-lg">
            A selection of things I have built. Private repositories are available
            to share upon request.
          </p>
        </motion.div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
