import React, { useEffect, useState } from "react";
import bgPlaydance from "../assets/images/bg/bg-playdance.jpg";
import bgSnow from "../assets/images/bg/bg-snow.png";
import CTASection from "../components/CTASection";
import HowToSection from "../components/HowToSection";
import KuotaKoreaKajaSection from "../components/KuotaKoreaKajaSection";
import PartnershipSection from "../components/PartnershipSection";
import MainLayout from "../layouts/MainLayout";
import FAQ from "src/components/FAQ";

const KuotaKoreaKaja: React.FC = () => {
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
      <PartnershipSection className="md:mt-24 -mt-10" type="kuota-korea-kaja" />
      {/* Kuota Korea Kaja Section */}
      <KuotaKoreaKajaSection className="md:mt-10 mt-8" />
      {/* How To Section */}
      <HowToSection className="md:mt-24 mt-16" />

      {/* CTA Section */}
      <CTASection
        className="md:mt-24 mt-16 max-w-[1228px] flex mx-auto"
        type="kuota-korea-kaja"
      />
      <FAQ className="md:mt-24 mt-16" screen="korea-kaja" />
    </MainLayout>
  );
};

export default KuotaKoreaKaja;
