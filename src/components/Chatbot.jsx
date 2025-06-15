
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { BsRobot } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { FiChevronUp } from "react-icons/fi";
import robotIcon from "../assets/chatbot.png";
export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I’m your House Service assistant. How can I help you?",
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
      const res = await axios.post("http://localhost:5000/api/chat", {
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
    <div className="fixed z-50 bottom-6 right-6">
      <AnimatePresence>
        {!open && (
          <motion.button
            onClick={() => setOpen(true)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="p-4 text-white bg-[#ffdd57] rounded-full shadow-lg hover:bg-[#9b9ef0]"
          >
            {/* <BsRobot size={24} /> */}
            <img
              src={robotIcon}
              alt="Chatbot"
              className="w-10 h-10 object-contain"
            />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-[90vw] sm:w-[28rem] h-[70vh] bg-white rounded-lg shadow-xl flex flex-col relative"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative flex items-center gap-2 p-4 text-lg align-middle font-semibold text-white bg-gradient-to-r from-[#7d66d9] via-[#9b9ef0] to-[#7d66d9] rounded-t-lg shadow-md border-b border-white/30"
            >
              {/* <BsRobot size={22} className="text-white animate-pulse" /> */}
              <img
                src={robotIcon}
                alt="Chatbot"
                className="w-8 h-8 object-contain"
              />
              House Service Assistant
            </motion.div>

            <div className="flex-1 p-3 space-y-2 overflow-y-auto">
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
                    className={`text-sm px-3 py-2 rounded-lg max-w-[80%] break-words shadow-md ${
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
                          className="px-2 py-1 text-xs bg-[#9b9ef0] text-white rounded hover:bg-[#7d66d9]"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onFocus={() => setShowSuggestions(true)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none"
                  placeholder="Type your message..."
                />
                <button
                  onClick={() => sendMessage()}
                  className="p-2 ml-2 text-white bg-[#7d66d9] rounded hover:bg-[#9b9ef0]"
                >
                  <IoMdSend />
                </button>
                <button
                  onClick={() => setShowSuggestions(!showSuggestions)}
                  className="ml-2 text-[#6b7280] hover:text-[#7d66d9]"
                >
                  <FiChevronUp size={20} />
                </button>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="absolute font-bold text-white top-2 right-2 hover:text-yellow-400"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
