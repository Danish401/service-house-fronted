// import { Button } from './button';
// import { NotebookPen } from 'lucide-react';

// import React, { useEffect, useState } from 'react';
// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "./sheet";
// import BookingSection from './BookingSection';

// function SuggestedBusinessList({ business }) {
//   const [businessList, setBusinessList] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (business) {
//       getBusinessList();
//     }
//   }, [business]);

//   const getBusinessList = async () => {
//     try {
//       const resp = await GlobalApi.getBusinessByCategory(business.category.name);
//       setBusinessList(resp?.businessLists || []);
//     } catch (error) {
//       console.error("Failed to fetch business list:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return <div>Loading...</div>; // Optional: A loading state can be added here
//   }

//   return (
//     <div className='md:pl-10'>
//       <BookingSection business={business}>
//         <Button className="flex w-full gap-2">
//           <NotebookPen />
//           Book Appointment
//         </Button>
//       </BookingSection>

//       <div className='hidden md:block'>
//         <h2 className='mt-3 mb-3 text-lg font-bold'>Similar Business</h2>
//         <div>
//           {businessList.length > 0 ? (
//             businessList.map((item) => (
//               <Link key={item.id} href={`/details/${item.id}`} className="flex gap-2 p-2 mb-4 rounded-lg cursor-pointer hover:border hover:shadow-md border-primary">
//                 <Image
//                   src={item.images[0]?.url || '/placeholder.jpg'} // Default image or placeholder
//                   alt={item.name}
//                   width={80}
//                   height={80}
//                   className='rounded-lg object-cover h-[100px]'
//                 />
//                 <div>
//                   <h2 className='font-bold'>{item.name}</h2>
//                   <h2 className='text-primary'>{item.contactPerson}</h2>
//                   <h2 className='text-gray-400'>{item.address}</h2>
//                 </div>
//               </Link>
//             ))
//           ) : (
//             <p>No similar businesses found.</p> // Handle no business case
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SuggestedBusinessList;



// import React, { useEffect, useState } from "react";
// import { Button } from "./button";
// import { NotebookPen } from "lucide-react";
// import { Carousel } from "react-responsive-carousel"; // Carousel library
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllEmployees } from "../features/employeeRegisterSlice"; // Assuming this action exists
// import BookingSection from "./BookingSection";

// function SuggestedBusinessList({ business }) {
//   const [loading, setLoading] = useState(true);

//   const dispatch = useDispatch();
//   const { employees, loading: employeesLoading, error } = useSelector(
//     (state) => state.employeeRegister
//   );

//   // Fetch employees if not loaded yet
//   useEffect(() => {
//     if (employees.length === 0) {
//       dispatch(getAllEmployees());
//     }
//   }, [dispatch, employees]);

//   // Debugging: Log the employees and loading states
//   useEffect(() => {
//     if (employees.length > 0) {
//       console.log("Employees Data: ", employees);
//     }
//     if (error) {
//       console.error("Error fetching employees: ", error);
//     }
//   }, [employees, error]);

//   useEffect(() => {
//     if (!employeesLoading) {
//       setLoading(false); // Set loading to false when data is loaded
//     }
//   }, [employeesLoading]);

//   if (loading || employeesLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="md:pl-10">
//       {/* Booking Section */}
//       <BookingSection business={business}>
//         <Button className="flex w-full gap-2">
//           <NotebookPen />
//           Book Appointment
//         </Button>
//       </BookingSection>

//       {/* All Employees Section */}
//       <div className="hidden md:block">
//   <h2 className="mt-3 mb-3 text-lg font-bold">All Employees</h2>
//   <div className="overflow-y-auto max-h-[400px] p-4">
//     {employees.length > 0 ? (
//       <Carousel
//         axis="vertical"
//         showThumbs={false}
//         showStatus={false}
//         infiniteLoop
//         autoPlay
//         swipeable
//         className="custom-carousel"
//       >
//         {employees.map((employee) => (
//           <Link
//             key={employee.id}
//             to={`/details/${employee.id}`} // Use "to" for react-router-dom
//             className="flex gap-4 p-4 mb-4 rounded-lg cursor-pointer hover:border hover:shadow-md border-primary"
//           >
//             <img
//               src={employee?.image || "/placeholder-image.png"}
//               alt={employee.name}
//               width={120} // Reduced image width
//               height={120} // Reduced image height
//               className="object-cover rounded-lg"
//             />
//             <div className="flex flex-col justify-center">
//               <h2 className="text-base font-bold">{employee.name}</h2> {/* Reduced text size */}
//               <h3 className="text-sm text-primary">{employee.category}</h3> {/* Reduced text size */}
//               <p className="text-xs text-gray-400">{employee.speciality}</p> {/* Reduced text size */}
//             </div>
//           </Link>
//         ))}
//       </Carousel>
//     ) : (
//       <div>
//         <h2 className="text-lg font-bold">No employees found</h2>
//         <p>Try again later.</p>
//       </div>
//     )}
//   </div>
// </div>

//     </div>
//   );
// }

