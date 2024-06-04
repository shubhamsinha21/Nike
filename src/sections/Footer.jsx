import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div
        className="flex justify-between items-start 
      gap-20 flex-wrap max-lg:flex-col"
      >
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} className="w-40 h-12" />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. {""}
            <br />
            <span className="font-palanquin text-coral-red border-b-[1px] border-coral-red cursor-pointer">
              <a href="/">Get Rewards.</a>
            </span>
          </p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                key={icon.src}
                className="bg-white rounded-full flex justify-center 
              items-center size-12"
              >
                <img src={icon.src} alt={icon.alt} className="size-6" />
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex flex-1 lg:gap-10 gap-20 flex-wrap 
        justify-between"
        >
          {footerLinks.map((section) => (
            <div key={section}>
              <h4
                className="text-white font-montserrat txet-2xl 
              leading-normal mb-6"
              >
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 
                  font-montserrat text-base leading-normal
                   hover:text-slate-gray"
                  >
                    <a href="/">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 text-white-400 mt-24 
      max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 
        font-montserrat cursor-pointer">
        <img src={copyrightSign} alt="copyright sign"
        className="size-5 rounded-full m-0"
        />
        <p>Copyright, 2024. All Rights Reserved.</p>
        </div>
      <p className="cursor-pointer font-montserrat">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
