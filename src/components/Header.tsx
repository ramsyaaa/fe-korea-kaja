import React from "react";
import logoIcon from "../assets/icons/logo.svg";
import TitleImage from "./TitleImage";
import Navigation from "./Navigation";
import Container from "./Container";

interface HeaderProps {
  pageTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ pageTitle }) => {
  return (
    <header className="relative w-full">
      {/* Background image - different for desktop/mobile */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* <img
          src="/src/assets/images/bg/bg-playdance.jpg"
          alt="Background"
          className="hidden md:block w-full h-full object-cover object-top"
        />
        <img
          src="/src/assets/images/bg-portrait.png"
          alt="Background"
          className="block md:hidden w-full h-full object-cover object-top"
        /> */}

        {/* Light overlay */}
        {/* <div className="absolute md:top-1/4 md:left-[108px] top-0 left-0 w-full md:w-[624px] md:h-[328px] h-full">
          <div className="w-full h-full bg-white opacity-30 blur-3xl rounded-full"></div>
        </div> */}

        {/* Gradient overlay at bottom */}
        {/* <div className="absolute bottom-0 w-full h-16 md:h-24 bg-gradient-to-b from-transparent to-white"></div> */}
      </div>

      {/* Top Navigation Bar */}
      <div className="relative z-20">
        <Container className="flex justify-between items-center">
          {/* Logo */}
          <div className="block cursor-pointer">
            <img
              src={logoIcon}
              alt="Korea Kaja Logo"
              className="md:h-[49px] h-[36px] ml-6 md:ml-24"
            />
          </div>
        </Container>

        {/* Navigation */}
        {/* <Navigation /> */}
      </div>

      {/* Header Title Section */}
      {/* <div className="relative z-10 container mx-auto px-4 py-6 md:py-0">
        <TitleImage
          className="mt-8 justify-center w-full md:w-auto  flex"
          title={pageTitle}
        />
      </div> */}
    </header>
  );
};

export default Header;
