import React, { useState } from "react";
import { Box, Grid, Typography, Modal, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ZohoForm from "./ZohoForm";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";

const Footer = () => {
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleNavigates = (item) => {
    if (item === "Insights") {
      navigate("/dashboard");
    } else {
      navigate(`/${item.toLowerCase()}`);
    }
  };

  const handleNavigate = (item) => {
    if (item === "Submit ticket") {
      setOpen(true);
    } else {
      navigate("/not-found");
    }
  };

  const handleClose = () => setOpen(false);

  const socialLinks = [
    { icon: <FacebookIcon />, url: "#", color: "hover:bg-blue-600" },
    { icon: <TwitterIcon />, url: "#", color: "hover:bg-sky-500" },
    { icon: <InstagramIcon />, url: "#", color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500" },
    { icon: <LinkedInIcon />, url: "#", color: "hover:bg-blue-700" },
    { icon: <YouTubeIcon />, url: "#", color: "hover:bg-red-600" },
  ];

  const footerLinks = {
    solutions: ["Marketing", "Analytics", "Automation", "Commerce", "Insights"],
    support: ["Submit ticket", "Documentation", "Guides"],
    company: ["About", "Blog", "Jobs", "Press"],
    legal: ["Terms of service", "Privacy policy", "License"],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      component="footer"
      className={`relative overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-b from-slate-900 to-slate-950"
          : "bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900"
      }`}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl bg-purple-500/10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl bg-indigo-500/10" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container px-4 py-16 mx-auto max-w-7xl"
        >
          <div
            className={`relative p-8 md:p-12 rounded-3xl overflow-hidden ${
              isDarkMode
                ? "bg-gradient-to-r from-purple-600/20 to-indigo-600/20 border border-purple-500/20"
                : "bg-white/10 backdrop-blur-sm border border-white/20"
            }`}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-indigo-500/20 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center gap-6 text-center md:flex-row md:text-left md:justify-between">
              <div>
                <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                  Ready to get started?
                </h2>
                <p className="text-purple-200 max-w-md">
                  Book your first service today and experience the difference
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/signup")}
                className="flex items-center gap-2 px-8 py-4 font-semibold text-purple-900 transition-all duration-300 bg-white rounded-2xl hover:bg-purple-50"
              >
                Get Started Free
                <ArrowForwardIcon className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Footer Links */}
        <div className="container px-4 py-12 mx-auto max-w-7xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={8}>
              {/* Brand Section */}
              <Grid item xs={12} md={4}>
                <motion.div variants={itemVariants}>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-4xl font-extrabold text-white">Fix</span>
                    <span className="text-2xl font-bold text-purple-300">Mate</span>
                  </div>
                  <p className="mb-6 text-purple-200 max-w-sm leading-relaxed">
                    Bridging customers and skilled professionals. We connect you with 
                    trusted workers for all your home service needs.
                  </p>
                  
                  {/* Contact Info */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-purple-200">
                      <LocationOnIcon className="w-5 h-5" />
                      <span className="text-sm">123 Service Street, City, Country</span>
                    </div>
                    <div className="flex items-center gap-3 text-purple-200">
                      <EmailIcon className="w-5 h-5" />
                      <span className="text-sm">support@ali-services.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-purple-200">
                      <PhoneIcon className="w-5 h-5" />
                      <span className="text-sm">+1 234 567 890</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 mt-6">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-white transition-all duration-300 ${social.color}`}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </Grid>

              {/* Links Sections */}
              <Grid item xs={6} sm={3} md={2}>
                <motion.div variants={itemVariants}>
                  <h4 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase">
                    Solutions
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.solutions.map((item) => (
                      <li key={item}>
                        <motion.button
                          whileHover={{ x: 4 }}
                          onClick={() => handleNavigates(item)}
                          className="text-purple-200 transition-colors duration-200 hover:text-white text-left"
                        >
                          {item}
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Grid>

              <Grid item xs={6} sm={3} md={2}>
                <motion.div variants={itemVariants}>
                  <h4 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase">
                    Support
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.support.map((item) => (
                      <li key={item}>
                        <motion.button
                          whileHover={{ x: 4 }}
                          onClick={() => handleNavigate(item)}
                          className="text-purple-200 transition-colors duration-200 hover:text-white text-left"
                        >
                          {item}
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Grid>

              <Grid item xs={6} sm={3} md={2}>
                <motion.div variants={itemVariants}>
                  <h4 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase">
                    Company
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((item) => (
                      <li key={item}>
                        <motion.button
                          whileHover={{ x: 4 }}
                          onClick={() => handleNavigate(item)}
                          className="text-purple-200 transition-colors duration-200 hover:text-white text-left"
                        >
                          {item}
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Grid>

              <Grid item xs={6} sm={3} md={2}>
                <motion.div variants={itemVariants}>
                  <h4 className="mb-6 text-sm font-semibold tracking-wider text-white uppercase">
                    Legal
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((item) => (
                      <li key={item}>
                        <motion.button
                          whileHover={{ x: 4 }}
                          onClick={() => handleNavigate(item)}
                          className="text-purple-200 transition-colors duration-200 hover:text-white text-left"
                        >
                          {item}
                        </motion.button>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mt-12 p-6 rounded-2xl ${
              isDarkMode
                ? "bg-slate-800/50 border border-slate-700"
                : "bg-white/10 border border-white/20"
            }`}
          >
            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
              <div>
                <h4 className="mb-1 text-lg font-semibold text-white">
                  Subscribe to our newsletter
                </h4>
                <p className="text-sm text-purple-200">
                  Get the latest updates and offers directly in your inbox
                </p>
              </div>
              <div className="flex w-full gap-3 md:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className={`flex-1 md:w-64 px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 ${
                    isDarkMode
                      ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:ring-purple-500"
                      : "bg-white/20 border-white/30 text-white placeholder-purple-200 focus:ring-white/50"
                  }`}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 font-semibold text-purple-900 transition-all duration-300 bg-white rounded-xl hover:bg-purple-50"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <div className="pt-8 mt-12 border-t border-white/10">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-purple-200">
                © {new Date().getFullYear()} FixMate. All rights reserved.
              </p>
              <div className="flex gap-6">
                <button className="text-sm text-purple-200 transition-colors hover:text-white">
                  Privacy Policy
                </button>
                <button className="text-sm text-purple-200 transition-colors hover:text-white">
                  Terms of Service
                </button>
                <button className="text-sm text-purple-200 transition-colors hover:text-white">
                  Cookies
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Zoho Form Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        className="flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className={`relative w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 rounded-3xl ${
            isDarkMode
              ? "bg-slate-800 border border-slate-700"
              : "bg-white"
          }`}
        >
          <IconButton
            onClick={handleClose}
            className="absolute top-4 right-4"
            sx={{ color: isDarkMode ? "white" : "inherit" }}
          >
            <CloseIcon />
          </IconButton>
          <h3 className={`mb-6 text-xl font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
            Submit a Ticket
          </h3>
          <ZohoForm />
        </motion.div>
      </Modal>
    </Box>
  );
};

export default Footer;
