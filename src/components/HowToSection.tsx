import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/carousel.css";

// Import images
import howToTitleDesktop from "../assets/images/how-to/how-to-title-desktop.png";
import howToTitleMobile from "../assets/images/how-to/how-to-title-mobile.png";
import arrowRight from "../assets/icons/how-to/arrow-right.svg";

// Import carousel images
import carouselItem1 from "../assets/images/how-to/carousel-item-1-desktop.png";
import carouselItem2 from "../assets/images/how-to/carousel-item-2-desktop.png";
import carouselItem3 from "../assets/images/how-to/carousel-item-3-desktop.png";
import carouselItem4 from "../assets/images/how-to/carousel-item-4-desktop.png";
import carouselItemMobile from "../assets/images/how-to/carousel-item-mobile.png";

interface StepperProps {
  currentSlide: number;
  totalSlides: number;
}

const Stepper: React.FC<StepperProps> = ({ currentSlide, totalSlides }) => {
  return (
    <div className="flex items-center justify-center mt-6 relative">
      {/* Line - match Figma layout with 775px width */}
      <div className="h-[2px] bg-[#B8C1CB] absolute w-full md:w-[610px] z-0"></div>

      {/* Steps - match Figma gap of 227px on desktop */}
      <div className="flex items-center md:gap-x-20 gap-x-24 md:flex md:justify-between md:w-[630px] md:mx-auto z-10">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <div key={index} className="flex items-center justify-center">
            <div
              className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center ${
                index === currentSlide
                  ? "bg-[#00BCF1]"
                  : "md:bg-[#00BCF1] bg-white border-2 border-[#B8C1CB] md:border-0"
              }`}
            >
              <span
                className={`text-xs md:text-lg font-gilroy ${
                  index === currentSlide
                    ? "text-white"
                    : "md:text-white text-[#6A7481]"
                }`}
              >
                {index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface HowToSlideData {
  title: string;
  description: string;
  image: string;
}

interface HowToSectionProps {
  className?: string;
}

const HowToSection: React.FC<HowToSectionProps> = ({ className = "" }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const mobileSliderRef = useRef<Slider | null>(null);
  // We still keep the desktopSliderRef for mobile/desktop switching logic
  const desktopSliderRef = useRef<Slider | null>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Make sure we can access the current slide even when using mobile navigation
  useEffect(() => {
    // This ensures the correct slider is updated with the current slide
    if (
      isMobile &&
      mobileSliderRef.current &&
      mobileSliderRef.current.slickGoTo
    ) {
      mobileSliderRef.current.slickGoTo(currentSlide);
    } else if (
      !isMobile &&
      desktopSliderRef.current &&
      desktopSliderRef.current.slickGoTo
    ) {
      desktopSliderRef.current.slickGoTo(currentSlide);
    }
  }, [isMobile, currentSlide]);

  const howToSlides: HowToSlideData[] = [
    {
      title: "Beli 'Kpopers Modal Kuota'",
      description:
        "beli promo sebanyak-banyaknya dan isi data diri kamu di go.byu.id/koreakaja",
      image: carouselItem1,
    },
    {
      title: "Atau beli merchandise",
      description:
        "berlogo Korea Kaja di uStore, dan isi data diri kamu di go.byu.id/koreakaja",
      image: carouselItem2,
    },
    {
      title: "Atau buat video",
      description:
        "'Random Play Dance' Post di IG/Reels/Short Dengan hastag #byUKoreaKaja #byUGoesToKorea dan isi data di go.byu.id/koreakaja",
      image: carouselItem3,
    },
    {
      title: "Pantengin Sosial Media by.U",
      description: "Buat info selanjutnya dan selengkapnya!",
      image: carouselItem4,
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    adaptiveHeight: true,
    beforeChange: (_: any, next: number) => {
      setCurrentSlide(next);
    },
    afterChange: () => {},
    initialSlide: currentSlide,
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      const activeSlider = isMobile
        ? mobileSliderRef.current
        : desktopSliderRef.current;
      if (activeSlider) {
        activeSlider.slickPrev();
      }
    }
  };

  const handleNext = () => {
    if (currentSlide < howToSlides.length - 1) {
      const activeSlider = isMobile
        ? mobileSliderRef.current
        : desktopSliderRef.current;
      if (activeSlider) {
        activeSlider.slickNext();
      }
    }
  };

  return (
    <section className={`py-6 md:py-10 ${className}`}>
      <div className="container mx-auto px-4 md:px-[108px]">
        {/* Title */}
        <div className="text-center mb-6 md:mb-8">
          <picture>
            <source media="(min-width: 768px)" srcSet={howToTitleDesktop} />
            <img
              src={howToTitleMobile}
              alt="GIMANA CARANYA JOIN RPD?"
              className="h-auto w-full max-w-[416px] inline-block"
            />
          </picture>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Mobile View with Navigation Buttons */}
          <div className="md:hidden relative mb-6">
            {/* Previous Button */}
            <div
              onClick={handlePrev}
              className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center cursor-pointer ${
                currentSlide === 0
                  ? "opacity-0 invisible"
                  : "opacity-100 visible"
              }`}
              aria-label="Previous slide"
            >
              <img
                src={arrowRight}
                alt="Previous"
                className="w-[32px] h-[32px] transform rotate-180"
              />
            </div>

            {/* Mobile Slider */}
            <div className="px-8">
              <Slider ref={mobileSliderRef} {...settings}>
                {howToSlides.map((slide, index) => (
                  <div key={index} className="px-2 flex justify-center">
                    <div className="w-[236px] h-[218px] relative flex items-center justify-center">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-auto w-full mx-auto object-contain"
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Next Button */}
            <div
              onClick={handleNext}
              className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center  cursor-pointer ${
                currentSlide === howToSlides.length - 1
                  ? "opacity-0 invisible"
                  : "opacity-100 visible"
              }`}
              aria-label="Next slide"
            >
              <img src={arrowRight} alt="Next" className="w-[32px] h-[32px]" />
            </div>
          </div>

          {/* Desktop Row View - based on Figma design with exact alignment */}
          <div className="hidden md:block">
            {/* Carousel Items in a row with exact alignment */}
            <div className="md:grid md:grid-cols-4 md:w-[775px] md:mx-auto mb-8">
              {howToSlides.map((slide, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="w-[236px] h-[218px] relative cursor-pointer flex items-center justify-center">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* On mobile, only show the current slide */}
          <div className="text-center md:hidden">
            <h3
              className="font-gilroy font-semibold text-base text-[#1F2D3D]"
              style={{ letterSpacing: "0.5%" }}
            >
              {howToSlides[currentSlide].title}
            </h3>
            <p className="mt-1 text-[13px] text-[#6A7481] font-gilroy max-w-[236px] mx-auto leading-[1.54]">
              {howToSlides[currentSlide].description}
            </p>
          </div>
          {/* Stepper - visible on both mobile and desktop */}
          <div className="md:mt-4">
            <Stepper
              currentSlide={currentSlide}
              totalSlides={howToSlides.length}
            />
          </div>

          {/* Content - match Figma row layout for desktop with exact alignment to stepper */}
          <div className="md:mt-4 mt-4">
            <div className="md:max-w-[800px] md:mx-auto">
              {/* On desktop, show all texts aligned with the steppers above */}
              <div className="hidden md:grid md:grid-cols-4 md:w-[790px] md:gap-0 md:px-0">
                {howToSlides.map((slide, index) => (
                  <div key={index} className="text-center w-[150px] mx-auto">
                    <h3
                      className="font-gilroy font-semibold text-base text-[#1F2D3D]"
                      style={{ letterSpacing: "0.5%" }}
                    >
                      {slide.title}
                    </h3>
                    <p className="mt-1 text-[13px] text-[#6A7481] font-gilroy max-w-[236px] mx-auto leading-[1.54]">
                      {slide.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToSection;
