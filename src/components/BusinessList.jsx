//  import React from "react"; 
// import { Button } from "./button"; // Adjust the path based on your structure
// import { Link } from "react-router-dom"; // Using React Router for internal links

// // Sample Data (You can move this to a separate file if needed)
// export const Data1 = [
//   {
//     id: 1,
//     name: "John Mason",
//     category: "Mason",
//     icon: "https://th.bing.com/th/id/OIP.lHIsL4GUzxvBnaSXkijd4AHaE-?rs=1&pid=ImgDetMain",
//     location: "123 Brick Lane, New York, NY",
//     description:
//       "Experienced mason specializing in brickwork, stone masonry, and repair services for homes and commercial buildings.",
//     gmail: "john.mason@example.com",
//   },
//   {
//     id: 2,
//     name: "Sarah Gardner",
//     category: "Gardner",
//     icon: "https://5.imimg.com/data5/SELLER/Default/2022/10/CB/CQ/EH/152695818/garden-mali-service-500x500.jpeg",
//     location: "456 Green Street, Los Angeles, CA",
//     description:
//       "Professional gardener offering landscape design, plant maintenance, and seasonal garden care for homes and offices.",
//     gmail: "sarah.gardner@example.com",
//   },
//   {
//     id: 3,
//     name: "David Labour",
//     category: "Labour",
//     icon: "https://www.helpsafetyservices.com/helpss/wp-content/uploads/2019/09/two-construction-workers-1404x702.jpg",
//     location: "789 Worker Avenue, Chicago, IL",
//     description:
//       "General labor services for construction projects, renovations, and manual work. Available for large and small projects.",
//     gmail: "david.labour@example.com",
//   },
//   {
//     id: 4,
//     name: "Emily Chef",
//     category: "Chef",
//     icon: "https://th.bing.com/th/id/OIP.gaRlMuiFb2pp72B6MUyvTQHaE7?rs=1&pid=ImgDetMain",
//     location: "321 Culinary Road, Houston, TX",
//     description:
//       "Expert chef with over 10 years of experience in gourmet cuisine, private catering, and meal planning for events.",
//     gmail: "emily.chef@example.com",
//   },
//   {
//     id: 5,
//     name: "Mike Carpenter",
//     category: "Carpenter",
//     icon: "https://th.bing.com/th/id/OIP.q6k2NCtRRqH-WeDUOgvsCAHaEo?rs=1&pid=ImgDetMain",
//     location: "654 Woodwork Blvd, San Francisco, CA",
//     description:
//       "Skilled carpenter specializing in custom furniture, home repairs, and woodwork for commercial and residential spaces.",
//     gmail: "mike.carpenter@example.com",
//   },
//   {
//     id: 6,
//     name: "Anna Shifter",
//     category: "Shifting",
//     icon: "https://www.womendailymagazine.com/wp-content/uploads/2018/04/5-tips-on-moving-large-items-when-shifting-homes.jpg",
//     location: "987 Moving St, Seattle, WA",
//     description:
//       "Professional moving services for residential and commercial clients. Specialized in handling heavy and delicate items.",
//     gmail: "anna.shifter@example.com",
//   },
//   {
//     id: 7,
//     name: "Tom Electrician",
//     category: "Electrician",
//     icon: "https://www.build-review.com/wp-content/uploads/2022/03/Electrician.jpg",
//     location: "159 Voltage Ave, Miami, FL",
//     description:
//       "Certified electrician providing electrical installations, repairs, and maintenance for homes and commercial properties.",
//     gmail: "tom.electrician@example.com",
//   },
//   {
//     id: 8,
//     name: "Linda Plumber",
//     category: "Plumber",
//     icon: "https://th.bing.com/th/id/OIP.0le1QWF5qmpu7IBXQmLaAgHaFS?rs=1&pid=ImgDetMain",
//     location: "753 Waterline Street, Boston, MA",
//     description:
//       "Expert plumber offering pipe repairs, water heater installations, and emergency plumbing services for residential areas.",
//     gmail: "linda.plumber@example.com",
//   },
//   {
//     id: 9,
//     name: "Paul Painter",
//     category: "Painter",
//     icon: "https://th.bing.com/th/id/OIP.npxSXzzm0eqq4u7YiPVSHwAAAA?rs=1&pid=ImgDetMain",
//     location: "246 Art Lane, Austin, TX",
//     description:
//       "Professional painter specializing in interior and exterior painting, decorative finishes, and wallpapering for homes and offices.",
//     gmail: "paul.painter@example.com",
//   },
//   {
//     id: 10,
//     name: "Claire Cleaner",
//     category: "Cleaning",
//     icon: "https://th.bing.com/th/id/OIP.KkxfezKFPzxP8MXBT4hdxwHaE7?rs=1&pid=ImgDetMain",
//     location: "369 Tidy Avenue, Denver, CO",
//     description:
//       "Reliable cleaning services for residential and commercial properties, offering deep cleaning, office cleaning, and regular maintenance.",
//     gmail: "claire.cleaner@example.com",
//   },
// ];

