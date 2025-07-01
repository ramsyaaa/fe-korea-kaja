import React, { useEffect, useState, useRef } from "react";
import "../assets/styles/partnership.css";
import partnershipDesc from "../assets/images/partnership/partnership-desc.png";
import partnershipAsset from "../assets/images/partnership/partnership-asset.png";
import partnershipKoreaKaja from "../assets/images/partnership/partnership-koreakaja.png";
import partnershipMainPageKoreaKaja from "../assets/images/partnership/main-page/desktop/partnership-main-page-korea-kaja.png";
import partnershipDescMainPageKoreaKaja from "../assets/images/partnership/main-page/desktop/partnership-desc-main-page-korea-kaja.png";
import partnershipKuotaKoreaKaja from "../assets/images/partnership/partnership-kuota-korea-kaja.png";
import partnershipUstore from "../assets/images/partnership/merchUstore/partnership-ustore.png";
import partnershipUstoreDesc from "../assets/images/partnership/merchUstore/merch-ustore-desc.png";
import partnershipUcoin from "../assets/images/partnership/TukarUCoin/partnership-ucoin.png";
import partnershipUcoinDesc from "../assets/images/partnership/TukarUCoin/ucoin-ustore-desc.png";
// Mobile assets
import partnershipKoreaKajaMobile from "../assets/images/partnership/mobile/partnership-koreakaja-mobile.png";
import partnershipMainPageKoreaKajaMobile from "../assets/images/partnership/main-page/mobile/partnership-main-page-korea-kaja-mobile.png";
import partnershipDescMobile from "../assets/images/partnership/mobile/partnership-desc-mobile.png";
import partnershipAssetMobile from "../assets/images/partnership/mobile/partnership-asset-mobile.png";
import partnershipKuotaKoreaKajaDesc from "../assets/images/partnership/partnership-desc-kuota-korea-kaja-desktop.png";
import partnershipDescMainPageKoreaKajaMobile from "../assets/images/partnership/main-page/mobile/partnership-desc-main-page-korea-kaja-mobile.png";
import partnershipKuotaKoreaKajaMobileDesc from "../assets/images/partnership/mobile/partnership-desc-kuota-korea-kaja-mobile.png";
import partnershipKuotaKoreaKajaMobile from "../assets/images/partnership/mobile/partnership-kuota-korea-kaja-mobile.png";
import partnershipUstoreMobile from "../assets/images/partnership/merchUstore/mobile/partnership-ustore-mobile.png";
import partnershipUstoreMobileDesc from "../assets/images/partnership/merchUstore/mobile/merch-ustore-desc-mobile.png";
import partnershipUcoinMobile from "../assets/images/partnership/TukarUCoin/mobile/partnership-ucoin-mobile.png";
import partnershipUcoinMobileDesc from "../assets/images/partnership/TukarUCoin/mobile/ucoin-desc.png";
interface PartnershipSectionProps {
  className?: string;
  type?: "kuota-korea-kaja" | "random-play-dance" | "merch-ustore" | "tukar-ucoin" | "main-page";
}

const PartnershipSection: React.FC<PartnershipSectionProps> = ({ className = "", type }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const illustrationDesktop =
    type === "kuota-korea-kaja"
      ? partnershipKuotaKoreaKaja
      : type === "merch-ustore"
      ? partnershipUstore
      : type === "tukar-ucoin"
      ? partnershipUcoin
      : type === "main-page"
      ? partnershipMainPageKoreaKaja
      : partnershipKoreaKaja;
  const illustrationMobile =
    type === "kuota-korea-kaja"
      ? partnershipKuotaKoreaKajaMobile
      : type === "merch-ustore"
      ? partnershipUstoreMobile
      : type === "tukar-ucoin"
      ? partnershipUcoinMobile
      : type === "main-page"
      ? partnershipMainPageKoreaKajaMobile
      : partnershipKoreaKajaMobile;
  const labelBannerDesktop =
    type === "kuota-korea-kaja"
      ? partnershipKuotaKoreaKajaDesc
      : type === "merch-ustore"
      ? partnershipUstoreDesc
      : type === "tukar-ucoin"
      ? partnershipUcoinDesc
      : type === "main-page"
      ? partnershipDescMainPageKoreaKaja
      : partnershipDesc;

  const labelBannerMobile =
    type === "kuota-korea-kaja"
      ? partnershipKuotaKoreaKajaMobileDesc
      : type === "merch-ustore"
      ? partnershipUstoreMobileDesc
      : type === "tukar-ucoin"
      ? partnershipUcoinMobileDesc
      : type === "main-page"
      ? partnershipDescMainPageKoreaKajaMobile
      : partnershipDescMobile;
  // Original design dimensions
  const originalWidth = 1440; // Based on Figma frame width
  const originalHeight = 807;

  // Original positions and dimensions from Figma
  const elements = {
    koreaKaja: {
      left: 120,
      top: 80,
      width: 419.33,
      height: 647.33,
    },
    description: {
      left: 629,
      top: 156,
      width: 700,
      height: 316,
    },
    asset: {
      left: 821,
      top: 564,
      width: 316,
      height: 52,
    },
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const currentWidth = containerRef.current.clientWidth;

        // Calculate scale based on container width vs original design width
        const newScale = currentWidth / originalWidth;
        setScale(newScale);
      }
    };

    // Initial update
    updateDimensions();

    // Add resize listener
    window.addEventListener("resize", updateDimensions);

    // Clean up
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  // Calculate scaled dimensions and positions
  const getScaledStyles = (element: {
    left: number;
    top: number;
    width: number;
    height: number;
  }) => {
    return {
      left: `${element.left * scale}px`,
      top: `${element.top * scale}px`,
      width: `${element.width * scale}px`,
      height: `${element.height * scale}px`,
    };
  };

  return (
    <section className={`partnership-section relative w-full ${className}`}>
      <div
        ref={containerRef}
        className="partnership-container w-full mx-auto relative hidden md:block"
        style={{
          height: `${originalHeight * scale}px`,
        }}
      >
        {/* Korea Kaja Image - Left Side */}
        <div className="absolute" style={getScaledStyles(elements.koreaKaja)}>
          <img
            src={illustrationDesktop}
            alt="Korea Kaja Logo"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Description Image - Right Side */}
        <div className="absolute" style={getScaledStyles(elements.description)}>
          <img
            src={labelBannerDesktop}
            alt="Partnership Description"
            className="w-full h-full object-contain"
          />
        </div>
        {/* Asset Image - Bottom */}
        <div
          className="absolute cursor-pointer hover:-translate-y-1 hover:opacity-95 hover:drop-shadow-xl transition-all duration-300"
          style={getScaledStyles(elements.asset)}
          onClick={() => alert("Cek info lebih lanjut")}
        >
          <img
            src={partnershipAsset}
            alt="Partnership Asset Button"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Mobile version - hidden on desktop */}
      <div
        className="md:hidden partnership-mobile-container"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #FFF 0%, rgba(255, 255, 255, 0.00) 100%)",
        }}
      >
        <img
          src={illustrationMobile}
          alt="Korea Kaja Logo"
          className="partnership-korea-kaja-mobile"
        />

        <img
          src={labelBannerMobile}
          alt="Partnership Description"
          className="partnership-desc-mobile"
        />

        <img
          src={partnershipAssetMobile}
          alt="Partnership Asset Button"
          className="partnership-asset-mobile"
          onClick={() => alert("Cek info lebih lanjut")}
        />
      </div>
    </section>
  );
};

export default PartnershipSection;
