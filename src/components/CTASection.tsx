import React from "react";

// Import images

import ctaTitle from "../assets/images/cta/cta-title.png";

interface CTASectionProps {
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ className = "" }) => {
  const handleRegistration = () => {
    // Replace this URL with the actual registration URL
    window.open("https://go.byu.id/koreakaja", "_blank");
  };

  return (
    <section className={`${className}`}>
      <div className="container mx-auto px-4 md:px-[108px]">
        <div
          className="w-full md:rounded-[16px] rounded-[16px] p-6 md:flex md:flex-row flex-col md:gap-16 gap-4 md:items-center"
          style={{
            background:
              "radial-gradient(circle at -29% -11%, rgba(184, 252, 255, 0.6) 0%, rgba(185, 159, 255, 0.85) 100%)",
            backdropFilter: "blur(4px)",
          }}
        >
          <div className="flex flex-col gap-4">
            {/* Title image with responsive switching */}
            <div>
              <picture>
                <img
                  src={ctaTitle}
                  alt="DAFTAR SEKARANG"
                  className="h-auto w-auto max-w-[279px] max-h-[72px]"
                />
              </picture>
            </div>
            <p
              className="text-[#1F2D3D] md:text-base text-[13px] leading-[1.5em] md:leading-[1.5em]"
              style={{
                fontFamily: "Gilroy",
                letterSpacing: "0.5%",
              }}
            >
              Daftarkan dirimu segera untuk mengikuti RPD Challenge!
            </p>
          </div>

          {/* Button for desktop uses fixed width */}
          <div className="hidden md:block ml-auto">
            <button
              onClick={handleRegistration}
              className="bg-[#F7208F] text-white rounded-[40px] px-4 py-3 h-[44px] md:w-[260px] text-center font-semibold text-base"
              style={{
                letterSpacing: "0.5%",
                lineHeight: "1.5em",
              }}
            >
              Daftar Sekarang
            </button>
          </div>

          {/* Button for mobile uses full width */}
          <div className="md:hidden mt-4">
            <button
              onClick={handleRegistration}
              className="bg-[#F7208F] text-white w-full rounded-[40px] px-4 py-3 h-[44px] text-center font-bold"
              style={{
                letterSpacing: "0.5%",
                lineHeight: "1.5em",
              }}
            >
              DAFTAR RPD
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
