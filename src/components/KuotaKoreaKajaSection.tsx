import React, { useRef, useState, useEffect } from "react";
import "../assets/styles/kuota.css";
import checkIcon from "../assets/icons/kuota/check.svg";
import dividerIcon from "../assets/icons/kuota/divider.svg";
import chevronLeftIcon from "../assets/icons/kuota/chevron-left.svg";
import chevronRightIcon from "../assets/icons/kuota/chevron-right.svg";
import ribbonTailIcon from "../assets/icons/kuota/ribbon-tail.svg";
import title from "../assets/images/titles/kuota-korea-kaja-desktop.png";
import { t } from "node_modules/framer-motion/dist/types.d-B_QPEvFK";
// Define the product data
const productData = [
  {
    id: 1,
    ribbon: "Bonus Disney +",
    dataAmount: "6 GB",
    period: "30 hari",
    currentPrice: "Rp 35.000",
    originalPrice: "Rp. 100.000",
    features: [
      {
        label: "Kuota Utuh",
        value: "24 jam",
      },
      {
        label: "Bonus Kuota",
        value: "5 GB",
      },
      {
        label: "Gratis tiket masuk",
        value: "byUniverse Jember",
      },
    ],
  },
  {
    id: 2,
    ribbon: "Bonus Disney +",
    dataAmount: "10 GB",
    period: "30 hari",
    currentPrice: "Rp 50.000",
    originalPrice: "Rp. 120.000",
    features: [
      {
        label: "Kuota Utuh",
        value: "24 jam",
      },
      {
        label: "Bonus Kuota",
        value: "8 GB",
      },
      {
        label: "Gratis tiket masuk",
        value: "byUniverse Jember",
      },
    ],
  },
  {
    id: 3,
    ribbon: "Bonus Disney +",
    dataAmount: "15 GB",
    period: "30 hari",
    currentPrice: "Rp 75.000",
    originalPrice: "Rp. 150.000",
    features: [
      {
        label: "Kuota Utuh",
        value: "24 jam",
      },
      {
        label: "Bonus Kuota",
        value: "12 GB",
      },
      {
        label: "Gratis tiket masuk",
        value: "byUniverse Jember",
      },
    ],
  },
  {
    id: 4,
    ribbon: "Bonus Disney +",
    dataAmount: "30 GB",
    period: "30 hari",
    currentPrice: "Rp 100.000",
    originalPrice: "Rp. 200.000",
    features: [
      {
        label: "Kuota Utuh",
        value: "24 jam",
      },
      {
        label: "Bonus Kuota",
        value: "15 GB",
      },
      {
        label: "Gratis tiket masuk",
        value: "byUniverse Jember",
      },
    ],
  },
];

interface KuotaKoreaKajaSectionProps {
  className?: string;
}

