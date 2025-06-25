import React from "react";
import MainLayout from "../layouts/MainLayout";
import HowToSection from "../components/HowToSection";

const HowToPage: React.FC = () => {
  return (
    <MainLayout pageTitle="How To Join">
      <HowToSection className="md:mt-24 mt-16" />
    </MainLayout>
  );
};

export default HowToPage;
