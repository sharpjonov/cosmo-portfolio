import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Men <span className="text-primary"> Haqimda</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Web programist</h3>

            <p className="text-muted-foreground">
              Men zamonaviy texnologiyalar yordamida foydalanuvchilar uchun
              qulay, moslashuvchan va samarali veb-ilovalar yaratishga
              ixtisoslashganman. Har doim tezkor, estetik va funksional
              interfeyslar ustida ishlashga intilaman.
            </p>

            <p className="text-muted-foreground">
              Murakkab muammolarga chiroyli va samarali yechimlar topishni
              yoqtiraman. Veb-dasturlash doimiy rivojlanib borayotgan soha
              bo‘lganligi sababli, yangi texnologiyalar va uslublarni
              o‘rganishda davom etaman.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Aloqaga chiqish
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                CV’ni ko‘rish
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Dasturlash </h4>
                  <p className="text-muted-foreground">
                    Qurilmalarga tez moslashuvchan va ko'rinishi zamonaviy
                    veb-saytlar yarataman.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Dizayn</h4>
                  <p className="text-muted-foreground">
                    Zamonaviy,chiroyli saytlar va foydalanuvchilarga qulay
                    interfeys qilaman.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Loyiha Boshqaruvi</h4>
                  <p className="text-muted-foreground">
                    Loyihalarni boshidan oxirigacha samarali olib boraman.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
