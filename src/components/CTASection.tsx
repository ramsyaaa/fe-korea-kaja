import React from "react";
import "../assets/styles/cta.css";

// Import SVG assets
import backgroundCircle from "../assets/icons/cta/background-circle.svg";
import largeBackgroundCircle from "../assets/icons/cta/large-background-circle.svg";
import bottomDecoration from "../assets/icons/cta/bottom-decoration.svg";
import group502Bg from "../assets/icons/cta/group502-bg.svg";
import group502Circle from "../assets/icons/cta/group502-circle.svg";
import group502WhiteCircle from "../assets/icons/cta/group502-white-circle.svg";

// Import title images
import ctaTitleDesktop from "../assets/images/cta/cta-title-desktop.png";
import ctaTitleMobile from "../assets/images/cta/cta-title-mobile.png";
import bgSnow from "../assets/images/bg/bg-small-snow.png";
interface CTASectionProps {
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ className = "" }) => {
  const handleRegistration = () => {
    // Replace this URL with the actual registration URL
    window.open("https://go.byu.id/koreakaja", "_blank");
  };

  return (
    <section className={`cta-section ${className}`}>
      {/* Bottom decoration */}
      <img
        src={bottomDecoration}
        alt=""
        className="bottom-decoration"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 md:px-0">
        <div
          className="cta-container"
          style={{
            backgroundImage: `url(${bgSnow})`,
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundSize: "cover, cover",
            backgroundPosition: "center, center",
          }}
        >
          {/* Decorative background elements */}
          <img
            src={backgroundCircle}
            alt=""
            className="background-circle"
            aria-hidden="true"
          />
          <img
            src={largeBackgroundCircle}
            alt=""
            className="large-background-circle"
            aria-hidden="true"
          />

          {/* Group 502 pattern from Figma - decoration in top-left */}
          <div className="cta-decoration-group">
            <img
              src={group502Bg}
              alt=""
              className="group502-bg"
              aria-hidden="true"
            />
            <img
              src={group502Circle}
              alt=""
              className="group502-circle"
              aria-hidden="true"
            />
            <img
              src={group502WhiteCircle}
              alt=""
              className="group502-white-circle"
              aria-hidden="true"
            />
          </div>

          {/* Content area */}
          <div className="cta-content">
            {/* Title images */}
            <div className="cta-title-container">
              {/* Desktop version */}
              <img
                src={ctaTitleDesktop}
                alt="DAFTAR SEKARANG & DAPATKAN KESEMPATAN TRIP KE KOREA!"
                className="hidden md:block w-auto"
              />
              {/* Mobile version */}
              <img
                src={ctaTitleMobile}
                alt="DAFTAR SEKARANG & DAPATKAN KESEMPATAN TRIP KE KOREA!"
                className="block md:hidden w-auto"
              />
            </div>

            {/* Button */}
            <div className="cta-button-container">
              <button
                onClick={handleRegistration}
                className="cta-button font-ohno font-semibold"
              >
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
