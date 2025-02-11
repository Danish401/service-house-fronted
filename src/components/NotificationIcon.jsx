// // // import React, { useState } from "react";
// // // import { useSelector, useDispatch } from "react-redux";
// // // import { markMessagesAsRead } from "../features/chatSlice";
// // // import { FaBell } from "react-icons/fa";

// // // const NotificationIcon = () => {
// // //   const dispatch = useDispatch();
// // //   const newMessages = useSelector((state) => state.chat.newMessages);
// // //   const [isOpen, setIsOpen] = useState(false);

// // //   const handleNotificationClick = () => {
// // //     setIsOpen(!isOpen);
// // //     dispatch(markMessagesAsRead()); // ✅ Clear notifications when opened
// // //   };

// // //   return (
// // //     <div className="relative">
// // //       <button onClick={handleNotificationClick} className="relative p-2">
// // //         <FaBell size={24} className="text-gray-600" />
// // //         {newMessages.length > 0 && (
// // //           <span className="absolute top-0 right-0 px-2 text-xs text-white bg-red-500 rounded-full">
// // //             {newMessages.length}
// // //           </span>
// // //         )}
// // //       </button>

// // //       {isOpen && newMessages.length > 0 && (
// // //         <div className="absolute right-0 w-64 p-2 mt-2 bg-white rounded-lg shadow-md">
// // //           <h3 className="text-lg font-semibold">New Messages</h3>
// // //           <ul>
// // //             {newMessages.map((msg, index) => (
// // //               <li key={index} className="p-2 border-b">
// // //                 <strong>{msg.senderName}:</strong> {msg.message}
// // //               </li>
// // //             ))}
// // //           </ul>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default NotificationIcon;
// // // import React, { useState, useEffect, useRef } from "react";
// // // import { useSelector, useDispatch } from "react-redux";
// // // import { addMessage, clearNotifications } from "../features/chatSlice";
// // // import { FaBell } from "react-icons/fa";
// // // import socket from "./socket"; // Import your socket instance

// // // const NotificationIcon = () => {
// // //   const dispatch = useDispatch();
// // //   const notificationCount = useSelector((state) => state.chat.notificationCount);
// // //   const newMessages = useSelector((state) => state.chat.newMessages);
// // //   const [isOpen, setIsOpen] = useState(false);
// // //   const dropdownRef = useRef(null);

// // //   // Handle new messages from socket
// // //   useEffect(() => {
// // //     socket.on("receiveMessage", (newMessage) => {
// // //       console.log("📩 New Message Received:", newMessage);

// // //       const exists = newMessages.some((msg) => msg._id === newMessage._id);
// // //       if (!exists) {
// // //         dispatch(addMessage(newMessage)); // ✅ Add new message
// // //       }
// // //     });

// // //     return () => {
// // //       socket.off("receiveMessage"); // ✅ Cleanup listener on unmount
// // //     };
// // //   }, [dispatch, newMessages]);

// // //   // Toggle notification dropdown
// // //   const handleNotificationClick = () => {
// // //     setIsOpen((prev) => !prev);
// // //     if (notificationCount > 0) {
// // //       dispatch(clearNotifications()); // ✅ Clear notifications when viewed
// // //     }
// // //   };

// // //   // Close dropdown when clicking outside
// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
// // //         setIsOpen(false);
// // //       }
// // //     };

// // //     if (isOpen) {
// // //       document.addEventListener("mousedown", handleClickOutside);
// // //     } else {
// // //       document.removeEventListener("mousedown", handleClickOutside);
// // //     }

// // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // //   }, [isOpen]);

// // //   return (
// // //     <div className="relative" ref={dropdownRef}>
// // //       <button onClick={handleNotificationClick} className="relative p-2">
// // //         <FaBell size={24} className="text-gray-600" />
// // //         {notificationCount > 0 && (
// // //           <span className="absolute px-2 text-xs text-white bg-red-500 rounded-full -top-1 -right-1">
// // //             {notificationCount}
// // //           </span>
// // //         )}
// // //       </button>

