import React from "react";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import Button from "../components/Button";
import ScheduleSection from "../components/ScheduleSection";
import EligibleSection from "../components/EligibleSection";
import HowToSection from "../components/HowToSection";
import CTASection from "../components/CTASection";
import FinalistSection from "src/components/FinalistSection";

const HomePage: React.FC = () => {
  return (
    <MainLayout pageTitle="RANDOM PLAY DANCE">
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
