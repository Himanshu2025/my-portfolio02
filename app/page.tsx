import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon, LinkedInIcon } from "@/components/icons";
import clsx from "clsx";
import HeroImage from "@/components/hero-image.client";
import HeroText from "@/components/hero-text.client";
import AnimatedHeading from "@/components/animated-heading.client";


export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="mt-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl">
          

          <div className="w-full flex justify-center">
            <HeroImage
              src="/Image_01.jpeg"
              alt="image 01"
              containerClass="w-72 h-72 md:w-[520px] md:h-[520px] relative rounded-lg overflow-hidden"
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 mt-2">  
            </div>
          <HeroText className="w-full">
            <AnimatedHeading text={"Hi, I am Himanshu!"} tag="h1" className={title()} stagger={0.03} />
            <AnimatedHeading text={String(siteConfig.name)} tag="h2" className={subtitle()} stagger={0.02} />
            <p className="text-sm text-default-600">
              I build web applications and enjoy working across the full stack, from
              scratch to production. 
            </p>
            <div className="flex gap-3 mt-2">
             
              <Link
                isExternal
                className={clsx(buttonStyles({ variant: "bordered", radius: "full" }), "flex items-center gap-2")}
                href={siteConfig.links.github}
              >
                <GithubIcon size={20} />
                GitHub
              </Link>

               <Link
                isExternal
                className={clsx(buttonStyles({ variant: "bordered", radius: "full" }), "flex items-center gap-2")}
                href={siteConfig.links.linkedin}
              >
                <LinkedInIcon size={18} className="text-[#0A66C2] flex-none" />
                <span className="text-[#0A66C2] leading-none">LinkedIn</span>
              </Link>
              
            </div>
              <div className="mt-4">
                <h3 className="text-sm font-semibold mb-2">Tech I have been using in my recent work:</h3>
                {(() => {
                  const techs = [
                    "TypeScript",
                    "JavaScript",
                    "Golang",
                    "AWS",
                    "React",
                    "Next.js",
                    "Node.js",
                    "Python",
                    "FastAPI",
                  ];
                  const mid = Math.ceil(techs.length / 2);
                  const left = techs.slice(0, mid);
                  const right = techs.slice(mid);

                  return (
                    <div className="flex gap-x-5">
                      <ul className="list-disc pl-3 text-sm text-white marker:text-blue-500">
                        {left.map((tech) => (
                          <li key={tech} className="py-0.5">{tech}</li>
                        ))}
                      </ul>
                      <ul className="list-disc pl-3 text-sm text-white marker:text-blue-500">
                        {right.map((tech) => (
                          <li key={tech} className="py-0.5">{tech}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })()}
              </div>
          </HeroText>
          </div>
        </div>
      </div>
    </section>
  );
}
