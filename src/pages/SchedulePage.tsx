import React from "react";
import MainLayout from "../layouts/MainLayout";
import ScheduleSection from "../components/ScheduleSection";

const SchedulePage: React.FC = () => {
  return (
    <MainLayout pageTitle="SCHEDULE">
      <div className="mt-8 md:mt-16">
        <ScheduleSection />
      </div>
    </MainLayout>
  );
};

export default SchedulePage;
