// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const API_URL = "http://localhost:5000/api/chat"; // Update with your backend URL

// // ✅ Send a message
// export const sendMessage = createAsyncThunk(
//   "chat/sendMessage",
//   async (messageData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(`${API_URL}/send`, messageData);
//       return response.data.chat; // Return the chat object
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // ✅ Fetch chat messages for a booking
// export const fetchChatMessages = createAsyncThunk(
//   "chat/fetchChatMessages",
//   async (bookingId, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(`${API_URL}/${bookingId}`);
//       return response.data.chats; // Return the list of messages
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // ✅ End chat session
// export const endChat = createAsyncThunk(
//   "chat/endChat",
//   async (bookingId, { rejectWithValue }) => {
//     try {
//       const response = await axios.patch(`${API_URL}/end/${bookingId}`);
//       return response.data.message; // Return success message
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // ✅ Resume chat session
// export const resumeChat = createAsyncThunk(
//   "chat/resumeChat",
//   async (bookingId, { rejectWithValue }) => {
//     try {
//       const response = await axios.patch(`${API_URL}/resume/${bookingId}`);
//       return response.data.message; // Return success message
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// // ✅ Chat Slice
// const chatSlice = createSlice({
//   name: "chat",
//   initialState: {
//     messages: [],
//     loading: false,
//     error: null,
//     chatStatus: "Active", // Can be "Active" or "Ended"
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // ✅ Send Message Reducers
//       .addCase(sendMessage.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(sendMessage.fulfilled, (state, action) => {
//         state.loading = false;
//         state.messages.push(action.payload); // Append new message
//       })
//       .addCase(sendMessage.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // ✅ Fetch Chat Messages Reducers
//       .addCase(fetchChatMessages.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchChatMessages.fulfilled, (state, action) => {
//         state.loading = false;
//         state.messages = action.payload; // Replace messages
//       })
//       .addCase(fetchChatMessages.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // ✅ End Chat Reducers
//       .addCase(endChat.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(endChat.fulfilled, (state) => {
//         state.loading = false;
//         state.chatStatus = "Ended"; // Update chat status
//       })
//       .addCase(endChat.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // ✅ Resume Chat Reducers
//       .addCase(resumeChat.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(resumeChat.fulfilled, (state) => {
//         state.loading = false;
//         state.chatStatus = "Active"; // Update chat status
//       })
//       .addCase(resumeChat.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default chatSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_URL =
  process.env.NODE_ENV === "production"
    ? "https://servicehouse.onrender.com"
    : "http://localhost:5000";
// ✅ Send a message
export const sendMessage = createAsyncThunk(
  "chat/sendMessage",
  async (messageData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/chat/send`,
        messageData
      );
      return response.data.chat.messages[
        response.data.chat.messages.length - 1
      ]; // Return last message
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// ✅ Fetch chat messages for a booking
export const fetchChatMessages = createAsyncThunk(
  "chat/fetchChatMessages",
  async (bookingId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/api/chat/${bookingId}`);
      return response.data.chat.messages; // Return messages array
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// ✅ End chat session
export const endChat = createAsyncThunk(
  "chat/endChat",
  async (bookingId, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${BACKEND_URL}/api/chat/end/${bookingId}`
      );
      return response.data.message; // Return success message
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// ✅ Resume chat session
export const resumeChat = createAsyncThunk(
  "chat/resumeChat",
  async (bookingId, { rejectWithValue }) => {
    try {
      const response = await axios.patch(
        `${BACKEND_URL}/api/chat/resume/${bookingId}`
      );
      return response.data.message; // Return success message
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// ✅ Chat Slice
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    loading: false,
    error: null,
    lastReceivedMessage: null,
    notificationCount: 0, // ✅ Add notification count
    newMessages: [], // Store new unread messages
    chatStatus: "Active", // Can be "Active" or "Ended"
    currentUserId: null,
    userRole: null,
  },
  reducers: {
    setUserRole: (state, action) => {
      state.userRole = action.payload; // ✅ Store role ("User" or "Employee")
    },

    addMessage: (state, action) => {
      const { receiverModel } = action.payload;

      // ✅ If the receiver is the current user, add the message
      if (receiverModel === state.userRole) {
        state.newMessages = [action.payload, ...state.newMessages]; // ✅ Latest on top

        if (!state.chatOpen) {
          state.notificationCount += 1; // ✅ Only increase if chat is closed
        }
      }

      state.messages.push(action.payload);
      console.log(
        "✅ After addMessage: newMessages =",
        JSON.stringify(state.newMessages)
      );
    },
    clearNotifications: (state) => {
      console.log(
        "⚠️ Before clearing notifications, newMessages:",
        state.newMessages
      );
      state.notificationCount = 0; // ✅ Reset only the count
      console.log(
        "✅ After clearing notifications, newMessages remains:",
        state.newMessages
      );
    },
    markMessagesAsRead: (state) => {
      state.notificationCount = 0; // Only reset the count
    },
    clearMessages: (state) => {
      state.notificationCount = 0;
      state.messages = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // ✅ Send Message Reducers
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.messages.push(action.payload); // ✅ Append message
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Fetch Chat Messages Reducers
      .addCase(fetchChatMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChatMessages.fulfilled, (state, action) => {
        state.messages = action.payload; // ✅ Replace with fetched messages
      })
      .addCase(fetchChatMessages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ End Chat Reducers
      .addCase(endChat.pending, (state) => {
        state.loading = true;
      })
      .addCase(endChat.fulfilled, (state) => {
        state.loading = false;
        state.chatStatus = "Ended"; // Update chat status
      })
      .addCase(endChat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // ✅ Resume Chat Reducers
      .addCase(resumeChat.pending, (state) => {
        state.loading = true;
      })
      .addCase(resumeChat.fulfilled, (state) => {
        state.loading = false;
        state.chatStatus = "Active"; // Update chat status
      })
      .addCase(resumeChat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// ✅ Export the `addMessage` action for real-time updates via Socket.io
export const {
  addMessage,
  setUserRole,
  clearMessages,
  markMessagesAsRead,
  clearNotifications,
} = chatSlice.actions;

// ✅ Export the reducer
export default chatSlice.reducer;
