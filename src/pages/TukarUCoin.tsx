import React, { useEffect, useState } from "react";
import RewardSpesialKoreaKajaSection from "src/components/RewardSpesialKoreaKajaSection";
import bgSnow from "../assets/images/bg/bg-snow.png";
import bgTukarUcoin from "../assets/images/bg/bg-tukar-ucoin.jpg";
import CTASection from "../components/CTASection";
import HowToSection from "../components/HowToSection";
import PartnershipSection from "../components/PartnershipSection";
import MainLayout from "../layouts/MainLayout";

const TukarUCoin: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string | string[]>([]);

  useEffect(() => {
    const handleResize = () => {
      // For mobile use a single background, for desktop use multiple overlaid backgrounds
      setBackgroundImage([bgSnow, bgTukarUcoin]);
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
      <PartnershipSection className="md:mt-24 mt-16" type="tukar-ucoin" />

      <RewardSpesialKoreaKajaSection className="md:mt-24 mt-16" />
      {/* How To Section */}
      <HowToSection className="md:mt-24 mt-16" />

      {/* CTA Section */}
      <CTASection
        className="md:mt-24 mt-16 max-w-[1228px] flex mx-auto"
        type="tukar-ucoin"
      />
    </MainLayout>
  );
};

export default TukarUCoin;
