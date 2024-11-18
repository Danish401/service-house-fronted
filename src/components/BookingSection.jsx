// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Calendar from 'react-calendar'; // Importing react-calendar
// import 'react-calendar/dist/Calendar.css'; // Importing calendar styles
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from './sheet';
// import { Button } from './button';


// function BookingSection({ children, business }) {
//   const [date, setDate] = useState(new Date());
//   const [timeSlot, setTimeSlot] = useState([]);
//   const [selectedTime, setSelectedTime] = useState();
//   const [bookedSlot, setBookedSlot] = useState([]);

//   useEffect(() => {
//     getTime();
//   }, []);

//   useEffect(() => {
//     if (date) {
//       // Mocking booked slots
//       const mockBookedSlots = [
//         { time: '10:00 AM' }, { time: '1:30 PM' }
//       ];
//       setBookedSlot(mockBookedSlots);
//     }
//   }, [date]);

//   const getTime = () => {
//     const timeList = [];
//     for (let i = 10; i <= 12; i++) {
//       timeList.push({ time: i + ':00 AM' });
//       timeList.push({ time: i + ':30 AM' });
//     }
//     for (let i = 1; i <= 6; i++) {
//       timeList.push({ time: i + ':00 PM' });
//       timeList.push({ time: i + ':30 PM' });
//     }
//     setTimeSlot(timeList);
//   };

//   const saveBooking = () => {
//     // Mock session
//     const session = {
//       user: { email: 'test@example.com', name: 'Test User' }
//     };

//     console.log('Booking saved:', {
//       businessId: business.id,
//       date,
//       selectedTime,
//       email: session.user.email,
//       name: session.user.name
//     });
//     setDate(new Date()); // Reset the date
//     setSelectedTime(''); // Reset the selected time
//   };

//   const isSlotBooked = (time) => {
//     return bookedSlot.some((item) => item.time === time);
//   };

//   return (
//     <motion.div
//       className="p-5"
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <Sheet>
//         <SheetTrigger asChild>{children}</SheetTrigger>
//         <SheetContent className="p-6 overflow-auto bg-white rounded-lg shadow-lg">
//           <SheetHeader className="mb-5">
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//             >
//               <SheetTitle className="text-2xl font-bold text-[#7d66d9]">
//                 Book a Service
//               </SheetTitle>
//               <SheetDescription className="text-md text-[#818cf8] mt-2">
//                 Select a Date and Time slot to book a service.
//               </SheetDescription>
//             </motion.div>
//           </SheetHeader>

//           <motion.div
//             className="flex flex-col items-baseline gap-5"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//           >
//             <h2 className="mt-5 font-bold text-[#7d66d9]">Select Date</h2>
//             <Calendar
//               value={date}
//               onChange={setDate}
//               className="p-2 border rounded-md shadow-sm"
//               minDate={new Date()} // Only allow future dates
//             />

//             <h2 className="my-5 font-bold text-[#7d66d9]">Select Time Slot</h2>
//             <div className="grid grid-cols-3 gap-3">
//               {timeSlot.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Button
//                     disabled={isSlotBooked(item.time)}
//                     variant="outline"
//                     className={`border rounded-full p-2 px-3 hover:bg-[#7d66d9] hover:text-white transition-all
//                       ${selectedTime === item.time ? 'bg-[#7d66d9] text-white' : 'text-[#7d66d9]'}`}
//                     onClick={() => setSelectedTime(item.time)}
//                   >
//                     {item.time}
//                   </Button>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           <SheetFooter className="mt-5">
//             <SheetClose asChild>
//               <div className="flex gap-5">
//                 <Button variant="destructive" className="bg-[#e9d5ff] text-[#7d66d9] hover:bg-[#d4c2f4]">
//                   Cancel
//                 </Button>
//                 <Button
//                   disabled={!(selectedTime && date)}
//                   onClick={saveBooking}
//                   className="bg-[#818cf8] text-white hover:bg-[#9b9ef0] transition-all"
//                 >
//                   Book
//                 </Button>
//               </div>
//             </SheetClose>
//           </SheetFooter>
//         </SheetContent>
//       </Sheet>
//     </motion.div>
//   );
// }

// export default BookingSection;




import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import Calendar from 'react-calendar'; // Importing react-calendar
import 'react-calendar/dist/Calendar.css'; // Importing calendar styles
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet';
import { Button } from './button';
import { addBooking } from '../features/bookingSlice'; // Import the addBooking action
import { useNavigate } from 'react-router-dom';

function BookingSection({ children, business }) {
  const dispatch = useDispatch(); // Hook to dispatch actions
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState([]);
  const [selectedTime, setSelectedTime] = useState();
  const [bookedSlot, setBookedSlot] = useState([]);
  const navigate = useNavigate();

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

  
  const saveBooking = () => {
    // Prepare booking data
    const bookingData = {
      id: new Date().getTime(), // Unique ID for the booking
      businessId: business.id,
      businessCategory: business.category,
      date,
      time: selectedTime,
      email: business.gmail,
      userName: business.name,
      image: business.icon,
      address: business.location
    };
  
    // Dispatch the booking data to Redux
    dispatch(addBooking(bookingData));
  
    console.log('Booking saved:', bookingData);
  
    // Reset the date and time after booking
    setDate(new Date());
    setSelectedTime('');
  
    // Navigate to My Bookings page after saving
    navigate('/my-bookings');
  };
  
  const isSlotBooked = (time) => {
    return bookedSlot.some((item) => item.time === time);
  };

  return (
    <motion.div
      className="p-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="p-6 overflow-auto bg-white rounded-lg shadow-lg">
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
              className="p-2 border rounded-md shadow-sm"
              minDate={new Date()} // Only allow future dates
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