// // //       {isOpen && (
// // //         <div className="absolute right-0 p-3 mt-2 bg-white border rounded-lg shadow-lg w-72">
// // //           <h3 className="mb-2 text-lg font-semibold">New Messages</h3>
// // //           {newMessages.length > 0 ? (
// // //             <ul className="overflow-y-auto max-h-60">
// // //               {newMessages.map((msg, index) => (
// // //                 <li key={index} className="p-2 border-b last:border-none">
// // //                   <strong>{msg.senderName}:</strong> {msg.message}
// // //                 </li>
// // //               ))}
// // //             </ul>
// // //           ) : (
// // //             <p className="text-sm text-gray-500">No new messages</p>
// // //           )}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default NotificationIcon;

// // import React, { useState, useEffect } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { addMessage, clearNotifications } from "../features/chatSlice";
// // import { FaBell } from "react-icons/fa";
// // import socket from "./socket"; // ✅ Import Singleton Socket

// // const NotificationIcon = ({ userType, userId }) => {
// //   const dispatch = useDispatch();
// //   const notificationCount = useSelector((state) => state.chat.notificationCount);
// //   const newMessages = useSelector((state) => state.chat.newMessages);
// //   const [isOpen, setIsOpen] = useState(false);

// //   useEffect(() => {
// //     socket.on("receiveMessage", (newMessage) => {
// //       console.log("📩 New Message Received:", newMessage);

// //       // ✅ Ensure message is meant for the logged-in user (receiver)
// //       if (newMessage.receiver === userId && newMessage.receiverModel === userType) {
// //         dispatch(addMessage(newMessage));
// //       }
// //     });

// //     return () => {
// //       socket.off("receiveMessage");
// //     };
// //   }, [dispatch, userId, userType]);

// //   // ✅ Handle clicking notification to reset count
// //   const handleNotificationClick = () => {
// //     setIsOpen(!isOpen);
// //     dispatch(clearNotifications());
// //   };

// //   return (
// //     <div className="relative">
// //       <button onClick={handleNotificationClick} className="relative p-2">
// //         <FaBell className="text-xl text-gray-600 hover:text-gray-900" />
// //         {notificationCount > 0 && (
// //           <span className="absolute top-0 right-0 px-2 text-xs font-bold text-white bg-red-500 rounded-full">
// //             {notificationCount}
// //           </span>
// //         )}
// //       </button>

// //       {/* ✅ Dropdown to show latest messages */}
// //       {isOpen && (
// //         <div className="absolute right-0 z-50 w-64 p-2 mt-2 bg-white rounded-lg shadow-lg">
// //           <h4 className="font-bold text-gray-700">Recent Messages</h4>
// //           {newMessages.length > 0 ? (
// //             newMessages.slice(-5).map((msg, index) => (
// //               <div key={index} className="p-2 border-b last:border-none">
// //                 <p className="text-sm font-semibold text-gray-800">{msg.senderName}:</p>
// //                 <p className="text-xs text-gray-600 truncate">{msg.message}</p>
// //               </div>
// //             ))
// //           ) : (
// //             <p className="text-sm text-gray-500">No new messages</p>
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default NotificationIcon;

// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addMessage, clearNotifications } from "../features/chatSlice";
// import { FaBell } from "react-icons/fa";
// import socket from "./socket";

// const NotificationComponent = () => {
//   const dispatch = useDispatch();
//   const notificationCount = useSelector((state) => state.chat.notificationCount);
//   const newMessages = useSelector((state) => state.chat.newMessages);
//   const userRole = useSelector((state) => state.chat.userRole); // ✅ Get logged-in user's role
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     console.log("👥 Listening for messages... Role:", userRole);

//     if (!userRole) {
//       console.warn("⚠️ User role is undefined! Check if it's being set correctly.");
//       return;
//     }

//     socket.on("receiveMessage", (newMessage) => {
//       console.log("📩 Received:", newMessage);

//       // ✅ Ensure the message is for the correct role (User or Employee)
//       if (newMessage.receiverModel === userRole) {
//         console.log("🔔 Notification for this user:", newMessage);
//         dispatch(addMessage(newMessage));
//       } else {
//         console.log("⚠️ Message not for this role:", newMessage.receiverModel, "Expected:", userRole);
//       }
//     });

//     return () => {
//       socket.off("receiveMessage");
//     };
//   }, [dispatch, userRole]);

//   const handleNotificationClick = () => {
//     setIsOpen(!isOpen);
//     dispatch(clearNotifications());
//   };

