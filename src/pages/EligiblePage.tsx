import React from "react";
import MainLayout from "../layouts/MainLayout";
import EligibleSection from "../components/EligibleSection";

const EligiblePage: React.FC = () => {
  return (
    <MainLayout pageTitle="Who Can Join">
      <EligibleSection className="md:mt-24 mt-16" />
    </MainLayout>
  );
};

export default EligiblePage;
