import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CoverflowCarousel = ({ items, renderItem, className = "", isDarkMode = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Reset to first item when items change (e.g., when tab changes)
  useEffect(() => {
    setCurrentIndex(0);
  }, [items]);

  if (!items || items.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
          No items to display
        </p>
      </div>
    );
  }

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const getVisibleItems = () => {
    const visible = [];
    const totalItems = items.length;
    
    if (totalItems === 1) {
      // If only one item, show it centered
      return [{ item: items[0], position: 0, index: 0 }];
    }
    
    // Always show 3 items: previous, current, next
    for (let i = -1; i <= 1; i++) {
      let index = currentIndex + i;
      if (index < 0) index = totalItems + index;
      if (index >= totalItems) index = index - totalItems;
      visible.push({ item: items[index], position: i, index });
    }
    
    return visible;
  };

  const visibleItems = getVisibleItems();

  return (
    <div className={`relative w-full ${className}`}>
      {/* Gradient Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl opacity-20 ${
          isDarkMode 
            ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600" 
            : "bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400"
        }`} />
      </div>

      {/* Navigation Buttons */}
      {items.length > 1 && (
        <>
          <motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full backdrop-blur-xl flex items-center justify-center transition-all duration-300 shadow-2xl ${
              isDarkMode
                ? "bg-gray-800/80 border border-gray-700/50 hover:bg-gray-700/90 text-white"
                : "bg-white/90 border border-gray-200/50 hover:bg-white text-gray-700 shadow-gray-200/50"
            }`}
            aria-label="Previous"
          >
            <ChevronLeft className="w-7 h-7" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 rounded-full backdrop-blur-xl flex items-center justify-center transition-all duration-300 shadow-2xl ${
              isDarkMode
                ? "bg-gray-800/80 border border-gray-700/50 hover:bg-gray-700/90 text-white"
                : "bg-white/90 border border-gray-200/50 hover:bg-white text-gray-700 shadow-gray-200/50"
            }`}
            aria-label="Next"
          >
            <ChevronRight className="w-7 h-7" />
          </motion.button>
        </>
      )}

      {/* Carousel Container */}
      <div 
        className="relative h-[650px] md:h-[750px] flex items-center justify-center overflow-hidden"
        style={{ 
          perspective: "1500px",
          perspectiveOrigin: "50% 50%"
        }}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            {visibleItems.map(({ item, position, index }) => {
              const isCenter = position === 0;
              const isLeft = position === -1;
              const isRight = position === 1;

              return (
                <motion.div
                  key={`${index}-${currentIndex}`}
                  custom={direction}
                  initial={{
                    x: direction > 0 ? (isLeft ? -500 : isRight ? 500 : 0) : (isLeft ? -500 : isRight ? 500 : 0),
                    y: 0,
                    z: isCenter ? 0 : isLeft ? -300 : 300,
                    rotateY: isCenter ? 0 : isLeft ? 60 : -60,
                    scale: isCenter ? 1 : 0.65,
                    opacity: isCenter ? 1 : 0.3,
                    filter: isCenter ? "blur(0px)" : "blur(2px)",
                  }}
                  animate={{
                    x: isCenter ? 0 : isLeft ? -320 : 320,
                    y: 0,
                    z: isCenter ? 0 : isLeft ? -250 : 250,
                    rotateY: isCenter ? 0 : isLeft ? 45 : -45,
                    scale: isCenter ? 1 : 0.7,
                    opacity: isCenter ? 1 : 0.35,
                    filter: isCenter ? "blur(0px)" : "blur(1.5px)",
                  }}
                  exit={{
                    x: direction > 0 ? (isLeft ? -600 : isRight ? 600 : 0) : (isLeft ? -600 : isRight ? 600 : 0),
                    opacity: 0,
                    scale: 0.5,
                    z: isLeft ? -400 : 400,
                    filter: "blur(4px)",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`absolute ${
                    isCenter ? "z-20 cursor-pointer" : "z-10 pointer-events-none"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                    willChange: "transform",
                  }}
                  whileHover={isCenter ? { 
                    scale: 1.03, 
                    z: 30,
                    transition: { duration: 0.2 }
                  } : {}}
                >
                  {renderItem(item, isCenter)}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Indicators */}
      {items.length > 1 && (
        <div className="flex justify-center gap-3 mt-8">
          {items.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                const diff = index - currentIndex;
                setDirection(diff > 0 ? 1 : -1);
                setCurrentIndex(index);
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? `h-3 w-10 ${isDarkMode ? "bg-indigo-400" : "bg-indigo-600"} shadow-lg`
                  : `h-3 w-3 ${isDarkMode ? "bg-gray-600 hover:bg-gray-500" : "bg-gray-300 hover:bg-gray-400"}`
              }`}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Item Counter */}
      {items.length > 1 && (
        <div className="flex justify-center mt-4">
          <span className={`text-sm font-medium px-4 py-1.5 rounded-full backdrop-blur-sm ${
            isDarkMode 
              ? "bg-gray-800/50 text-gray-300 border border-gray-700/50" 
              : "bg-white/50 text-gray-600 border border-gray-200/50"
          }`}>
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      )}
    </div>
  );
};

export default CoverflowCarousel;

