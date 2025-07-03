import React, { useEffect, useState } from "react";
import bgMerchUstore from "../assets/images/bg/bg-merchUstore.jpg";
import bgSnow from "../assets/images/bg/bg-snow.png";
import CTASection from "../components/CTASection";
import HowToSection from "../components/HowToSection";
import KuotaKoreaKajaSection from "../components/KuotaKoreaKajaSection";
import PartnershipSection from "../components/PartnershipSection";
import MainLayout from "../layouts/MainLayout";
import MerchUstoreSection from "src/components/MerchUstoreSection";
import FAQ from "src/components/FAQ";

const MerchUStore: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string | string[]>([]);

  useEffect(() => {
    const handleResize = () => {
      // For mobile use a single background, for desktop use multiple overlaid backgrounds
      setBackgroundImage([bgSnow, bgMerchUstore]);
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
      <PartnershipSection className="-mt-10" type="merch-ustore" />

      <MerchUstoreSection className="md:mt-24 mt-16" />

      {/* How To Section */}
      <HowToSection className="md:mt-24 mt-16" />

      {/* CTA Section */}
      <CTASection
        className="md:mt-24 mt-16 max-w-[1228px] flex mx-auto"
        type="kuota-korea-kaja"
      />

      <FAQ className="md:mt-24 mt-16" screen="uStore" />
    </MainLayout>
  );
};

export default MerchUStore;
