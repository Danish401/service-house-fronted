
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import Confetti from "react-confetti";
import Countdown from "react-countdown";
import axios from "axios";
import toast from "react-hot-toast";
import successAnimation from "./success.json";
import { setUser, getUserById } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

// Plan details
const plans = [
  {
    title: "Silver Plan",
    price: "₹49/mo",
    amount: 49,
    oldPrice: "₹199",
    duration: "1 month",
    buttonText: "Choose Silver",
    bgColor: "from-[#f3f4f6] to-[#cbd5e1]",
    perks: [
      "5% off on bookings",
      "Priority support for 1 service",
      "One-time free consultation",
    ],
    textColor: "text-[#374151]",
    accent: "#6b7280",
  },
  {
    title: "Golden Plan",
    price: "₹99/mo",
    amount: 99,
    oldPrice: "₹299",
    duration: "1 month",
    buttonText: "Choose Gold",
    bgColor: "from-[#f9e8b2] to-[#e6b800]",
    perks: [
      "10% off on all services",
      "Fast-track support",
      "2 free consultations",
    ],
    textColor: "text-[#78350f]",
    accent: "#d97706",
  },
  {
    title: "Platinum Plan",
    price: "₹149/mo",
    amount: 149,
    oldPrice: "₹499",
    duration: "1 month",
    buttonText: "Choose Platinum",
    bgColor: "from-[#c7d2fe] to-[#6366f1]",
    perks: [
      "15% off",
      "Priority booking on all categories",
      "Free service cancellation",
      "3 consultations",
    ],
    textColor: "text-white",
    accent: "#a5b4fc",
  },
];

// Server URL
const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://servicehouse.onrender.com"
    : "http://localhost:5000";
const PremiumPlans = () => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [subscribed, setSubscribed] = useState(false);
  const [expiryDate, setExpiryDate] = useState(null);
  const [showExpiryModal, setShowExpiryModal] = useState(false);

  useEffect(() => {
    if (user?.isPremium && user?.premiumExpiry) {
      setExpiryDate(new Date(user.premiumExpiry));
    }
  }, [user]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (document.getElementById("razorpay-script")) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.id = "razorpay-script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSubscribe = async (plan) => {
    if (!isAuthenticated || !user) {
      toast.error("Please login first to subscribe");
      return;
    }

    const currentDate = new Date();
    if (
      user.isPremium &&
      new Date(user.premiumExpiry) > currentDate &&
      user.premiumPlan === plan.title
    ) {
      setShowExpiryModal(true);
      return;
    }

    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      toast.error("Failed to load Razorpay SDK");
      return;
    }

    try {
      const { data } = await axios.post(`${BACKEND_URL}/api/payment/orders`, {
        amount: plan.amount,
      });

      const options = {
        key: "rzp_test_evc1f58VcUpfqc",
        amount: data.amount,
        currency: data.currency,
        name: "House Service Premium",
        description: `Subscribe to ${plan.title}`,
        order_id: data.id,
        handler: async function (response) {
          try {
            const userId = user?._id || user?.id;
            if (!userId) {
              toast.error("User ID is missing. Cannot verify payment.");
              return;
            }

            const verifyRes = await axios.post(
              `${BACKEND_URL}/api/payment/verify`,
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                userId,
                plan: plan.title,
              }
            );

            dispatch(
              setUser({
                user: verifyRes.data.user,
                token: verifyRes.data.token,
              })
            );

            dispatch(getUserById(userId));
            setExpiryDate(new Date(verifyRes.data.user.premiumExpiry));
            setSubscribed(true);
            toast.success("Subscription successful!");
          } catch (error) {
            console.error("❌ Payment verification failed:", error);
            toast.error("Payment verification failed");
          }
        },
        prefill: {
          name: user.name,
          email: user.email,
          contact: user.phone,
        },
        theme: {
          color: plan.accent,
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      toast.error("Payment initiation failed");
      console.error("Razorpay order error:", err);
    }
  };

  const lottieOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="min-h-screen mt-10 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] p-6 text-white">
      <div className="mb-12 text-center">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-[#facc15]"
        >
          House Service Premium Plans
        </motion.h1>
        <p className="text-md mt-2 text-[#eab308]">
          Unlock faster services and exclusive perks with our premium plans
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, i) => {
          const isCurrentActive =
            user?.premiumPlan === plan.title &&
            user?.isPremium &&
            new Date(user?.premiumExpiry) > new Date();

          return (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className={`rounded-xl p-6 shadow-xl bg-gradient-to-br ${plan.bgColor} border-2 border-white hover:scale-105 transform transition duration-300`}
            >
              <p
                className={`text-xs uppercase tracking-widest mb-2 ${plan.textColor}`}
              >
                ✨ {plan.title}
              </p>
              <div className={`text-3xl font-extrabold ${plan.textColor}`}>
                {plan.price}
                <span className="ml-3 text-sm line-through opacity-70">
                  {plan.oldPrice}
                </span>
              </div>
              <p className={`text-sm mt-1 ${plan.textColor}`}>
                for {plan.duration}
              </p>

              <ul className="mt-4 space-y-2 font-medium text-left">
                {plan.perks.map((perk, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center gap-2 ${plan.textColor}`}
                  >
                    ✅ {perk}
                  </li>
                ))}
              </ul>

              {!isAuthenticated ? (
                <button
                  onClick={() =>
                    toast.error("Please login to buy premium services")
                  }
                  className="w-full py-2 mt-6 font-semibold text-white bg-gray-400 rounded-full cursor-not-allowed"
                >
                  Login to Buy Premium
                </button>
              ) : isCurrentActive ? (
                <button
                  onClick={() => setShowExpiryModal(true)}
                  className="mt-6 w-full py-2 font-semibold rounded-full bg-[#facc15] text-black hover:bg-[#eab308] transition"
                >
                  Premium Active
                </button>
              ) : (
                <button
                  onClick={() => handleSubscribe(plan)}
                  className={`mt-6 w-full py-2 font-semibold rounded-full transition duration-300 ${
                    plan.title === "Golden Plan"
                      ? "bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black shadow-md hover:shadow-lg hover:from-[#FFC300] hover:to-[#FF8C00]"
                      : "bg-white text-black hover:bg-opacity-90"
                  }`}
                >
                  {plan.buttonText}
                </button>
              )}
            </motion.div>
          );
        })}
      </div>

      {(subscribed || showExpiryModal) && expiryDate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black bg-opacity-80">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl text-center shadow-xl relative w-full max-w-md">
            {subscribed && (
              <Lottie options={lottieOptions} height={140} width={140} />
            )}
            <h2 className="text-xl font-bold text-[#facc15] mt-4">
              {subscribed ? "Subscription Successful!" : "Premium Active"}
            </h2>
            <p className="mt-2 text-[#eab308]">
              Your premium plan is active until:
            </p>
            <Countdown
              date={expiryDate}
              renderer={({ days, hours, minutes, seconds }) => (
                <p className="mt-2 text-sm font-semibold text-[#facc15]">
                  {days}d {hours}h {minutes}m {seconds}s
                </p>
              )}
            />
            <button
              onClick={() => {
                setSubscribed(false);
                setShowExpiryModal(false);
              }}
              className="mt-6 bg-[#c07e0b] text-black px-4 py-2 rounded hover:bg-[#eab308] transition"
            >
              Close
            </button>
            {subscribed && <Confetti numberOfPieces={200} recycle={false} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumPlans;
