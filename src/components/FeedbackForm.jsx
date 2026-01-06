import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Star, ArrowBack } from "@mui/icons-material";
import { updateBooking, fetchBookingById, getCustomerBookings } from "../features/bookingSlice";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const FeedbackForm = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { bookingDetails, loading } = useSelector((state) => state.bookings);
  const { user } = useSelector((state) => state.auth);
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const booking = bookingDetails[bookingId];

  useEffect(() => {
    if (bookingId) {
      dispatch(fetchBookingById(bookingId));
    }
  }, [dispatch, bookingId]);

  // If booking already has feedback, pre-fill the form
  useEffect(() => {
    if (booking?.rating) {
      setRating(booking.rating.value || 0);
      setComment(booking.rating.comment || "");
    }
  }, [booking]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (rating === 0) {
      Swal.fire({
        icon: "warning",
        title: "Rating Required",
        text: "Please select a star rating before submitting.",
        confirmButtonColor: "#7d66d9",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await dispatch(
        updateBooking({
          bookingId,
          updates: { rating: { value: rating, comment: comment.trim() } },
        })
      ).unwrap();

      // Refresh customer bookings to show updated feedback
      if (user?.id) {
        dispatch(getCustomerBookings(user.id));
      }

      Swal.fire({
        icon: "success",
        title: "Thank You!",
        text: "Your feedback has been submitted successfully.",
        confirmButtonColor: "#7d66d9",
      });

      // Navigate back to bookings page
      navigate("/bookings");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message || "Failed to submit feedback. Please try again.",
        confirmButtonColor: "#7d66d9",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading booking details...</p>
        </div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-red-500 mb-4">Booking not found</p>
          <button
            onClick={() => navigate("/bookings")}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Back to Bookings
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen py-8 px-4 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <button
            onClick={() => navigate("/bookings")}
            className={`flex items-center gap-2 mb-4 px-4 py-2 rounded-lg transition-colors ${
              isDarkMode
                ? "text-gray-300 hover:bg-gray-800"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <ArrowBack />
            Back to Bookings
          </button>
          <h1
            className={`text-3xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Share Your Feedback
          </h1>
          <p
            className={`mt-2 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Help us improve by sharing your experience with{" "}
            <span className="font-semibold">
              {booking.employee?.name || "the service provider"}
            </span>
          </p>
        </motion.div>

        {/* Booking Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`mb-6 p-6 rounded-xl shadow-lg ${
            isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white"
          }`}
        >
          <h3
            className={`text-lg font-semibold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Booking Details
          </h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span
                className={`font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Service Provider:
              </span>
              <span
                className={isDarkMode ? "text-gray-400" : "text-gray-600"}
              >
                {booking.employee?.name || "N/A"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Service Date:
              </span>
              <span
                className={isDarkMode ? "text-gray-400" : "text-gray-600"}
              >
                {new Date(booking.date).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className={`font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Service Time:
              </span>
              <span
                className={isDarkMode ? "text-gray-400" : "text-gray-600"}
              >
                {booking.time}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Feedback Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className={`p-6 rounded-xl shadow-lg ${
            isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white"
          }`}
        >
          {/* Star Rating */}
          <div className="mb-6">
            <label
              className={`block mb-4 text-lg font-semibold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Rate Your Experience <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center justify-center space-x-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transition-transform hover:scale-110 focus:outline-none"
                >
                  <Star
                    className={`text-6xl ${
                      star <= (hoverRating || rating)
                        ? "text-yellow-400"
                        : isDarkMode
                        ? "text-gray-600"
                        : "text-gray-300"
                    }`}
                    style={{
                      fill:
                        star <= (hoverRating || rating)
                          ? "currentColor"
                          : "none",
                    }}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p
                className={`mt-3 text-center text-lg font-medium ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {rating === 1 && "Poor"}
                {rating === 2 && "Fair"}
                {rating === 3 && "Good"}
                {rating === 4 && "Very Good"}
                {rating === 5 && "Excellent"}
              </p>
            )}
          </div>

          {/* Comment */}
          <div className="mb-6">
            <label
              className={`block mb-2 text-lg font-semibold ${
                isDarkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Your Feedback (Optional)
            </label>
            <textarea
              value={comment}
              onChange={(e) => {
                if (e.target.value.length <= 500) {
                  setComment(e.target.value);
                }
              }}
              rows={6}
              placeholder="Tell us about your experience... What did you like? What could be improved?"
              maxLength={500}
              className={`w-full px-4 py-3 rounded-lg border resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-400"
              }`}
            />
            <p
              className={`mt-2 text-sm text-right ${
                isDarkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              {comment.length}/500 characters
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => navigate("/bookings")}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-colors ${
                isDarkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || rating === 0}
              className={`flex-1 px-6 py-3 rounded-lg font-semibold text-white transition-all ${
                isSubmitting || rating === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default FeedbackForm;

