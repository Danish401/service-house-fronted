import React, { useState } from "react";
import { Star, Close } from "@mui/icons-material";
import Swal from "sweetalert2";

const FeedbackModal = ({ isOpen, onClose, onSubmit, isDarkMode }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async () => {
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
      await onSubmit({ value: rating, comment: comment.trim() });
      // Reset form
      setRating(0);
      setComment("");
      setHoverRating(0);
      Swal.fire({
        icon: "success",
        title: "Thank You!",
        text: "Your feedback has been submitted successfully.",
        confirmButtonColor: "#7d66d9",
      });
      onClose();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to submit feedback. Please try again.",
        confirmButtonColor: "#7d66d9",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className={`relative w-full max-w-md mx-4 rounded-2xl shadow-2xl ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
            isDarkMode
              ? "text-gray-400 hover:bg-gray-700"
              : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          <Close />
        </button>

        {/* Content */}
        <div className="p-6">
          <h2
            className={`text-2xl font-bold mb-6 ${
              isDarkMode ? "text-white" : "text-gray-800"
            }`}
          >
            Share Your Feedback
          </h2>

          {/* Star Rating */}
          <div className="mb-6">
            <label
              className={`block mb-3 text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Rate Your Experience *
            </label>
            <div className="flex items-center justify-center space-x-2">
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
                    className={`text-5xl ${
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
                className={`mt-2 text-center text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
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
              className={`block mb-2 text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
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
              rows={4}
              placeholder="Tell us about your experience..."
              maxLength={500}
              className={`w-full px-4 py-3 rounded-lg border resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  : "bg-gray-50 border-gray-300 text-gray-800 placeholder-gray-400"
              }`}
            />
            <p
              className={`mt-1 text-xs ${
                isDarkMode ? "text-gray-500" : "text-gray-400"
              }`}
            >
              {comment.length}/500 characters
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-colors ${
                isDarkMode
                  ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting || rating === 0}
              className={`flex-1 px-4 py-3 rounded-lg font-semibold text-white transition-colors ${
                isSubmitting || rating === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;

