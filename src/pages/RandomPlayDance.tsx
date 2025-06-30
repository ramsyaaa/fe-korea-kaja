import React, { useEffect, useState } from "react";
import FinalistSection from "src/components/FinalistSection";
import bgPlaydance from "../assets/images/bg/bg-playdance.jpg";
import bgSnow from "../assets/images/bg/bg-snow.png";
import CTASection from "../components/CTASection";
import GallerySection from "../components/GallerySection";
import HowToSection from "../components/HowToSection";
import PartnershipSection from "../components/PartnershipSection";
import ScheduleSection from "../components/ScheduleSection";
import MainLayout from "../layouts/MainLayout";

const RandomPlayDance: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string | string[]>([]);

  useEffect(() => {
    const handleResize = () => {
      // For mobile use a single background, for desktop use multiple overlaid backgrounds
      setBackgroundImage([bgSnow, bgPlaydance]);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MainLayout backgroundImage={backgroundImage}>
      {/* Partnership Section */}

      <PartnershipSection className="md:mt-10 mt-8" />
      {/* How To Section */}

      <HowToSection className="md:mt-24 mt-16" />
      {/* Schedule Section */}
      <ScheduleSection className="md:mt-24 mt-16" />

      {/* Eligible Section */}
      {/* <EligibleSection className="md:mt-24 mt-16" /> */}

      {/* Finalist Section */}
      <FinalistSection />

      {/* CTA Section */}
      <CTASection
        className="md:mt-24 mt-16 max-w-[1228px] flex mx-auto"
        type="random-play-dance"
      />

      {/* Gallery Section */}
      <GallerySection className="md:mt-24 mt-16" />
    </MainLayout>
  );
};

export default RandomPlayDance;
