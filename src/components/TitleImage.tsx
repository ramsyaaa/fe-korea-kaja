import React from "react";
// Import images directly
import randomPlayDanceMobile from "../assets/images/titles/random-play-dance-mobile.png";
import randomPlayDanceDesktop from "../assets/images/titles/random-play-dance-desktop.png";
import scheduleTitleMobile from "../assets/images/titles/schedule-title-mobile.png";
import scheduleTitleDesktop from "../assets/images/titles/schedule-title-desktop.png";

interface TitleImageProps {
  title?: string;
  className?: string;
}

const TitleImage: React.FC<TitleImageProps> = ({ title, className = "" }) => {
  // Handle different title options
  const getImages = () => {
    switch (title) {
      case "RANDOM PLAY DANCE":
        return {
          mobile: randomPlayDanceMobile,
          desktop: randomPlayDanceDesktop,
        };
      case "SCHEDULE":
        return {
          mobile: scheduleTitleMobile,
          desktop: scheduleTitleDesktop,
        };
      default:
        return {
          mobile: undefined,
          desktop: undefined,
        };
    }
  };

  const images = getImages();

  return (
    <div className={className}>
      {images?.desktop ?? (
        <img
          src={images?.desktop}
          alt={title}
          className="hidden md:block h-auto w-full max-w-[549px]"
        />
      )}
      {images?.mobile && (
        <img
          src={images?.mobile}
          alt={title}
          className="block md:hidden h-auto w-auto max-w-[318px]"
        />
      )}
    </div>
  );
};

export default TitleImage;
