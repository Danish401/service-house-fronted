// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import employeeRegisterReducer from "../features/employeeRegisterSlice";
import authSlice from "../features/authSlice";
import bookingReducer from "../features/bookingSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    bookings: bookingReducer,
    employeeRegister: employeeRegisterReducer,
  },
});
