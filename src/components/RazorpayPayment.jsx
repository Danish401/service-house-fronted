// // import React, { useState } from "react";

// // const RazorpayPayment = () => {
// //   const [amount, setAmount] = useState(0);
// //   const [loading, setLoading] = useState(false);

// //   // Function to initiate Razorpay payment
// //   const handlePayment = async () => {
// //     try {
// //       setLoading(true);
      
// //       // Step 1: Create Razorpay Order by calling your backend API
// //       const response = await fetch("http://localhost:5000/api/payment/create-order", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({
// //           bookingId: "6777d7b59ac8a69774165f69", // Replace with actual booking ID
// //           customerId: "6773fb53ec43f174b9307c32", // Replace with actual customer ID
// //           amount: amount, // Pass the amount in INR
// //         }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         const { orderId } = data;

// //         // Step 2: Open Razorpay Checkout
// //         const options = {
// //           key: "rzp_test_evc1f58VcUpfqc", // Your Razorpay key
// //           amount: amount * 100, // Amount in paise (multiply by 100)
// //           currency: "INR",
// //           name: "Your Company Name",
// //           description: "Payment for your booking",
// //           order_id: orderId, // The Razorpay order ID returned from backend
// //           handler: async function (response) {
// //             // Step 3: Handle Razorpay payment success
// //             const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = response;

// //             // Step 4: Send payment details to your backend for verification
// //             const verifyResponse = await fetch("/api/payment/verify-payment", {
// //               method: "POST",
// //               headers: {
// //                 "Content-Type": "application/json",
// //               },
// //               body: JSON.stringify({
// //                 razorpayOrderId,
// //                 razorpayPaymentId,
// //                 razorpaySignature,
// //               }),
// //             });

// //             const verifyData = await verifyResponse.json();

// //             if (verifyResponse.ok) {
// //               alert("Payment verified successfully.");
// //             } else {
// //               alert("Payment verification failed.");
// //             }
// //           },
// //           prefill: {
// //             name: "Customer Name",
// //             email: "customer@example.com",
// //             contact: "9876543210",
// //           },
// //           theme: {
// //             color: "#F37254",
// //           },
// //         };

// //         const rzp1 = new Razorpay(options);
// //         rzp1.open();
// //       } else {
// //         alert("Failed to create Razorpay order.");
// //       }
// //     } catch (error) {
// //       console.error("Error initiating payment:", error);
// //       alert("Payment initiation failed.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="mt-4">
// //       <h2>Pay for Your Booking</h2>
// //       <input
// //         type="number"
// //         value={amount}
// //         onChange={(e) => setAmount(e.target.value)}
// //         placeholder="Enter amount"
// //         min="1"
// //       />
// //       <button onClick={handlePayment} disabled={loading}>
// //         {loading ? "Processing..." : "Pay Now"}
// //       </button>
// //     </div>
// //   );
// // };

// // export default RazorpayPayment;

// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { createRazorpayOrder, verifyRazorpayPayment } from "../features/bookingSlice"; // Update the path if needed
// import { fetchBookingById } from "../features/bookingSlice"; // Import the fetchBookingById action

// const RazorpayPayment = ({ bookingId }) => {
//   const [amount, setAmount] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();

//   // Fetch booking details by bookingId
//   useEffect(() => {
//     if (bookingId) {
//       dispatch(fetchBookingById(bookingId));
//     }
//   }, [dispatch, bookingId]);

//   const { bookingDetails, loading: bookingLoading, error } = useSelector((state) => state.bookings);

//   // Check if the booking is fetched and has valid details
//   const customerId = bookingDetails?.customerId;

//   // Function to initiate Razorpay payment
//   const handlePayment = async () => {
//     if (!customerId) {
//       alert("Booking details are not available");
//       return;
//     }

//     try {
//       setLoading(true);

//       // Step 1: Create Razorpay Order by dispatching createRazorpayOrder action
//       const paymentData = {
//         bookingId: bookingId, // Use dynamic booking ID
//         customerId: customerId, // Use customer ID from booking details
//         amount: amount, // Pass the amount in INR
//       };

//       const action = await dispatch(createRazorpayOrder(paymentData));

//       if (action.error) {
//         throw new Error("Failed to create Razorpay order");
//       }

//       const { razorpayOrderId } = action.payload;

//       // Step 2: Open Razorpay Checkout
//       const options = {
//         key: "rzp_test_evc1f58VcUpfqc", // Your Razorpay key
//         amount: amount * 100, // Amount in paise (multiply by 100)
//         currency: "INR",
//         name: "Your Company Name",
//         description: "Payment for your booking",
//         order_id: razorpayOrderId, // The Razorpay order ID returned from backend
//         handler: async function (response) {
//           // Step 3: Send payment details to backend for verification
//           const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = response;

//           const verifyData = await dispatch(
//             verifyRazorpayPayment({
//               razorpayOrderId,
//               razorpayPaymentId,
//               razorpaySignature,
//             })
//           );

//           if (verifyData.payload.success) {
//             alert("Payment verified successfully.");
//           } else {
//             alert("Payment verification failed.");
//           }
//         },
//         prefill: {
//           name: "Customer Name",
//           email: "customer@example.com",
//           contact: "9876543210",
//         },
//         theme: {
//           color: "#F37254",
//         },
//       };

//       const rzp1 = new Razorpay(options);
//       rzp1.open();
//     } catch (error) {
//       console.error("Error initiating payment:", error);
//       alert("Payment initiation failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="mt-4">
//       <h2>Pay for Your Booking</h2>
//       <input
//         type="number"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         placeholder="Enter amount"
//         min="1"
//       />
//       <button onClick={handlePayment} disabled={loading || bookingLoading}>
//         {loading ? "Processing..." : "Pay Now"}
//       </button>

//       {error && <p className="text-red-500">Error: {error}</p>}
//     </div>
//   );
// };

// export default RazorpayPayment;

