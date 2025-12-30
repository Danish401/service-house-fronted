

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './sheet';
import { Button } from './button';
import { createBooking, fetchBookingById } from '../features/bookingSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function BookingSection({ children, business }) {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const [bookedSlot, setBookedSlot] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [bookingId, setBookingId] = useState(null); // Track the booking ID after it's created

  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode state
  const BACKEND_URL = process.env.NODE_ENV === "production"
    ? "https://houseservicebackend.onrender.com"
    : "http://localhost:5000";

  useEffect(() => {
    getTime();
  }, []);

  // Fetch booked slots when date changes
  useEffect(() => {
    if (date && business?._id) {
      // Clear selected time when date changes to avoid confusion
      setSelectedTime('');
      setErrorMessage('');
      fetchBookedSlots();
    }
  }, [date, business?._id]);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({ time: i + ':00 AM' });
      timeList.push({ time: i + ':30 AM' });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({ time: i + ':00 PM' });
      timeList.push({ time: i + ':30 PM' });
    }
    setTimeSlot(timeList);
  };

  // Fetch booked slots from backend
  const fetchBookedSlots = async () => {
    if (!business?._id || !date) return;
    
    setLoadingSlots(true);
    setErrorMessage('');
    
    try {
      // Format date to YYYY-MM-DD (handle timezone properly)
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const dateStr = `${year}-${month}-${day}`;
      
      const response = await fetch(
        `${BACKEND_URL}/api/bookings/booked-slots?employeeId=${business._id}&date=${dateStr}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch booked slots');
      }
      
      const data = await response.json();
      console.log('Fetched booked slots for date:', dateStr, 'Result:', data);
      setBookedSlot(data.bookedSlots || []);
    } catch (error) {
      console.error('Error fetching booked slots:', error);
      setBookedSlot([]); // Reset on error
    } finally {
      setLoadingSlots(false);
    }
  };

  const saveBooking = async () => {
    if (!user) {
      setErrorMessage('Please log in to book a service');
      return;
    }

    // Check if selected time is already booked
    if (isSlotBooked(selectedTime)) {
      setErrorMessage('This time slot is already booked. Please choose another time.');
      return;
    }

    setErrorMessage('');

    // Normalize date to start of day in UTC to avoid timezone issues
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const normalizedDate = new Date(Date.UTC(year, month, day, 0, 0, 0, 0));

    const bookingData = {
      employee: business._id, 
      customer: user.id || user._id, 
      date: normalizedDate.toISOString(),
      time: selectedTime,
      address: business.address1, 
      notes: 'Customer prefers a quiet environment.',
      rating: {
        value: 5,
        comment: 'Excellent service!',
      },
    };

    try {
      // Optimistically add the slot to booked slots immediately
      const optimisticBookedSlot = { time: selectedTime, status: 'Pending' };
      setBookedSlot(prev => [...prev, optimisticBookedSlot]);

      const resultAction = await dispatch(createBooking(bookingData)).unwrap();
      console.log('Booking saved:', resultAction.booking);

      // Set the booking ID for Razorpay
      setBookingId(resultAction.booking._id);

      // Fetch the booking details by ID (optional)
      await dispatch(fetchBookingById(resultAction.booking._id));

      // Refresh booked slots to ensure consistency with backend
      await fetchBookedSlots();

      // Clear selection
      setSelectedTime('');

      // Navigate to bookings page
      navigate("/bookings");
    } catch (error) {
      console.error('Failed to save booking:', error);
      
      // Remove the optimistic update on error
      setBookedSlot(prev => prev.filter(slot => slot.time !== selectedTime));
      
      // Check if it's a conflict error
      if (error.includes('conflict') || error.includes('already booked') || error.includes('choose another time')) {
        const conflictMessage = `⚠️ ${selectedTime} is already booked! Please choose another available time slot.`;
        setErrorMessage(conflictMessage);
        
        // Show toast notification
        toast.error(conflictMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          style: {
            backgroundColor: '#fee2e2',
            color: '#dc2626',
            border: '1px solid #fca5a5',
          }
        });
        
        // Refresh booked slots to get the latest data
        await fetchBookedSlots();
      } else {
        setErrorMessage(error || 'Failed to create booking. Please try again.');
        toast.error(error || 'Failed to create booking. Please try again.', {
          position: "top-right",
          autoClose: 4000,
        });
      }
    }
  };

  const isSlotBooked = (time) => {
    const isBooked = bookedSlot.some((item) => {
      // Exact match (case-sensitive, including spaces)
      const matches = item.time === time;
      if (matches) {
        console.log(`Time slot ${time} is booked:`, item);
      }
      return matches;
    });
    return isBooked;
  };

  return (
    <motion.div
      className={`p-5 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} // Apply dark mode styles
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className={`p-6 overflow-auto rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}> {/* Dark mode sheet background */}
          <SheetHeader className="mb-5">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <SheetTitle className="text-2xl font-bold text-[#7d66d9]">
                Book a Service
              </SheetTitle>
              <SheetDescription className="text-md text-[#818cf8] mt-2">
                Select a Date and Time slot to book a service.
              </SheetDescription>
            </motion.div>
          </SheetHeader>

          <motion.div
            className="flex flex-col items-baseline gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="mt-5 font-bold text-[#7d66d9]">Select Date</h2>
            <Calendar
              value={date}
              onChange={setDate}
              className={`p-2 border rounded-md shadow-sm ${isDarkMode ? 'bg-gray-600' : 'bg-white'}`} // Dark mode calendar styles
              minDate={new Date()}
            />

            <h2 className="my-5 font-bold text-[#7d66d9]">Select Time Slot</h2>
            {loadingSlots && (
              <p className="text-sm text-gray-500 mb-3">Loading available slots...</p>
            )}
            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-3 p-3 text-sm rounded-md border-2 flex items-center gap-2 ${
                  isDarkMode 
                    ? 'bg-red-900/30 text-red-300 border-red-600' 
                    : 'bg-red-50 text-red-700 border-red-300'
                }`}
              >
                <span className="text-lg">⚠️</span>
                <span className="font-semibold">{errorMessage}</span>
              </motion.div>
            )}
            <div className="grid grid-cols-3 gap-3">
              {timeSlot.map((item, index) => {
                const isBooked = isSlotBooked(item.time);
                return (
                  <motion.div
                    key={index}
                    whileHover={!isBooked ? { scale: 1.05 } : {}}
                    whileTap={!isBooked ? { scale: 0.95 } : {}}
                  >
                    <Button
                      disabled={isBooked}
                      variant="outline"
                      className={`border-2 rounded-full p-2 px-3 transition-all relative font-medium
                        ${isBooked 
                          ? `${isDarkMode 
                              ? 'bg-red-900 text-red-200 border-red-600' 
                              : 'bg-red-500 text-white border-red-600'} cursor-not-allowed opacity-90` 
                          : selectedTime === item.time 
                            ? 'bg-[#7d66d9] text-white border-[#7d66d9] hover:bg-[#6d56c9]' 
                            : 'text-[#7d66d9] hover:bg-[#7d66d9] hover:text-white border-[#7d66d9]'
                        }`}
                      onClick={() => {
                        if (isBooked) {
                          // Show alert when trying to select a booked slot
                          toast.warning(
                            `⚠️ ${item.time} is already booked! Please choose another available time slot.`,
                            {
                              position: "top-right",
                              autoClose: 4000,
                              hideProgressBar: false,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                              style: {
                                backgroundColor: '#fee2e2',
                                color: '#dc2626',
                                border: '1px solid #fca5a5',
                              }
                            }
                          );
                          setErrorMessage(`⚠️ ${item.time} is already booked. Please select another time slot.`);
                        } else {
                          setSelectedTime(item.time);
                          setErrorMessage('');
                        }
                      }}
                      title={isBooked ? `⚠️ ${item.time} is already booked by another customer. Please choose another slot.` : `Select ${item.time}`}
                    >
                      {isBooked && (
                        <span className="absolute -top-1 -right-1 bg-red-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold border-2 border-white">
                          ✕
                        </span>
                      )}
                      <span className={isBooked ? 'font-semibold' : ''}>
                        {item.time}
                      </span>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <SheetFooter className="mt-5">
            <SheetClose asChild>
              <div className="flex gap-5">
                <Button variant="destructive" className="bg-[#e9d5ff] text-[#7d66d9] hover:bg-[#d4c2f4]">
                  Cancel
                </Button>
                <Button
                  disabled={!(selectedTime && date)}
                  onClick={saveBooking}
                  className="bg-[#818cf8] text-white hover:bg-[#9b9ef0] transition-all"
                >
                  Book
                </Button>
              </div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

    
    </motion.div>
  );
}

export default BookingSection;
