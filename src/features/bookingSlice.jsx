// // bookingSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// export const bookingSlice = createSlice({
//   name: 'bookings',
//   initialState: {
//     booked: [],
//     completed: [],
//   },
//   reducers: {
//     addBooking: (state, action) => {
//       state.booked.push(action.payload);
//     },
//     markAsCompleted: (state, action) => {
//       const bookingIndex = state.booked.findIndex(
//         (booking) => booking.id === action.payload.id
//       );
//       if (bookingIndex !== -1) {
//         const completedBooking = state.booked[bookingIndex];
//         state.booked.splice(bookingIndex, 1); // Remove from booked
//         state.completed.push(completedBooking); // Add to completed
//       }
//     },
//   },
// });

// export const { addBooking, markAsCompleted } = bookingSlice.actions;
// export default bookingSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

export const bookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    booked: [],
    completed: [],
    isDarkMode: false, // Adding darkMode state
  },
  reducers: {
    addBooking: (state, action) => {
      state.booked.push(action.payload);
    },
    markAsCompleted: (state, action) => {
      const bookingIndex = state.booked.findIndex(
        (booking) => booking.id === action.payload.id
      );
      if (bookingIndex !== -1) {
        const completedBooking = state.booked[bookingIndex];
        state.booked.splice(bookingIndex, 1); // Remove from booked
        state.completed.push(completedBooking); // Add to completed
      }
    },
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode; // Toggle dark mode state
    },
  },
});

export const { addBooking, markAsCompleted, toggleDarkMode } = bookingSlice.actions;
export default bookingSlice.reducer;
