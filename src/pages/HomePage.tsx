import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import Button from "../components/Button";
import ScheduleSection from "../components/ScheduleSection";
import EligibleSection from "../components/EligibleSection";
import HowToSection from "../components/HowToSection";
import CTASection from "../components/CTASection";
import FinalistSection from "src/components/FinalistSection";
import PartnershipSection from "../components/PartnershipSection";
import bgPlaydance from "../assets/images/bg/bg-playdance.jpg";
import bgSnow from "../assets/images/bg/bg-snow.png";
import bgPortrait from "../assets/images/bg-portrait.png";

const HomePage: React.FC = () => {
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
      {/* Schedule Section */}
      {/* Partnership Section */}
      <PartnershipSection />
      <ScheduleSection className="md:mt-10 mt-8" />

      {/* Eligible Section */}
      {/* <EligibleSection className="md:mt-24 mt-16" /> */}

      {/* How To Section */}
      <HowToSection className="md:mt-24 mt-16" />

      {/* Finalist Section */}
      <FinalistSection />

      {/* CTA Section */}
      <CTASection className="md:mt-8 max-w-[1228px] flex mx-auto" />
    </MainLayout>
  );
};

export default HomePage;
