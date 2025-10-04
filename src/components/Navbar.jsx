import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Men haqimda", href: "#about" },
    { name: "Qobilyatlarim", href: "#skills" },
    { name: "Proyektlar", href: "#projects" },
    { name: "Aloqa", href: "#contact" },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-background/70 border-b border-border"
      >
        <div id="container" className="">
          <div className="flex justify-between py-[26px] items-center">
            <h2 className="text-glow text-foreground text-xl font-bold">
              Muhammad <span className="text-primary">Portfolio</span>
            </h2>
            <nav className="">
              <ul className="hidden md:flex">
                <li className="flex gap-[30px]">
                  {navItems.map((el) => (
                    <a
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      key={el.name}
                      href={el.href}
                    >
                      {el.name}
                    </a>
                  ))}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      <ThemeToggle />
      </header>

      <div className="h-[90px]"></div>

    </>
  );
};

export default Navbar;