// function BusinessList({ businessList = Data1, title }) {
//   return (
//     <div className="mt-5">
//       <h2 className="font-bold text-[22px]">{title}</h2>
//       <div className="grid grid-cols-2 gap-6 mt-5 md:grid-cols-3 lg:grid-cols-4">
//         {businessList.length > 0
//           ? businessList.map((business, index) => (
//               <Link
//                 to={"/details/" + business.id}
//                 key={index}
//                 className="transition-all ease-in-out rounded-lg shadow-md cursor-pointer border border-transparent hover:border-[#7D66D9] hover:bg-[#7D66D9]/10 hover:shadow-lg hover:scale-105 hover:backdrop-blur-md duration-300"
//               >
//                 <img
//                   src={business?.icon || "/placeholder-image.png"}
//                   alt={business.name}
//                   width={500}
//                   height={200}
//                   className="h-[150px] md:h-[200px] object-cover rounded-lg"
//                 />
//                 <div className="flex flex-col items-baseline gap-1 p-3">
//                   <h2 className="p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]">
//                     {business?.category || "Unknown Category"}
//                   </h2>
//                   <h2 className="text-lg font-bold">{business.name}</h2>
//                   <h2 className="text-sm text-gray-500">
//                     {business.location || "No Address Provided"}
//                   </h2>
//                   <Button className="mt-3 rounded-lg">
//                     <Link to={`/details/${business.id}`}>Book Now</Link>
//                   </Button>
//                 </div>
//               </Link>
//             ))
//           : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
//               <div
//                 key={index}
//                 className="w-full h-[300px] bg-slate-200 rounded-lg animate-pulse"
//               ></div>
//             ))}
//       </div>
//     </div>
//   );
// }

// export default BusinessList;     




import React from "react"; 
import { Button } from "./button"; // Adjust the path based on your structure
import { Link } from "react-router-dom"; // Using React Router for internal links

// Sample Data (You can move this to a separate file if needed)
export const Data1 =[
  {
    id: 1,
    name: "John Mason",
    category: "Mason",
    icon: "https://th.bing.com/th/id/OIP.lHIsL4GUzxvBnaSXkijd4AHaE-?rs=1&pid=ImgDetMain",
    location: "123 Brick Lane, New York, NY",
    description: "Experienced mason specializing in brickwork, stone masonry, and repair services for homes and commercial buildings.",
    gmail: "john.mason@example.com",
  },
  {
    id: 2,
    name: "Alex Mason",
    category: "Mason",
    icon: "https://example.com/alex-mason-icon.jpg",
    location: "789 Stone Rd, Los Angeles, CA",
    description: "Expert mason skilled in stone masonry and restoration projects for homes and heritage buildings.",
    gmail: "alex.mason@example.com",
  },
  {
    id: 3,
    name: "Sarah Gardner",
    category: "Gardner",
    icon: "https://5.imimg.com/data5/SELLER/Default/2022/10/CB/CQ/EH/152695818/garden-mali-service-500x500.jpeg",
    location: "456 Green Street, Los Angeles, CA",
    description: "Professional gardener offering landscape design, plant maintenance, and seasonal garden care for homes and offices.",
    gmail: "sarah.gardner@example.com",
  },
  {
    id: 4,
    name: "Mike Gardner",
    category: "Gardner",
    icon: "https://example.com/mike-gardner-icon.jpg",
    location: "123 Meadow Lane, Denver, CO",
    description: "Experienced gardener specializing in sustainable garden design and eco-friendly plant care.",
    gmail: "mike.gardner@example.com",
  },
  {
    id: 5,
    name: "David Labour",
    category: "Labour",
    icon: "https://www.helpsafetyservices.com/helpss/wp-content/uploads/2019/09/two-construction-workers-1404x702.jpg",
    location: "789 Worker Avenue, Chicago, IL",
    description: "General labor services for construction projects, renovations, and manual work. Available for large and small projects.",
    gmail: "david.labour@example.com",
  },
  {
    id: 6,
    name: "Emily Chef",
    category: "Chef",
    icon: "https://th.bing.com/th/id/OIP.gaRlMuiFb2pp72B6MUyvTQHaE7?rs=1&pid=ImgDetMain",
    location: "321 Culinary Road, Houston, TX",
    description: "Expert chef with over 10 years of experience in gourmet cuisine, private catering, and meal planning for events.",
    gmail: "emily.chef@example.com",
  },
  {
    id: 7,
    name: "Michael Chef",
    category: "Chef",
    icon: "https://example.com/michael-chef-icon.jpg",
    location: "765 Flavor St, New York, NY",
    description: "Renowned chef with specialties in international cuisines and private dining experiences.",
    gmail: "michael.chef@example.com",
  },
  {
    id: 8,
    name: "Mike Carpenter",
    category: "Carpenter",
    icon: "https://th.bing.com/th/id/OIP.q6k2NCtRRqH-WeDUOgvsCAHaEo?rs=1&pid=ImgDetMain",
    location: "654 Woodwork Blvd, San Francisco, CA",
    description: "Skilled carpenter specializing in custom furniture, home repairs, and woodwork for commercial and residential spaces.",
    gmail: "mike.carpenter@example.com",
  },
  {
    id: 9,
    name: "Anna Shifter",
    category: "Shifting",
    icon: "https://www.womendailymagazine.com/wp-content/uploads/2018/04/5-tips-on-moving-large-items-when-shifting-homes.jpg",
    location: "987 Moving St, Seattle, WA",
    description: "Professional moving services for residential and commercial clients. Specialized in handling heavy and delicate items.",
    gmail: "anna.shifter@example.com",
  },
  {
    id: 10,
    name: "Tom Electrician",
    category: "Electrician",
    icon: "https://www.build-review.com/wp-content/uploads/2022/03/Electrician.jpg",
    location: "159 Voltage Ave, Miami, FL",
    description: "Certified electrician providing electrical installations, repairs, and maintenance for homes and commercial properties.",
    gmail: "tom.electrician@example.com",
  },
  {
    id: 11,
    name: "Linda Plumber",
    category: "Plumber",
    icon: "https://th.bing.com/th/id/OIP.0le1QWF5qmpu7IBXQmLaAgHaFS?rs=1&pid=ImgDetMain",
    location: "753 Waterline Street, Boston, MA",
    description: "Expert plumber offering pipe repairs, water heater installations, and emergency plumbing services for residential areas.",
    gmail: "linda.plumber@example.com",
  },
  {
    id: 12,
    name: "Paul Painter",
    category: "Painter",
    icon: "https://th.bing.com/th/id/OIP.npxSXzzm0eqq4u7YiPVSHwAAAA?rs=1&pid=ImgDetMain",
    location: "246 Art Lane, Austin, TX",
    description: "Professional painter specializing in interior and exterior painting, decorative finishes, and wallpapering for homes and offices.",
    gmail: "paul.painter@example.com",
  },
  {
    id: 13,
    name: "John Painter",
    category: "Painter",
    icon: "https://example.com/john-painter-icon.jpg",
    location: "987 Palette Ave, Dallas, TX",
    description: "Experienced painter with a focus on residential and commercial projects, known for precision and attention to detail.",
    gmail: "john.painter@example.com",
  },
  {
    id: 14,
    name: "Claire Cleaner",
    category: "Cleaning",
    icon: "https://th.bing.com/th/id/OIP.KkxfezKFPzxP8MXBT4hdxwHaE7?rs=1&pid=ImgDetMain",
    location: "369 Tidy Avenue, Denver, CO",
    description: "Reliable cleaning services for residential and commercial properties, offering deep cleaning, office cleaning, and regular maintenance.",
    gmail: "claire.cleaner@example.com",
  },
  {
    id: 15,
    name: "Mark Cleaner",
    category: "Cleaning",
    icon: "https://example.com/mark-cleaner-icon.jpg",
    location: "122 Sparkle St, Phoenix, AZ",
    description: "Experienced cleaner offering eco-friendly cleaning solutions for homes and offices.",
    gmail: "mark.cleaner@example.com",
  },
  {
    id: 16,
    name: "Tom Electrician",
    category: "Electrician",
    icon: "https://www.build-review.com/wp-content/uploads/2022/03/Electrician.jpg",
    location: "789 Light St, Atlanta, GA",
    description: "Electrician specializing in renewable energy installations and electrical troubleshooting.",
    gmail: "tom.electrician@example.com",
  },
  {
    id: 17,
    name: "David Labour",
    category: "Labour",
    icon: "https://www.helpsafetyservices.com/helpss/wp-content/uploads/2019/09/two-construction-workers-1404x702.jpg",
    location: "234 Hardwork St, Chicago, IL",
    description: "General labor services for various construction projects, focused on efficiency and quality.",
    gmail: "david.labour2@example.com",
  },
  {
    id: 18,
    name: "Samuel Mason",
    category: "Mason",
    icon: "https://example.com/samuel-mason-icon.jpg",
    location: "512 Stone Street, Philadelphia, PA",
    description: "Experienced in heritage building masonry and custom stonework for commercial spaces.",
    gmail: "samuel.mason@example.com",
  },
  {
    id: 19,
    name: "Lisa Gardner",
    category: "Gardner",
    icon: "https://example.com/lisa-gardner-icon.jpg",
    location: "564 Greenway Dr, Portland, OR",
    description: "Specializes in sustainable gardening and landscape design with eco-friendly methods.",
    gmail: "lisa.gardner@example.com",
  },
  {
    id: 20,
    name: "Nina Painter",
    category: "Painter",
    icon: "https://example.com/nina-painter-icon.jpg",
    location: "654 Art Blvd, San Diego, CA",
    description: "Residential painter known for creative wall finishes and detailed craftsmanship.",
    gmail: "nina.painter@example.com",
  }
];


