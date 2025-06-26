import React, { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface MainLayoutProps {
  children: ReactNode;
  pageTitle?: string;
  backgroundImage?: string | string[];
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  pageTitle,
  backgroundImage,
}) => {
  const getBackgroundStyle = () => {
    if (!backgroundImage) return {};

    if (Array.isArray(backgroundImage)) {
      // Multiple backgrounds using CSS multiple background syntax
      // The first image in the array will be on top
      const backgroundImages = backgroundImage
        .map((img) => `url(${img})`)
        .join(", ");

      return {
        backgroundImage: backgroundImages,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover, cover",
        backgroundPosition: "center, center",
      };
    } else {
      // Single background image
      return {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
    }
  };

  const backgroundStyle = getBackgroundStyle();

  return (
    <div className="min-h-screen flex flex-col " style={backgroundStyle}>
      <Header pageTitle={pageTitle} />
      <main className="flex-1 container mx-auto px-4 ">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
