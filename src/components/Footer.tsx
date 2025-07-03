import React from "react";
import IconInstagram from "../assets/images/icon/instagram.svg";
import IconX from "../assets/images/icon/x-twitter.svg";
import BGFooter from "../assets/images/footer/bg-footer-desktop.png";
import BGFooterMobile from "../assets/images/footer/bg-footer-mobile.png";
import Container from "./Container";
import FooterTitle from "../assets/images/footer/title-desktop.svg";
import FooterTitleMobile from "../assets/images/footer/title-mobile.svg";

const Footer: React.FC = () => {
  const currentYear = new Date()?.getFullYear();

  const goToInstagram = () => window.open("https://www.instagram.com/byu.id/", "_blank");
  const goToX = () => window.open("https://x.com/byu_id", "_blank");

  return (
    <footer className="relative mt-10">
      {/* Desktop Footer */}
      <div
        style={{
          backgroundImage: `url(${BGFooter})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="hidden md:block w-full h-[224px]"
      >
        <Container className="px-[6rem]">
          <div className="flex flex-col h-[200px] justify-center items-center w-[max-content] gap-y-4">
            <img src={FooterTitle} alt="Title Footer" />
            <div
              style={{
                background:
                  "linear-gradient(90deg, #EF48A8 -3.59%, #E34EAC 6.19%, #C55EB5 24.68%, #9378C5 47.51%, #4E9BDB 76.86%, #01C3F3 105.13%)",
              }}
              className="w-[200px] h-[40px] rounded-full flex justify-center items-center cursor-pointer"
            >
              <p className="text-[24px] font-ohno font-semibold text-white">Tanya Nindy</p>
            </div>
          </div>
        </Container>
      </div>

      <div className="w-full bg-[#1F2D3D] py-[16px] hidden md:block">
        <Container className="flex items-center justify-start py-0 gap-x-4">
          <p className="text-white text-[16px]">Ikuti kami</p>

          <div className="flex gap-x-3">
            <img
              onClick={goToInstagram}
              src={IconInstagram}
              alt="icon instagram"
              className="cursor-pointer"
            />
            <img onClick={goToX} src={IconX} alt="icon instagram" className="cursor-pointer" />
          </div>
        </Container>
      </div>

      <div className="w-full bg-[#0C1219] p-[16px] text-center hidden md:block">
        <p className="text-[13px] text-white">
          Copyright © {currentYear} - by.U PT Telekomunikasi Selular
        </p>
      </div>

      {/* Mobile Footer */}
      <div
        style={{
          backgroundImage: `url(${BGFooterMobile})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "calc(100% + 1px)",
        }}
        className="h-[265px] rounded-t-[40px] relative left-[-1px]"
      >
        <div className="h-[202px] w-full">
          <div className="flex flex-col gap-y-3 w-[max-content] items-center justify-center h-full px-[20px]">
            <img src={FooterTitleMobile} alt="footer title mobile" />

            <div
              style={{
                background:
                  "linear-gradient(90deg, #EF48A8 -3.59%, #E34EAC 6.19%, #C55EB5 24.68%, #9378C5 47.51%, #4E9BDB 76.86%, #01C3F3 105.13%)",
              }}
              className="w-[150px] h-[32px] rounded-full flex justify-center items-center cursor-pointer"
            >
              <p className="text-[16px] font-ohno font-semibold text-white">Tanya Nindy</p>
            </div>
          </div>
          <div className="w-full h-[62px] px-[30px] flex items-center">
            <div
              style={{
                background:
                  "linear-gradient(90deg, #EF48A8 -3.59%, #E34EAC 6.19%, #C55EB5 24.68%, #9378C5 47.51%, #4E9BDB 76.86%, #01C3F3 105.13%)",
              }}
              className="w-full h-[40px] rounded-full flex justify-center items-center cursor-pointer"
            >
              <p className="text-[20px] font-ohno font-semibold text-white">Ikutan Disini</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
