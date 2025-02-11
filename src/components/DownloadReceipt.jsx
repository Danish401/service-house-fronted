import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { downloadBookingReceipt } from "../features/bookingSlice"; // Adjust path based on your project structure
import { Button } from "@mui/material";
import { IoCloudDownloadSharp } from "react-icons/io5";


const DownloadReceipt = ({ bookingId }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { error } = useSelector((state) => state.bookings); // Get error state if available

  const handleDownload = async () => {
    setLoading(true);
    try {
      await dispatch(downloadBookingReceipt(bookingId)).unwrap();
    } catch (error) {
      console.error("Download error:", error);
    }
    setLoading(false);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<IoCloudDownloadSharp />}
      onClick={handleDownload}
      disabled={loading}
      sx={{
        backgroundColor: "#5b5bd6",
        "&:hover": { backgroundColor: "#4a4ad4" },
      }}
    >
      {loading ? "Downloading..." : "Download Receipt"}
    </Button>
  );
};

export default DownloadReceipt;
