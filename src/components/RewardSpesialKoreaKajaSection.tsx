import React from "react";
import "../assets/styles/reward-spesial.css";

interface RewardSpesialKoreaKajaSectionProps {
  className?: string;
}

// YouTube icon SVG component
const YouTubeIcon: React.FC = () => (
  <svg
    width="118"
    height="118"
    viewBox="0 0 118 118"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="118"
      height="118"
      rx="10"
      fill="white"
      style={{
        filter:
          "drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.05)) drop-shadow(0px 1px 18px rgba(0, 0, 0, 0.05)) drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.05))",
      }}
    />
    {/* YouTube Logo Background */}
    <rect x="29" y="35" width="60" height="48" rx="12" fill="#FF0000" />
    {/* YouTube Play Button */}
    <path d="M48 47.5V70.5L68 59L48 47.5Z" fill="white" />
  </svg>
);

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
  return (
    <section className={`reward-spesial-section ${className}`}>
      <div className="reward-spesial-container">
        {/* Header */}
        <div className="reward-header">
          <h2 className="reward-title">Reward spesial korea kaja</h2>
        </div>

        {/* Reward Card */}
        <div className="reward-card">
          <div className="reward-content">
            {/* YouTube Background Image */}
            <div className="youtube-background">
              <div className="youtube-icon-container">
                <YouTubeIcon />
              </div>
            </div>

            {/* Reward Details */}
            <div className="reward-details">
              <div className="reward-info">
                <h3 className="service-title">Youtube</h3>
                <div className="quota-info">
                  <span className="quota-amount">20 GB</span>
                  <div className="divider-line"></div>
                  <span className="quota-period">30 Hari</span>
                </div>
              </div>

              <div className="points-info">
                <PointIcon />
                <span className="points-amount">150</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardSpesialKoreaKajaSection;
