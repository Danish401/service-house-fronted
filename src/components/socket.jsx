// import { io } from "socket.io-client";
// const BACKEND_URL =
//   process.env.NODE_ENV === "production"
//     ? "https://servicehouse.onrender.com"
//     : "http://localhost:5000";
// // Ensure the backend URL is correct
// const socket = io("http://localhost:5000", {
//   transports: ["websocket", "polling"], // Ensure multiple transport types
//   withCredentials: true, // Enable cross-origin cookies if needed
// });

// export default socket;

import { io } from "socket.io-client";

const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://servicehouse.onrender.com" // ✅ Use live backend in production
    : "http://localhost:5000"; // ✅ Use local backend in development

const socket = io(BACKEND_URL, {
  transports: ["websocket", "polling"], // Ensure multiple transport types
  withCredentials: true, // Enable cross-origin cookies if needed
});

export default socket;
