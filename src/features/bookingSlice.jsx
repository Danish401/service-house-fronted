



// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { BACKEND_URL } from "../services/helper"
// // Async Thunks
// export const createBooking = createAsyncThunk(
//   'bookings/createBooking',
//   async (bookingData, { rejectWithValue }) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/bookings/', {
//         method: 'POST',
//         body: JSON.stringify(bookingData),
//         headers: { 'Content-Type': 'application/json' },
//       });
//       if (!response.ok) throw new Error('Failed to create booking');
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const getAllBookings = createAsyncThunk(
//   'bookings/getAllBookings',
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/bookings/', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       // Check if the response is not ok
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error('Error fetching bookings:', errorData.message || 'Unknown error');
//         throw new Error(errorData.message || 'Failed to fetch bookings');
//       }

//       // Parse the response JSON
//       const bookingsData = await response.json();
//       console.log('Fetched bookings:', bookingsData);
//       return bookingsData; // Return fetched bookings
//     } catch (error) {
//       console.error('Fetch bookings error:', error.message);
//       return rejectWithValue(error.message || 'An unknown error occurred while fetching bookings');
//     }
//   }
// );

// export const fetchBookingById = createAsyncThunk(
//   'bookings/getBookingById',
//   async (bookingId, { rejectWithValue }) => {
//     if (!bookingId) {
//       return rejectWithValue('Invalid bookingId');
//     }
//     try {
//       const response = await fetch(`http://localhost:5000/api/bookings/${bookingId}`);
//       if (!response.ok) throw new Error('Failed to fetch booking');
//       return await response.json();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );



// // Update booking thunk
// export const updateBooking = createAsyncThunk(
//   "bookings/updateBooking",
//   async ({ bookingId, updates }, { rejectWithValue }) => {
//     if (!bookingId || !updates) {
//       return rejectWithValue("Invalid bookingId or updates");
//     }
//     try {
//       const response = await fetch(`http://localhost:5000/api/bookings/booking/${bookingId}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(updates),
//       });
//       if (!response.ok) throw new Error("Failed to update booking");
//       return await response.json();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const cancelBooking = createAsyncThunk(
//   "bookings/cancelBooking",
//   async (bookingId, { rejectWithValue }) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/bookings/cancel/${bookingId}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//       });

//       if (!response.ok) throw new Error("Failed to cancel booking");

//       const updatedBooking = await response.json();
//       console.log("Updated Booking:", updatedBooking);  // Log the updated booking
//       return updatedBooking; // Return the updated booking data
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const updateBookingStatus = createAsyncThunk(
//   "bookings/updateBookingStatus",
//   async ({ bookingId, status }, { rejectWithValue }) => {
//     try {
//       const response = await fetch(`http://localhost:5000/api/bookings/bookings/${bookingId}/status`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ status }), // Send the status in the request body
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Failed to update booking status");
//       }

//       const updatedBooking = await response.json();
//       return updatedBooking; // Return the updated booking data
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );


// export const createRazorpayOrder = createAsyncThunk(
//   'bookings/createRazorpayOrder',
//   async (paymentData, { rejectWithValue }) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/payments/createOrder', {
//         method: 'POST',
//         body: JSON.stringify(paymentData),
//         headers: { 'Content-Type': 'application/json' },
//       });
//       if (!response.ok) throw new Error('Failed to create Razorpay order');
//       const data = await response.json();
//       return data; // Should return orderId
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const verifyRazorpayPayment = createAsyncThunk(
//   'bookings/verifyRazorpayPayment',
//   async (paymentData, { rejectWithValue }) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/payments/verifyPayment', {
//         method: 'POST',
//         body: JSON.stringify(paymentData),
//         headers: { 'Content-Type': 'application/json' },
//       });
//       if (!response.ok) throw new Error('Payment verification failed');
//       const data = await response.json();
//       return data; // Should return payment status and other details
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );


// export const getCustomerBookings = createAsyncThunk(
//   'bookings/getCustomerBookings',
//   async (customerId, { rejectWithValue }) => {
//     if (!customerId) {
//       return rejectWithValue('Invalid customer ID');
//     }
//     try {
//       const response = await fetch(`http://localhost:5000/api/bookings/customer/${customerId}`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || 'Failed to fetch customer bookings');
//       }
//       const customerBookings = await response.json();
//       return customerBookings;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );



// export const getEmployeeBookings = createAsyncThunk(
//   "bookings/getEmployeeBookings",
//   async (employeeId, { rejectWithValue }) => {
//     if (!employeeId) {
//       return rejectWithValue("Invalid Employee ID");
//     }
//     try {
//       const response = await fetch(`http://localhost:5000/api/bookings/employee/${employeeId}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message || "Failed to fetch bookings");
//       }
//       const customerBookings = await response.json();
//       return customerBookings;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );







// // Slice
// export const bookingSlice = createSlice({
//   name: 'bookings',
//   initialState: {
//     booked: [], // Array for all active bookings
//     completed: [], // Array for completed bookings
//     cancelled: [], // Array for cancelled bookings
//     bookingDetails: {}, // To store detailed booking data by ID
//     isDarkMode: false, // State for dark mode toggle
//     loading: false, // State for async operations
//     error: null, // State for error handling
//     razorpayOrderId: null, // Store Razorpay order ID
//     paymentVerified: false, // Whether payment is verified
//     customerBookings: [], // Array for bookings specific to a customer
//     employeeBookings: [],
//       status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
//        bookings: [], // List of bookings,
//       allbookings:[],
//   },
//   reducers: {
//     markAsCompleted(state, action) {
//       const { id } = action.payload;
//       const bookingIndex = state.booked.findIndex((b) => b._id === id);
//       if (bookingIndex !== -1) {
//         const [completedBooking] = state.booked.splice(bookingIndex, 1);
//         completedBooking.status = "Completed";
//         state.completed.push(completedBooking);
//       }
//     },
   
//     toggleDarkMode: (state) => {
//       state.isDarkMode = !state.isDarkMode;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//     .addCase(getCustomerBookings.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     })
//     .addCase(getCustomerBookings.fulfilled, (state, action) => {
//       state.loading = false;
//       state.customerBookings = action.payload;
//     })
//     .addCase(getCustomerBookings.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     })
//     .addCase(getEmployeeBookings.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     })
//     .addCase(getEmployeeBookings.fulfilled, (state, action) => {
//       state.loading = false;
//       state.employeeBookings = action.payload;
//     })
//     .addCase(getEmployeeBookings.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     })
//        .addCase(updateBookingStatus.pending, (state) => {
//         state.status = "loading";
//         state.error = null;
//       })
//       .addCase(updateBookingStatus.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         const updatedBooking = action.payload.booking;

//         // Update the booking in the list
//         const index = state.bookings.findIndex((b) => b._id === updatedBooking._id);
//         if (index !== -1) {
//           state.bookings[index] = updatedBooking;
//         }
//       })
//       .addCase(updateBookingStatus.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })
//     .addCase(createRazorpayOrder.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     })
//     .addCase(createRazorpayOrder.fulfilled, (state, action) => {
//       state.loading = false;
//       state.razorpayOrderId = action.payload.orderId; // Store the orderId for use on frontend
//     })
//     .addCase(createRazorpayOrder.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     })

//     // Handle Verify Razorpay Payment
//     .addCase(verifyRazorpayPayment.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     })
//     .addCase(verifyRazorpayPayment.fulfilled, (state, action) => {
//       state.loading = false;
//       state.paymentVerified = true;
//       // Handle successful payment verification here, such as updating the payment status
//     })
//     .addCase(verifyRazorpayPayment.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//       state.paymentVerified = false;
//     })
//       // Handle Create Booking
//       .addCase(createBooking.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(createBooking.fulfilled, (state, action) => {
//         state.loading = false;
//         // Add the new booking with full details to booked array
//         const booking = action.payload.booking;
//         state.booked.push(booking);
//         state.bookingDetails[booking._id] = booking;
//       })
//       .addCase(createBooking.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // Handle Fetch Bookings
//       .addCase(getAllBookings.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getAllBookings.fulfilled, (state, action) => {
//         state.loading = false;
//         state.allbookings = action.payload;
//       })
//       .addCase(getAllBookings.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       // Handle Fetch Booking By ID
//       .addCase(fetchBookingById.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchBookingById.fulfilled, (state, action) => {
//         state.loading = false;
//         const booking = action.payload;

//         // Merge details into the booked array
//         if (booking.status === "Active") {
//           const existingBookingIndex = state.booked.findIndex((b) => b._id === booking._id);
//           if (existingBookingIndex !== -1) {
//             // Update the booking with all details from bookingDetails
//             state.booked[existingBookingIndex] = { ...state.booked[existingBookingIndex], ...booking };
//           } else {
//             state.booked.push(booking);
//           }
//         } else if (booking.status === "Completed") {
//           const existingBookingIndex = state.completed.findIndex((b) => b._id === booking._id);
//           if (existingBookingIndex !== -1) {
//             state.completed[existingBookingIndex] = { ...state.completed[existingBookingIndex], ...booking };
//           } else {
//             state.completed.push(booking);
//           }
//         } else if (booking.status === "Cancelled") {
//           const existingBookingIndex = state.cancelled.findIndex((b) => b._id === booking._id);
//           if (existingBookingIndex !== -1) {
//             state.cancelled[existingBookingIndex] = { ...state.cancelled[existingBookingIndex], ...booking };
//           } else {
//             state.cancelled.push(booking);
//           }
//         }

//         // Update the detailed booking data
//         state.bookingDetails[booking._id] = booking;
//       })
//       .addCase(fetchBookingById.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       }).addCase(updateBooking.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(updateBooking.fulfilled, (state, action) => {
//         state.loading = false;
//         const updatedBooking = action.payload.booking;

//         // Update booking in the booked array
//         const existingBookingIndex = state.booked.findIndex((b) => b._id === updatedBooking._id);
//         if (existingBookingIndex !== -1) {
//           state.booked[existingBookingIndex] = updatedBooking;
//         }

//         // Update booking in the completed or cancelled arrays if needed
//         if (updatedBooking.status === "Completed") {
//           const existingIndex = state.completed.findIndex((b) => b._id === updatedBooking._id);
//           if (existingIndex !== -1) {
//             state.completed[existingIndex] = updatedBooking;
//           }
//         } else if (updatedBooking.status === "Cancelled") {
//           const existingIndex = state.cancelled.findIndex((b) => b._id === updatedBooking._id);
//           if (existingIndex !== -1) {
//             state.cancelled[existingIndex] = updatedBooking;
//           }
//         }

//         // Update detailed booking data
//         state.bookingDetails[updatedBooking._id] = updatedBooking;
//       })
//       .addCase(updateBooking.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       }) .addCase(cancelBooking.fulfilled, (state, action) => {
//         const updatedBooking = action.payload.booking;
//         const index = state.booked.findIndex(
//           (booking) => booking._id === updatedBooking._id
//         );
//         if (index !== -1) {
//           state.booked[index] = updatedBooking; // Update the booking in the array
//         }
//       })
//       .addCase(cancelBooking.rejected, (state, action) => {
//         console.error("Error canceling booking:", action.payload);
//       });
//   },
// });

// export const { markAsCompleted, toggleDarkMode } = bookingSlice.actions;

// export default bookingSlice.reducer;







import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BACKEND_URL } from "../services/helper"
// Async Thunks
export const createBooking = createAsyncThunk(
  'bookings/createBooking',
  async (bookingData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/bookings/`, {
        method: 'POST',
        body: JSON.stringify(bookingData),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error('Failed to create booking');
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllBookings = createAsyncThunk(
  'bookings/getAllBookings',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/bookings/`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check if the response is not ok
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error fetching bookings:', errorData.message || 'Unknown error');
        throw new Error(errorData.message || 'Failed to fetch bookings');
      }

      // Parse the response JSON
      const bookingsData = await response.json();
      console.log('Fetched bookings:', bookingsData);
      return bookingsData; // Return fetched bookings
    } catch (error) {
      console.error('Fetch bookings error:', error.message);
      return rejectWithValue(error.message || 'An unknown error occurred while fetching bookings');
    }
  }
);

