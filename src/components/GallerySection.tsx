import React from "react";
import galleryTitleDesktop from "../assets/images/gallery/gallery-title-desktop.png";
import galleryTitleMobile from "../assets/images/gallery/gallery-title-mobile.png";
import playButton from "../assets/icons/gallery/play-button.svg";
import "../assets/styles/gallery.css";

// Video data for gallery
const galleryVideos = [
  {
    id: 1,

    thumbnail: "http://img.youtube.com/vi/cSCNl3QDLdY/maxresdefault.jpg",
    mobileThumb: "http://img.youtube.com/vi/cSCNl3QDLdY/maxresdefault.jpg",
    title: "First winner of Korea Kaja Final 2024",
    videoUrl: "https://www.youtube.com/watch?v=example1",
  },
  {
    id: 2,
    thumbnail: "http://img.youtube.com/vi/0uGDovYjdkU/maxresdefault.jpg",
    mobileThumb: "http://img.youtube.com/vi/0uGDovYjdkU/maxresdefault.jpg",
    title: "First winner of Korea Kaja Final 2024",
    videoUrl: "https://www.youtube.com/watch?v=example2",
  },
  {
    id: 3,
    thumbnail: "http://img.youtube.com/vi/ZC9jjKY0syw/maxresdefault.jpg",
    mobileThumb: "http://img.youtube.com/vi/ZC9jjKY0syw/maxresdefault.jpg",
    title: "First winner of Korea Kaja Final 2024",
    videoUrl: "https://www.youtube.com/watch?v=example3",
  },
  {
    id: 4,
    thumbnail: "http://img.youtube.com/vi/HYVXeHIjWYM/maxresdefault.jpg",
    mobileThumb: "http://img.youtube.com/vi/HYVXeHIjWYM/maxresdefault.jpg",
    title: "First winner of Korea Kaja Final 2024",
    videoUrl: "https://www.youtube.com/watch?v=example4",
  },
];

interface GallerySectionProps {
  className?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ className = "" }) => {
  const handleVideoClick = (videoUrl: string) => {
    window.open(videoUrl, "_blank");
  };

  return (
    <section className={`gallery-section ${className}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-[108px]">
        {/* Section Header */}
        <div className="gallery-header">
          {/* Desktop version */}
          <img
            src={galleryTitleDesktop}
            alt="GALERI PEMENANG RPD SEBELUMNYA"
            className="hidden md:block w-auto mx-auto"
          />
          {/* Mobile version */}
          <img
            src={galleryTitleMobile}
            alt="GALERI PEMENANG RPD SEBELUMNYA"
            className="block md:hidden w-auto mx-auto"
          />
        </div>

        {/* Desktop Gallery Grid - 1 row of 3 items with responsive sizing */}
        <div className="hidden md:flex gallery-grid mt-8">
          {galleryVideos.slice(0, 3).map((video) => (
            <div key={video.id} className="gallery-item">
              <div
                className="video-thumbnail"
                onClick={() => handleVideoClick(video.videoUrl)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="play-button-overlay">
                  <img src={playButton} alt="Play" className="play-icon" />
                </div>
              </div>
              <p className="gallery-item-title">{video.title}</p>
            </div>
          ))}
        </div>

        {/* Mobile Gallery Grid - Two rows of two items */}
        <div className="md:hidden">
          {/* First row */}
          <div className="flex justify-between mt-4">
            {galleryVideos.slice(0, 2).map((video) => (
              <div key={video.id} className="gallery-item-mobile">
                <div
                  className="video-thumbnail-mobile"
                  onClick={() => handleVideoClick(video.videoUrl)}
                >
                  <img
                    src={video.mobileThumb}
                    alt={video.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="play-button-overlay-mobile">
                    <img
                      src={playButton}
                      alt="Play"
                      className="play-icon-mobile"
                    />
                  </div>
                </div>
                <p className="gallery-item-title-mobile">{video.title}</p>
              </div>
            ))}
          </div>

          {/* Second row */}
          <div className="flex justify-between mt-4">
            {galleryVideos.slice(2, 4).map((video) => (
              <div key={video.id} className="gallery-item-mobile">
                <div
                  className="video-thumbnail-mobile"
                  onClick={() => handleVideoClick(video.videoUrl)}
                >
                  <img
                    src={video.mobileThumb}
                    alt={video.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="play-button-overlay-mobile">
                    <img
                      src={playButton}
                      alt="Play"
                      className="play-icon-mobile"
                    />
                  </div>
                </div>
                <p className="gallery-item-title-mobile">{video.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
