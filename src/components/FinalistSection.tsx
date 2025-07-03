import React, { useState } from "react";
import { motion } from "framer-motion";
import "../assets/images/finalist/finalist.css";

import chevronLeftIcon from "../assets/icons/kuota/chevron-left.svg";
import chevronRightIcon from "../assets/icons/kuota/chevron-right.svg";
interface FinalistProps {
  name: string;
  username: string;
  photoUrl: string;
  rank?: number;
}

interface CitySectionProps {
  cityName: string;
  finalists: FinalistProps[];
}

const FinalistCard: React.FC<FinalistProps> = ({
  name,
  username,
  photoUrl,
  rank,
}) => {
  const getNumberImage = (rank: number) => {
    switch (rank) {
      case 1:
        return "/src/assets/icons/number/1.svg";

      default:
        return "/src/assets/icons/number/2.svg";
    }
  };

  return (
    <div className="finalist-card md:mb-5 mb-2">
      {/* Position badge as direct child of finalist-card to overlay the entire card */}
      {rank && (
        <div className="badge -top-[0px] -right-[19px] md:-top-[1px] md:-right-[15px]">
          <div className="badge-icon"></div>
          <img
            src={getNumberImage(rank)}
            alt={`Badge for ${name}`}
            className="absolute top-[8px] left-[14px] z-10 w-[14px] h-[14px]"
          />
          {/* <span className="badge-number font-ohno">{rank}</span> */}
        </div>
      )}
      <div className="photo-container">
        <div className="card-bg"></div>
        <img src={photoUrl} alt={name} className="photo" />
      </div>
      <div className="finalist-info min-h-[55.16px]">
        <h3 className="finalist-name">{name}</h3>
        {username ? <p className="finalist-username">{username}</p> : <></>}
      </div>
    </div>
  );
};

