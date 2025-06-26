import React from "react";
import pinIcon from "../assets/icons/schedule/pin-location.svg";
import jadwalTitle from "../assets/images/schedule/jadwal-title-mobile.png";
import jadwalTitleDesktop from "../assets/images/schedule/jadwal-title.png";
import quarterCircle from "../assets/icons/schedule/quarter-circle.svg";
import scheduleImageMobile from "../assets/images/schedule/schedule-image-mobile.png";
import scheduleImageDesktop from "../assets/images/schedule/schedule-image-desktop.png";
import "../assets/styles/schedule.css";

interface CityItemProps {
  number: number;
  city: string;
  venue: string;
  date: string;
}

const CityItem: React.FC<CityItemProps> = ({ number, city, venue, date }) => {
  return (
    <div className="city-item">
      <div className="city-item-inner">
        {/* Blue Quarter Circle Background */}
        <img
          src={quarterCircle}
          alt=""
          className="quarter-circle-svg"
          aria-hidden="true"
        />

        {/* Number */}
        <div className="number-container">
          <span className="number-text !font-semibold">{number}</span>
        </div>

        {/* City Details */}
        <div className="info-container">
          <h3 className="city-name !font-semibold">{city}</h3>
          <div className="venue-container">
            <img src={pinIcon} alt="Location" className="pin-icon" />
            <span className="venue">{venue}</span>
          </div>
        </div>

        {/* Date */}
        <div className="date-container">
          <span className="date">{date}</span>
        </div>
      </div>
    </div>
  );
};

interface ScheduleSectionProps {
  className?: string;
}

const ScheduleSection: React.FC<ScheduleSectionProps> = ({
  className = "",
}) => {
  const cities = [
    {
      number: 1,
      city: "Surabaya",
      venue: "GOR Surabaya",
      date: "12 - 17 Agustus 2025",
    },
    {
      number: 2,
      city: "Bali",
      venue: "GOR Surabaya",
      date: "12 - 17 Agustus 2025",
    },
    {
      number: 3,
      city: "Solo",
      venue: "GOR Surabaya",
      date: "12 - 17 Agustus 2025",
    },
    {
      number: 4,
      city: "Bandung",
      venue: "GOR Surabaya",
      date: "12 - 17 Agustus 2025",
    },
    {
      number: 5,
      city: "Jakarta",
      venue: "GOR Surabaya",
      date: "12 - 17 Agustus 2025",
    },
  ];

  return (
    <section className={`${className}`}>
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-8">
          <picture>
            <source media="(min-width: 768px)" srcSet={jadwalTitleDesktop} />
            <img
              src={jadwalTitle}
              alt="JADWAL ROADSHOW RPD"
              className="h-auto w-full max-w-[1224px] max-h-[50px] inline-block"
            />
          </picture>
        </div>
        <div className="flex flex-col md:flex-row md:gap-6 gap-0 items-center">
          <div className="hidden md:block flex-shrink-0 w-full md:w-1/2">
            <img
              src={scheduleImageDesktop}
              alt="Schedule"
              className="w-full h-auto object-cover "
            />
          </div>

          {/* Image - Only shown on mobile */}
          <div className="md:hidden w-full max-w-[327px] mb-6">
            <img
              src={scheduleImageMobile}
              alt="Schedule"
              className="w-full h-24 object-cover "
            />
          </div>
          {/* Cities List - Vertical Stack */}
          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              {cities.map((city, index) => (
                <CityItem
                  key={index}
                  number={city.number}
                  city={city.city}
                  venue={city.venue}
                  date={city.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
