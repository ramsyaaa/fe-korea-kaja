import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import Button from "../components/Button";
import ScheduleSection from "../components/ScheduleSection";
import EligibleSection from "../components/EligibleSection";
import HowToSection from "../components/HowToSection";
import CTASection from "../components/CTASection";
import FinalistSection from "src/components/FinalistSection";
import bgPlaydance from "../assets/images/bg/bg-playdance.jpg";
import bgSnow from "../assets/images/bg/bg-snow.png";
import bgPortrait from "../assets/images/bg-portrait.png";

const HomePage: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string | string[]>([]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      // For mobile use a single background, for desktop use multiple overlaid backgrounds
      setBackgroundImage(isMobile ? bgPortrait : [bgSnow, bgPlaydance]);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MainLayout pageTitle="RANDOM PLAY DANCE" backgroundImage={backgroundImage}>
      {/* Schedule Section */}

      <ScheduleSection className="md:mt-10 mt-8" />

      {/* Eligible Section */}
      <EligibleSection className="md:mt-24 mt-16" />

      {/* How To Section */}
      <HowToSection className="md:mt-24 mt-16" />

      {/* CTA Section */}
      <CTASection className="md:mt-8" />
      <FinalistSection />
    </MainLayout>
  );
};

export default HomePage;
