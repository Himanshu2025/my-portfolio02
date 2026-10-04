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

const SiCursor: IconType = (props) => (
  <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" />
  </svg>
);

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
  { name: "Cursor", icon: SiCursor, color: "#000000" },
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
