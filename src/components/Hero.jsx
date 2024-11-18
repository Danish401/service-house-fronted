import React from "react";
import { Button } from "@mui/material";
import Input from "./Input"; // Adjust the path if necessary
import { Search } from "lucide-react"; // Ensure lucide-react is installed
import { motion } from "framer-motion";
import { useSelector } from 'react-redux'; // Import useSelector to access the Redux store
import { toggleDarkMode } from "../features/bookingSlice";
function Hero() {
  // Access dark mode state from Redux
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode);

  return (
    <div className={`flex flex-col items-center justify-center gap-3 p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-[#7d66d9]'} text-white`}>
      <motion.h2
        className="font-bold text-[46px] text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
           <h2 className='font-bold text-[46px] text-center'>
            Find Home 
            <span className='text-primary'> Service/Repair</span>
            <br></br> Near You</h2>
      

      </motion.h2>
      <motion.h2
        className="text-xl text-[#ABBDF9]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
         <h2 className='text-xl text-gray-400'>Explore Best Home Service & Repair near you</h2>
      </motion.h2>

      <motion.div
        className="flex items-center gap-4 mt-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <Input
          placeholder="Search"
          className={`rounded-full md:w-[350px] ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-[#E6E7FF] text-[#26292B]'} p-2`}
        />
        <Button
          variant="contained"
          className={`rounded-full h-[46px] ${isDarkMode ? 'bg-[#9B9EF0] hover:bg-[#7F57F1]' : 'bg-[#9B9EF0] hover:bg-[#7F57F1]'} text-white`}
        >
          <Search className="w-4 h-4" />
        </Button>
      </motion.div>
    </div>
  );
}

export default Hero;
