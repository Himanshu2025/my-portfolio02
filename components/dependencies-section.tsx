import type { IconType } from "react-icons";

import Image from "next/image";
import {
  SiAmazonaws,
  SiAuth0,
  SiDocker,
  SiFastapi,
  SiGraphql,
  SiJavascript,
  SiMicrosoftazure,
  SiNextdotjs,
  SiNodedotjs,
  SiPlaywright,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiSupabase,
  SiTerraform,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type Dependency = { name: string } & (
  | { icon: IconType; color: string }
  | { src: string }
);

const DEPENDENCIES: Dependency[] = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#E3B505" },
  { name: "React", icon: SiReact, color: "#087EA4" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TanStack", src: "/tanstack.png" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Auth0", icon: SiAuth0, color: "#EB5424" },
  { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
  { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
  { name: "Azure", icon: SiMicrosoftazure, color: "#0078D4" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
  { name: "Playwright", icon: SiPlaywright, color: "#2EAD33" },
  { name: "Cursor", src: "/cursor-ai.png" },
  { name: "Claude Code", src: "/claude-code.png" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
];

export default function DependenciesSection() {
  return (
    <section aria-labelledby="dependencies-heading" className="border-b border-line py-14">
      <h2 className="text-3xl font-extrabold tracking-[-0.02em]" id="dependencies-heading">
        Dependencies
      </h2>
      <p className="mt-1.5 text-soft">Tech I work with</p>

      <ul className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(168px,1fr))] border-l border-t border-line">
        {DEPENDENCIES.map((dep) => (
          <li
            key={dep.name}
            className="flex items-center gap-3 border-b border-r border-line px-4 py-3.5 text-[15px] font-medium"
          >
            {"src" in dep ? (
              <Image alt="" className="h-[22px] w-[22px] object-contain" height={22} src={dep.src} width={22} />
            ) : (
              <dep.icon aria-hidden="true" className="h-[22px] w-[22px] shrink-0" style={{ color: dep.color }} />
            )}
            {dep.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
