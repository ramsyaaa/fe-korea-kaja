import React from "react";
import "../assets/styles/reward-spesial.css";
import title from "../assets/images/titles/title-reward.png";
import ytIcon from "../assets/icons/youtube.svg";

interface RewardSpesialKoreaKajaSectionProps {
  className?: string;
}

// YouTube icon SVG component
const YouTubeIcon: React.FC = () => {
  return <img src={ytIcon} alt="YouTube Icon" />;
};

// Point coin icon SVG component
const PointIcon: React.FC = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="8" cy="8" r="8" fill="#FFD700" />
    <circle cx="8" cy="8" r="6.5" fill="#FFC844" />
    <circle cx="8" cy="8" r="5" fill="#FFB71B" />
    <circle cx="8" cy="8" r="3.5" fill="#F69420" />
    <circle cx="8" cy="8" r="2" fill="#FFFFFF" />
    <text
      x="8"
      y="8"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize="6"
      fontWeight="bold"
      fill="#F69420"
    >
      P
    </text>
  </svg>
);

const RewardSpesialKoreaKajaSection: React.FC<
  RewardSpesialKoreaKajaSectionProps
> = ({ className }) => {
  const handleBuyButtonClick = () => {
    // Handle the buy button click event
    alert("Reward clicked");
    // You can add your logic here, such as navigating to a purchase page or showing a modal
  };
  return (
    <section className={`reward-spesial-section ${className}`}>
      <div className="reward-spesial-container">
        {/* Header */}
        <div className="reward-header">
          <img
            src={title}
            alt="Kuota Korea Kaja"
            className="h-auto w-full max-w-[1224px] inline-block md:scale-[0.7] scale-100"
          />
          {/* <h2 className="reward-title">Reward spesial korea kaja</h2> */}
        </div>

        {/* Reward Card */}
        <div
          className="reward-card cursor-pointer hover:-translate-y-1 hover:opacity-95 hover:drop-shadow-xl transition-all duration-300"
          onClick={handleBuyButtonClick}
        >
          <div className="reward-content">
            {/* YouTube Background Image */}
            <YouTubeIcon />
            {/* <div className="youtube-background">
              <div className="youtube-icon-container">
                <YouTubeIcon />
              </div> */}
            {/* </div> */}

            {/* Reward Details */}
            <div className="reward-details">
              <div className="reward-info">
                <h3 className="service-title">Youtube</h3>
                <div className="quota-info">
                  <span className="quota-amount !font-bold">20 GB</span>
                  <div className="divider-line"></div>
                  <span className="quota-period">30 Hari</span>
                </div>
              </div>

              <div className="points-info">
                <PointIcon />
                <span className="points-amount !font-bold">150</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardSpesialKoreaKajaSection;
