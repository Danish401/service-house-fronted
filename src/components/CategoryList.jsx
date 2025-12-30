import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Import icons from assets
import MasonIcon from "../assets/icons/Mason.png";
import GardnerIcon from "../assets/icons/Gardner.png";
import LabourIcon from "../assets/icons/Labour.png";
import ChefIcon from "../assets/icons/Chef.png";
import CarpenterIcon from "../assets/icons/Carpenter.png";
import ElectricianIcon from "../assets/icons/Electrician.png";
import PlumberIcon from "../assets/icons/Plumber.png";
import PainterIcon from "../assets/icons/Painter.png";
import CleaningIcon from "../assets/icons/Cleaning.png";
import ShiftingIcon from "../assets/icons/Shifting.png";

import { 
  containerVariants, 
  cardVariants,
  springConfig,
  viewportOnce,
} from "../animations/framerMotion";

function CategoryList({ selectedCategory, onSelectCategory, showAllCategories }) {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const categories = [
    { name: "Mason", icon: MasonIcon, gradient: "from-orange-400 to-amber-500", bg: "bg-orange-50 dark:bg-orange-900/20", accent: "#f97316" },
    { name: "Gardner", icon: GardnerIcon, gradient: "from-green-400 to-emerald-500", bg: "bg-green-50 dark:bg-green-900/20", accent: "#22c55e" },
    { name: "Labour", icon: LabourIcon, gradient: "from-blue-400 to-cyan-500", bg: "bg-blue-50 dark:bg-blue-900/20", accent: "#3b82f6" },
    { name: "Chef", icon: ChefIcon, gradient: "from-red-400 to-rose-500", bg: "bg-red-50 dark:bg-red-900/20", accent: "#ef4444" },
    { name: "Carpenter", icon: CarpenterIcon, gradient: "from-amber-500 to-yellow-500", bg: "bg-amber-50 dark:bg-amber-900/20", accent: "#f59e0b" },
    { name: "Shifting", icon: ShiftingIcon, gradient: "from-purple-400 to-violet-500", bg: "bg-purple-50 dark:bg-purple-900/20", accent: "#a855f7" },
    { name: "Electrician", icon: ElectricianIcon, gradient: "from-yellow-400 to-orange-500", bg: "bg-yellow-50 dark:bg-yellow-900/20", accent: "#eab308" },
    { name: "Plumber", icon: PlumberIcon, gradient: "from-sky-400 to-blue-500", bg: "bg-sky-50 dark:bg-sky-900/20", accent: "#0ea5e9" },
    { name: "Painter", icon: PainterIcon, gradient: "from-pink-400 to-rose-500", bg: "bg-pink-50 dark:bg-pink-900/20", accent: "#ec4899" },
    { name: "Cleaning", icon: CleaningIcon, gradient: "from-teal-400 to-emerald-500", bg: "bg-teal-50 dark:bg-teal-900/20", accent: "#14b8a6" },
  ];

  // Always show first 5 in main grid, extra ones in expandable section
  const mainCategories = categories.slice(0, 5);
  const extraCategories = categories.slice(5);

  // Card animation variants with stagger
  const cardItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9,
    },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
    hover: {
      y: -12,
      scale: 1.03,
      transition: springConfig.snappy,
    },
    tap: {
      scale: 0.97,
      transition: { duration: 0.1 },
    },
  };

  // Sidebar item variants
  const sidebarItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({ 
      opacity: 1, 
      x: 0,
      transition: {
        delay: i * 0.05,
        type: "spring",
        stiffness: 120,
        damping: 14,
      },
    }),
  };

  const CategoryCard = ({ category, index }) => (
    <motion.div
      custom={index}
      variants={cardItemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover="hover"
      whileTap="tap"
      onClick={() => navigate(`/search/${category.name}`)}
      className="group relative cursor-pointer"
    >
      <div className={`relative h-full p-6 rounded-3xl overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? "bg-neutral-900/80 border border-neutral-800 hover:border-purple-500/50"
          : `${category.bg} border border-neutral-200/50 hover:border-purple-300`
      }`}>
        {/* Background Gradient on Hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />
        
        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${category.accent}15 0%, transparent 70%)`,
          }}
        />

        {/* Icon Container */}
        <motion.div
          className={`relative z-10 w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.gradient} p-3 shadow-lg`}
          whileHover={{ 
            rotate: [0, -10, 10, 0],
            scale: 1.1,
          }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={category.icon}
            alt={category.name}
            className="w-full h-full object-contain filter drop-shadow-md"
          />
        </motion.div>

        {/* Category Name */}
        <h3 className={`relative z-10 font-semibold text-center text-base transition-colors duration-300 ${
          isDarkMode
            ? "text-neutral-200 group-hover:text-white"
            : "text-neutral-700 group-hover:text-neutral-900"
        }`}
        style={{ fontFamily: "'Sora', sans-serif" }}
        >
          {category.name}
        </h3>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none"
          initial={false}
        >
          <motion.div
            className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
            initial={{ left: "-100%" }}
            whileHover={{ left: "200%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        </motion.div>

        {/* Arrow indicator on hover */}
        <motion.div
          className={`absolute bottom-3 right-3 w-8 h-8 rounded-full flex items-center justify-center ${
            isDarkMode ? "bg-white/10" : "bg-black/5"
          }`}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <svg 
            className={`w-4 h-4 ${isDarkMode ? "text-white" : "text-neutral-600"}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );

  const SidebarItem = ({ category, index, isSelected }) => (
    <motion.div
      custom={index}
      variants={sidebarItemVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ x: 6 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onSelectCategory(category.name)}
      className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
        isSelected
          ? isDarkMode
            ? "bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/40 shadow-lg shadow-purple-500/10"
            : "bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-300 shadow-lg shadow-purple-200/50"
          : isDarkMode
          ? "bg-neutral-900/50 hover:bg-neutral-800/80 border border-neutral-800"
          : "bg-white hover:bg-neutral-50 border border-neutral-100"
      }`}
    >
      <motion.div 
        className={`p-2.5 rounded-xl bg-gradient-to-br ${category.gradient}`}
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.4 }}
      >
        <img src={category.icon} alt={category.name} className="w-6 h-6" />
      </motion.div>
      <span
        className={`font-medium transition-colors ${
          isSelected
            ? isDarkMode ? "text-purple-300" : "text-purple-700"
            : isDarkMode ? "text-neutral-300" : "text-neutral-700"
        }`}
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        {category.name}
      </span>
      {isSelected && (
        <motion.div
          layoutId="activeSidebarIndicator"
          className="ml-auto w-2 h-2 rounded-full bg-purple-500"
          transition={springConfig.snappy}
        />
      )}
    </motion.div>
  );

  return (
    <section
      ref={containerRef}
      className={`w-full py-16 md:py-24 ${
        isDarkMode
          ? "bg-gradient-to-b from-neutral-950 to-neutral-900"
          : "bg-gradient-to-b from-white to-neutral-50"
      }`}
    >
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        {!showAllCategories && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 }}
              className={`inline-block px-5 py-2 rounded-full text-sm font-semibold mb-4 ${
                isDarkMode
                  ? "bg-purple-500/15 text-purple-400 border border-purple-500/20"
                  : "bg-purple-100 text-purple-700 border border-purple-200"
              }`}
            >
              Our Services
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
                isDarkMode ? "text-white" : "text-neutral-900"
              }`}
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              Browse by{" "}
              <span className="text-transparent bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text">
                Category
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? "text-neutral-400" : "text-neutral-600"
              }`}
            >
              Find the perfect professional for your needs
            </motion.p>
          </motion.div>
        )}

        {showAllCategories ? (
          // Sidebar Mode
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-2"
          >
            {categories.map((category, index) => (
              <SidebarItem
                key={category.name}
                category={category}
                index={index}
                isSelected={selectedCategory === category.name}
              />
            ))}
          </motion.div>
        ) : (
          // Grid Mode
          <>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-6">
              {mainCategories.map((category, index) => (
                <CategoryCard
                  key={category.name}
                  category={category}
                  index={index}
                />
              ))}
            </div>

            {/* Show More/Less Button */}
            {extraCategories.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="flex justify-center mt-10"
              >
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.25)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setShowAll(!showAll)}
                  className={`group flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    isDarkMode
                      ? "bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700"
                      : "bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200 shadow-lg"
                  }`}
                >
                  <span>{showAll ? "Show Less" : "View All Categories"}</span>
                  <motion.span
                    animate={{ rotate: showAll ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.span>
                </motion.button>
              </motion.div>
            )}

            {/* Additional Categories Animation */}
            <AnimatePresence>
              {showAll && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 overflow-hidden"
                >
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-6">
                    {extraCategories.map((category, index) => (
                      <CategoryCard
                        key={category.name}
                        category={category}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </section>
  );
}

export default CategoryList;
