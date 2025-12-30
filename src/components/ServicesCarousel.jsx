import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Importing icons
import CleaningIcon from "../assets/icons/Cleaning.png";
import LabourIcon from "../assets/icons/Labour.png";
import ChefIcon from "../assets/icons/Chef.png";
import CarpenterIcon from "../assets/icons/Carpenter.png";
import ElectricianIcon from "../assets/icons/Electrician.png";
import PlumberIcon from "../assets/icons/Plumber.png";
import PainterIcon from "../assets/icons/Painter.png";
import ShiftingIcon from "../assets/icons/Shifting.png";

const services = [
  { 
    icon: CleaningIcon, 
    title: "Window Cleaning", 
    description: "Professional window cleaning service for a crystal-clear view.",
    color: "from-teal-400 to-emerald-500",
    bgColor: "bg-teal-50 dark:bg-teal-900/20"
  },
  { 
    icon: LabourIcon, 
    title: "Carpet Cleaning", 
    description: "Deep cleaning to remove dirt, stains, and allergens.",
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20"
  },
  { 
    icon: ChefIcon, 
    title: "Home Cleaning", 
    description: "Thorough cleaning for a spotless and fresh home.",
    color: "from-red-400 to-rose-500",
    bgColor: "bg-red-50 dark:bg-red-900/20"
  },
  { 
    icon: CarpenterIcon, 
    title: "Carpenter", 
    description: "Expert carpentry for furniture and woodwork needs.",
    color: "from-amber-400 to-orange-500",
    bgColor: "bg-amber-50 dark:bg-amber-900/20"
  },
  { 
    icon: ElectricianIcon, 
    title: "Electrician", 
    description: "Reliable electrical services for homes and offices.",
    color: "from-yellow-400 to-amber-500",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
  },
  { 
    icon: PlumberIcon, 
    title: "Plumber", 
    description: "Quick plumbing solutions for leaks and installations.",
    color: "from-sky-400 to-blue-500",
    bgColor: "bg-sky-50 dark:bg-sky-900/20"
  },
  { 
    icon: PainterIcon, 
    title: "Painter", 
    description: "Professional painting for beautiful interiors and exteriors.",
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50 dark:bg-pink-900/20"
  },
  { 
    icon: ShiftingIcon, 
    title: "Shifting", 
    description: "Hassle-free packing and moving services.",
    color: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20"
  },
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const autoPlayRef = useRef(null);

  // Determine visible items based on screen size
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
      return 1;
    }
    return 3;
  };

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 4000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, currentIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? services.length - visibleCount : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev >= services.length - visibleCount ? 0 : prev + 1));
  };

  const visibleServices = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = (currentIndex + i) % services.length;
    visibleServices.push({ ...services[index], originalIndex: index });
  }

  const cardVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    }),
  };

  return (
    <section
      className={`py-16 md:py-24 ${
        isDarkMode
          ? "bg-gradient-to-b from-slate-900 to-slate-800"
          : "bg-gradient-to-b from-violet-50 to-white"
      }`}
    >
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span
            className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
              isDarkMode
                ? "bg-purple-500/20 text-purple-300"
                : "bg-purple-100 text-purple-700"
            }`}
          >
            WHAT WE DO
          </span>
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            Services We{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">
              Provide
            </span>
          </h2>
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
            Quality services delivered by verified professionals
          </p>
        </motion.div>

        {/* Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className={`absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              isDarkMode
                ? "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                : "bg-white hover:bg-gray-50 text-gray-800 shadow-lg border border-gray-100"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className={`absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              isDarkMode
                ? "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                : "bg-white hover:bg-gray-50 text-gray-800 shadow-lg border border-gray-100"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Cards Container */}
          <div className="overflow-hidden px-8 md:px-16">
            <motion.div 
              className="flex gap-6"
              key={currentIndex}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              {visibleServices.map((service, index) => (
                <motion.div
                  key={`${service.originalIndex}-${index}`}
                  className="flex-1 min-w-0"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div
                    className={`relative h-full p-6 md:p-8 rounded-3xl overflow-hidden transition-all duration-300 ${
                      isDarkMode
                        ? "bg-slate-800/80 border border-slate-700/50 hover:border-purple-500/50"
                        : "bg-white border border-gray-100 hover:border-purple-300 shadow-lg hover:shadow-xl"
                    }`}
                  >
                    {/* Background Gradient on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 hover:opacity-5 transition-opacity duration-300`}
                    />

                    {/* Icon */}
                    <div className="relative z-10 mb-6">
                      <motion.div
                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}
                      >
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="w-12 h-12 object-contain filter drop-shadow-md"
                        />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <h3
                      className={`relative z-10 text-xl font-bold mb-3 ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`relative z-10 mb-6 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Read More Link */}
                    <motion.button
                      whileHover={{ x: 5 }}
                      className={`relative z-10 flex items-center gap-2 text-sm font-semibold transition-colors ${
                        isDarkMode
                          ? "text-purple-400 hover:text-purple-300"
                          : "text-purple-600 hover:text-purple-700"
                      }`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: services.length - visibleCount + 1 }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                whileHover={{ scale: 1.2 }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? `w-8 bg-gradient-to-r from-purple-600 to-indigo-600`
                    : `w-2 ${isDarkMode ? "bg-slate-600" : "bg-gray-300"}`
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