// export default SuggestedBusinessList;

// import React, { useEffect, useState } from "react";
// import { Button } from "./button";
// import { NotebookPen } from "lucide-react";
// import { Carousel } from "react-responsive-carousel"; // Carousel library
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllEmployees } from "../features/employeeRegisterSlice"; // Assuming this action exists
// import BookingSection from "./BookingSection";

// function SuggestedBusinessList({ business }) {
//   const [loading, setLoading] = useState(true);
//   const [category, setCategory] = useState(null); // Track the category of the current business

//   const dispatch = useDispatch();
//   const { employees, loading: employeesLoading, error } = useSelector(
//     (state) => state.employeeRegister
//   );

//   // Fetch employees if not loaded yet
//   useEffect(() => {
//     if (employees.length === 0) {
//       dispatch(getAllEmployees());
//     }
//   }, [dispatch, employees]);

//   // Debugging: Log the employees and loading states
//   useEffect(() => {
//     if (employees.length > 0) {
//       console.log("Employees Data: ", employees);
//     }
//     if (error) {
//       console.error("Error fetching employees: ", error);
//     }
//   }, [employees, error]);

//   // Once the employees are loaded, set the category of the business
//   useEffect(() => {
//     if (business) {
//       setCategory(business.category); // Assuming "business" prop contains the category
//     }
//   }, [business]);

//   useEffect(() => {
//     if (!employeesLoading) {
//       setLoading(false); // Set loading to false when data is loaded
//     }
//   }, [employeesLoading]);

//   if (loading || employeesLoading) {
//     return <div>Loading...</div>;
//   }

//   // Filter employees based on the category of the current business
//   const similarBusinesses = employees.filter(
//     (employee) => employee.category === category
//   );

//   return (
//     <div className="md:pl-10">
//       {/* Booking Section */}
//       <BookingSection business={business}>
//         <Button className="flex w-full gap-2">
//           <NotebookPen />
//           Book Appointment
//         </Button>
//       </BookingSection>

//       {/* Similar Businesses Section */}
//       <div className="hidden md:block">
//         <h2 className="mt-3 mb-3 text-lg font-bold">Similar Businesses</h2>
//         <div className="overflow-y-auto max-h-[400px] p-4">
//           {similarBusinesses.length > 0 ? (
//             <Carousel
//               axis="vertical"
//               showThumbs={false}
//               showStatus={false}
//               infiniteLoop
//               autoPlay
//               swipeable
//               className="custom-carousel"
//             >
//               {similarBusinesses.map((employee) => (
//                 <Link
//                   key={employee._id}
//                   to={`/details/${employee._id}`} // Use "to" for react-router-dom
//                   className="flex gap-4 p-4 mb-4 rounded-lg cursor-pointer hover:border hover:shadow-md border-primary"
//                 >
//                   <img
//                     src={employee?.image || "/placeholder-image.png"}
//                     alt={employee.name}
//                     width={120} // Reduced image width
//                     height={120} // Reduced image height
//                     className="object-cover rounded-lg"
//                   />
//                   <div className="flex flex-col justify-center">
//                     <h2 className="text-base font-bold">{employee.name}</h2> {/* Reduced text size */}
//                     <h3 className="text-sm text-primary">{employee.category}</h3> {/* Reduced text size */}
//                     <p className="text-xs text-gray-400">{employee.speciality}</p> {/* Reduced text size */}
//                   </div>
//                 </Link>
//               ))}
//             </Carousel>
//           ) : (
//             <div>
//               <h2 className="text-lg font-bold">No similar businesses found</h2>
//               <p>Try again later.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SuggestedBusinessList;

//without mode

// import React, { useEffect, useState } from "react";
// import { Button } from "./button";
// import { NotebookPen } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllEmployees } from "../features/employeeRegisterSlice";
// import BookingSection from "./BookingSection";

// function SuggestedBusinessList({ business }) {
//   const [loading, setLoading] = useState(true);
//   const [category, setCategory] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const dispatch = useDispatch();
//   const { employees, loading: employeesLoading, error } = useSelector(
//     (state) => state.employeeRegister
//   );

//   // Fetch employees initially
//   useEffect(() => {
//     if (employees.length === 0) {
//       dispatch(getAllEmployees());
//     }
//   }, [dispatch, employees]);

//   // Update category and reset index when the business changes
//   useEffect(() => {
//     if (business) {
//       setCategory(business.category);
//       setCurrentIndex(0); // Reset index when the business changes
//     }
//   }, [business]);

//   // Stop loading when employees data is fetched
//   useEffect(() => {
//     if (!employeesLoading) {
//       setLoading(false);
//     }
//   }, [employeesLoading]);

//   // Auto-switch businesses every 3 seconds
//   useEffect(() => {
//     if (employees.length > 0 && category) {
//       const interval = setInterval(() => {
//         setCurrentIndex((prevIndex) => {
//           const similarBusinesses = employees.filter(
//             (employee) => employee.category === category
//           );
//           return (prevIndex + 1) % similarBusinesses.length;
//         });
//       }, 3000);

