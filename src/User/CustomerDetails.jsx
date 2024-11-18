// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "../components/button"; // Adjust the path based on your structure

// // Sample customer data for testing purposes
// const customerData = {
//   id: 1,
//   name: "Alice Johnson",
//   email: "alice.johnson@example.com",
//   location: "987 Customer St, Seattle, WA",
//   contact: "(123) 456-7890",
//   message: "I would like to book you for a plumbing service next week.",
// };

// function CustomerDetails({ customer = customerData }) {
//   return (
//     <div className="max-w-lg p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
//       <h2 className="mb-4 text-2xl font-semibold text-gray-700">
//         Customer Details
//       </h2>
//       <div className="flex flex-col gap-4">
//         <div>
//           <h3 className="text-lg font-semibold text-gray-600">Name</h3>
//           <p className="text-gray-800">{customer.name}</p>
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold text-gray-600">Email</h3>
//           <p className="text-gray-800">{customer.email}</p>
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold text-gray-600">Location</h3>
//           <p className="text-gray-800">{customer.location}</p>
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold text-gray-600">Contact</h3>
//           <p className="text-gray-800">{customer.contact}</p>
//         </div>
//         <div>
//           <h3 className="text-lg font-semibold text-gray-600">Message</h3>
//           <p className="text-gray-800">{customer.message}</p>
//         </div>
//         <Button className="mt-4">
//           <Link to={`/schedule/${customer.id}`} className="text-white">
//             Accept Booking
//           </Link>
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default CustomerDetails;


// import React from "react";
// import { Link } from "react-router-dom";
// import { Button } from "../components/button"; // Adjust the path based on your structure
// import { Email, LocationOn, Phone, Person, Message } from "@mui/icons-material";

// // Sample customer data for testing purposes
// const customerData = {
//   id: 1,
//   name: "Alice Johnson",
//   email: "alice.johnson@example.com",
//   location: "street number 8 ram nagar mundian kalan , ludhiana",
//   contact: "(123) 456-7890",
//   message: "I would like to book you for a plumbing service next week.",
// };

// function CustomerDetails({ customer = customerData }) {
//   const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(customer.location)}`;

//   return (
//     <div className="flex justify-start mt-10">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
//         <h2 className="mb-4 text-2xl font-semibold text-gray-700">Customer Details</h2>
//         <div className="flex flex-col gap-4">
//           <div className="flex items-center gap-2">
//             <Person className="text-gray-600" />
//             <div>
//               <h3 className="text-lg font-semibold text-gray-600">Name</h3>
//               <p className="text-gray-800">{customer.name}</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <Email className="text-gray-600" />
//             <div>
//               <h3 className="text-lg font-semibold text-gray-600">Email</h3>
//               <p className="text-gray-800">{customer.email}</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <LocationOn className="text-gray-600" />
//             <div>
//               <h3 className="text-lg font-semibold text-gray-600">Location</h3>
//               <a
//                 href={googleMapsUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 hover:underline"
//               >
//                 {customer.location}
//               </a>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <Phone className="text-gray-600" />
//             <div>
//               <h3 className="text-lg font-semibold text-gray-600">Contact</h3>
//               <p className="text-gray-800">{customer.contact}</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             <Message className="text-gray-600" />
//             <div>
//               <h3 className="text-lg font-semibold text-gray-600">Message</h3>
//               <p className="text-gray-800">{customer.message}</p>
//             </div>
//           </div>
//           <Button className="mt-4">
//             <Link to={`/schedule/${customer.id}`} className="text-white">
//               Accept Booking
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CustomerDetails;


import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/button"; // Adjust the path based on your structure
import { Email, LocationOn, Phone, Person, Message } from "@mui/icons-material";

// Sample customer data for testing purposes
const customerData = {
  id: 1,
  name: "Alice Johnson",
  email: "alice.johnson@example.com",
  location: "street number 8 ram nagar mundian kalan , ludhiana",
  contact: "7009101449",
  message: "I would like to book you for a plumbing service next week.",
};

function CustomerDetails({ customer = customerData }) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(customer.location)}`;
  const mailtoUrl = `mailto:${customer.email}`;
  const telUrl = `tel:${customer.contact.replace(/\D/g, '')}`; // Removing any non-numeric characters for phone links

  return (
    <div className="flex justify-start mt-10">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">Customer Details</h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Person className="text-gray-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Name</h3>
              <p className="text-gray-800">{customer.name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Email className="text-gray-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Email</h3>
              <a
                href={mailtoUrl}
                className="text-blue-500 hover:underline"
              >
                {customer.email}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LocationOn className="text-gray-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Location</h3>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {customer.location}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="text-gray-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Contact</h3>
              <a
                href={telUrl}
                className="text-blue-500 hover:underline"
              >
                {customer.contact}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Message className="text-gray-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Message</h3>
              <p className="text-gray-800">{customer.message}</p>
            </div>
          </div>
          <Button className="mt-4">
            <Link to={`/schedule/${customer.id}`} className="text-white">
              Accept Booking
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CustomerDetails;
