import React, { useState, useEffect } from "react";
import ZohoLeadForm from "./ZohoLeadForm";
import {
  Box,
  Typography,
  Grid,
  Skeleton,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { ArrowRight, Sparkles, Shield, Star, Users } from "lucide-react";
import cl4 from "../assets/images/cl4.jpg";
import {
  heroContainerVariants,
  heroTextVariants,
  heroImageVariants,
  floatingVariants,
  buttonWithGlow,
  fadeInScale,
  springConfig,
} from "../animations/framerMotion";

const HeroSection = () => {
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const [loading, setLoading] = useState(true);
  const [openForm, setOpenForm] = useState(false);
  
  // Parallax scroll effect
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: "10K+", label: "Happy Customers", color: "from-purple-500 to-indigo-500" },
    { icon: <Shield className="w-5 h-5" />, value: "500+", label: "Verified Pros", color: "from-emerald-500 to-teal-500" },
    { icon: <Star className="w-5 h-5" />, value: "4.9", label: "Star Rating", color: "from-amber-500 to-orange-500" },
  ];

  const features = [
    "24/7 Support",
    "Verified Workers",
    "Money-back Guarantee",
  ];

  return (
    <>
      <Box
        component="section"
        className={`relative min-h-screen overflow-hidden -mt-16 ${
          isDarkMode 
            ? "bg-[#0a0a0a]" 
            : "bg-gradient-to-br from-violet-50 via-purple-50/50 to-indigo-50"
        }`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Mesh */}
          <motion.div
            style={{ y: y1 }}
            className={`absolute w-[800px] h-[800px] rounded-full blur-[120px] ${
              isDarkMode ? "bg-purple-600/10" : "bg-purple-400/20"
            }`}
            initial={{ x: "-20%", y: "-20%" }}
            animate={{ 
              x: ["-20%", "-15%", "-20%"],
              y: ["-20%", "-25%", "-20%"],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className={`absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full blur-[100px] ${
              isDarkMode ? "bg-indigo-600/10" : "bg-indigo-400/15"
            }`}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 rounded-full ${
                isDarkMode ? "bg-purple-400/30" : "bg-purple-500/20"
              }`}
              style={{
                top: `${15 + (i * 10)}%`,
                left: `${5 + (i * 12)}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                x: [-10, 10, -10],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <motion.div 
          style={{ opacity }}
          className="container relative z-10 px-4 pt-20 pb-16 mx-auto max-w-7xl md:pt-24 lg:pt-28"
        >
          <Grid container alignItems="center" spacing={{ xs: 6, md: 10 }}>
            {/* Text Section */}
            <Grid item xs={12} lg={6}>
              {loading ? (
                <div className="space-y-6">
                  <Skeleton variant="rounded" width="50%" height={36} sx={{ borderRadius: 3 }} />
                  <Skeleton variant="rounded" width="100%" height={100} sx={{ borderRadius: 3 }} />
                  <Skeleton variant="rounded" width="90%" height={60} sx={{ borderRadius: 3 }} />
                  <div className="flex gap-4">
                    <Skeleton variant="rounded" width={160} height={56} sx={{ borderRadius: 3 }} />
                    <Skeleton variant="rounded" width={160} height={56} sx={{ borderRadius: 3 }} />
                  </div>
                </div>
              ) : (
                <motion.div
                  variants={heroContainerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Badge */}
                  <motion.div variants={heroTextVariants} className="mb-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer ${
                        isDarkMode 
                          ? "bg-purple-500/10 border border-purple-500/20" 
                          : "bg-purple-100/80 border border-purple-200/50"
                      } backdrop-blur-sm`}
                    >
                      <motion.span
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className={`w-4 h-4 ${isDarkMode ? "text-yellow-400" : "text-yellow-500"}`} />
                      </motion.span>
                      <span className={`text-sm font-medium ${isDarkMode ? "text-purple-300" : "text-purple-700"}`}>
                        25% off for new clients
                      </span>
                      <span className="relative flex w-2 h-2 ml-1">
                        <span className="absolute inline-flex w-full h-full bg-green-400 rounded-full opacity-75 animate-ping" />
                        <span className="relative inline-flex w-2 h-2 bg-green-500 rounded-full" />
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Main Heading */}
                  <motion.h1
                    variants={heroTextVariants}
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-tight mb-4 md:mb-6 ${
                      isDarkMode ? "text-white" : "text-neutral-900"
                    }`}
                    style={{ fontFamily: "'Clash Display', sans-serif" }}
                  >
                    We{" "}
                    <span className="relative inline-block">
                      <motion.span
                        className="relative z-10 text-transparent bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text"
                        animate={{
                          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                        style={{ backgroundSize: "200% 200%" }}
                      >
                        Love
                      </motion.span>
                      <motion.svg
                        className="absolute -bottom-2 left-0 w-full h-3"
                        viewBox="0 0 100 12"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                      >
                        <motion.path
                          d="M0 6 Q25 0, 50 6 T100 6"
                          fill="none"
                          stroke="url(#underlineGradient)"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#9333ea" />
                            <stop offset="100%" stopColor="#6366f1" />
                          </linearGradient>
                        </defs>
                      </motion.svg>
                    </span>
                    {" "}The Job
                    <br />
                    You{" "}
                    <span className={isDarkMode ? "text-purple-400" : "text-purple-600"}>Hate!</span>
                  </motion.h1>

                  {/* Subtitle */}
                  <motion.p
                    variants={heroTextVariants}
                    className={`text-base sm:text-lg md:text-xl leading-relaxed mb-6 md:mb-8 max-w-lg ${
                      isDarkMode ? "text-neutral-400" : "text-neutral-600"
                    }`}
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                  >
                    Transform your home with our verified professionals. 
                    From cleaning to repairs — we handle it all with care and excellence.
                  </motion.p>

                  {/* Features List */}
                  <motion.div variants={heroTextVariants} className="flex flex-wrap gap-4 mb-8">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 + index * 0.1 }}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
                          isDarkMode 
                            ? "bg-neutral-800/50 text-neutral-300" 
                            : "bg-white/80 text-neutral-700 shadow-sm"
                        }`}
                      >
                        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div variants={heroTextVariants} className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                    <motion.button
                      variants={buttonWithGlow}
                      initial="initial"
                      whileHover="hover"
                      whileTap="tap"
                      onClick={() => navigate("/businesslist")}
                      className="group relative overflow-hidden px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base text-white bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 shadow-xl shadow-purple-500/25 min-h-[48px] touch-manipulation w-full sm:w-auto"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Find a Professional
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </motion.span>
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600"
                        initial={{ x: "100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setOpenForm(true)}
                      className={`px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base border-2 transition-all duration-300 min-h-[48px] touch-manipulation w-full sm:w-auto ${
                        isDarkMode 
                          ? "border-neutral-700 text-white hover:bg-neutral-800 hover:border-neutral-600" 
                          : "border-neutral-200 text-neutral-800 hover:bg-neutral-100 hover:border-neutral-300"
                      }`}
                    >
                      Contact Us
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate("/premium")}
                      className="flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-semibold text-sm md:text-base bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg shadow-amber-500/30 text-white transition-all duration-300 min-h-[48px] touch-manipulation w-full sm:w-auto"
                    >
                      <span className="text-base md:text-lg">👑</span>
                      <span className="font-bold">Premium</span>
                    </motion.button>
                  </motion.div>

                  {/* Stats */}
                  <motion.div 
                    variants={heroTextVariants}
                    className="flex flex-wrap gap-4 md:gap-6 pt-6 md:pt-10 mt-6 md:mt-10 border-t border-neutral-200/50 dark:border-neutral-800"
                  >
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + index * 0.1 }}
                        whileHover={{ y: -4 }}
                        className="text-center flex-1 min-w-[100px]"
                      >
                        <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl mb-2 bg-gradient-to-br ${stat.color} text-white`}>
                          {stat.icon}
                        </div>
                        <div className={`text-xl md:text-2xl lg:text-3xl font-bold ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
                          {stat.value}
                        </div>
                        <div className={`text-xs md:text-sm ${isDarkMode ? "text-neutral-500" : "text-neutral-500"}`}>
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </Grid>

            {/* Image Section */}
            <Grid item xs={12} lg={6}>
              {loading ? (
                <Skeleton variant="rounded" width="100%" height={600} sx={{ borderRadius: 6 }} />
              ) : (
                <motion.div
                  variants={heroImageVariants}
                  initial="hidden"
                  animate="visible"
                  className="relative"
                >
                  {/* Main Image */}
                  <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="relative z-10"
                  >
                    <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                      <motion.img
                        src={cl4}
                        alt="Professional Home Service"
                        className="w-full h-[400px] md:h-[550px] object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
                    </div>
                  </motion.div>

                  {/* Floating Card - Top Left */}
                  <motion.div
                    initial={{ opacity: 0, x: -50, y: -20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1, ...springConfig.bouncy }}
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className={`absolute -left-4 md:-left-8 top-8 p-4 rounded-2xl backdrop-blur-xl shadow-xl z-20 ${
                      isDarkMode 
                        ? "bg-neutral-900/80 border border-neutral-800" 
                        : "bg-white/90 border border-neutral-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <Shield className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <p className={`font-bold ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
                          100% Verified
                        </p>
                        <p className={`text-sm ${isDarkMode ? "text-neutral-400" : "text-neutral-500"}`}>
                          Background checked
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Card - Bottom Right */}
                  <motion.div
                    initial={{ opacity: 0, x: 50, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ delay: 1.2, ...springConfig.bouncy }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className={`absolute -right-4 md:-right-8 bottom-12 p-4 rounded-2xl backdrop-blur-xl shadow-xl z-20 ${
                      isDarkMode 
                        ? "bg-neutral-900/80 border border-neutral-800" 
                        : "bg-white/90 border border-neutral-100"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-2">
                        {[
                          "from-purple-400 to-indigo-500",
                          "from-pink-400 to-rose-500",
                          "from-amber-400 to-orange-500",
                        ].map((gradient, i) => (
                          <motion.div
                            key={i}
                            className={`w-10 h-10 rounded-full border-2 ${isDarkMode ? "border-neutral-900" : "border-white"} bg-gradient-to-br ${gradient}`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 1.4 + i * 0.1 }}
                          />
                        ))}
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1.6 + i * 0.05 }}
                            >
                              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                            </motion.span>
                          ))}
                        </div>
                        <p className={`text-sm font-semibold ${isDarkMode ? "text-white" : "text-neutral-900"}`}>
                          10,000+ Reviews
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Background Decorations */}
                  <motion.div
                    style={{ y: y2 }}
                    className={`absolute -bottom-6 -right-6 w-full h-full rounded-[2rem] -z-10 ${
                      isDarkMode 
                        ? "bg-gradient-to-br from-purple-600/20 to-indigo-600/20" 
                        : "bg-gradient-to-br from-purple-200/80 to-indigo-200/80"
                    }`}
                  />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute -z-20 -top-10 -right-10 w-40 h-40 border border-dashed border-purple-300/30 rounded-full"
                  />
                </motion.div>
              )}
            </Grid>
          </Grid>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute left-1/2 bottom-8 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className={`flex flex-col items-center gap-2 ${isDarkMode ? "text-neutral-500" : "text-neutral-400"}`}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className={`w-6 h-10 rounded-full border-2 ${isDarkMode ? "border-neutral-700" : "border-neutral-300"} flex justify-center pt-2`}>
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className={`w-1.5 h-3 rounded-full ${isDarkMode ? "bg-neutral-500" : "bg-neutral-400"}`}
              />
            </div>
          </motion.div>
        </motion.div>
      </Box>

      {/* Contact Form Dialog */}
      <AnimatePresence>
        {openForm && (
            <Dialog
            open={openForm}
            onClose={() => setOpenForm(false)}
            maxWidth="sm"
            fullWidth
            PaperProps={{
              component: motion.div,
              initial: { opacity: 0, scale: 0.95, y: 20 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.95, y: 20 },
              transition: springConfig.snappy,
              sx: {
                borderRadius: { xs: 0, sm: 4 },
                padding: { xs: 1.5, sm: 2 },
                margin: { xs: 0, sm: '32px' },
                maxHeight: { xs: '100vh', sm: '90vh' },
                background: isDarkMode 
                  ? "linear-gradient(135deg, #171717 0%, #0a0a0a 100%)" 
                  : "linear-gradient(135deg, #ffffff 0%, #fafafa 100%)",
                border: isDarkMode ? "1px solid rgba(255,255,255,0.1)" : "none",
              },
            }}
          >
            <DialogTitle 
              sx={{ 
                fontWeight: 700, 
                fontFamily: "'Clash Display', sans-serif",
                color: isDarkMode ? "#fff" : "#171717",
                fontSize: { xs: '1.25rem', sm: '1.5rem' },
                padding: { xs: '16px 16px 8px 16px', sm: '24px 24px 16px 24px' },
              }}
            >
              Contact Us
              <IconButton
                onClick={() => setOpenForm(false)}
                sx={{ 
                  position: "absolute", 
                  right: { xs: 8, sm: 16 }, 
                  top: { xs: 8, sm: 16 },
                  minWidth: '44px',
                  minHeight: '44px',
                  color: isDarkMode ? "#a3a3a3" : "#525252",
                  "&:hover": {
                    background: isDarkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                  },
                }}
              >
                <CloseIcon sx={{ fontSize: { xs: '24px', sm: '28px' } }} />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <ZohoLeadForm />
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroSection;
