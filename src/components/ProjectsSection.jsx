import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Shibuya",
    description:
      "Chiroyli va zamonaviy ilustratsiyaga ega shaxsiy veb-sayt.",
    image: "/projects/shibuya.png",
    tags: ["React Vite", "Javascript", "Sass"],
    demoUrl: "https://shibuya-animation.vercel.app/",
    githubUrl: "https://github.com/sharpjonov/shibuya.git",
  },
  {
    id: 2,
    title: "Ital Library",
    description:
      "Ital Library - bu kitoblarni onlayn ko'rib chiqish va o'qish uchun mo'ljallangan veb-sayt.",
    image: "/projects/ital.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://ital.vercel.app/",
    githubUrl: "https://github.com/sharpjonov/Ital.git",
  },
  {
    id: 3,
    title: "Online Calculator",
    description:
      "Foydalanuvchi autentifikatsiyasi va toʻlov tizimiga ega to‘liq funksional elektron tijorat platformasi.",
    image: "/projects/calculator.png",
    tags: ["React Native", "JavaScript", "CSS"],
    demoUrl: "https://calculator-flame-one-16.vercel.app/",
    githubUrl: "https://github.com/sharpjonov/cosmo-portfolio.git",
  },
   {
    id: 4,
    title: "Radio Player",
    description:
      "Radio Player xoxlagan janrdagi musiqani yoki qiziqarli novellani eshitishga moljallangan website",
    image: "/public/projects/radio.png",
    tags: ["React Vite", "JavaScript", "Sass"],
    demoUrl: "https://echonova.vercel.app/",
    githubUrl: "https://github.com/sharpjonov/radio-app.git",
  },
  {
    id: 5,
    title: "Game Store",
    description:
      "Game Store - bu video o'yinlarni ko'rib chiqish va sotib olish uchun mo'ljallangan veb-sayt.",
    image: "/public/projects/game-app.png",
    tags: ["React Native", "JavaScript", "Bootstrap"],
    demoUrl: "https://game-shop-app.vercel.app/",
    githubUrl: "https://github.com/sharpjonov/game-shop-app.git",
  },
  {
    id: 6,
    title: "Tmdb Cinema Portal",
    description:
      "Tmdb Cinema Portal - bu kino va seriallarni ko'rib chiqish va ularni baholash uchun mo'ljallangan veb-sayt.",
    image: "/public/projects/tmdb.png",
    tags: ["React Vite", "JavaScript", "Bootstrap"],
    demoUrl: "https://tmdbio.vercel.app/",
    githubUrl: "https://github.com/sharpjonov/tmdb-KinoPortal.git",
  },
  {
    id: 7,
    title: "E-learning Platform",
    description:
      "E-learning Platform - bu onlayn kurslarni ko'rib chiqish va ularga yozilish uchun mo'ljallangan veb-sayt.",
    image: "/public/projects/hackaton-education.png",
    tags: ["React Native", "JavaScript", "Bootstrap"],
    demoUrl: "https://hackaton-education.vercel.app/",
    githubUrl: "https://github.com/sharpjonov/hackaton-education.git",
  },
  {
    id: 8,
    title: "Weather App",
    description:
      "Weather App - bu ob-havo ma'lumotlarini ko'rish va bashorat qilish uchun mo'ljallangan veb-sayt.",
    image: "/public/projects/weather.png",
    tags: ["React Vite", "JavaScript", "CSS", ],
    demoUrl: "https://skycheck-kappa.vercel.app/",
    githubUrl: "https://github.com/sharpjonov/weather-app.git",
  },
  {
    id: 9,
    title: "Nexcent",
    description:
      "Nexcent - bu ob-havo ma'lumotlarini ko'rish va bashorat qilish uchun mo'ljallangan veb-sayt.",
    image: "/public/projects/nexcent.png",
    tags: ["HTML", "CSS" ],
    demoUrl: "https://nexcent-zero.vercel.app/",
    githubUrl: "https://github.com/sharpjonov/nexcent.git",
  },

];


export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Mening <span className="text-primary"> Proyektlarim </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ohirgi qilgan proyektlarimdan bir nechtasi
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${tag}-${index}`}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <Link
                      to={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </Link>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sharpjonov"
          >
            Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
