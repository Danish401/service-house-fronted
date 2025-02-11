import React, { useEffect, useState ,useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendMessage,
  fetchChatMessages,
  addMessage,
  endChat,
  resumeChat,
  clearMessages,
} from "../features/chatSlice";
import { useParams } from "react-router-dom";
import socket from "./socket"; // ✅ Singleton Socket
import {
  FaPaperPlane,
  FaFileImage,
  FaMapMarkerAlt,
  FaPowerOff,
} from "react-icons/fa";
import { motion } from "framer-motion";
import moment from "moment";

const EmployeeChatComponent = () => {
  const { bookingId } = useParams();
  const dispatch = useDispatch();
  const { messages, loading, chatStatus } = useSelector((state) => state.chat);
  const { bookingDetails } = useSelector((state) => state.bookings);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [location, setLocation] = useState(null);
  const [typingUser, setTypingUser] = useState(null);
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode status
  const [suggestions, setSuggestions] = useState([]);
  const suggestionsRef = useRef(null); // 🔹 Create a ref for the suggestion box
  const commonSuggestions = [

       // General Greetings
       "Good Morning!", "सुप्रभात!",
       "Good Afternoon!", "शुभ दोपहर!",
       "Good Evening!", "शुभ संध्या!",
       "Hello!", "नमस्ते!",
    // Booking Confirmation & Arrival Updates
    "Your booking has been confirmed.", "आपकी बुकिंग की पुष्टि हो गई है।",
    "I will reach your location shortly.", "मैं जल्द ही आपके स्थान पर पहुँचूँगा।",
    "I am on the way, and will be there in [X] minutes.", "मैं रास्ते में हूँ, और [X] मिनट में पहुँच जाऊँगा।",
    "Please share your exact location for easy navigation.", "कृपया आसान दिशा निर्देश के लिए अपना सटीक स्थान साझा करें।",
    "Could you confirm if someone will be available at the location?", "क्या आप पुष्टि कर सकते हैं कि स्थान पर कोई उपलब्ध होगा?",
    "If you need to reschedule, please let me know in advance.", "यदि आपको पुनर्निर्धारण करना है, तो कृपया मुझे पहले से सूचित करें।",
    "I'm experiencing a slight delay, will update you soon.", "मुझे थोड़ी देर हो रही है, जल्द ही अपडेट करूंगा।",
  
    // Job Progress Updates
    "I have started the work and will update you soon.", "मैंने काम शुरू कर दिया है और जल्द ही अपडेट करूंगा।",
    "I need some additional materials. Can you arrange them?", "मुझे कुछ अतिरिक्त सामग्री की आवश्यकता है। क्या आप इन्हें उपलब्ध करा सकते हैं?",
    "The work is halfway done and will be completed in [X] hours.", "काम आधा हो चुका है और [X] घंटे में पूरा हो जाएगा।",
    "The repair is complete, please check and confirm.", "मरम्मत पूरी हो गई है, कृपया जांच कर पुष्टि करें।",
    "Could you verify if everything is working fine?", "क्या आप पुष्टि कर सकते हैं कि सब कुछ सही से काम कर रहा है?",
  
    // Payment & Service Completion
    "The service is complete. Please proceed with the payment.", "सेवा पूरी हो गई है। कृपया भुगतान करें।",
    "Do you need any additional service?", "क्या आपको कोई अतिरिक्त सेवा चाहिए?",
    "I hope you are satisfied with my work. Let me know if you need any changes.", "मुझे उम्मीद है कि आप मेरे काम से संतुष्ट हैं। कोई बदलाव चाहिए तो बताएं।",
    "Thank you for choosing our service!", "हमारी सेवा चुनने के लिए धन्यवाद!",
    "Please rate and review our service. Your feedback is valuable!", "कृपया हमारी सेवा को रेट और रिव्यू करें। आपकी प्रतिक्रिया महत्वपूर्ण है!"
  ];
  

  // ✅ Extract booking data dynamically
  const booking = bookingDetails[bookingId] || {};
  const customerId = booking?.customer?._id;
  const employeeId = booking?.employee?._id;
  const customerName = booking?.customer?.name;
  const employeeName = booking?.employee?.name;
  const customerImage = booking?.customer?.image;
  const employeeImage = booking?.employee?.image;
  // ✅ Assume the logged-in user is Employee
  const userId = employeeId;
  const receiverId = customerId;
  const senderModel = "Employee";
  const receiverModel = "User";
  const formatTimestamp = (timestamp) => {
    const now = moment();
    const messageTime = moment(timestamp);

    if (now.isSame(messageTime, "day")) {
      return messageTime.format("h:mm A"); // Show time if today
    } else if (now.subtract(1, "days").isSame(messageTime, "day")) {
      return `Yesterday, ${messageTime.format("h:mm A")}`; // Show yesterday
    } else {
      return messageTime.format("MMM D, h:mm A"); // Example: Jan 5, 3:45 PM
    }
  };
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
      // ✅ Close suggestions when clicking outside
      function handleClickOutside(event) {
        if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
          setSuggestions([]); // Close suggestions
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
  useEffect(() => {
    if (bookingId && userId) {
      dispatch(clearMessages()); // Clear old messages before fetching new ones
      dispatch(fetchChatMessages(bookingId)); // Fetch only messages for the current booking
      socket.emit("joinRoom", { bookingId, userId });
    }

   
    socket.on("receiveMessage", (newMessage) => {
      console.log("📩 New Message Received:", newMessage);
      
      // ✅ Check if the message already exists in Redux
      const exists = messages.some((msg) => msg._id === newMessage._id);
      
      if (!exists) {
        dispatch(addMessage(newMessage));  // ✅ Only add if not already in Redux
        
      }
    });

  //   socket.on("userTyping", ({ senderName }) => {
  //     console.log("✍ Typing Indicator Received:", senderName);
  //     setTypingUser(senderName);
  // });
  socket.on("userTyping", (data) => {
    console.log("✍ Typing Indicator Received on Employee Chat:", data);  // Debugging
  
    if (data && data.senderName) {
      setTypingUser(data.senderName);  // ✅ Correctly update the typing indicator
    } else {
      console.warn("❌ Typing event missing senderName:", data);
    }
  });
  

  socket.on("userStoppedTyping", () => {
    console.log("🛑 Typing Stopped Event Received on Employee Chat");
    setTypingUser(null);  // ✅ Remove typing indicator
  });
  

    return () => {
      socket.off("receiveMessage");
      socket.off("userTyping");
      socket.off("userStoppedTyping");
    };
  }, [dispatch, bookingId, userId]);

  const handleSend = async () => {
    if (!text.trim() && !file && !location) return;
  
   
  
    const messageData = {
      bookingId,
      sender: userId,
      senderModel,
      receiver: receiverId,
      receiverModel,
      message: text,
      media: file||null,
      location,
      timestamp: new Date().toISOString(),
    };
  
    // ✅ Emit message to server
    dispatch(sendMessage(socket.emit("sendMessage", messageData)));
  
    // ❌ REMOVE this line to prevent duplicate Redux updates
    // dispatch(sendMessage(messageData));
  
    setText("");
    setFile(null);
    setLocation(null);
    setSuggestions([]);
  };
  

  // ✅ Handle File Selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFilePreview(URL.createObjectURL(selectedFile));
  };

  // ✅ Get User Location
  const handleShareLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting location:", error);
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

    setSuggestions([...matchingSuggestions, ...remainingSuggestions]); // ✅ Prioritize matching first
  } else {
    setSuggestions(commonSuggestions); // ✅ Show all suggestions when empty
  }

  socket.emit("typing", { bookingId, senderName: employeeName, senderModel: "Employee" });
  clearTimeout(window.typingTimeout);
  window.typingTimeout = setTimeout(() => {
    socket.emit("stopTyping", { bookingId });
  }, 1000);

};
const handleSuggestionClick = (message) => {
  setText(message); // ✅ Fills input field with clicked suggestion
  setSuggestions([]); // ✅ Hide suggestions after selection
};
let lastMessageDate = null;
  return (
<div
  className={`flex flex-col w-full h-[90vh] p-4 rounded-lg shadow-lg md:max-w-2xl mx-auto 
    ${isDarkMode ? "bg-[#1f2937] text-[#ffffff] border-[#000000]" : "bg-gray-100 text-gray-900 border-gray-300"} border`}
>

      {/* ✅ Header */}
      <div className={`flex items-center justify-between p-4 rounded-lg 
      ${isDarkMode ? "bg-[#1f2937] text-[#ffd700]" : "bg-white text-[#4338CA]"}`}>
        <h2 className="text-lg font-semibold">
          Chat with {userId === customerId ? employeeName : customerName}
        </h2>
        <div
      className="relative flex items-center gap-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={customerImage}
        alt={customerName}
        className="w-10 h-10 transition-transform duration-300 transform border border-gray-300 rounded-lg shadow-md group-hover:scale-105"
      />
      {isHovered && (
        <div className="absolute px-2 py-1 text-xs text-white -translate-x-1/2 bg-black rounded-md shadow-lg top-12 left-1/2">
          {customerName}
        </div>
      )}
    </div>
      
      </div>

      {/* ✅ Messages Container */}
      {/* <div className="flex-1 p-4 space-y-2 overflow-y-auto">
        {loading && <p>Loading messages...</p>}

        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: msg.sender === userId ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-3 rounded-lg ${
              msg.sender === userId
                ? "bg-indigo-500 text-white ml-auto"
                : "bg-white text-gray-800"
            }`}
          >
            <div className="flex items-center justify-between">
            <strong>
  {msg.senderModel === "Employee" ? employeeName : customerName} →  
  {msg.receiverModel === "User" ? customerName : employeeName}
</strong>

              <span className="text-xs text-gray">
                {moment(msg.timestamp).format("h:mm A")}
              </span>
            </div>

            <p>{msg.message}</p>

            {msg.media && (
              <img
                src={msg.media}
                alt="Sent media"
                className="w-40 mt-2 rounded-lg"
              />
            )}

            {msg.location && (
              <a
                href={`https://www.google.com/maps?q=${msg.location.lat},${msg.location.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mt-2 text-blue-600 underline"
              >
                <FaMapMarkerAlt className="mr-2" /> View Location
              </a>
            )}
          </motion.div>
        ))}
      </div> */}
   <div className="flex-1 p-4 space-y-2 overflow-y-auto">
        {loading && <p>Loading messages...</p>}

        {messages.map((msg, index) => {
          const messageDate = moment(msg.timestamp).format("MMMM D, YYYY"); // Example: "February 8, 2024"
          const isNewDate = messageDate !== lastMessageDate;
          lastMessageDate = messageDate;

          return (
            <React.Fragment key={index}>
              {/* ✅ Show Date Header for new day */}
              {isNewDate && (
                <div className="my-4 font-semibold text-center text-gray-600">
                  {messageDate}
                </div>
              )}

              <motion.div
                           initial={{ opacity: 0, x: msg.sender === userId ? 50 : -50 }}
                           animate={{ opacity: 1, x: 0 }}
                           className={`p-3 rounded-lg ${msg.sender === userId
                             ? (isDarkMode ? "bg-[#ece4c0] text-[#1f2937]" : "bg-[#A5B4FC] text-white ml-auto")
                             : (isDarkMode ? "bg-[#cacac7] text-[#1f2937]" : "bg-white text-gray-800")}`}
                         >
                {/* ✅ Sender Name and Timestamp */}
                <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
  {/* ✅ Show Sender Image */}
  <img
    src={msg.senderModel === "User" ? customerImage : employeeImage}
    alt="Sender"
    className="w-8 h-8 border border-gray-300 rounded-full"
  />

  {/* ✅ Show an arrow or message direction */}
  {/* <span className="text-gray-500">→</span> */}

  {/* ✅ Show Receiver Image */}
  {/* <img
    src={msg.receiverModel === "User" ? customerImage : employeeImage}
    alt="Receiver"
    className="w-8 h-8 border border-gray-300 rounded-full"
  /> */}
</div>


                  {/* ✅ Show formatted timestamp */}
                  <span className="text-xs text-gray-600">
                    {formatTimestamp(msg.timestamp)}
                  </span>
                </div>

                <p>{msg.message}</p>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
      {/* ✅ Typing Indicator */}
      {typingUser && (
      <p className={`text-sm ${isDarkMode ? "text-[#ffd700]" : "text-gray-500"}`}>
        {typingUser} is typing...
      </p>
      
    )}
      {/* ✅ Input Section */}
    <div className={`relative flex items-center p-2 rounded-lg shadow 
      ${isDarkMode ? "bg-[#1f2937]" : "bg-white"}`}>
    
    {suggestions.length > 0 && (
            <div
              ref={suggestionsRef} // ✅ Attach ref to track clicks outside
              className={`absolute bottom-full left-0 w-full shadow-lg rounded-md p-2 z-10 mb-2 max-h-40 overflow-y-auto 
                ${isDarkMode ? "bg-[#374151] text-white" : "bg-white text-gray-900"}`}
            >
              {suggestions.map((msg, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(msg)}
                  className={`p-2 cursor-pointer hover:bg-gray-600 
                    ${isDarkMode ? "hover:bg-gray-700 text-white" : "hover:bg-gray-200 text-gray-900"}`}
                >
                  {msg}
                </div>
              ))}
            </div>
          )}
    
      <input
        value={text}
        onChange={handleTyping}
        placeholder="Type a message..."
        className={`flex-1 p-2 border rounded-md focus:outline-none 
          ${isDarkMode ? "bg-[#ffdd57] text-[#1f2937] placeholder-[#1f2937]" : "focus:ring-2 focus:ring-indigo-500"}`}
      />
      <input
        type="file"
        id="fileUpload"
        className="hidden"
        onChange={handleFileChange}
      />
      <label htmlFor="fileUpload" className="p-2 ml-2 cursor-pointer">
        <FaFileImage size={24} className={`${isDarkMode ? "text-[#ffd700]" : "text-indigo-600"}`} />
      </label>
      <button
        onClick={handleShareLocation}
        className={`p-2 ml-2 ${isDarkMode ? "text-[#ffdd57]" : "text-green-600"}`}>
        <FaMapMarkerAlt size={24} />
      </button>
      <button
        onClick={handleSend}
        className={`p-2 ml-2 ${isDarkMode ? "text-[#ffd700]" : "text-indigo-600"}`}>
        <FaPaperPlane size={24} />
      </button>
    </div>
    </div>
  );
};

export default EmployeeChatComponent;
