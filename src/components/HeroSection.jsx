import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <>
      <section className="">
        <div id="container">
          <div className="max-w-4xl mx-auto pt-[200px] pb-[200px]">
            <h1 className="text-foreground text-4xl font-bold tracking-tight md:text-6xl mb-[16px]">
              Assalomu Aleykum,man{" "}
              <span className="text-primary">Muhammad</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mb-[24px]">
              Men zamonaviy texnologiyalar yordamida veb-sahifalar yarataman.
              Frontend dasturlashga ixtisoslashgan holda, ham chiroyli, ham
              funksional interfeyslar quraman.
            </p>
            <a
              className="bg-primary px-4 py-2 rounded-full cosmic-button animate-fade-in-delay-4"
              href="#projects"
            >
              Ishimni Ko'rish
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
