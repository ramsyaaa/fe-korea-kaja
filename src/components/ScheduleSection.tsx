import React from "react";
import pinIcon from "../assets/icons/schedule/pin-location.svg";
import scheduleImageDesktop from "../assets/images/schedule/schedule-image-desktop.png";
import scheduleImageMobile from "../assets/images/schedule/schedule-image-mobile.png";
import jadwalTitle from "../assets/images/schedule/jadwal-title.png";

interface CityItemProps {
  number: number;
  city: string;
  venue: string;
  date: string;
}

const CityItem: React.FC<CityItemProps> = ({ number, city, venue, date }) => {
  return (
    <div className="flex items-center gap-6">
      {/* Number Circle */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F0F2F9] flex items-center justify-center">
        <span className="text-black text-lg  font-semibold">{number}</span>
      </div>

      {/* City Details */}
      <div className="flex-grow flex-row flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="text-[#1F2D3D]  font-semibold text-lg">{city}</h3>
          <div className="flex items-center gap-1 text-[#6A7481]">
            <img src={pinIcon} alt="Location" className="w-4 h-4" />
            <span className="text-xs ">{venue}</span>
          </div>
        </div>
        <div className="flex ">
          <div className="text-sm text-[#6A7481] ">{date}</div>
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
          <img
            src={jadwalTitle}
            alt="JADWAL ROADSHOW RPD"
            className="h-auto w-full max-w-[416px] inline-block"
          />
        </div>

        {/* Schedule Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image - Only shown on desktop */}
          <div className="hidden md:block flex-shrink-0 w-full md:w-1/2">
            <img
              src={scheduleImageDesktop}
              alt="Schedule"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>

          {/* Image - Only shown on mobile */}
          <div className="md:hidden w-full mb-6">
            <img
              src={scheduleImageMobile}
              alt="Schedule"
              className="w-full h-24 object-cover rounded-lg"
            />
          </div>

          {/* City List */}
          <div className="w-full md:w-1/2">
            <div className="space-y-8">
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
