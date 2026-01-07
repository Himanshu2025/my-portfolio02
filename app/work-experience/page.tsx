import React from "react";
import WorkExperienceCard, { type WorkExperience } from "@/components/work-experience-card";

const experiences: WorkExperience[] = [
	{
		company: "Monash University - Industry Experience",
		role: "Full stack developer and Project Co-ordinator",
		dateRange: "July 2025 - October 2025",
		bullets: [
			"Collaborated with 5-person cross-functional team (designer, data analyst, developer) to ship 6 new features including map-based and data model features across 3 iterations, consistently meeting goals",
			"Created modular APIs and reusable React components, making the codebase easier to maintain and cutting repetition by 30%.",
			"Set up CI/CD pipelines with testing and version control, which halved deployment time and improved build stability.",
		],
		accent: "border-l-4 border-emerald-400",
	},
	{
		company: "AI SaaS Startup (Stealth mode)",
		role: "Full Stack Developer",
		dateRange: "November 2024 - July 2025",
		bullets: [
			"Delivered 12+ full-stack features from database to UI, building modular React/TypeScript components integrated with Node.js backend.",
			"Implemented user activity logging and seamless frontend–backend data flow for better traceability and user experience.",
			"Worked in agile sprints with the product owner to clarify requirements, deliver MVPs on time, and incorporate feedback quickly.",
		],
		accent: "border-l-4 border-sky-400",
	},
	{
		company: "Jio Platforms limited",
		role: "Headend Engineer",
		dateRange: "February 2023 - November 2023",
		bullets: [
			"Monitored video stream reliability, reducing downtime incidents and improving overall service stability.",
			"Collaborated with cross-functional teams to troubleshoot real-time issues, ensuring smooth delivery of high-traffic live events.",
			"Monitored streaming infrastructure and coordinated with technical teams to reduce incident response time, supporting reliable delivery of 100+ live channels to millions of concurrent viewers during IPL 2023.",
		],
		accent: "border-l-4 border-indigo-400",
	},
];

export default function WorkExperiencePage() {
	return (
		<section className="space-y-8 py-12">
			<div className="flex flex-col gap-2">
				<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Professional Experience</h2>
				<p className="text-default-600 max-w-3xl">Roles, responsibilities and impact across companies and projects.</p>
			</div>

			<div className="grid gap-6">
				{experiences.map((e) => (
					<WorkExperienceCard key={`${e.company}-${e.dateRange}`} work={e} />
				))}
			</div>
		</section>
	);
}
