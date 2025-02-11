import { io } from "socket.io-client";

// Ensure the backend URL is correct
const socket = io("http://localhost:5000", {
  transports: ["websocket", "polling"], // Ensure multiple transport types
  withCredentials: true, // Enable cross-origin cookies if needed
});

export default socket;