function BusinessList({ businessList = Data1, title }) {
  return (
    <div className="mt-5">
      <h2 className="font-bold text-[22px]">{title}</h2>
      <div className="grid grid-cols-2 gap-6 mt-5 md:grid-cols-3 lg:grid-cols-4">
        {businessList.length > 0
          ? businessList.map((business, index) => (
              <Link
                to={"/details/" + business.id}
                key={index}
                className="transition-all ease-in-out rounded-lg shadow-md cursor-pointer border border-transparent hover:border-[#7D66D9] hover:bg-[#7D66D9]/10 hover:shadow-lg hover:scale-105 hover:backdrop-blur-md duration-300"
              >
                <img
                  src={business?.icon || "/placeholder-image.png"}
                  alt={business.name}
                  width={500}
                  height={200}
                  className="h-[150px] md:h-[200px] object-cover rounded-lg"
                />
                <div className="flex flex-col items-baseline gap-1 p-3">
                  <h2 className="p-1 bg-purple-200 text-primary rounded-full px-2 text-[12px]">
                    {business?.category || "Unknown Category"}
                  </h2>
                  <h2 className="text-lg font-bold">{business.name}</h2>
                  <h2 className="text-sm text-gray-500">
                    {business.location || "No Address Provided"}
                  </h2>
                  <Button className="mt-3 rounded-lg">
                    <Link to={`/details/${business.id}`}>Book Now</Link>
                  </Button>
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
              <div
                key={index}
                className="w-full h-[300px] bg-slate-200 rounded-lg animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default BusinessList;     



