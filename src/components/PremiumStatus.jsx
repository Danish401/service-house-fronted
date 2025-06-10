// PremiumStatus.jsx
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { AiFillCrown } from "react-icons/ai";
import Countdown from "react-countdown";
import moment from "moment";

const PremiumStatus = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [showDetails, setShowDetails] = useState(false);

  if (!isAuthenticated || !user?.isPremium) return null;

  const expiry = new Date(user.premiumExpiry);
  const plan = user.premiumPlan || "Unknown";
  const purchaseDate = moment(expiry).subtract(1, "month").toDate();

  return (
    <div className="relative group">
      <motion.button
        whileHover={{ scale: 1.05 }}
        onClick={() => setShowDetails(!showDetails)}
        className="flex items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-500 text-black font-semibold shadow-lg hover:shadow-xl transition"
      >
        <AiFillCrown className="text-yellow-800 text-lg" />
        Premium
      </motion.button>

      {showDetails && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-12 right-0 bg-white text-black p-4 rounded-xl shadow-xl z-50 min-w-[250px] border border-yellow-300"
        >
          <p className="text-md font-bold text-yellow-600 mb-2">
            👑 {plan} Plan
          </p>
          <p className="text-sm font-medium">
            <span className="font-semibold">Purchased:</span>{" "}
            {moment(purchaseDate).format("DD MMM YYYY")}
          </p>
          <p className="text-sm font-medium">
            <span className="font-semibold">Expires on:</span>{" "}
            {moment(expiry).format("DD MMM YYYY")}
          </p>
          <p className="text-sm font-medium mt-2">
            <span className="font-semibold">Time Left:</span>
            <Countdown
              date={expiry}
              renderer={({ days, hours, minutes, seconds }) => (
                <span className="ml-1 text-yellow-800">
                  {days}d {hours}h {minutes}m {seconds}s
                </span>
              )}
            />
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default PremiumStatus;
