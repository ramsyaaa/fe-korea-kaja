import React from "react";
import MainLayout from "src/layouts/MainLayout";
import BgMainPage from "../assets/images/bg/bg-mainpage.png";
import PartnershipSection from "src/components/PartnershipSection";
import TeaserSection from "src/components/TeaserSection";
import MenuSection from "src/components/MenuSection";
import FAQ from "src/components/FAQ";

const MainPage: React.FC = () => {
  return (
    <MainLayout backgroundImage={[BgMainPage]}>
      <PartnershipSection className="md:mt-24 -mt-10" type="main-page" />
      <TeaserSection className="md:mt-10 mt-8 px-2 md:mx-auto md:w-[80%]" />
      <MenuSection className="md:mt-24 mt-16 px-2 md:mx-auto md:w-[80%]" />
      <FAQ
        className="md:mt-24 mt-16 px-2 md:mx-auto md:w-[80%]"
        screen="main"
      />
    </MainLayout>
  );
};

export default MainPage;