const CitySection: React.FC<CitySectionProps> = ({ cityName, finalists }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [slideAmount, setSlideAmount] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4); // Default visible cards
  const CARD_WIDTH = 126; // Width of card in px
  const CARD_GAP = 16; // Gap between cards in px
  const TOTAL_SLOTS = 20; // Total reserved slots per city

  // Create array of 20 slots, filling with actual finalists and placeholders
  const allSlots = React.useMemo(() => {
    const slots = [];

    // Add actual finalists
    for (let i = 0; i < TOTAL_SLOTS; i++) {
      if (i < finalists.length) {
        slots.push({ type: "finalist", data: finalists[i] });
      } else {
        const imgSilhouettes = [
          "/src/assets/images/finalist/finalist-silhouete-1.jpg",
          "/src/assets/images/finalist/finalist-silhouete-2.png",
          "/src/assets/images/finalist/finalist-silhouete-3.png",
          "/src/assets/images/finalist/finalist-silhouete-4.png",
        ];
        // Get silhouette image by cycling through the array
        const silhouetteIndex = (i - finalists.length) % imgSilhouettes.length;
        const emptySlot = {
          name: "Finalist",
          username: "",
          photoUrl: imgSilhouettes[silhouetteIndex],
        };
        slots.push({ type: "placeholder", data: emptySlot });
      }
    }

    return slots;
  }, [finalists]);

  // Calculate the number of visible cards and slide amount
  React.useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const width = container.clientWidth;

        // Card width includes gap
        const cardWidthWithGap = CARD_WIDTH + CARD_GAP;

        // For desktop, add padding to account for nav buttons
        const adjustedWidth = width >= 1024 ? width - 40 : width;

        // Calculate exactly how many complete cards can fit without showing partials
        const visibleCards = Math.floor(adjustedWidth / cardWidthWithGap);

        // Ensure at least one card is visible on very small screens
        const calculatedVisibleCount = Math.max(1, visibleCards);

        // On desktop (1024px+) ensure we only show complete cards
        const finalVisibleCount = calculatedVisibleCount;

        setVisibleCount(finalVisibleCount);

        // Store the slide amount (card width + gap)
        setSlideAmount(cardWidthWithGap);
      }
    };

    updateDimensions();

    // Add debounce to resize event to improve performance
    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(updateDimensions, 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Calculate max index to prevent overshooting
  const maxIndex = Math.max(0, TOTAL_SLOTS - visibleCount);

  // Adjust activeIndex if it's beyond maxIndex (can happen after resize)
  React.useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [maxIndex, activeIndex]);

  // Slide by a specific number of cards, ensuring all cards are fully visible
  const handleNext = () => {
    // Calculate how many cards to slide by - minimum 1, maximum visibleCount
    const slideFactor = Math.min(
      visibleCount,
      TOTAL_SLOTS - (activeIndex + visibleCount)
    );
    setActiveIndex((prev) => Math.min(prev + (slideFactor || 1), maxIndex));
  };

  const handlePrev = () => {
    // Slide by visible count or remaining cards if fewer than visible count
    const slideFactor = Math.min(visibleCount, activeIndex);
    setActiveIndex((prev) => Math.max(prev - (slideFactor || 1), 0));
  };

  // Calculate the translation offset based on complete cards
  const offsetX = activeIndex * (slideAmount || CARD_WIDTH + CARD_GAP);

  // Track window width for responsive calculations
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Update window width on resize
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate the container width for styling - ensure no partial cards
  const containerStyle = React.useMemo(() => {
    if (windowWidth >= 1024) {
      // On desktop, make container exactly fit visible cards to avoid partial cards
      return {
        width: `${visibleCount * (CARD_WIDTH + CARD_GAP) - CARD_GAP}px`,
        margin: "0 auto", // Center the cards
      };
    }
    return { width: "100%" }; // Default style for mobile - full width
  }, [visibleCount, windowWidth]);

  return (
    <div className="city-section">
      <div className="city-title">
        <h2 className="!font-semibold md:!text-[24px]">{cityName}</h2>
      </div>
      <div className="finalists-container" ref={containerRef}>
        <div className="carousel-wrapper" style={containerStyle}>
          <motion.div
            className="finalists-grid"
            animate={{ x: -offsetX }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {allSlots.map((slot, index) => (
              <div key={index}>
                {slot.data ? <FinalistCard {...slot.data} /> : null}
              </div>
            ))}
          </motion.div>
        </div>

        <>
          <div
            onClick={handlePrev}
            className={`nav-button hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8  items-center justify-center cursor-pointer ${
              activeIndex === 0 ? "opacity-0 invisible" : "opacity-100 visible"
            }`}
            aria-label="Previous slide"
          >
            <img src={chevronLeftIcon} alt="Previous" width="9" height="16" />
          </div>
          <div
            onClick={handleNext}
            className={`nav-button hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 items-center justify-center  cursor-pointer ${
              activeIndex >= maxIndex
                ? "opacity-0 invisible"
                : "opacity-100 visible"
            }`}
            aria-label="Next slide"
          >
            <img src={chevronRightIcon} alt="Next" width="9" height="16" />
          </div>
        </>
      </div>
    </div>
  );
};

const FinalistSection: React.FC = () => {
  // Sample data - replace with actual data
  const cityData: CitySectionProps[] = [
    {
      cityName: "Surabaya",
      finalists: [
        {
          name: "Kejimin",
          username: "@kejimin",
          photoUrl: "/src/assets/images/finalist/finalist-photo-1.png",
          rank: 1,
        },
        {
          name: "Kejimin",
          username: "@kejimin",
          photoUrl: "/src/assets/images/finalist/finalist-photo-1.png",
          rank: 2,
        },
        {
          name: "Kejimin",
          username: "@kejimin",
          photoUrl: "/src/assets/images/finalist/finalist-photo-1.png",
        },
      ],
    },
    {
      cityName: "Bali",
      finalists: [],
    },
    {
      cityName: "Solo",
      finalists: [],
    },
  ];

  return (
    <section className="finalist-section md:mt-14 mt-5">
      <div className="finalist-header">
        <div className="title-image"></div>
        {/* <p className="subtitle">
          Pastikan kamu sudah memenuhi semua syarat sebelum ikutan challenge
          seru ini!
        </p> */}
      </div>

      <div className="city-sections-container">
        {cityData.map((city, index) => (
          <CitySection
            key={index}
            cityName={city.cityName}
            finalists={city.finalists}
          />
        ))}
      </div>
    </section>
  );
};

export default FinalistSection;
