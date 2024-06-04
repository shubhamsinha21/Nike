import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header className="padding-x py-8 w-full z-10 bg-slate-100 shadow-md fixed">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" className="w-32 h-8 " />
        </a>
        <ul className="flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat text-md text-slate-800 
                font-semibold hover:text-red-600 
                hover:border-b-[1px] hover:border-b-red-600"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" className="w-4 h-4" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
