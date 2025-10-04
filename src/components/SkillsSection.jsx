import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaVuejs,
  FaBootstrap,
  FaLayerGroup,
  FaFontAwesome,
  FaCogs,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiSass,
  SiVercel,
  SiNetlify,
  SiAntdesign, 
} from "react-icons/si";

import {
  VscFileMedia,
  VscCode,
  VscSymbolSnippet, 
} from "react-icons/vsc";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend", icon: FaHtml5 },
  { name: "Tailwind CSS", level: 95, category: "frontend", icon: SiTailwindcss },
  { name: "JavaScript", level: 75, category: "frontend", icon: FaJs },
  { name: "React", level: 80, category: "frontend", icon: FaReact },
  { name: "Next.js", level: 10, category: "frontend", icon: SiNextdotjs },
  { name: "TypeScript", level: 5, category: "frontend", icon: SiTypescript },
  { name: "Vue.js", level: 10, category: "frontend", icon: FaVuejs },
  { name: "Sass CSS", level: 75, category: "frontend", icon: SiSass },
  { name: "Zustand", level: 70, category: "frontend", icon: FaLayerGroup },
  { name: "Bootstrap CSS", level: 85, category: "frontend", icon: FaBootstrap },

  // Backend
  { name: "Node.js", level: 10, category: "backend", icon: FaNodeJs },
  { name: "Rest API", level: 40, category: "backend", icon: FaCogs }, // 🛠 более подходящая

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools", icon: FaGitAlt },
  { name: "Figma", level: 85, category: "tools", icon: FaFigma },
  { name: "VS Code", level: 85, category: "tools", icon: VscCode },
  { name: "Font Awesome", level: 90, category: "tools", icon: FaFontAwesome },
  { name: "Vercel App", level: 95, category: "tools", icon: SiVercel },
  { name: "Netlify", level: 85, category: "tools", icon: SiNetlify },
  { name: "Ant Design", level: 60, category: "tools", icon: SiAntdesign },
  { name: "Shadcn UI", level: 60, category: "tools", icon: FaLayerGroup }, // 🔁 Похожая
  { name: "TinyPng", level: 100, category: "tools", icon: VscFileMedia },
  { name: "RemoveBg", level: 100, category: "tools", icon: VscFileMedia },
  { name: "Snippet Generator", level: 100, category: "tools", icon: VscSymbolSnippet },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Mening <span className="text-primary">Qobilyatlarim</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => {
            const Icon = skill.icon;
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  {Icon && <Icon className="text-2xl text-primary" />}
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>

                <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                </div>

                <div className="text-right mt-1">
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
  