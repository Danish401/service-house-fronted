
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
import socket from "./socket"; // ✅ Use Singleton Socket
import {
  FaPaperPlane,
  FaFileImage,
  FaMapMarkerAlt,
  FaPowerOff,
} from "react-icons/fa";
import { motion } from "framer-motion";
import moment from "moment";

const ChatComponent = () => {
  const { bookingId } = useParams();
  const dispatch = useDispatch();
  const { messages, loading, chatStatus } = useSelector((state) => state.chat);
  const { bookingDetails } = useSelector((state) => state.bookings);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [location, setLocation] = useState(null);
  const [typingUser, setTypingUser] = useState(null);
  const suggestionsRef = useRef(null); // 🔹 Create a ref for the suggestion box

  // ✅ Extract booking data dynamically
  const booking = bookingDetails[bookingId] || {};
  const customerId = booking?.customer?._id;
  const employeeId = booking?.employee?._id;
  const customerName = booking?.customer?.name;
  const employeeName = booking?.employee?.name;
  const customerImage = booking?.customer?.image;
  const employeeImage = booking?.employee?.image;
  // ✅ Assume the logged-in user is Customer
  const userId = customerId;
  const receiverId = employeeId;
  const senderModel = "User";
  const receiverModel = "Employee";
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode status
  const [suggestions, setSuggestions] = useState([]);
  const commonSuggestions = [
    // General Greetings
    "Good Morning!", "सुप्रभात!",
    "Good Afternoon!", "शुभ दोपहर!",
    "Good Evening!", "शुभ संध्या!",
    "Hello!", "नमस्ते!",
  
    // General Queries
    "Where are you?", "आप कहाँ हैं?",
    "When will you reach?", "आप कब पहुंचेंगे?",
    "How much time will it take?", "इसमें कितना समय लगेगा?",
    "Can I reschedule the booking?", "क्या मैं बुकिंग को फिर से शेड्यूल कर सकता हूँ?",
    "What are your charges?", "आपकी सेवा शुल्क क्या है?",
    "Do you provide emergency service?", "क्या आप आपातकालीन सेवा प्रदान करते हैं?",
    "Please bring the necessary tools.", "कृपया आवश्यक उपकरण साथ लाएं।",
  

    // General Follow-ups  
    "Please confirm the booking.", "कृपया बुकिंग की पुष्टि करें।",
    "Let me know if you are on the way.", "मुझे बताएं कि क्या आप रास्ते में हैं।",
    "Please call me before coming.", "कृपया आने से पहले मुझे कॉल करें।",
    "Thank you for your service!", "आपकी सेवा के लिए धन्यवाद!"
  ];
  
  // ✅ Join Room and Fetch Messages
  //   useEffect(() => {
  //     if (bookingId && userId) {
  //       dispatch(fetchChatMessages(bookingId));
  //       socket.emit("joinRoom", { bookingId, userId });
  //     }

  //     // ✅ Listen for Incoming Messages
  //     socket.on("receiveMessage", (newMessage) => {
  //       dispatch(addMessage(newMessage)); // Add to Redux store
  //     });

  //     // ✅ Listen for Typing Indicator
  //     socket.on("userTyping", (senderName) => {
  //       setTypingUser(senderName);
  //     });

  //     socket.on("userStoppedTyping", () => {
  //       setTypingUser(null);
  //     });

  //     // ✅ Cleanup on Unmount
  //     return () => {
  //       socket.off("receiveMessage");
  //       socket.off("userTyping");
  //       socket.off("userStoppedTyping");
  //     };
  //   }, [dispatch, bookingId, userId]);
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
      dispatch(clearMessages());
      dispatch(fetchChatMessages(bookingId));
      socket.emit("joinRoom", { bookingId, userId });
    }

    // ✅ Receive new messages instantly & update Redux state
    // socket.on("receiveMessage", (newMessage) => {
    //   dispatch(addMessage(newMessage));
    // });
    socket.on("receiveMessage", (newMessage) => {
      console.log("📩 New Message Received:", newMessage);
      
      // ✅ Check if the message already exists in Redux
      const exists = messages.some((msg) => msg._id === newMessage._id);
      
      if (!exists) {
        dispatch(addMessage(newMessage));  // ✅ Only add if not already in Redux
        
      }
    });
    
    // ✅ Listen for Typing Indicator
    // socket.on("userTyping", (senderName) => {
    //     console.log("✍ Typing Indicator Received:", senderName); // ✅ Debugging
    //     setTypingUser(senderName);  // ✅ Correctly update who is typing
    // });
    socket.on("userTyping", (data) => {
      console.log("✍ Typing Indicator Received on Customer Chat:", data);
    
      if (data && data.senderName) {
        setTypingUser(data.senderName);  // ✅ Store only the name, not the whole object
      } else {
        console.warn("❌ Typing event missing senderName:", data);
      }
    });
    
    socket.on("userStoppedTyping", () => {
      console.log("🛑 Typing Stopped Event Received on Customer Chat");
      setTypingUser(null);  // ✅ Remove typing indicator
    });
    

    // ✅ Cleanup on Unmount
    return () => {
      socket.off("receiveMessage");
      socket.off("userTyping");
      socket.off("userStoppedTyping");
    };
  }, [dispatch, bookingId, userId]);

  const handleSend = async () => {
    if (!text.trim() && !file && !location) return;
  
    // ✅ Create message data
    const messageData = {
      bookingId,
      sender: userId,
      senderModel,
      receiver: receiverId,
      receiverModel,
      message: text,
      media: file || null,
      location,
      timestamp: new Date().toISOString(),
    };
  
    // ✅ Emit message via WebSocket
    socket.emit("sendMessage", messageData);
  
    // ✅ Dispatch Redux action separately
    dispatch(sendMessage(messageData));
  
    // ✅ Clear input fields
    setText("");
    setFile(null);
    setLocation(null);
    setSuggestions([]);
  };
  
  // ✅ Handle File Selection
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile); // Convert to base64
      reader.onloadend = () => {
        setFile(reader.result); // Store the base64 data
      };
    }
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

  // ✅ Ensure senderName is included
  socket.emit("typing", {
    bookingId,
    senderName: customerName,  // ✅ Ensure customerName is sent
    senderModel: "User"
  });
  clearTimeout(window.typingTimeout);
  window.typingTimeout = setTimeout(() => {
    socket.emit("stopTyping", { bookingId });
  
  }, 3000);

};
const handleSuggestionClick = (message) => {
  setText(message); // ✅ Fills input field with clicked suggestion
  setSuggestions([]); // ✅ Hide suggestions after selection
};
let lastMessageDate = null;
return (
  <div className={`flex flex-col w-full h-[90vh] p-4 border rounded-lg shadow-lg md:max-w-2xl mx-auto 
    ${isDarkMode ? "bg-[#1f2937] text-[#ffffff]" : "bg-gray-100 text-gray-900"}`}>
    
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
        src={employeeImage}
        alt={employeeName}
        className="w-10 h-10 transition-transform duration-300 transform border border-gray-300 rounded-lg shadow-md group-hover:scale-105"
      />
      {isHovered && (
        <div className="absolute px-2 py-1 text-xs text-white -translate-x-1/2 bg-black rounded-md shadow-lg top-12 left-1/2">
          {employeeName}
        </div>
      )}
    </div>
      {/* ✅ End Chat / Resume Chat */}
      {/* {chatStatus === "Active" ? (
        <button
          onClick={() => dispatch(endChat(bookingId))}
          className={`p-2 ml-2 rounded-lg shadow 
            ${isDarkMode ? "bg-[#ffd700] text-[#1f2937]" : "bg-white text-red-500 hover:bg-gray-200"}`}>
          <FaPowerOff size={18} /> End Chat
        </button>
      ) : (
        <button
          onClick={() => dispatch(resumeChat(bookingId))}
          className={`p-2 ml-2 rounded-lg shadow 
            ${isDarkMode ? "bg-[#ffd700] text-[#1f2937]" : "bg-white text-green-500 hover:bg-gray-200"}`}>
          Resume Chat
        </button>
      )} */}
    </div>

    {/* ✅ Messages Container */}
    <div className="flex-1 p-4 space-y-2 overflow-y-auto">
      {loading && <p>Loading messages...</p>}

      {messages.map((msg, index) => {
        const messageDate = moment(msg.timestamp).format("MMMM D, YYYY"); 
        const isNewDate = messageDate !== lastMessageDate;
        lastMessageDate = messageDate;

        return (
          <React.Fragment key={index}>
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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={msg.senderModel === "Employee" ? employeeImage : customerImage}
                    alt="Sender"
                    className="w-8 h-8 border border-gray-300 rounded-full"
                  />
                </div>
                <span className="text-xs text-gray-600">{formatTimestamp(msg.timestamp)}</span>
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
      {/* ✅ Suggestions */}
  {/* ✅ Suggestions Container */}


    {/* ✅ Input Section */}
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

export default ChatComponent;
