import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Mail, Send, Sparkles, CheckCircle } from "lucide-react";

const Newsletter = () => {
  const { t } = useTranslation();
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section
      className={`relative py-20 md:py-28 overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900"
          : "bg-gradient-to-br from-purple-100 via-indigo-100 to-purple-50"
      }`}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className={`absolute w-[500px] h-[500px] rounded-full blur-3xl ${
            isDarkMode ? "bg-purple-600/10" : "bg-purple-300/30"
          }`}
          style={{ top: "-20%", right: "-10%" }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className={`absolute w-[400px] h-[400px] rounded-full blur-3xl ${
            isDarkMode ? "bg-indigo-600/10" : "bg-indigo-300/30"
          }`}
          style={{ bottom: "-20%", left: "-10%" }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container relative z-10 px-4 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                isDarkMode
                  ? "bg-purple-500/20 border border-purple-500/30"
                  : "bg-purple-100 border border-purple-200"
              }`}
            >
              <Sparkles className={`w-4 h-4 ${isDarkMode ? "text-purple-300" : "text-purple-600"}`} />
              <span className={`text-sm font-medium ${isDarkMode ? "text-purple-300" : "text-purple-700"}`}>
                Stay Updated
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
            style={{ fontFamily: "'Clash Display', sans-serif" }}
          >
            {t("newsletter.title") || "Subscribe to Our Newsletter"}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("newsletter.description") || "Get exclusive offers, service updates, and helpful tips delivered directly to your inbox."}
          </motion.p>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onSubmit={handleSubmit}
            className="relative max-w-xl mx-auto"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`flex items-center justify-center gap-3 p-6 rounded-2xl ${
                  isDarkMode
                    ? "bg-green-500/20 border border-green-500/30"
                    : "bg-green-100 border border-green-200"
                }`}
              >
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className={`text-lg font-medium ${isDarkMode ? "text-green-300" : "text-green-700"}`}>
                  Thanks for subscribing!
                </span>
              </motion.div>
            ) : (
              <motion.div
                animate={{
                  boxShadow: isFocused
                    ? isDarkMode
                      ? "0 0 0 4px rgba(139, 92, 246, 0.2)"
                      : "0 0 0 4px rgba(139, 92, 246, 0.15)"
                    : "none",
                }}
                className={`flex flex-col sm:flex-row gap-3 p-2 rounded-2xl transition-all duration-300 ${
                  isDarkMode
                    ? "bg-slate-800/80 border border-slate-700"
                    : "bg-white/80 border border-gray-200"
                } backdrop-blur-xl shadow-lg`}
              >
                <div className="flex items-center flex-1 gap-3 px-4">
                  <Mail className={`w-5 h-5 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={t("newsletter.emailPlaceholder") || "Enter your email address"}
                    required
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
                  className="flex items-center justify-center gap-2 px-8 py-3 font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <Send className="w-5 h-5" />
                  <span>{t("newsletter.buttonText") || "Subscribe"}</span>
                </motion.button>
              </motion.div>
            )}
          </motion.form>

          {/* Privacy Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className={`mt-6 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            We respect your privacy. Unsubscribe at any time.
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            {[
              { icon: "🎁", text: "Exclusive Offers" },
              { icon: "📰", text: "Weekly Updates" },
              { icon: "💡", text: "Pro Tips" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                whileHover={{ y: -3, scale: 1.05 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  isDarkMode
                    ? "bg-slate-800/50 border border-slate-700"
                    : "bg-white/60 border border-gray-200"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className={`text-sm font-medium ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
