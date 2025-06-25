import React from "react";
import checklistIcon from "../assets/icons/eligible/checklist-icon.svg";
import eligibleTitleDesktop from "../assets/images/eligible/eligible-title-desktop.png";
import eligibleTitleMobile from "../assets/images/eligible/eligible-title-mobile.png";

interface EligibilityItemProps {
  text: string;
}

const EligibilityItem: React.FC<EligibilityItemProps> = ({ text }) => {
  return (
    <div className="flex items-start gap-3">
      <img
        src={checklistIcon}
        alt="Checklist"
        className="w-10 h-10 flex-shrink-0"
      />
      <p className="text-[#1F2D3D] font-gilroy text-sm md:text-base">{text}</p>
    </div>
  );
};

interface EligibleSectionProps {
  className?: string;
}

const EligibleSection: React.FC<EligibleSectionProps> = ({
  className = "",
}) => {
  const eligibilityItems = [
    "Kamu pelajar atau mahasiswa atau masyarakat umum di Indonesia yang ingin mempelajari dan memperdalam bahasa dan kebudayaan Korea Selatan.",
    "Kamu ingin belajar bersama puluhan ribu peserta lain dari seluruh Indonesia, dengan materi mudah dicerna dan disesuaikan dengan perkembangan teknologi.",
    "Kamu mau komitmen untuk belajar dengan sungguh dan mengikuti semua tahapan roadshow yang berlangsung di kota kamu.",
  ];

  return (
    <section className={` ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-6 md:mb-8">
          <picture>
            <source media="(min-width: 768px)" srcSet={eligibleTitleDesktop} />
            <img
              src={eligibleTitleMobile}
              alt="SIAPA YANG BISA JOIN RPD"
              className="h-auto w-full max-w-[416px] inline-block"
            />
          </picture>
          <p className="text-[#6A7481] font-gilroy text-xs md:text-base mt-2 md:mt-3 max-w-2xl mx-auto">
            Pastikan kamu sudah memenuhi semua syarat sebelum ikutan challenge
            seru ini!
          </p>
        </div>

        {/* Eligibility Content */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            {eligibilityItems.map((item, index) => (
              <EligibilityItem key={index} text={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibleSection;
