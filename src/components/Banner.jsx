import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "../assets/bannerImages/5.png";
import image3 from "../assets/bannerImages/8.png";
import image4 from "../assets/bannerImages/6.png";

const banners = [
  { image: image1 },
  { image: image3 },
  { image: image4 },
];

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentBanner(index);
  };

  const handleNextClick = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const handlePrevClick = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative h-[430px] overflow-hidden">
      {/* Banner Content */}
      <AnimatePresence>
        {banners.map((banner, index) =>
          index === currentBanner ? (
            <motion.div
              key={index}
              className="absolute inset-0 flex items-center justify-center text-white"
              style={{
                backgroundImage: `url(${banner.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {/* Black Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/90 to-black/80"></div> */}
            </motion.div>
          ) : null
        )}
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBanner ? "bg-black w-5" : "bg-gray-400"
            }`}
            onClick={() => handleDotClick(index)}
          ></button>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={handlePrevClick}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={handleNextClick}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Banner;