//   return (
//     <div className="relative">
//       <button onClick={handleNotificationClick} className="relative p-2">
//         <FaBell className="text-xl text-gray-600 hover:text-gray-900" />
//         {notificationCount > 0 && (
//           <span className="absolute top-0 right-0 px-2 text-xs font-bold text-white bg-red-500 rounded-full">
//             {notificationCount}
//           </span>
//         )}
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 z-50 w-64 p-2 mt-2 bg-white rounded-lg shadow-lg">
//           <h4 className="font-bold text-gray-700">Recent Messages</h4>
//           {newMessages.length > 0 ? (
//             newMessages.slice(-5).map((msg, index) => (
//               <div key={index} className="p-2 border-b last:border-none">
//                 <p className="text-sm font-semibold text-gray-800">{msg.senderModel}:</p>
//                 <p className="text-xs text-gray-600 truncate">{msg.message}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-sm text-gray-500">No new messages</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default NotificationComponent;


import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMessage, clearNotifications } from "../features/chatSlice";
import { FaBell } from "react-icons/fa";
import socket from "./socket";

const NotificationIcon = () => {
  const dispatch = useDispatch();
  const notificationCount = useSelector((state) => state.chat.notificationCount);
  const newMessages = useSelector((state) => state.chat.newMessages);
  const userRole = useSelector((state) => state.chat.userRole);
  const bookings = useSelector((state) => state.bookings.bookingDetails); // ✅ Get booking details

  const [isOpen, setIsOpen] = useState(false);

  // ✅ Extract sender's name & image from bookingDetails
  const getSenderDetails = (senderId, senderModel) => {
    for (const bookingId in bookings) {
      const booking = bookings[bookingId];

      if (senderModel === "Employee" && booking?.employee?._id === senderId) {
        return {
          name: booking.employee.name,
          image: booking.employee.image || "https://via.placeholder.com/40",
        };
      }
      if (senderModel === "User" && booking?.customer?._id === senderId) {
        return {
          name: booking.customer.name,
          image: booking.customer.image || "https://via.placeholder.com/40",
        };
      }
    }

    return { name: "Unknown", image: "https://via.placeholder.com/40" };
  };

  useEffect(() => {
    socket.on("receiveMessage", (newMessage) => {
      console.log("📩 Received:", newMessage);

      if (newMessage.receiverModel === userRole) {
        console.log("🔔 Notification for this user:", newMessage);
        dispatch(addMessage(newMessage));
      }
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [dispatch, userRole]);

  const handleNotificationClick = () => {
    setIsOpen(!isOpen);

    // ✅ Reset only the notification count, NOT messages
    if (notificationCount > 0) {
      dispatch(clearNotifications());
    }
  };

  return (
    <div className="relative">
      <button onClick={handleNotificationClick} className="relative p-2">
        <FaBell className="text-xl text-gray-600 hover:text-gray-900" />
        {notificationCount > 0 && (
          <span className="absolute top-0 right-0 px-2 text-xs font-bold text-white bg-red-500 rounded-full">
            {notificationCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 z-50 w-64 p-2 mt-2 bg-white rounded-lg shadow-lg">
          <h4 className="font-bold text-gray-700">Recent Messages</h4>
          {newMessages.length > 0 ? (
  newMessages.map((msg, index) => {
    const senderDetails = getSenderDetails(msg.sender, msg.senderModel);
    return (
      <div key={index} className="flex items-center gap-2 p-2 border-b last:border-none">
        {/* ✅ Sender's Image */}
        <img
          src={senderDetails.image}
          alt="Sender"
          className="w-8 h-8 border border-gray-300 rounded-full"
        />

        <div className="flex-1">
          {/* ✅ Sender's Name */}
          <p className="text-sm font-semibold text-gray-800">{senderDetails.name}</p>

          {/* ✅ Message Text */}
          <p className="text-xs text-gray-600 truncate">{msg.message}</p>

          {/* ✅ Timestamp with AM/PM */}
          <p className="text-xs text-gray-500">
            {new Date(msg.timestamp).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true, // ✅ Shows AM/PM
            })}
          </p>
        </div>
      </div>
    );
  })
) : (
  <p className="text-sm text-gray-500">No new messages</p>
)}

        </div>
      )}
    </div>
  );
};

export default NotificationIcon; 