// //without mode



// import React from "react";
// import { Box, Grid, Typography, Button, Paper } from "@mui/material";
// import { styled } from "@mui/system";
// import { useTranslation } from "react-i18next"; // Import useTranslation
// import painters from "../assets/images/painters.jpg";
// import overall from "../assets/images/overall.jpg";
// import ac from "../assets/images/ac repair.jpg";

// const ImageContainer = styled(Box)(({ theme }) => ({
//   width: "100%",
//   height: "100%",
//   overflow: "hidden",
//   borderRadius: theme.shape.borderRadius,
// }));

// const Image = styled("img")({
//   width: "100%",
//   height: "100%",
//   objectFit: "cover",
// });

// const StatBox = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(2),
//   textAlign: "center",
//   backgroundColor: theme.palette.background.paper,
//   boxShadow: theme.shadows[1],
//   borderRadius: theme.shape.borderRadius,
// }));

// const StatValue = styled(Typography)(({ theme }) => ({
//   color: theme.palette.primary.main,
//   fontWeight: "bold",
//   fontSize: "1.25rem",
// }));

// const HouseServiceSection = () => {
//   const { t } = useTranslation(); // Initialize useTranslation

//   return (
//     <Box
//       display="flex"
//       flexDirection={{ xs: "column", md: "row" }}
//       alignItems="center"
//       justifyContent="center"
//       bgcolor="grey.50"
//       py={6}
//       px={{ xs: 3, md: 8 }}
//     >
//       <div className="flex items-center justify-center bg-white py-10">
//         <div className="grid grid-cols-2 gap-4 md:gap-6 items-center">
//           {/* Left Large Image */}
//           <div className="rounded-[50px] ml-4 overflow-hidden md:w-[300px] md:h-[400px]">
//             <img
//               src={overall}
//               alt="Main dish"
//               className="object-cover w-full h-full"
//             />
//           </div>

//           {/* Right Column with Two Images */}
//           <div className="grid grid-rows-2  mr-72 gap-4 md:gap-6">
//             <div className="rounded-[50px] overflow-hidden md:w-[200px] md:h-[180px]">
//               <img
//                 src={ac}
//                 alt="Side dish 1"
//                 className="object-cover w-full h-full"
//               />
//             </div>
//             <div className="rounded-[50px] overflow-hidden md:w-[200px] md:h-[180px]">
//               <img
//                 src={painters}
//                 alt="Side dish 2"
//                 className="object-cover w-full h-full"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Side: Text and Stats */}
//       <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left">
//         <h2 className="text-indigo-600 font-semibold uppercase text-lg mb-2">
//           {t('whoWeAre')}
//         </h2>
//         <h1 className="text-gray-800 font-bold text-2xl md:text-4xl mb-4">
//           {t('premiumServices')}
//         </h1>
//         <p className="text-gray-600 mb-6">{t('description')}</p>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium">
//           <div className="bg-white p-4 rounded-lg shadow">
//             <span className="text-indigo-600 text-lg font-bold">90%</span>
//             <p>{t('repeatCustomers')}</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow">
//             <span className="text-indigo-600 text-lg font-bold">94%</span>
//             <p>{t('freshnessQuality')}</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow">
//             <span className="text-indigo-600 text-lg font-bold">20 min</span>
//             <p>{t('quickService')}</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow">
//             <span className="text-indigo-600 text-lg font-bold">500+</span>
//             <p>{t('positiveReviews')}</p>
//           </div>
//         </div>
//         <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700">
//           {t('learnMore')}
//         </button>
//       </div>
//     </Box>
//   );
// };

// export default HouseServiceSection;


import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useTranslation } from "react-i18next"; // Import useTranslation
import { useSelector } from "react-redux"; // Import useSelector to access dark mode state
import painters from "../assets/images/painters.jpg";
import overall from "../assets/images/overall.jpg";
import ac from "../assets/images/ac repair.jpg";

const HouseServiceSection = () => {
  const { t } = useTranslation(); // Initialize useTranslation
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode state

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      alignItems="center"
      justifyContent="center"
      bgcolor={isDarkMode ? "#1f2937" : "grey.50"} // Dark mode background color
      py={6}
      px={{ xs: 3, md: 8 }}
    >
      <div
        className={`flex items-center justify-center py-10 ${
          isDarkMode ? "bg-[#1f2937]" : "bg-white"
        }`}
      >
        <div className="grid grid-cols-2 gap-4 md:gap-6 items-center">
          {/* Left Large Image */}
          <div className="rounded-[50px] ml-4 overflow-hidden md:w-[300px] md:h-[400px]">
            <img
              src={overall}
              alt="Main dish"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Column with Two Images */}
          <div className="grid grid-rows-2  mr-72 gap-4 md:gap-6">
            <div className="rounded-[50px] overflow-hidden md:w-[200px] md:h-[180px]">
              <img
                src={ac}
                alt="Side dish 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-[50px] overflow-hidden md:w-[200px] md:h-[180px]">
              <img
                src={painters}
                alt="Side dish 2"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Text and Stats */}
      <div
        className={`md:w-1/2 mt-8 md:mt-0 text-center md:text-left ${
          isDarkMode ? "text-[#ffdd57]" : "text-[#000000]"
        }`}
      >
        <h2
          className={`text-lg mb-2 font-semibold uppercase ${
            isDarkMode ? "text-[#ffdd57]" : "text-indigo-600"
          }`}
        >
          {t("whoWeAre")}
        </h2>
        <h1
          className={`text-2xl md:text-4xl mb-4 font-bold ${
            isDarkMode ? "text-[#ffdd57]" : "text-gray-800"
          }`}
        >
          {t("premiumServices")}
        </h1>
        <p
          className={`mb-6 ${
            isDarkMode ? "text-[#ffdd57]" : "text-gray-600"
          }`}
        >
          {t("description")}
        </p>
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium ${
            isDarkMode ? "text-[#ffdd57]" : "text-gray-800"
          }`}
        >
          <div
            className={`bg-white p-4 rounded-lg shadow ${
              isDarkMode ? "bg-[#2d3748]" : "bg-white"
            }`}
          >
            <span className="text-indigo-600 text-lg font-bold">90%</span>
            <p>{t("repeatCustomers")}</p>
          </div>
          <div
            className={`bg-white p-4 rounded-lg shadow ${
              isDarkMode ? "bg-[#2d3748]" : "bg-white"
            }`}
          >
            <span className="text-indigo-600 text-lg font-bold">94%</span>
            <p>{t("freshnessQuality")}</p>
          </div>
          <div
            className={`bg-white p-4 rounded-lg shadow ${
              isDarkMode ? "bg-[#2d3748]" : "bg-white"
            }`}
          >
            <span className="text-indigo-600 text-lg font-bold">20 min</span>
            <p>{t("quickService")}</p>
          </div>
          <div
            className={`bg-white p-4 rounded-lg shadow ${
              isDarkMode ? "bg-[#2d3748]" : "bg-white"
            }`}
          >
            <span className="text-indigo-600 text-lg font-bold">500+</span>
            <p>{t("positiveReviews")}</p>
          </div>
        </div>
        <button
          className={`mt-6 px-6 py-3 rounded-lg shadow font-bold ${
            isDarkMode ? "bg-[#7d66d9] text-[#ffffff]" : "bg-indigo-600 text-white"
          } hover:bg-indigo-700`}
        >
          {t("learnMore")}
        </button>
      </div>
    </Box>
  );
};

export default HouseServiceSection;
