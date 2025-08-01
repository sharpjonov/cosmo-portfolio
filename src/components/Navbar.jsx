// import BurgerMenu from "../assets/images/burger-menu.svg";

export const Navbar = () => {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Men haqimda", href: "#about" },
    { name: "Qobilyatlarim", href: "#skills" },
    { name: "Proyektlar", href: "#projects" },
    { name: "Aloqa", href: "#contact" },
  ];
  return (
    <>
      <header>
        <div id="container" className="">
          <div className="flex justify-between py-[26px] items-center">
            <div className="">
              <h2 className="text-glow text-foreground text-xl font-bold">
                Muhammad <span className="text-primary">Portfolio</span>
              </h2>
            </div>
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
      </header>
    </>
  );
};
