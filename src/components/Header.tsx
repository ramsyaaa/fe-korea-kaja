import React from "react";
import logoIcon from "../assets/icons/logo.svg";
import TitleImage from "./TitleImage";
import Navigation from "./Navigation";

interface HeaderProps {
  pageTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ pageTitle = "RANDOM PLAY DANCE" }) => {
  return (
    <header className="relative w-full">
      {/* Background image - different for desktop/mobile */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="/src/assets/images/bg-landscape.png"
          alt="Background"
          className="hidden md:block w-full h-full object-cover object-top"
        />
        <img
          src="/src/assets/images/bg-portrait.png"
          alt="Background"
          className="block md:hidden w-full h-full object-cover object-top"
        />

        {/* Light overlay */}
        <div className="absolute md:top-1/4 md:left-[108px] top-0 left-0 w-full md:w-[624px] md:h-[328px] h-full">
          <div className="w-full h-full bg-white opacity-30 blur-3xl rounded-full"></div>
        </div>

        {/* Gradient overlay at bottom */}
        <div className="absolute bottom-0 w-full h-16 md:h-24 bg-gradient-to-b from-transparent to-white"></div>
      </div>

      {/* Top Navigation Bar */}
      <div className="relative z-20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="hidden md:block cursor-pointer">
            <img src={logoIcon} alt="Korea Kaja Logo" className="h-12" />
          </div>

          {/* Navigation */}
          {/* <Navigation /> */}
        </div>
      </div>

      {/* Header Title Section */}
      <div className="relative z-10 container mx-auto px-4 py-6 md:py-0">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Title as image - optimized for file size */}
          <div className="mt-10 md:mt-16  w-full md:w-auto text-center">
            <TitleImage title={pageTitle} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
