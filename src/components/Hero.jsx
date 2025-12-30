import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function Hero() {
  const navigate = useNavigate();
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  const popularSearches = ["Plumber", "Electrician", "Cleaning", "Carpenter"];

  return (
    <section
      className={`relative overflow-hidden py-16 md:py-24 ${
        isDarkMode
          ? "bg-gradient-to-br from-purple-900 via-slate-900 to-indigo-900"
          : "bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-700"
      }`}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl bg-purple-400/20"
          style={{ top: "-10%", left: "-5%" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full blur-3xl bg-indigo-400/20"
          style={{ bottom: "-10%", right: "-5%" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center max-w-4xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium text-white/90">
              Trusted by 10,000+ customers
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
          style={{ fontFamily: "'Clash Display', sans-serif" }}
        >
          {t("findService")}
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-10 text-lg text-purple-100 md:text-xl"
        >
          {t("exploreService")}
        </motion.p>

        {/* Search Bar */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSearch}
          className="relative max-w-2xl mx-auto"
        >
          <motion.div
            animate={{
              boxShadow: isFocused
                ? "0 0 0 4px rgba(255, 255, 255, 0.2), 0 20px 40px rgba(0, 0, 0, 0.2)"
                : "0 10px 30px rgba(0, 0, 0, 0.15)",
            }}
            className={`flex items-center gap-2 p-2 rounded-2xl transition-all duration-300 ${
              isDarkMode
                ? "bg-slate-800/80 border border-slate-700"
                : "bg-white/95 border border-white/50"
            } backdrop-blur-xl`}
          >
            <div className="flex items-center flex-1 gap-3 px-4">
              <Search className={`w-5 h-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={t("searchPlaceholder") || "Search for a service..."}
                className={`flex-1 py-3 text-base bg-transparent border-none outline-none ${
                  isDarkMode
                    ? "text-white placeholder-gray-400"
                    : "text-gray-800 placeholder-gray-500"
                }`}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Search className="w-5 h-5" />
              <span className="hidden sm:inline">Search</span>
            </motion.button>
          </motion.div>
        </motion.form>

        {/* Popular Searches */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-6"
        >
          <span className="text-sm text-purple-200">Popular:</span>
          {popularSearches.map((term, index) => (
            <motion.button
              key={term}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(`/search/${term}`)}
              className="px-4 py-1.5 text-sm font-medium text-white rounded-full bg-white/10 border border-white/20 transition-all duration-200"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              {term}
            </motion.button>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="grid grid-cols-3 gap-4 mt-12 md:gap-8"
        >
          {[
            { value: "10K+", label: "Happy Customers" },
            { value: "500+", label: "Expert Workers" },
            { value: "50+", label: "Service Types" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-purple-200 md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
