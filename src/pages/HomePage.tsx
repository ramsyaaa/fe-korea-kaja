import React from "react";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import Button from "../components/Button";
import ScheduleSection from "../components/ScheduleSection";

const HomePage: React.FC = () => {
  return (
    <MainLayout pageTitle="RANDOM PLAY DANCE">
      {/* Schedule Section */}
      <ScheduleSection className="mt-24" />
    </MainLayout>
  );
};

export default HomePage;
