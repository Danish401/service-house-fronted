


// import React from "react";
// import { useTranslation } from "react-i18next";

// const Newsletter = () => {
//   const { t } = useTranslation(); // Initialize useTranslation

//   return (
//     <div
//       className="bg-[#e2ddfe] text-[#000000] text-center py-16 px-6 sm:px-10 md:px-20 lg:px-40"
//       style={{ minHeight: "50vh" }}
//     >
//       <h1 className="text-2xl md:text-4xl font-bold">{t("newsletter.title")}</h1>
//       <p className="mt-4 text-lg md:text-xl">{t("newsletter.description")}</p>
//       <form className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
//         <input
//           type="email"
//           placeholder={t("newsletter.emailPlaceholder")}
//           className="w-full sm:w-auto px-4 py-2 border border-transparent rounded-md focus:ring-2 focus:ring-white focus:outline-none text-gray-900"
//         />
//         <button
//           type="submit"
//           className="bg-[#a38ae8] text-[#ffffff] px-6 py-2 rounded-md hover:bg-[#c1a8f0] transition duration-300 font-bold"
//         >
//           {t("newsletter.buttonText")}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Newsletter;


import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux"; // Import useSelector for accessing dark mode state

const Newsletter = () => {
  const { t } = useTranslation();
  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode state

  return (
    <div
      className={`text-center py-16 px-6 sm:px-10 md:px-20 lg:px-40 ${
        isDarkMode ? "bg-[#1f2937] text-[#ffffff]" : "bg-[#e2ddfe] text-[#000000]"
      }`}
      style={{ minHeight: "50vh" }}
    >
      <h1 className={`text-2xl md:text-4xl font-bold ${isDarkMode ? "text-[#FFF]" : "text-[#000]"}`}>
        {t("newsletter.title")}
      </h1>
      <p className={`mt-4 text-lg md:text-xl ${isDarkMode ? "text-[#ccc]" : "text-[#000]"}`}>
        {t("newsletter.description")}
      </p>
      <form className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          type="email"
          placeholder={t("newsletter.emailPlaceholder")}
          className={`w-full sm:w-auto px-4 py-2 border border-transparent rounded-md focus:ring-2 focus:ring-white focus:outline-none ${
            isDarkMode ? "bg-[#333] text-[#FFF]" : "bg-white text-gray-900"
          }`}
        />
        <button
          type="submit"
          className={`${
            isDarkMode ? "bg-[#a38ae8] text-[#ffffff]" : "bg-[#a38ae8] text-[#ffffff]"
          } px-6 py-2 rounded-md hover:bg-[#c1a8f0] transition duration-300 font-bold`}
        >
          {t("newsletter.buttonText")}
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
