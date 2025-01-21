

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './sheet';
import { Button } from './button';
import { createBooking, fetchBookingById } from '../features/bookingSlice';
import { useNavigate } from 'react-router-dom';


function BookingSection({ children, business }) {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const [bookedSlot, setBookedSlot] = useState([]);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [bookingId, setBookingId] = useState(null); // Track the booking ID after it's created

  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode state

  useEffect(() => {
    getTime();
  }, []);

  useEffect(() => {
    if (date) {
      // Mocking booked slots
      const mockBookedSlots = [
        { time: '10:00 AM' }, { time: '1:30 PM' }
      ];
      setBookedSlot(mockBookedSlots);
    }
  }, [date]);

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

  const saveBooking = async () => {
    if (!user) {
      console.error('User not logged in');
      return;
    }

    const bookingData = {
      employee: business._id, 
      customer: user.id || user._id, 
      date: date.toISOString(),
      time: selectedTime,
      address: business.address1, 
      notes: 'Customer prefers a quiet environment.',
      rating: {
        value: 5,
        comment: 'Excellent service!',
      },
    };

    try {
      const resultAction = await dispatch(createBooking(bookingData)).unwrap();
      console.log('Booking saved:', resultAction.booking);

      // Set the booking ID for Razorpay
      setBookingId(resultAction.booking._id);

      // Fetch the booking details by ID (optional)
      await dispatch(fetchBookingById(resultAction.booking._id));

      navigate("/bookings");
    } catch (error) {
      console.error('Failed to save booking:', error);
    }

    setDate(new Date());
    setSelectedTime('');
  };

  const isSlotBooked = (time) => {
    return bookedSlot.some((item) => item.time === time);
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
            <div className="grid grid-cols-3 gap-3">
              {timeSlot.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    disabled={isSlotBooked(item.time)}
                    variant="outline"
                    className={`border rounded-full p-2 px-3 hover:bg-[#7d66d9] hover:text-white transition-all
                      ${selectedTime === item.time ? 'bg-[#7d66d9] text-white' : 'text-[#7d66d9]'}`}
                    onClick={() => setSelectedTime(item.time)}
                  >
                    {item.time}
                  </Button>
                </motion.div>
              ))}
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