const KuotaKoreaKajaSection: React.FC<KuotaKoreaKajaSectionProps> = ({
  className = "",
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // Constants for card layout
  const cardWidth = 295;
  const cardGap = 24;
  const cardsPerView = 3;

  useEffect(() => {
    const updateScrollLimits = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.clientWidth;
        const totalContentWidth = carouselRef.current.scrollWidth;

        setMaxScroll(Math.max(0, totalContentWidth - containerWidth));

        // If all items fit, no need for scroll buttons
        if (containerWidth >= totalContentWidth) {
          setMaxScroll(0);
        }
      }
    };

    // Initial update
    updateScrollLimits();

    // Update on resize
    window.addEventListener("resize", updateScrollLimits);

    return () => {
      window.removeEventListener("resize", updateScrollLimits);
    };
  }, []);

  const handleScroll = () => {
    if (carouselRef.current) {
      setScrollPosition(carouselRef.current.scrollLeft);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const cardGroupWidth =
        cardWidth * cardsPerView + cardGap * (cardsPerView - 1);
      const newPosition = Math.max(scrollPosition - cardGroupWidth, 0);
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const cardGroupWidth =
        cardWidth * cardsPerView + cardGap * (cardsPerView - 1);
      const newPosition = Math.min(scrollPosition + cardGroupWidth, maxScroll);
      carouselRef.current.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  // Add scroll event listener to update position
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);

      // Add event to align scroll position when scrolling stops
      let scrollTimeout: number;
      const handleScrollEnd = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = window.setTimeout(() => {
          // Calculate the closest multiple of pageWidth
          if (carousel) {
            const currentPosition = carousel.scrollLeft;
            const cardGroupWidth =
              cardWidth * cardsPerView + cardGap * (cardsPerView - 1);
            const closestPage =
              Math.round(currentPosition / cardGroupWidth) * cardGroupWidth;

            // Only do this adjustment when scrolling naturally (not from button clicks)
            if (
              Math.abs(currentPosition - closestPage) > 5 &&
              Math.abs(currentPosition - scrollPosition) < cardGroupWidth / 2
            ) {
              carousel.scrollTo({
                left: closestPage,
                behavior: "smooth",
              });
            }
          }
        }, 150); // Wait a bit after scrolling stops
      };

      carousel.addEventListener("scroll", handleScrollEnd);

      return () => {
        carousel.removeEventListener("scroll", handleScroll);
        carousel.removeEventListener("scroll", handleScrollEnd);
        clearTimeout(scrollTimeout);
      };
    }
  }, [scrollPosition, cardWidth, cardsPerView, cardGap]);

  const handleBuyButtonClick = (productId: number) => {
    // This would be connected to an actual purchase flow
    console.log(`Buy button clicked for product ${productId}`);
    window.open("https://mytelkomsel.com", "_blank");
  };
  console.log({ scrollPosition });
  return (
    <section className={`kuota-section ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="kuota-header">
          {/* <h2 className="kuota-title !font-ohno !font-bold ">
            KUOTA KHUSUS KOREA KAJA
          </h2> */}
          <img
            src={title}
            alt="Kuota Korea Kaja"
            className="h-auto w-full max-w-[1224px] inline-block md:scale-[0.7] scale-100"
          />
        </div>

        {/* Product Carousel */}
        <div className="product-carousel">
          {/* Left Navigation Button */}
          {/* <button
            className="nav-button"
            onClick={scrollLeft}
            aria-label="Previous products"
            disabled={scrollPosition <= 0}
            style={{ opacity: scrollPosition <= 0 ? 0.5 : 1 }}
          > */}
          <div
            onClick={scrollLeft}
            className={`nav-button hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8  items-center justify-center cursor-pointer ${
              scrollPosition <= 0 ? "opacity-0 hidden" : "opacity-100"
            }`}
            aria-label="Previous slide"
          >
            <img src={chevronLeftIcon} alt="Previous" width="9" height="16" />
          </div>

          {/* Carousel Container */}
          <div
            className="carousel-container"
            ref={carouselRef}
            onScroll={handleScroll}
          >
            {/* Group cards to simulate sets of 3 for CSS scroll behavior */}
            {productData.map((product) => (
              <div key={product.id} className="product-card">
                {/* Ribbon */}
                <div className="ribbon">
                  <div className="ribbon-content font-semibold">
                    {product.ribbon}
                  </div>
                  <img
                    src={ribbonTailIcon}
                    className="ribbon-tail"
                    alt=""
                    width="24"
                    height="36"
                  />
                </div>

                {/* Product Content */}
                <div className="product-content">
                  {/* Package Information */}
                  <div className="mt-12">
                    <div className="package-period">
                      <span className="data-amount">{product.dataAmount}</span>
                      <img
                        src={dividerIcon}
                        className="period-divider"
                        alt="/"
                      />
                      <span className="period">{product.period}</span>
                    </div>

                    <div className="price-container flex flex-row items-center gap-2">
                      <span className="current-price font-semibold">
                        {product.currentPrice}
                      </span>
                      <span className="original-price">
                        {product.originalPrice}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="features-list">
                    {product.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <img src={checkIcon} className="feature-check" alt="" />
                        <div className="feature-text">
                          <span className="feature-label">{feature.label}</span>
                          <span className="feature-value">{feature.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Buy Button */}
                  <button
                    className="buy-button"
                    onClick={() => handleBuyButtonClick(product.id)}
                  >
                    Beli Sekarang!
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Button */}
          {/* <button
            className="nav-button "
            onClick={scrollRight}
            aria-label="Next products"
            disabled={scrollPosition >= maxScroll}
            style={{ opacity: scrollPosition >= maxScroll ? 0.5 : 1 }}
          > */}
          <div
            onClick={scrollRight}
            className={`nav-button hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 items-center justify-center  cursor-pointer ${
              scrollPosition >= maxScroll
                ? "opacity-0 invisible"
                : "opacity-100 visible"
            }`}
            aria-label="Next slide"
          >
            <img src={chevronRightIcon} alt="Next" width="9" height="16" />
          </div>
        </div>

        {/* No Indicator Dots */}
      </div>
    </section>
  );
};

export default KuotaKoreaKajaSection;
