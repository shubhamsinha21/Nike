import { headerLogo, close } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const handleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <header className="padding-x py-8 w-full z-10 bg-slate-100 shadow-md fixed">
      {toggle ? (
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
          <div className="hidden max-lg:block transition duration-500 cursor-pointer">
            <img
              src={hamburger}
              alt="hamburger"
              className="w-4 h-4"
              onClick={handleMenu}
            />
          </div>
        </nav>
      ) : (
        <nav className="flex justify-between inset-0 gap-20 max-container">
          <div className="flex flex-col gap-10">
            <a href="/">
              <img src={headerLogo} alt="logo" className="w-32 h-8 " />
            </a>
            <ul className="flex flex-col items-start gap-16 px-20 ">
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
          </div>

          <div className="hidden max-lg:block transition duration-500 cursor-pointer">
            <img
              src={close}
              alt="hamburger"
              className="w-4 h-4"
              onClick={handleMenu}
            />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