export const fetchBookingById = createAsyncThunk(
  'bookings/getBookingById',
  async (bookingId, { rejectWithValue }) => {
    if (!bookingId) {
      return rejectWithValue('Invalid bookingId');
    }
    try {
      const response = await fetch(`${BACKEND_URL}/api/bookings/${bookingId}`);
      if (!response.ok) throw new Error('Failed to fetch booking');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



// Update booking thunk
export const updateBooking = createAsyncThunk(
  "bookings/updateBooking",
  async ({ bookingId, updates }, { rejectWithValue }) => {
    if (!bookingId || !updates) {
      return rejectWithValue("Invalid bookingId or updates");
    }
    try {
      const response = await fetch(`${BACKEND_URL}/api/bookings/booking/${bookingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      if (!response.ok) throw new Error("Failed to update booking");
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const cancelBooking = createAsyncThunk(
  "bookings/cancelBooking",
  async (bookingId, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/bookings/cancel/${bookingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Failed to cancel booking");

      const updatedBooking = await response.json();
      console.log("Updated Booking:", updatedBooking);  // Log the updated booking
      return updatedBooking; // Return the updated booking data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateBookingStatus = createAsyncThunk(
  "bookings/updateBookingStatus",
  async ({ bookingId, status }, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/bookings/bookings/${bookingId}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }), // Send the status in the request body
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update booking status");
      }

      const updatedBooking = await response.json();
      return updatedBooking; // Return the updated booking data
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const createRazorpayOrder = createAsyncThunk(
  'bookings/createRazorpayOrder',
  async (paymentData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/payments/createOrder`, {
        method: 'POST',
        body: JSON.stringify(paymentData),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error('Failed to create Razorpay order');
      const data = await response.json();
      return data; // Should return orderId
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const verifyRazorpayPayment = createAsyncThunk(
  'bookings/verifyRazorpayPayment',
  async (paymentData, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/payments/verifyPayment`, {
        method: 'POST',
        body: JSON.stringify(paymentData),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error('Payment verification failed');
      const data = await response.json();
      return data; // Should return payment status and other details
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const getCustomerBookings = createAsyncThunk(
  'bookings/getCustomerBookings',
  async (customerId, { rejectWithValue }) => {
    if (!customerId) {
      return rejectWithValue('Invalid customer ID');
    }
    try {
      const response = await fetch(`${BACKEND_URL}/api/bookings/customer/${customerId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch customer bookings');
      }
      const customerBookings = await response.json();
      return customerBookings;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



export const getEmployeeBookings = createAsyncThunk(
  "bookings/getEmployeeBookings",
  async (employeeId, { rejectWithValue }) => {
    if (!employeeId) {
      return rejectWithValue("Invalid Employee ID");
    }
    try {
      const response = await fetch(`${BACKEND_URL}/api/bookings/employee/${employeeId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch bookings");
      }
      const customerBookings = await response.json();
      return customerBookings;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);







// Slice
export const bookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    booked: [], // Array for all active bookings
    completed: [], // Array for completed bookings
    cancelled: [], // Array for cancelled bookings
    bookingDetails: {}, // To store detailed booking data by ID
    isDarkMode: false, // State for dark mode toggle
    loading: false, // State for async operations
    error: null, // State for error handling
    razorpayOrderId: null, // Store Razorpay order ID
    paymentVerified: false, // Whether payment is verified
    customerBookings: [], // Array for bookings specific to a customer
    employeeBookings: [],
      status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
       bookings: [], // List of bookings,
      allbookings:[],
  },
  reducers: {
    markAsCompleted(state, action) {
      const { id } = action.payload;
      const bookingIndex = state.booked.findIndex((b) => b._id === id);
      if (bookingIndex !== -1) {
        const [completedBooking] = state.booked.splice(bookingIndex, 1);
        completedBooking.status = "Completed";
        state.completed.push(completedBooking);
      }
    },
   
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getCustomerBookings.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getCustomerBookings.fulfilled, (state, action) => {
      state.loading = false;
      state.customerBookings = action.payload;
    })
    .addCase(getCustomerBookings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(getEmployeeBookings.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getEmployeeBookings.fulfilled, (state, action) => {
      state.loading = false;
      state.employeeBookings = action.payload;
    })
    .addCase(getEmployeeBookings.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
       .addCase(updateBookingStatus.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateBookingStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedBooking = action.payload.booking;

        // Update the booking in the list
        const index = state.bookings.findIndex((b) => b._id === updatedBooking._id);
        if (index !== -1) {
          state.bookings[index] = updatedBooking;
        }
      })
      .addCase(updateBookingStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
    .addCase(createRazorpayOrder.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(createRazorpayOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.razorpayOrderId = action.payload.orderId; // Store the orderId for use on frontend
    })
    .addCase(createRazorpayOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    // Handle Verify Razorpay Payment
    .addCase(verifyRazorpayPayment.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(verifyRazorpayPayment.fulfilled, (state, action) => {
      state.loading = false;
      state.paymentVerified = true;
      // Handle successful payment verification here, such as updating the payment status
    })
    .addCase(verifyRazorpayPayment.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.paymentVerified = false;
    })
      // Handle Create Booking
      .addCase(createBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.loading = false;
        // Add the new booking with full details to booked array
        const booking = action.payload.booking;
        state.booked.push(booking);
        state.bookingDetails[booking._id] = booking;
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle Fetch Bookings
      .addCase(getAllBookings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllBookings.fulfilled, (state, action) => {
        state.loading = false;
        state.allbookings = action.payload;
      })
      .addCase(getAllBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Handle Fetch Booking By ID
      .addCase(fetchBookingById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBookingById.fulfilled, (state, action) => {
        state.loading = false;
        const booking = action.payload;

        // Merge details into the booked array
        if (booking.status === "Active") {
          const existingBookingIndex = state.booked.findIndex((b) => b._id === booking._id);
          if (existingBookingIndex !== -1) {
            // Update the booking with all details from bookingDetails
            state.booked[existingBookingIndex] = { ...state.booked[existingBookingIndex], ...booking };
          } else {
            state.booked.push(booking);
          }
        } else if (booking.status === "Completed") {
          const existingBookingIndex = state.completed.findIndex((b) => b._id === booking._id);
          if (existingBookingIndex !== -1) {
            state.completed[existingBookingIndex] = { ...state.completed[existingBookingIndex], ...booking };
          } else {
            state.completed.push(booking);
          }
        } else if (booking.status === "Cancelled") {
          const existingBookingIndex = state.cancelled.findIndex((b) => b._id === booking._id);
          if (existingBookingIndex !== -1) {
            state.cancelled[existingBookingIndex] = { ...state.cancelled[existingBookingIndex], ...booking };
          } else {
            state.cancelled.push(booking);
          }
        }

        // Update the detailed booking data
        state.bookingDetails[booking._id] = booking;
      })
      .addCase(fetchBookingById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }).addCase(updateBooking.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBooking.fulfilled, (state, action) => {
        state.loading = false;
        const updatedBooking = action.payload.booking;

        // Update booking in the booked array
        const existingBookingIndex = state.booked.findIndex((b) => b._id === updatedBooking._id);
        if (existingBookingIndex !== -1) {
          state.booked[existingBookingIndex] = updatedBooking;
        }

        // Update booking in the completed or cancelled arrays if needed
        if (updatedBooking.status === "Completed") {
          const existingIndex = state.completed.findIndex((b) => b._id === updatedBooking._id);
          if (existingIndex !== -1) {
            state.completed[existingIndex] = updatedBooking;
          }
        } else if (updatedBooking.status === "Cancelled") {
          const existingIndex = state.cancelled.findIndex((b) => b._id === updatedBooking._id);
          if (existingIndex !== -1) {
            state.cancelled[existingIndex] = updatedBooking;
          }
        }

        // Update detailed booking data
        state.bookingDetails[updatedBooking._id] = updatedBooking;
      })
      .addCase(updateBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }) .addCase(cancelBooking.fulfilled, (state, action) => {
        const updatedBooking = action.payload.booking;
        const index = state.booked.findIndex(
          (booking) => booking._id === updatedBooking._id
        );
        if (index !== -1) {
          state.booked[index] = updatedBooking; // Update the booking in the array
        }
      })
      .addCase(cancelBooking.rejected, (state, action) => {
        console.error("Error canceling booking:", action.payload);
      });
  },
});

export const { markAsCompleted, toggleDarkMode } = bookingSlice.actions;

export default bookingSlice.reducer;
