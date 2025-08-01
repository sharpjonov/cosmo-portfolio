import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 75, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Next.js", level: 75, category: "frontend" },
  { name: "TypeScript", level: 5, category: "frontend" },
  { name: "Vue.js", level: 10, category: "frontend" },
  { name: "Sass CSS", level: 75, category: "frontend" },
  { name: "Zustand", level: 70, category: "frontend" },
  { name: "Bootstrap CSS", level: 85, category: "frontend" },

  // Backend
  { name: "Node.js", level: 10, category: "backend" },
  // { name: "Express", level: 75, category: "backend" },
  // { name: "MongoDB", level: 70, category: "backend" },
  // { name: "PostgreSQL", level: 65, category: "backend" },
  // { name: "GraphQL", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  // { name: "Docker", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },
  { name: "Font Awesome", level: 90, category: "tools" },
  { name: "Vercel App", level: 95, category: "tools" },
  { name: "Netlify", level: 85, category: "tools" },
  { name: "TinyPng", level: 100, category: "tools" },
  { name: "RemoveBg", level: 100, category: "tools" },
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
          Mening <span className="text-primary"> Qobilyatlarim</span>
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
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
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
          ))}
        </div>
      </div>
    </section>
  );
};
