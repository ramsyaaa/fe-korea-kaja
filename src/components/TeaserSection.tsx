import React from "react";
import TitleDesktop from "../assets/images/titles/teaser-title-desktop.png";
import TitleMobile from "../assets/images/titles/teaser-title-mobile.png";

export interface TeaserSectionProps {
  className?: string;
}

const TeaserSection: React.FC<TeaserSectionProps> = ({ className }) => {
  return (
    <section className={`teaser-section ${className}`}>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center md:h-[320px]">
        <div className="flex flex-col gap-y-2 md:items-start md:justify-start">
          <img src={TitleMobile} className="object-contain md:hidden" alt="Teaser Title Mobile" />
          <img
            src={TitleDesktop}
            className="object-contain hidden md:block"
            alt="Teaser Title Desktop"
          />
          <p className="text-[#1F2D3D] text-[16px] text-center md:text-left font-ohno md:whitespace-pre">
            {`Lihat keseruan Korea Kaja tahun lalu! Dan pastiin kamu yang\nberangkat ke korea tahun ini!`}
          </p>
        </div>
        <div className="flex ">
          <div className="w-full rounded-lg bg-slate-300 h-[186px] md:h-[320px] flex justify-center items-center">
            <p className="text-[20px] text-white">Placeholder Video</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeaserSection;
