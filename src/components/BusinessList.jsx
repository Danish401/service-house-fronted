import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../features/employeeRegisterSlice";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { motion, useInView, AnimatePresence } from "framer-motion";
import profile from "../assets/profile.jpg";
import { Star, MapPin, Shield, ArrowRight, Sparkles } from "lucide-react";
import { springConfig, viewportOnce } from "../animations/framerMotion";

function BusinessList({ showAll = false, title }) {
  const dispatch = useDispatch();
  const { employees, loading, error } = useSelector(
    (state) => state.employeeRegister
  );
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  // Staggered card animation
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95,
    },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.08,
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    }),
  };

  const hoverVariants = {
    rest: { y: 0 },
    hover: { 
      y: -12,
      transition: springConfig.snappy,
    },
  };

  const imageHoverVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.08,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  if (loading) {
    return (
      <section className={`py-16 md:py-24 ${isDarkMode ? "bg-neutral-950" : "bg-neutral-50"}`}>
        <div className="container px-4 mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Skeleton variant="rounded" width={180} height={32} sx={{ mx: "auto", mb: 2, borderRadius: 3 }} />
            <Skeleton variant="rounded" width={320} height={48} sx={{ mx: "auto", borderRadius: 3 }} />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {[...Array(8)].map((_, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-3xl overflow-hidden ${isDarkMode ? "bg-neutral-900" : "bg-white"}`}
              >
                <Skeleton variant="rectangular" width="100%" height={220} />
                <div className="p-5 space-y-3">
                  <Skeleton variant="rounded" width="35%" height={26} sx={{ borderRadius: 2 }} />
                  <Skeleton variant="rounded" width="75%" height={28} sx={{ borderRadius: 2 }} />
                  <Skeleton variant="rounded" width="55%" height={20} sx={{ borderRadius: 2 }} />
                  <Skeleton variant="rounded" width="100%" height={48} sx={{ borderRadius: 3, mt: 2 }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`py-16 ${isDarkMode ? "bg-neutral-950" : "bg-neutral-50"}`}>
        <div className="container px-4 mx-auto text-center max-w-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`p-8 rounded-3xl ${isDarkMode ? "bg-red-900/20 border border-red-500/20" : "bg-red-50 border border-red-200"}`}
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? "text-red-400" : "text-red-700"}`}>
              Something went wrong
            </h3>
            <p className={`${isDarkMode ? "text-red-300/70" : "text-red-600/80"}`}>{error}</p>
          </motion.div>
        </div>
      </section>
    );
  }

  const employeesToShow = showAll ? employees : employees.slice(0, 12);

  return (
    <section
      ref={containerRef}
      className={`py-16 md:py-24 ${
        isDarkMode
          ? "bg-gradient-to-b from-neutral-900 to-neutral-950"
          : "bg-gradient-to-b from-neutral-50 to-white"
      }`}
    >
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold ${
              isDarkMode
                ? "bg-purple-500/15 text-purple-400 border border-purple-500/20"
                : "bg-purple-100 text-purple-700 border border-purple-200"
            }`}>
              <Sparkles className="w-4 h-4" />
              Top Professionals
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-neutral-900"
            }`}
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            {title || (
              <>
                Meet Our{" "}
                <span className="text-transparent bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text">
                  Expert Workers
                </span>
              </>
            )}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className={`text-lg max-w-2xl mx-auto ${isDarkMode ? "text-neutral-400" : "text-neutral-600"}`}
          >
            Verified professionals ready to help with all your home service needs
          </motion.p>
        </motion.div>

        {/* Workers Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence>
            {employeesToShow.map((employee, index) => (
              <motion.div
                key={employee._id || index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                layout
              >
                <Link to={"/details/" + employee._id} className="block h-full">
                  <motion.article
                    variants={hoverVariants}
                    initial="rest"
                    whileHover="hover"
                    className={`group relative h-full overflow-hidden rounded-3xl transition-shadow duration-500 ${
                      isDarkMode
                        ? "bg-neutral-900 border border-neutral-800 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10"
                        : "bg-white border border-neutral-200/80 hover:border-purple-300 hover:shadow-2xl hover:shadow-purple-200/40"
                    }`}
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <motion.img
                        variants={imageHoverVariants}
                        src={employee?.image || profile}
                        alt={employee.name}
                        className="object-cover w-full h-full"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Category Badge */}
                      <motion.div 
                        className="absolute top-4 left-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                      >
                        <span className="px-3 py-1.5 text-xs font-bold text-white rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-500/30">
                          {employee?.category || "Professional"}
                        </span>
                      </motion.div>

                      {/* Verified Badge */}
                      <motion.div 
                        className="absolute top-4 right-4"
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm shadow-lg">
                          <Shield className="w-5 h-5 text-emerald-500" />
                        </div>
                      </motion.div>

                      {/* Rating */}
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md">
                          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                          <span className="text-sm font-bold text-neutral-900">4.8</span>
                          <span className="text-xs text-neutral-500">(120)</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Name */}
                      <h3
                        className={`text-lg font-bold mb-2 line-clamp-1 transition-colors group-hover:text-purple-600 ${
                          isDarkMode ? "text-white" : "text-neutral-900"
                        }`}
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {employee.name}
                      </h3>

                      {/* Location */}
                      <div className="flex items-center gap-2 mb-5">
                        <MapPin className={`w-4 h-4 flex-shrink-0 ${isDarkMode ? "text-neutral-500" : "text-neutral-400"}`} />
                        <span className={`text-sm line-clamp-1 ${isDarkMode ? "text-neutral-400" : "text-neutral-600"}`}>
                          {employee.address1 || "Location Available"}
                        </span>
                      </div>

                      {/* Book Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative w-full overflow-hidden flex items-center justify-center gap-2 px-5 py-3.5 font-semibold text-white rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 shadow-lg shadow-purple-500/20 group/btn"
                      >
                        <span className="relative z-10">Book Now</span>
                        <motion.span 
                          className="relative z-10"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.span>
                        {/* Button shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      </motion.button>
                    </div>

                    {/* Card glow on hover */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none rounded-3xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      style={{
                        background: "radial-gradient(circle at center, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
                      }}
                    />
                  </motion.article>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        {!showAll && employees.length > 12 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="flex justify-center mt-14"
          >
            <Link to="/businesslist">
              <motion.button
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 25px 50px rgba(139, 92, 246, 0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                className="group flex items-center gap-3 px-10 py-5 font-bold text-white transition-all duration-300 rounded-2xl bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 shadow-xl shadow-purple-500/25"
              >
                <span>View All Professionals</span>
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default BusinessList;
