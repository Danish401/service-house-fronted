// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import employeeRegisterReducer from "../features/employeeRegisterSlice";
import authSlice from "../features/authSlice";
import bookingReducer from "../features/bookingSlice";
import chatReducer from "../features/chatSlice"; // Import the chat slice
export const store = configureStore({
  reducer: {
    auth: authSlice,
    bookings: bookingReducer,
    employeeRegister: employeeRegisterReducer,
    chat: chatReducer,
  },
});
