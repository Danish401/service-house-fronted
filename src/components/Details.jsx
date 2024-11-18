

// import React from "react";
// import { useParams } from "react-router-dom";
// import { Data1 } from "./BusinessList"; // Import your business data
// import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Import icons for email and location
// import BookingSection from './BookingSection'; // Import the BookingSection component
// import SuggestedBusinessList from './SuggestedBusinessList'; // Import the SuggestedBusinessList component

// const Details = () => {
//   const { id } = useParams(); // Get the business ID from the URL
//   const business = Data1.find((item) => item.id === parseInt(id)); // Find the business data based on ID

//   if (!business) {
//     return <div>Business not found.</div>; // Handle the case where the business is not found
//   }

//   return (
//     business?.name && (
//       <div className="max-w-xl p-4 mx-auto">
//         {/* Business Name */}
        
//         {/* Business Icon */}
//         <div className="flex justify-center mt-4 mb-6">
//           <img
//             src={business.icon}
//             alt={`${business.name} icon`}
//             className="object-cover w-40 h-40 rounded-full shadow-lg"
//           />
//         </div>
//         <h2 className="mb-4 text-3xl font-bold text-gray-800">{business.name}</h2>
        
//         {/* Business Category */}
//         <div className="flex items-center mb-4 text-lg text-gray-700">
//           <h2 className="p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]">
//             {business.category || "Unknown Category"}
//           </h2>
//         </div>
        
//         {/* Location Section */}
//         <div className="mt-6">
//           <div className="flex items-center mt-2 text-gray-700">
//             <FaMapMarkerAlt className="mr-2 text-indigo-400" />
//             <span>{business.location}</span>
//           </div>

//           {/* Email Section */}
//           <div className="flex items-center mb-4 text-lg text-gray-700">
//             <FaEnvelope className="mr-2 text-indigo-400" />
//             <span className="ml-2">{business.gmail}</span>
//           </div>

//           {/* Business Description */}
//           <div className="mb-6">
//             <h3 className="text-xl font-semibold text-gray-800">Description:</h3>
//             <p className="mt-2 text-gray-600">{business.description}</p>
//           </div>

//           {/* Booking Section */}
//           <h3 className="mt-6 text-xl font-bold text-gray-800">Book an Appointment</h3>
//           {/* <BookingSection business={business}>
//             <button className="flex w-full gap-2 p-2 text-white bg-blue-600 rounded">
//               Book Appointment
//             </button>
//           </BookingSection> */}

//           {/* Suggested Business List */}
//           <SuggestedBusinessList business={business} />
          
//           {/* Gallery Section */}
//           <h3 className="mt-8 text-xl font-bold text-gray-800">Gallery</h3>
//           <div className="mt-4 text-lg text-gray-600">Coming Soon</div>
//         </div>
//       </div>
//     )
//   );
// };

// export default Details;


import React from "react";
import { useParams } from "react-router-dom";
import { Data1 } from "./BusinessList"; // Import your business data
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Import icons for email and location
import BookingSection from './BookingSection'; // Import the BookingSection component
import SuggestedBusinessList from './SuggestedBusinessList'; // Import the SuggestedBusinessList component

const Details = () => {
  const { id } = useParams(); // Get the business ID from the URL
  const business = Data1.find((item) => item.id === parseInt(id)); // Find the business data based on ID

  if (!business) {
    return <div>Business not found.</div>; // Handle the case where the business is not found
  }

  return (
    business?.name && (
      <div className="flex flex-col max-w-6xl gap-6 p-6 mx-auto lg:flex-row">
        {/* Left Section - Business Details */}
        <div className="p-4 lg:w-2/3">
          {/* Business Icon */}
          <div className="flex mt-4 mb-6 justify-">
            <img
              src={business.icon}
              alt={`${business.name} icon`}
              className="object-cover w-40 h-40 rounded-full shadow-lg"
            />
          </div>

          {/* Business Name */}
          <h2 className="mb-4 text-3xl font-bold text-gray-800">{business.name}</h2>

          {/* Business Category */}
          <div className="flex items-center mb-4 text-lg text-gray-700">
            <h2 className="p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]">
              {business.category || "Unknown Category"}
            </h2>
          </div>

          {/* Location Section */}
          <div className="flex items-center mt-2 text-gray-700">
            <FaMapMarkerAlt className="mr-2 text-indigo-400" />
            <span>{business.location}</span>
          </div>

          {/* Email Section */}
          <div className="flex items-center mb-4 text-lg text-gray-700">
            <FaEnvelope className="mr-2 text-indigo-400" />
            <span className="ml-2">{business.gmail}</span>
          </div>

          {/* Business Description */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Description:</h3>
            <p className="mt-2 text-gray-600">{business.description}</p>
          </div>

          {/* Gallery Section */}
          <h3 className="mt-8 text-xl font-bold text-gray-800">Gallery</h3>
          <div className="mt-4 text-lg text-gray-600">Coming Soon</div>
        </div>

        {/* Right Section - Booking and Suggested Businesses */}
        <div className="flex flex-col gap-6 lg:w-1/3">
          {/* Booking Section */}
         
        
            <BookingSection business={business}/>
            
         
         

          {/* Suggested Business List */}
          <div className="p-4 bg-white rounded-lg shadow-lg">
            <h3 className="mb-4 text-xl font-bold text-gray-800">Similar Businesses</h3>
            <SuggestedBusinessList business={business} />
          </div>
        </div>
      </div>
    )
  );
};

export default Details;
