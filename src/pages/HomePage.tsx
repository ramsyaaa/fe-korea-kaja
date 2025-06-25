import React from "react";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import Button from "../components/Button";
import ScheduleSection from "../components/ScheduleSection";
import EligibleSection from "../components/EligibleSection";

const HomePage: React.FC = () => {
  return (
    <MainLayout pageTitle="RANDOM PLAY DANCE">
      {/* Schedule Section */}
      <ScheduleSection className="md:mt-24 mt-16" />

      {/* Eligible Section */}
      <EligibleSection className="md:mt-24 mt-16" />
    </MainLayout>
  );
};

export default HomePage;
