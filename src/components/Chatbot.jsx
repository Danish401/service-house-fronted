

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { BsRobot } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { FiChevronUp } from "react-icons/fi";
import robotIcon from "../assets/chatbot.png";
const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://servicehouse.onrender.com"
    : "http://localhost:5000";
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I'm your FixMate assistant. How can I help you?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestedQuestions = [
    "What services do you offer?",
    "How can I book a service?",
    "Can I chat with my booked service provider?",
    "How do I reschedule a booking?",
    "What is included in Premium Support?",
    "How do I locate my service professional?",
    "How can I contact support?",
    "owner of the application",
    "queries",
  ];

  const sendMessage = async (msg = input) => {
    if (!msg.trim()) return;
    const userMsg = { sender: "user", text: msg };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    setShowSuggestions(false);

    try {
      const res = await axios.post(`${BACKEND_URL}/api/chat`, {
        message: msg,
      });
      const botMsg = { sender: "bot", text: res.data };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      const errorMsg = { sender: "bot", text: "Oops! Something went wrong." };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestedClick = (question) => {
    setInput(question);
    setShowSuggestions(false);
  };

  return (
    <div className="fixed z-50 bottom-4 right-4 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {!open && (
          <motion.button
            onClick={() => setOpen(true)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 sm:p-4 text-white bg-[#ffdd57] rounded-full shadow-lg hover:bg-[#9b9ef0] min-w-[56px] min-h-[56px] flex items-center justify-center touch-manipulation"
            aria-label="Open chatbot"
          >
            <img
              src={robotIcon}
              alt="Chatbot"
              className="object-contain w-10 h-10 sm:w-12 sm:h-12"
            />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop for mobile */}
            <motion.div
              className="fixed inset-0 bg-black/30 z-40 sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="fixed bottom-0 right-0 sm:relative w-full sm:w-[28rem] sm:max-w-[90vw] h-[85vh] sm:h-[70vh] max-h-[600px] bg-white rounded-t-2xl sm:rounded-lg shadow-2xl flex flex-col relative z-50"
            >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative flex items-center gap-2 p-3 sm:p-4 text-base sm:text-lg align-middle font-semibold text-white bg-gradient-to-r from-[#7d66d9] via-[#9b9ef0] to-[#7d66d9] rounded-t-2xl sm:rounded-t-lg shadow-md border-b border-white/30"
            >
              <img
                src={robotIcon}
                alt="Chatbot"
                className="object-contain w-7 h-7 sm:w-8 sm:h-8"
              />
              <span className="flex-1">FixMate Assistant</span>
              <button
                onClick={() => setOpen(false)}
                className="sm:hidden text-white text-xl font-bold min-w-[32px] min-h-[32px] flex items-center justify-center touch-manipulation"
                aria-label="Close chatbot"
              >
                ✕
              </button>
            </motion.div>

            <div className="flex-1 p-3 sm:p-4 space-y-3 overflow-y-auto overscroll-contain">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${
                    m.sender === "user" ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`text-sm sm:text-base px-4 py-2.5 rounded-xl max-w-[85%] sm:max-w-[80%] break-words shadow-sm ${
                      m.sender === "user"
                        ? "bg-[#ffd700] text-black"
                        : "bg-[#e6e7ff] text-gray-700"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}

              {loading && (
                <div className="text-sm px-3 py-2 rounded-lg max-w-[80%] bg-[#e6e7ff] text-gray-500 italic self-end">
                  Typing...
                </div>
              )}
            </div>

            <div className="px-3 pb-2">
              <AnimatePresence>
                {showSuggestions && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mb-2"
                  >
                    <p className="mb-1 text-xs font-semibold text-gray-600">
                      Suggestions:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {suggestedQuestions.map((q, i) => (
                        <button
                          key={i}
                          onClick={() => handleSuggestedClick(q)}
                          className="px-3 py-2 text-xs sm:text-sm bg-[#9b9ef0] text-white rounded-lg hover:bg-[#7d66d9] active:scale-95 transition-transform touch-manipulation min-h-[36px]"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 px-4 py-3 text-sm sm:text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7d66d9] focus:border-transparent min-h-[48px]"
                  placeholder="Type your message..."
                />
                <button
                  onClick={() => sendMessage()}
                  className="p-3 text-white bg-[#7d66d9] rounded-xl hover:bg-[#9b9ef0] active:scale-95 transition-transform touch-manipulation min-w-[48px] min-h-[48px] flex items-center justify-center"
                  aria-label="Send message"
                >
                  <IoMdSend size={20} />
                </button>
                <button
                  onClick={() => setShowSuggestions(!showSuggestions)}
                  className="hidden sm:flex text-[#6b7280] hover:text-[#7d66d9] p-2 min-w-[40px] min-h-[40px] items-center justify-center touch-manipulation"
                  aria-label="Toggle suggestions"
                >
                  <FiChevronUp size={20} />
                </button>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="hidden sm:block absolute font-bold text-white top-3 right-3 hover:text-yellow-400 min-w-[32px] min-h-[32px] flex items-center justify-center touch-manipulation"
              aria-label="Close chatbot"
            >
              ✕
            </button>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
