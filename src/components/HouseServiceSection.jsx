import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import painters from "../assets/images/painters.jpg";
import overall from "../assets/images/overall.jpg";
import ac from "../assets/images/ac repair.jpg";
import { ArrowRight, Users, Award, Clock, Star } from "lucide-react";

const HouseServiceSection = () => {
  const { t } = useTranslation();
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const navigate = useNavigate();

  const stats = [
    { 
      value: "90%", 
      label: t("repeatCustomers") || "Repeat Customers",
      icon: <Users className="w-5 h-5" />,
      color: "from-purple-500 to-indigo-500"
    },
    { 
      value: "94%", 
      label: t("freshnessQuality") || "Quality Score",
      icon: <Award className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500"
    },
    { 
      value: "20 min", 
      label: t("quickService") || "Quick Service",
      icon: <Clock className="w-5 h-5" />,
      color: "from-amber-500 to-orange-500"
    },
    { 
      value: "500+", 
      label: t("positiveReviews") || "Positive Reviews",
      icon: <Star className="w-5 h-5" />,
      color: "from-pink-500 to-rose-500"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      className={`py-16 md:py-24 overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-b from-slate-800 to-slate-900"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Images Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full lg:w-1/2"
          >
            <div className="relative grid grid-cols-12 gap-4">
              {/* Main Large Image */}
              <motion.div
                className="relative col-span-7 row-span-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl aspect-[3/4]">
                  <img
                    src={overall}
                    alt="Professional Service"
                    className="object-cover w-full h-full"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-6 left-6 right-6"
                  >
                    <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg shadow-lg">
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-gradient-to-br ${
                                i === 0 ? "from-purple-400 to-indigo-500" :
                                i === 1 ? "from-pink-400 to-rose-500" :
                                "from-amber-400 to-orange-500"
                              }`}
                            />
                          ))}
                        </div>
                        <div>
                          <p className={`text-sm font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                            10K+ Happy Clients
                          </p>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right Column Images */}
              <div className="flex flex-col col-span-5 gap-4">
                <motion.div
                  className="relative overflow-hidden rounded-[1.5rem] shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="aspect-square">
                    <img
                      src={ac}
                      alt="AC Repair Service"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>

                <motion.div
                  className="relative overflow-hidden rounded-[1.5rem] shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="aspect-square">
                    <img
                      src={painters}
                      alt="Painting Service"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div 
                className={`absolute -z-10 -bottom-8 -left-8 w-64 h-64 rounded-full blur-3xl ${
                  isDarkMode ? "bg-purple-600/20" : "bg-purple-300/30"
                }`}
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span
                className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wide mb-6 ${
                  isDarkMode
                    ? "bg-purple-500/20 text-purple-300"
                    : "bg-purple-100 text-purple-700"
                }`}
              >
                {t("whoWeAre") || "Who We Are"}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${
                isDarkMode ? "text-white" : "text-gray-900"
              }`}
              style={{ fontFamily: "'Clash Display', sans-serif" }}
            >
              {t("premiumServices") || "Premium House Services"}
              <span className="block text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">
                You Can Trust
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className={`text-lg mb-8 leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {t("description") || 
                "We provide top-quality home services with verified professionals. Our team ensures your complete satisfaction with every service, backed by our quality guarantee."}
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`p-5 rounded-2xl transition-all duration-300 ${
                    isDarkMode
                      ? "bg-slate-800/80 border border-slate-700/50 hover:border-purple-500/50"
                      : "bg-white border border-gray-100 hover:border-purple-300 shadow-lg hover:shadow-xl"
                  }`}
                >
                  <div className={`inline-flex p-2 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-3`}>
                    {stat.icon}
                  </div>
                  <div className={`text-2xl font-bold mb-1 ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                    {stat.value}
                  </div>
                  <div className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(124, 58, 237, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/about")}
                className="inline-flex items-center gap-3 px-8 py-4 font-semibold text-white transition-all duration-300 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-500/25"
              >
                {t("learnMore") || "Learn More About Us"}
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HouseServiceSection;
