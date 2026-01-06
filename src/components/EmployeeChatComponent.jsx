import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendMessage,
  fetchChatMessages,
  addMessage,
  clearMessages,
} from "../features/chatSlice";
import { useParams } from "react-router-dom";
import socket from "./socket";
import {
  FaMapMarkerAlt,
  FaCheckDouble,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import moment from "moment";
import { Send, MapPin, MoreVertical } from "lucide-react";

const EmployeeChatComponent = () => {
  const { bookingId } = useParams();
  const dispatch = useDispatch();
  const { messages, loading } = useSelector((state) => state.chat);
  const { bookingDetails } = useSelector((state) => state.bookings);
  const [text, setText] = useState("");
  const [location, setLocation] = useState(null);
  const [typingUser, setTypingUser] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [isOnline, setIsOnline] = useState(false);
  const [lastSeen, setLastSeen] = useState(null);
  const messagesEndRef = useRef(null);
  const suggestionsRef = useRef(null);
  const inputRef = useRef(null);
  const messagesRef = useRef(messages);
  const lastActivityRef = useRef(Date.now());

  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);

  // Extract booking data dynamically
  const booking = bookingDetails[bookingId] || {};
  const customerId = booking?.customer?._id;
  const employeeId = booking?.employee?._id;
  const customerName = booking?.customer?.name;
  const employeeName = booking?.employee?.name;
  const customerImage = booking?.customer?.image;
  const employeeImage = booking?.employee?.image;
  const userId = employeeId;
  const receiverId = customerId;
  const senderModel = "Employee";
  const receiverModel = "User";

  const commonSuggestions = [
    "Good Morning!", "सुप्रभात!",
    "Good Afternoon!", "शुभ दोपहर!",
    "Good Evening!", "शुभ संध्या!",
    "Hello!", "नमस्ते!",
    "Your booking has been confirmed.", "आपकी बुकिंग की पुष्टि हो गई है।",
    "I will reach your location shortly.", "मैं जल्द ही आपके स्थान पर पहुँचूँगा।",
    "I am on the way, and will be there in [X] minutes.", "मैं रास्ते में हूँ, और [X] मिनट में पहुँच जाऊँगा।",
    "Please share your exact location for easy navigation.", "कृपया आसान दिशा निर्देश के लिए अपना सटीक स्थान साझा करें।",
    "Could you confirm if someone will be available at the location?", "क्या आप पुष्टि कर सकते हैं कि स्थान पर कोई उपलब्ध होगा?",
    "If you need to reschedule, please let me know in advance.", "यदि आपको पुनर्निर्धारण करना है, तो कृपया मुझे पहले से सूचित करें।",
    "I'm experiencing a slight delay, will update you soon.", "मुझे थोड़ी देर हो रही है, जल्द ही अपडेट करूंगा।",
    "I have started the work and will update you soon.", "मैंने काम शुरू कर दिया है और जल्द ही अपडेट करूंगा।",
    "I need some additional materials. Can you arrange them?", "मुझे कुछ अतिरिक्त सामग्री की आवश्यकता है। क्या आप इन्हें उपलब्ध करा सकते हैं?",
    "The work is halfway done and will be completed in [X] hours.", "काम आधा हो चुका है और [X] घंटे में पूरा हो जाएगा।",
    "The repair is complete, please check and confirm.", "मरम्मत पूरी हो गई है, कृपया जांच कर पुष्टि करें।",
    "Could you verify if everything is working fine?", "क्या आप पुष्टि कर सकते हैं कि सब कुछ सही से काम कर रहा है?",
    "The service is complete. Please proceed with the payment.", "सेवा पूरी हो गई है। कृपया भुगतान करें।",
    "Do you need any additional service?", "क्या आपको कोई अतिरिक्त सेवा चाहिए?",
    "I hope you are satisfied with my work. Let me know if you need any changes.", "मुझे उम्मीद है कि आप मेरे काम से संतुष्ट हैं। कोई बदलाव चाहिए तो बताएं।",
    "Thank you for choosing our service!", "हमारी सेवा चुनने के लिए धन्यवाद!",
    "Please rate and review our service. Your feedback is valuable!", "कृपया हमारी सेवा को रेट और रिव्यू करें। आपकी प्रतिक्रिया महत्वपूर्ण है!"
  ];

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    messagesRef.current = messages;
    scrollToBottom();
  }, [messages]);

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setSuggestions([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (bookingId && userId && receiverId) {
      dispatch(clearMessages());
      dispatch(fetchChatMessages(bookingId));
      socket.emit("joinRoom", { bookingId, userId });
      lastActivityRef.current = Date.now();
      // Initially assume receiver is online when we join
      setIsOnline(true);
    }

    // Listen for real-time online status updates
    const handleUserOnline = (data) => {
      if (data && data.userId === receiverId) {
        setIsOnline(true);
        setLastSeen(null);
        lastActivityRef.current = Date.now();
      }
    };

    const handleUserOffline = (data) => {
      if (data && data.userId === receiverId) {
        setIsOnline(false);
        setLastSeen(data.lastSeen ? new Date(data.lastSeen) : new Date());
      }
    };

    socket.on("userOnline", handleUserOnline);
    socket.on("userOffline", handleUserOffline);

    // Handle incoming messages - use message ID for deduplication
    const handleReceiveMessage = (newMessage) => {
      // Check if message already exists using _id or a combination of fields
      const messageId = newMessage._id || `${newMessage.sender}-${newMessage.timestamp}-${newMessage.message?.substring(0, 20)}`;
      const exists = messagesRef.current.some((msg) => {
        const existingId = msg._id || `${msg.sender}-${msg.timestamp}-${msg.message?.substring(0, 20)}`;
        return existingId === messageId || (msg.sender === newMessage.sender && msg.message === newMessage.message && Math.abs(new Date(msg.timestamp) - new Date(newMessage.timestamp)) < 1000);
      });
      
      if (!exists) {
        dispatch(addMessage(newMessage));
      }
      
      // If we receive a message, the sender is definitely online
      if (newMessage.sender === receiverId) {
        lastActivityRef.current = Date.now();
        setIsOnline(true);
        setLastSeen(null);
      }
    };

    // Handle typing indicators
    const handleUserTyping = (data) => {
      if (data && data.senderName) {
        setTypingUser(data.senderName);
        // If user is typing, they're online
        if (data.senderModel === receiverModel) {
          lastActivityRef.current = Date.now();
          setIsOnline(true);
          setLastSeen(null);
        }
      }
    };

    socket.on("receiveMessage", handleReceiveMessage);
    socket.on("userTyping", handleUserTyping);
    socket.on("userStoppedTyping", () => {
      setTypingUser(null);
    });

    // Periodic presence check
    const activityInterval = setInterval(() => {
      const timeSinceLastActivity = Date.now() - lastActivityRef.current;
      if (timeSinceLastActivity > 30000 && isOnline) {
        setIsOnline(false);
        setLastSeen(new Date());
      }
    }, 5000);

    return () => {
      socket.off("receiveMessage", handleReceiveMessage);
      socket.off("userTyping", handleUserTyping);
      socket.off("userStoppedTyping");
      socket.off("userOnline", handleUserOnline);
      socket.off("userOffline", handleUserOffline);
      clearInterval(activityInterval);
    };
  }, [dispatch, bookingId, userId, receiverId, receiverModel, isOnline]);

  const formatTimestamp = (timestamp) => {
    const now = moment();
    const messageTime = moment(timestamp);
    if (now.isSame(messageTime, "day")) {
      return messageTime.format("h:mm A");
    } else if (now.subtract(1, "days").isSame(messageTime, "day")) {
      return `Yesterday, ${messageTime.format("h:mm A")}`;
    } else {
      return messageTime.format("MMM D, h:mm A");
    }
  };

  const handleSend = async () => {
    if (!text.trim() && !location) return;

    const messageData = {
      bookingId,
      sender: userId,
      senderModel,
      receiver: receiverId,
      receiverModel,
      message: text.trim() || (location ? "📍 Location shared" : ""),
      media: null,
      location: location || null,
      timestamp: new Date().toISOString(),
    };

    // Only emit to socket - don't dispatch sendMessage to avoid duplicates
    // The server will emit it back via receiveMessage, which will add it to Redux
    socket.emit("sendMessage", messageData);

    setText("");
    setLocation(null);
    setSuggestions([]);
    inputRef.current?.focus();
  };

  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const locationData = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            accuracy: position.coords.accuracy,
            timestamp: new Date().toISOString(),
          };
          setLocation(locationData);
          
          // Auto-send location with message
          const messageData = {
            bookingId,
            sender: userId,
            senderModel,
            receiver: receiverId,
            receiverModel,
            message: `📍 Location shared`,
            media: null,
            location: locationData,
            timestamp: new Date().toISOString(),
          };
          
          socket.emit("sendMessage", messageData);
          setLocation(null);
          setText("");
        },
        (error) => {
          console.error("Error getting location:", error);
          let errorMessage = "Unable to get your location. ";
          switch(error.code) {
            case error.PERMISSION_DENIED:
              errorMessage += "Please allow location access in your browser settings.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage += "Location information is unavailable.";
              break;
            case error.TIMEOUT:
              errorMessage += "Location request timed out. Please try again.";
              break;
            default:
              errorMessage += "An unknown error occurred.";
              break;
          }
          alert(errorMessage);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleTyping = (e) => {
    const inputText = e.target.value;
    setText(inputText);

    if (inputText.trim().length > 0) {
      const matchingSuggestions = commonSuggestions.filter((msg) =>
        msg.toLowerCase().startsWith(inputText.toLowerCase())
      );
      const remainingSuggestions = commonSuggestions.filter(
        (msg) => !msg.toLowerCase().startsWith(inputText.toLowerCase())
      );
      setSuggestions([...matchingSuggestions, ...remainingSuggestions]);
    } else {
      setSuggestions(commonSuggestions);
    }

    socket.emit("typing", { 
      bookingId, 
      senderName: employeeName, 
      senderModel: "Employee" 
    });
    clearTimeout(window.typingTimeout);
    window.typingTimeout = setTimeout(() => {
      socket.emit("stopTyping", { bookingId });
    }, 3000);
  };

  const handleSuggestionClick = (message) => {
    setText(message);
    setSuggestions([]);
    inputRef.current?.focus();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  let lastMessageDate = null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative flex flex-col w-full h-[85vh] rounded-3xl overflow-hidden shadow-2xl ${
        isDarkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-white via-gray-50 to-white"
      }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            isDarkMode
              ? "bg-indigo-600"
              : "bg-indigo-300"
          }`}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 ${
            isDarkMode
              ? "bg-purple-600"
              : "bg-purple-300"
          }`}
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`relative z-10 flex items-center justify-between p-6 backdrop-blur-xl border-b ${
          isDarkMode
            ? "bg-gray-800/80 border-gray-700/50"
            : "bg-white/80 border-gray-200/50"
        }`}
      >
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <img
              src={customerImage || "https://via.placeholder.com/50"}
              alt={customerName}
              className="w-14 h-14 rounded-full border-2 border-indigo-500 shadow-lg object-cover"
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                isOnline ? "bg-green-500" : "bg-gray-400"
              }`}
            >
              {isOnline && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-green-500 rounded-full"
                />
              )}
            </motion.div>
          </motion.div>
          <div>
            <h2 className={`text-xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}>
              {customerName || "Customer"}
            </h2>
            <div className="flex items-center gap-2">
              <p className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              }`}>
                {isOnline ? (
                  <span className="flex items-center gap-1.5">
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2 h-2 bg-green-500 rounded-full"
                    />
                    Online
                  </span>
                ) : lastSeen ? (
                  `Last seen ${moment(lastSeen).fromNow()}`
                ) : (
                  "Offline"
                )}
              </p>
            </div>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className={`p-2 rounded-full transition-colors ${
            isDarkMode
              ? "hover:bg-gray-700 text-gray-300"
              : "hover:bg-gray-100 text-gray-600"
          }`}
        >
          <MoreVertical size={20} />
        </motion.button>
      </motion.div>

      {/* Messages Container */}
      <div className="relative z-10 flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-transparent">
        {loading && (
          <div className="flex items-center justify-center h-full">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full"
            />
          </div>
        )}

        <AnimatePresence>
          {messages.map((msg, index) => {
            const messageDate = moment(msg.timestamp).format("MMMM D, YYYY");
            const isNewDate = messageDate !== lastMessageDate;
            lastMessageDate = messageDate;
            const isOwnMessage = msg.sender === userId;

            return (
              <React.Fragment key={msg._id || index}>
                {isNewDate && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center my-6"
                  >
                    <div className={`px-4 py-1.5 rounded-full text-xs font-semibold ${
                      isDarkMode
                        ? "bg-gray-700/50 text-gray-300"
                        : "bg-gray-200/50 text-gray-600"
                    }`}>
                      {messageDate}
                    </div>
                  </motion.div>
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`flex items-end gap-2 ${isOwnMessage ? "flex-row-reverse" : "flex-row"}`}
                >
                  {!isOwnMessage && (
                    <motion.img
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      src={customerImage || "https://via.placeholder.com/40"}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full border-2 border-indigo-500/30 object-cover"
                    />
                  )}

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`max-w-[70%] md:max-w-[60%] rounded-2xl px-4 py-3 shadow-lg ${
                      isOwnMessage
                        ? isDarkMode
                          ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-br-md"
                          : "bg-gradient-to-br from-indigo-500 to-purple-500 text-white rounded-br-md"
                        : isDarkMode
                        ? "bg-gray-700/80 text-white rounded-bl-md"
                        : "bg-white text-gray-900 rounded-bl-md border border-gray-200"
                    }`}
                  >
                    {msg.message && (
                      <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                        {msg.message}
                      </p>
                    )}

                    {msg.media && (
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="mt-2 relative group"
                      >
                        <motion.img
                          src={msg.media}
                          alt="Shared media"
                          className="rounded-xl max-w-full h-auto cursor-pointer border-2 border-gray-200 dark:border-gray-700"
                          whileHover={{ scale: 1.02 }}
                          onClick={() => {
                            window.open(msg.media, "_blank");
                          }}
                        />
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center"
                        >
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => window.open(msg.media, "_blank")}
                            className="px-4 py-2 bg-white/90 rounded-lg text-sm font-semibold text-gray-900"
                          >
                            View Full Image
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    )}

                    {msg.location && (
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="mt-2 p-3 rounded-lg bg-black/10"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <FaMapMarkerAlt className="text-red-500" />
                          <span className="text-sm font-semibold">Location Shared</span>
                        </div>
                        <motion.a
                          href={`https://www.google.com/maps?q=${msg.location.lat},${msg.location.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors"
                        >
                          <MapPin size={16} />
                          Open in Maps
                        </motion.a>
                        {msg.location.accuracy && (
                          <p className="text-xs mt-1 opacity-70">
                            Accuracy: {Math.round(msg.location.accuracy)}m
                          </p>
                        )}
                      </motion.div>
                    )}

                    <div className={`flex items-center gap-1 mt-1.5 ${
                      isOwnMessage ? "justify-end" : "justify-start"
                    }`}>
                      <span className={`text-xs ${
                        isOwnMessage
                          ? "text-white/70"
                          : isDarkMode
                          ? "text-gray-400"
                          : "text-gray-500"
                      }`}>
                        {formatTimestamp(msg.timestamp)}
                      </span>
                      {isOwnMessage && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <FaCheckDouble className="text-xs text-white/70" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              </React.Fragment>
            );
          })}
        </AnimatePresence>

        {/* Typing Indicator */}
        {typingUser && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <img
              src={customerImage || "https://via.placeholder.com/40"}
              alt="Avatar"
              className="w-10 h-10 rounded-full border-2 border-indigo-500/30"
            />
            <div className={`px-4 py-3 rounded-2xl rounded-bl-md ${
              isDarkMode ? "bg-gray-700/80" : "bg-white border border-gray-200"
            }`}>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-indigo-500 rounded-full"
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggestions */}
      <AnimatePresence>
        {suggestions.length > 0 && (
          <motion.div
            ref={suggestionsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`absolute bottom-20 left-4 right-4 z-20 max-h-48 overflow-y-auto rounded-2xl shadow-2xl backdrop-blur-xl border ${
              isDarkMode
                ? "bg-gray-800/95 border-gray-700/50"
                : "bg-white/95 border-gray-200/50"
            }`}
          >
            <div className="p-2">
              {suggestions.slice(0, 5).map((msg, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSuggestionClick(msg)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-colors ${
                    isDarkMode
                      ? "hover:bg-gray-700/50 text-gray-200"
                      : "hover:bg-indigo-50 text-gray-700"
                  }`}
                >
                  {msg}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`relative z-10 flex items-center gap-2 p-4 backdrop-blur-xl border-t ${
          isDarkMode
            ? "bg-gray-800/80 border-gray-700/50"
            : "bg-white/80 border-gray-200/50"
        }`}
      >
        <div className="relative flex-1">
          <input
            ref={inputRef}
            value={text}
            onChange={handleTyping}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className={`w-full px-4 py-3 rounded-2xl border-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
              isDarkMode
                ? "bg-gray-700/50 border-gray-600 text-white placeholder-gray-400"
                : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500"
            }`}
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.1, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleShareLocation}
          className={`p-2.5 rounded-full transition-colors ${
            isDarkMode
              ? "hover:bg-gray-700 text-green-400"
              : "hover:bg-gray-100 text-green-600"
          }`}
        >
          <MapPin size={22} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, rotate: -15 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSend}
          disabled={!text.trim() && !location}
          className={`p-3 rounded-full shadow-lg transition-all ${
            text.trim() || location
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-xl"
              : isDarkMode
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <Send size={20} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default EmployeeChatComponent;