//       return () => clearInterval(interval);
//     }
//   }, [employees, category]);

//   if (loading || employeesLoading) {
//     return <div>Loading...</div>;
//   }

//   // Filter similar businesses based on category
//   const similarBusinesses = employees.filter(
//     (employee) => employee.category === category
//   );

//   if (similarBusinesses.length === 0) {
//     return (
//       <div className="p-6 text-center">
//         <h2 className="text-lg font-bold">No similar businesses found</h2>
//         <p>Try again later.</p>
//       </div>
//     );
//   }

//   // Get the current active business
//   const activeBusiness = similarBusinesses[currentIndex];

//   return (
//     <div className="p-6">
//       {/* Booking Section */}
//       <BookingSection business={business}>
//         <Button className="flex w-full gap-2">
//           <NotebookPen />
//           Book Appointment
//         </Button>
//       </BookingSection>

//       {/* Similar Businesses Section */}
//       <div className="mt-6">
//         <h2 className="mb-4 text-2xl font-bold">Similar Businesses</h2>
//         <div className="relative overflow-hidden h-72">
//           <div
//             key={activeBusiness._id}
//             className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-700 ease-in-out bg-white rounded-lg shadow-lg"
//           >
//             <img
//               src={activeBusiness?.image || "/placeholder-image.png"}
//               alt={activeBusiness.name}
//               className="object-cover mb-4 rounded-lg w-36 h-36" // Square image with rounded corners
//             />
//             <h3 className="text-lg font-bold">{activeBusiness.name}</h3>
//             <p className="text-sm text-gray-500">{activeBusiness.speciality}</p>
//             <span className="px-3 py-1 mt-2 text-sm bg-gray-100 rounded-full text-primary">
//               {activeBusiness.category}
//             </span>
//             <Link
//               to={`/details/${activeBusiness._id}`}
//               className="mt-4 text-sm text-indigo-500 hover:underline"
//             >
//               View Details
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SuggestedBusinessList;


import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { NotebookPen } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllEmployees } from "../features/employeeRegisterSlice";
import BookingSection from "./BookingSection";
import profile from "../assets/profile.jpg"; // Import the fallback image

function SuggestedBusinessList({ business }) {
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  const { employees, loading: employeesLoading, error } = useSelector(
    (state) => state.employeeRegister
  );

  const isDarkMode = useSelector((state) => state.bookings.isDarkMode); // Get dark mode state

  // Fetch employees initially
  useEffect(() => {
    if (employees.length === 0) {
      dispatch(getAllEmployees());
    }
  }, [dispatch, employees]);

  // Update category and reset index when the business changes
  useEffect(() => {
    if (business) {
      setCategory(business.category);
      setCurrentIndex(0); // Reset index when the business changes
    }
  }, [business]);

  // Stop loading when employees data is fetched
  useEffect(() => {
    if (!employeesLoading) {
      setLoading(false);
    }
  }, [employeesLoading]);

  // Auto-switch businesses every 3 seconds
  useEffect(() => {
    if (employees.length > 0 && category) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const similarBusinesses = employees.filter(
            (employee) => employee.category === category
          );
          return (prevIndex + 1) % similarBusinesses.length;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [employees, category]);

  if (loading || employeesLoading) {
    return <div>Loading...</div>;
  }

  // Filter similar businesses based on category
  const similarBusinesses = employees.filter(
    (employee) => employee.category === category
  );

  if (similarBusinesses.length === 0) {
    return (
      <div className={`p-6 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
        <h2 className="text-lg font-bold">No similar businesses found</h2>
        <p>Try again later.</p>
      </div>
    );
  }

  // Get the current active business
  const activeBusiness = similarBusinesses[currentIndex];

  return (
    <div className={`p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      {/* Booking Section */}
      <BookingSection business={business}>
        <Button className="flex w-full gap-2">
          <NotebookPen />
          Book Appointment
        </Button>
      </BookingSection>

      {/* Similar Businesses Section */}
      <div className="mt-6">
        <h2 className="mb-4 text-2xl font-bold">Similar Businesses</h2>
        <div className="relative overflow-hidden h-72">
          <div
            key={activeBusiness._id}
            className={`absolute inset-0 flex flex-col items-center justify-center ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-black'} shadow-lg rounded-lg transition-transform duration-700 ease-in-out`}
          >
            <img
              src={activeBusiness?.image || profile}
              alt={activeBusiness.name}
              className="object-cover mb-4 rounded-lg w-36 h-36" // Square image with rounded corners
            />
            <h3 className="text-lg font-bold">{activeBusiness.name}</h3>
            <p className="text-sm">{activeBusiness.speciality}</p>
            <span className="px-3 py-1 mt-2 text-sm text-white bg-gray-400 rounded-full">
              {activeBusiness.category}
            </span>
            <Link
              to={`/details/${activeBusiness._id}`}
              className={`mt-4 text-sm hover:underline ${isDarkMode ? 'text-indigo-400' : 'text-indigo-500'}`}
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuggestedBusinessList;
