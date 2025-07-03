import React from "react";
import BgSnowDesktop from "../assets/images/bg/snow-card-desktop.png";
import Vector from "../assets/images/bg/vector.png";
import EyeVector from "../assets/images/bg/eye-vector.png";

export interface CardMenuProps {
  icon?: string;
  title?: string;
  description?: string;
  onClick?: VoidFunction;
  bgColor?: string;
  buttonText?: string;
}

const CardMenu: React.FC<CardMenuProps> = ({
  icon = "",
  title = "",
  description = "",
  bgColor = "",
  onClick,
  buttonText = "",
}) => {
  const handleClick = () => {
    onClick?.();
  };

  return (
    <div
      style={{ backgroundColor: bgColor || "" }}
      className="w-full h-[220px] md:h-[353px] rounded-[16px] relative px-[16px] py-[20px] shadow-xl"
    >
      <div
        style={{
          backgroundImage: `url(${BgSnowDesktop})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="absolute top-0 left-0 bottom-0 right-0 rounded-[16px] z-0 opacity-30"
      />

      <div className="absolute top-[40%] flex justify-between left-0 right-0">
        <img
          src={EyeVector}
          className="object-contain mix-blend-screen brightness-50"
          alt="vector"
        />
        <img
          src={Vector}
          className="object-contain grayscale opacity-30 absolute  md:relative"
          alt="vector"
        />
      </div>

      <div className="flex justify-end absolute right-[16px] top-[18px] md:relative">
        <img
          src={icon || ""}
          className="object-contain w-[60px] md:w-[100px] mix-blend-luminosity brightness-[0.80]"
          alt="Icon Card"
        />
      </div>

      <div className="md:mt-10 md:h-[58%] w-full flex flex-col gap-y-[16px] md:gap-y-4 relative z-10 justify-start items-start">
        <img src={title || ""} alt="Card Title" className="object-contain h-[54px] md:h-[72px]" />

        <p className="text-[16px] text-white whitespace-pre line-clamp-2">{description || ""}</p>

        <div
          onClick={handleClick}
          className="px-[16px] py-[12px] w-full rounded-[40px] bg-white flex justify-center items-center cursor-pointer"
        >
          <p className="text-[#1F2D3D] text-[16px] font-bold font-ohno">{buttonText || ""}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
