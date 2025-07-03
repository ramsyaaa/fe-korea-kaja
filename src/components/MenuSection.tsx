import React from "react";
import TitleDesktop from "../assets/images/titles/menu-section-title-desktop.png";
import TitleMobile from "../assets/images/titles/menu-section-title-desktop.png";
import GlobeIcon from "../assets/images/icon/globe-icon.png";
import HeadphoneIcon from "../assets/images/icon/headphone-icon.png";
import UcoinIcon from "../assets/images/icon/ucoin.png";
import UStoreIcon from "../assets/images/icon/uStore.png";
import TitleKuotaKoreaKajaDesktop from "../assets/images/titles/title-card-kuota-korea-kaja-desktop.png";
import TitlePlayDanceDesktop from "../assets/images/titles/title-play-dance-desktop.png";
import TitleUCoinDesktop from "../assets/images/titles/ucoin-desktop.png";
import TitleuStoreDesktop from "../assets/images/titles/ustore-desktop.png";
import CardMenu from "./CardMenu";
import { useNavigate } from "react-router-dom";

export interface MenuSectionProps {
  className?: string;
}

const MenuSection: React.FC<MenuSectionProps> = ({ className }) => {
  const navigate = useNavigate();
  const handleClick = (type: "quota" | "rpd" | "uCoin" | "uStore") => {
    const paths = {
      quota: "/kuota-korea-kaja",
      rpd: "/random-play-dance",
      uStore: "/merch-ustore",
      uCoin: "/tukar-ucoin",
    };

    return navigate(paths?.[type]);
  };

  return (
    <section className={`menu-section ${className}`}>
      <div className="w-full flex flex-col items-center gap-y-4">
        <img
          src={TitleDesktop}
          alt="Title Desktop"
          className="h-[58px] object-contain md:w-[50%] hidden md:block md:mb-4"
        />
        <img
          src={TitleMobile}
          alt="Title Mobile"
          className="h-[36px] w-[85%] object-contain md:hidden"
        />

        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 items-center md:h-[353px]">
          <CardMenu
            icon={GlobeIcon}
            title={TitleKuotaKoreaKajaDesktop}
            bgColor="#A673AD"
            description={`Submit video dance 30\ndetik`}
            buttonText="Beli Kuota"
            onClick={() => handleClick("quota")}
          />
          <CardMenu
            icon={HeadphoneIcon}
            title={TitlePlayDanceDesktop}
            bgColor="#ED77C1"
            description={`Submit video dance 30\ndetik`}
            buttonText="Daftar RPD"
            onClick={() => handleClick("rpd")}
          />
          <CardMenu
            icon={UcoinIcon}
            title={TitleUCoinDesktop}
            bgColor="#60C4F0"
            description={`Submit video dance 30\ndetik`}
            buttonText="Tukar uCoin"
            onClick={() => handleClick("uCoin")}
          />
          <CardMenu
            icon={UStoreIcon}
            title={TitleuStoreDesktop}
            bgColor="#8A97CD"
            description={`Submit video dance 30\ndetik`}
            buttonText="Beli uStore"
            onClick={() => handleClick("uStore")}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
