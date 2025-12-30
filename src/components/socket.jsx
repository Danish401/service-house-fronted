// // import { io } from "socket.io-client";
// <<<<<<< HEAD
// // const BACKEND_URL =
// //   process.env.NODE_ENV === "production"
// //     ? "https://servicehouse.onrender.com"
// //     : "http://localhost:5000";
// =======

// >>>>>>> 63c002c3f4f534537ffb0b60b03b5037281e34d6
// // // Ensure the backend URL is correct
// // const socket = io("http://localhost:5000", {
// //   transports: ["websocket", "polling"], // Ensure multiple transport types
// //   withCredentials: true, // Enable cross-origin cookies if needed
// // });

// // export default socket;

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

// import { io } from "socket.io-client";

// const BACKEND_URL =
//   process.env.NODE_ENV === "production"

//     ? "https://servicehouse.onrender.com"

//     ? "wss://servicehouse.onrender.com"
//     : "http://localhost:5000";

// const socket = io(BACKEND_URL, {
//   transports: ["websocket", "polling"], // Ensure multiple transport types
//   withCredentials: true, // Enable cross-origin cookies if needed
// });

// export default socket;

import { io } from "socket.io-client";

const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "wss://servicehouse.onrender.com" // Use wss in production
    : "http://localhost:5000"; // Use local server in development

const socket = io(BACKEND_URL, {
  transports: ["websocket", "polling"], // Correct usage
});

export default socket;
