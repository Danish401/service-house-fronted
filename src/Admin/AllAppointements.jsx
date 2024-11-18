// import React from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import Avatar from '@mui/material/Avatar';

// const rows = [

// {
//   id: 1,
//   name: "John Mason",
//   category: "Mason",
//   icon: "https://th.bing.com/th/id/OIP.lHIsL4GUzxvBnaSXkijd4AHaE-?rs=1&pid=ImgDetMain",
//   location: "123 Brick Lane, New York, NY",
//   description:
//     "Experienced mason specializing in brickwork, stone masonry, and repair services for homes and commercial buildings.",
//   gmail: "john.mason@example.com",
//   speciality: "Brick and Stone Masonry",
// },
// {
//   id: 2,
//   name: "Alex Mason",
//   category: "Mason",
//   icon: "https://example.com/alex-mason-icon.jpg",
//   location: "789 Stone Rd, Los Angeles, CA",
//   description:
//     "Expert mason skilled in stone masonry and restoration projects for homes and heritage buildings.",
//   gmail: "alex.mason@example.com",
//   speciality: "Heritage Building Restoration",
// },
// {
//   id: 3,
//   name: "Sarah Gardner",
//   category: "Gardner",
//   icon: "https://5.imimg.com/data5/SELLER/Default/2022/10/CB/CQ/EH/152695818/garden-mali-service-500x500.jpeg",
//   location: "456 Green Street, Los Angeles, CA",
//   description:
//     "Professional gardener offering landscape design, plant maintenance, and seasonal garden care for homes and offices.",
//   gmail: "sarah.gardner@example.com",
//   speciality: "Landscape Design",
// },
// {
//   id: 4,
//   name: "Mike Gardner",
//   category: "Gardner",
//   icon: "https://example.com/mike-gardner-icon.jpg",
//   location: "123 Meadow Lane, Denver, CO",
//   description:
//     "Experienced gardener specializing in sustainable garden design and eco-friendly plant care.",
//   gmail: "mike.gardner@example.com",
//   speciality: "Eco-Friendly Gardening",
// },
// {
//   id: 5,
//   name: "David Labour",
//   category: "Labour",
//   icon: "https://www.helpsafetyservices.com/helpss/wp-content/uploads/2019/09/two-construction-workers-1404x702.jpg",
//   location: "789 Worker Avenue, Chicago, IL",
//   description:
//     "General labor services for construction projects, renovations, and manual work. Available for large and small projects.",
//   gmail: "david.labour@example.com",
//   speciality: "Construction Labor",
// },
// {
//   id: 6,
//   name: "Emily Chef",
//   category: "Chef",
//   icon: "https://th.bing.com/th/id/OIP.gaRlMuiFb2pp72B6MUyvTQHaE7?rs=1&pid=ImgDetMain",
//   location: "321 Culinary Road, Houston, TX",
//   description:
//     "Expert chef with over 10 years of experience in gourmet cuisine, private catering, and meal planning for events.",
//   gmail: "emily.chef@example.com",
//   speciality: "Gourmet Cuisine",
// },
// {
//   id: 7,
//   name: "Michael Chef",
//   category: "Chef",
//   icon: "https://example.com/michael-chef-icon.jpg",
//   location: "765 Flavor St, New York, NY",
//   description:
//     "Renowned chef with specialties in international cuisines and private dining experiences.",
//   gmail: "michael.chef@example.com",
//   speciality: "International Cuisine",
// },
// {
//   id: 8,
//   name: "Mike Carpenter",
//   category: "Carpenter",
//   icon: "https://th.bing.com/th/id/OIP.q6k2NCtRRqH-WeDUOgvsCAHaEo?rs=1&pid=ImgDetMain",
//   location: "654 Woodwork Blvd, San Francisco, CA",
//   description:
//     "Skilled carpenter specializing in custom furniture, home repairs, and woodwork for commercial and residential spaces.",
//   gmail: "mike.carpenter@example.com",
//   speciality: "Custom Furniture",
// },
// {
//   id: 9,
//   name: "Anna Shifter",
//   category: "Shifting",
//   icon: "https://www.womendailymagazine.com/wp-content/uploads/2018/04/5-tips-on-moving-large-items-when-shifting-homes.jpg",
//   location: "987 Moving St, Seattle, WA",
//   description:
//     "Professional moving services for residential and commercial clients. Specialized in handling heavy and delicate items.",
//   gmail: "anna.shifter@example.com",
//   speciality: "Heavy Item Moving",
// },
// {
//   id: 10,
//   name: "Tom Electrician",
//   category: "Electrician",
//   icon: "https://www.build-review.com/wp-content/uploads/2022/03/Electrician.jpg",
//   location: "159 Voltage Ave, Miami, FL",
//   description:
//     "Certified electrician providing electrical installations, repairs, and maintenance for homes and commercial properties.",
//   gmail: "tom.electrician@example.com",
//   speciality: "Electrical Installations",
// },
// {
//   id: 11,
//   name: "Linda Plumber",
//   category: "Plumber",
//   icon: "https://th.bing.com/th/id/OIP.0le1QWF5qmpu7IBXQmLaAgHaFS?rs=1&pid=ImgDetMain",
//   location: "753 Waterline Street, Boston, MA",
//   description:
//     "Expert plumber offering pipe repairs, water heater installations, and emergency plumbing services for residential areas.",
//   gmail: "linda.plumber@example.com",
//   speciality: "Emergency Plumbing",
// },
// {
//   id: 12,
//   name: "Paul Painter",
//   category: "Painter",
//   icon: "https://th.bing.com/th/id/OIP.npxSXzzm0eqq4u7YiPVSHwAAAA?rs=1&pid=ImgDetMain",
//   location: "246 Art Lane, Austin, TX",
//   description:
//     "Professional painter specializing in interior and exterior painting, decorative finishes, and wallpapering for homes and offices.",
//   gmail: "paul.painter@example.com",
//   speciality: "Interior & Exterior Painting",
// },
// {
//   id: 13,
//   name: "John Painter",
//   category: "Painter",
//   icon: "https://example.com/john-painter-icon.jpg",
//   location: "987 Palette Ave, Dallas, TX",
//   description:
//     "Experienced painter with a focus on residential and commercial projects, known for precision and attention to detail.",
//   gmail: "john.painter@example.com",
//   speciality: "Residential Painting",
// },
// {
//   id: 14,
//   name: "Claire Cleaner",
//   category: "Cleaning",
//   icon: "https://th.bing.com/th/id/OIP.KkxfezKFPzxP8MXBT4hdxwHaE7?rs=1&pid=ImgDetMain",
//   location: "369 Tidy Avenue, Denver, CO",
//   description:
//     "Reliable cleaning services for residential and commercial properties, offering deep cleaning, office cleaning, and regular maintenance.",
//   gmail: "claire.cleaner@example.com",
//   speciality: "Deep Cleaning",
// },
// {
//   id: 15,
//   name: "Mark Cleaner",
//   category: "Cleaning",
//   icon: "https://example.com/mark-cleaner-icon.jpg",
//   location: "122 Sparkle St, Phoenix, AZ",
//   description:
//     "Experienced cleaner offering eco-friendly cleaning solutions for homes and offices.",
//   gmail: "mark.cleaner@example.com",
//   speciality: "Eco-Friendly Cleaning",
// },
// {
//   id: 16,
//   name: "Tom Electrician",
//   category: "Electrician",
//   icon: "https://www.build-review.com/wp-content/uploads/2022/03/Electrician.jpg",
//   location: "789 Light St, Atlanta, GA",
//   description:
//     "Electrician specializing in renewable energy installations and electrical troubleshooting.",
//   gmail: "tom.electrician@example.com",
//   speciality: "Renewable Energy",
// },
// {
//   id: 17,
//   name: "David Labour",
//   category: "Labour",
//   icon: "https://www.helpsafetyservices.com/helpss/wp-content/uploads/2019/09/two-construction-workers-1404x702.jpg",
//   location: "234 Hardwork St, Chicago, IL",
//   description:
//     "General labor services for various construction projects, focused on efficiency and quality.",
//   gmail: "david.labour2@example.com",
//   speciality: "Construction Efficiency",
// },
// {
//   id: 18,
//   name: "Samuel Mason",
//   category: "Mason",
//   icon: "https://example.com/samuel-mason-icon.jpg",
//   location: "512 Stone Street, Philadelphia, PA",
//   description:
//     "Experienced in heritage building masonry and custom stonework for commercial spaces.",
//   gmail: "samuel.mason@example.com",
//   speciality: "Custom Stonework",
// },
// {
//   id: 19,
//   name: "Lisa Gardner",
//   category: "Gardner",
//   icon: "https://example.com/lisa-gardner-icon.jpg",
//   location: "564 Greenway Dr, Portland, OR",
//   description:
//     "Specializes in sustainable gardening and landscape design with eco-friendly methods.",
//   gmail: "lisa.gardner@example.com",
//   speciality: "Sustainable Gardening",
// },
// {
//   id: 20,
//   name: "Nina Painter",
//   category: "Painter",
//   icon: "https://example.com/nina-painter-icon.jpg",
//   location: "789 Color Rd, Miami, FL",
//   description:
//     "Artistically-inclined painter offering mural painting and creative finishes for homes and public spaces.",
//   gmail: "nina.painter@example.com",
//   speciality: "Mural Painting",
// },

//   // Add more rows here...
// ];

// const columns = [
//   { field: 'id', headerName: '#', width: 70 },
//   {
//     field: 'icon',
//     headerName: 'Profile',
//     width: 100,
//     renderCell: (params) => (
//       <Avatar src={params.value} alt={params.row.name} />
//     ),
//   },
//   { field: 'name', headerName: 'Name', width: 150 },
//   { field: 'category', headerName: 'Category', width: 120 },
//   { field: 'location', headerName: 'Location', width: 200 },
//   { field: 'speciality', headerName: 'Speciality', width: 200 },
// ];

// export default function AllAppointements() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <h2>All Appointments</h2>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         disableSelectionOnClick
//         sortingOrder={['asc', 'desc']}
//       />
//     </div>
//   );
// }

import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import { Box, Button } from "@mui/material";

// Sample data for service providers
const serviceRows = [
  {
    id: 1,
    name: "John Mason",
    category: "Mason",
    icon: "https://th.bing.com/th/id/OIP.lHIsL4GUzxvBnaSXkijd4AHaE-?rs=1&pid=ImgDetMain",
    location: "123 Brick Lane, New York, NY",
    description:
      "Experienced mason specializing in brickwork, stone masonry, and repair services for homes and commercial buildings.",
    gmail: "john.mason@example.com",
    speciality: "Brick and Stone Masonry",
  },
  {
    id: 2,
    name: "Alex Mason",
    category: "Mason",
    icon: "https://example.com/alex-mason-icon.jpg",
    location: "789 Stone Rd, Los Angeles, CA",
    description:
      "Expert mason skilled in stone masonry and restoration projects for homes and heritage buildings.",
    gmail: "alex.mason@example.com",
    speciality: "Heritage Building Restoration",
  },
  {
    id: 3,
    name: "Sarah Gardner",
    category: "Gardner",
    icon: "https://5.imimg.com/data5/SELLER/Default/2022/10/CB/CQ/EH/152695818/garden-mali-service-500x500.jpeg",
    location: "456 Green Street, Los Angeles, CA",
    description:
      "Professional gardener offering landscape design, plant maintenance, and seasonal garden care for homes and offices.",
    gmail: "sarah.gardner@example.com",
    speciality: "Landscape Design",
  },
  {
    id: 4,
    name: "Mike Gardner",
    category: "Gardner",
    icon: "https://example.com/mike-gardner-icon.jpg",
    location: "123 Meadow Lane, Denver, CO",
    description:
      "Experienced gardener specializing in sustainable garden design and eco-friendly plant care.",
    gmail: "mike.gardner@example.com",
    speciality: "Eco-Friendly Gardening",
  },
  {
    id: 5,
    name: "David Labour",
    category: "Labour",
    icon: "https://www.helpsafetyservices.com/helpss/wp-content/uploads/2019/09/two-construction-workers-1404x702.jpg",
    location: "789 Worker Avenue, Chicago, IL",
    description:
      "General labor services for construction projects, renovations, and manual work. Available for large and small projects.",
    gmail: "david.labour@example.com",
    speciality: "Construction Labor",
  },
  {
    id: 6,
    name: "Emily Chef",
    category: "Chef",
    icon: "https://th.bing.com/th/id/OIP.gaRlMuiFb2pp72B6MUyvTQHaE7?rs=1&pid=ImgDetMain",
    location: "321 Culinary Road, Houston, TX",
    description:
      "Expert chef with over 10 years of experience in gourmet cuisine, private catering, and meal planning for events.",
    gmail: "emily.chef@example.com",
    speciality: "Gourmet Cuisine",
  },
  {
    id: 7,
    name: "Michael Chef",
    category: "Chef",
    icon: "https://example.com/michael-chef-icon.jpg",
    location: "765 Flavor St, New York, NY",
    description:
      "Renowned chef with specialties in international cuisines and private dining experiences.",
    gmail: "michael.chef@example.com",
    speciality: "International Cuisine",
  },
  {
    id: 8,
    name: "Mike Carpenter",
    category: "Carpenter",
    icon: "https://th.bing.com/th/id/OIP.q6k2NCtRRqH-WeDUOgvsCAHaEo?rs=1&pid=ImgDetMain",
    location: "654 Woodwork Blvd, San Francisco, CA",
    description:
      "Skilled carpenter specializing in custom furniture, home repairs, and woodwork for commercial and residential spaces.",
    gmail: "mike.carpenter@example.com",
    speciality: "Custom Furniture",
  },
  {
    id: 9,
    name: "Anna Shifter",
    category: "Shifting",
    icon: "https://www.womendailymagazine.com/wp-content/uploads/2018/04/5-tips-on-moving-large-items-when-shifting-homes.jpg",
    location: "987 Moving St, Seattle, WA",
    description:
      "Professional moving services for residential and commercial clients. Specialized in handling heavy and delicate items.",
    gmail: "anna.shifter@example.com",
    speciality: "Heavy Item Moving",
  },
  {
    id: 10,
    name: "Tom Electrician",
    category: "Electrician",
    icon: "https://www.build-review.com/wp-content/uploads/2022/03/Electrician.jpg",
    location: "159 Voltage Ave, Miami, FL",
    description:
      "Certified electrician providing electrical installations, repairs, and maintenance for homes and commercial properties.",
    gmail: "tom.electrician@example.com",
    speciality: "Electrical Installations",
  },
];

// Data for customers who booked services
const customerRows = [
    {
      id: 1,
      name: "James Smith",
      category: "Customer",
      picture: "https://i.pinimg.com/originals/93/d4/3c/93d43c25b863001ad11b70c3500c0e77.jpg",
      location: "45 West Avenue, New York, NY",
      email: "james.smith@example.com",
      bookedServices: [1, 3], // James booked service id 1 (John Mason) and id 3 (Sarah Gardner)
    },
    {
      id: 2,
      name: "Olivia Johnson",
      category: "Customer",
      picture: "https://i.pinimg.com/736x/bd/4a/ac/bd4aac6fa6f48e720d3ea9bd952c1226.jpg",
      location: "108 Beach St, Miami, FL",
      email: "olivia.johnson@example.com",
      contact: "+1 555-987-6543",
      bookedServices: [2], // Olivia booked service id 2 (Alex Mason)
    },
    {
      id: 3,
      name: "Liam Brown",
      category: "Customer",
      picture: "https://th.bing.com/th/id/OIP.Cf3rSUAqoBhMkJ-HTHq2aAHaLH?rs=1&pid=ImgDetMain",
      location: "567 Sunset Blvd, Los Angeles, CA",
      email: "liam.brown@example.com",
      contact: "+1 555-765-4321",
      bookedServices: [5, 8], // Liam booked service id 5 (David Labour) and id 8 (Mike Carpenter)
    },
    {
      id: 4,
      name: "Emma Davis",
      category: "Customer",
      picture: "https://images.news18.com/optimize/lb0X1pyUI-HiLWIIFQatWuhFGG8=/877x0/images.news18.com/ibnlive/uploads/877x0/jpg/2011/08/mattdamon_final.jpg",
      location: "900 Oak St, San Francisco, CA",
      email: "emma.davis@example.com",
      contact: "+1 555-234-5678",
      bookedServices: [3, 6], // Emma booked service id 3 (Sarah Gardner) and id 6 (Emily Chef)
    },
    {
      id: 5,
      name: "Noah Wilson",
      category: "Customer",
      picture: "https://th.bing.com/th/id/OIP.0otQuAFj4hPeK9owkXIP1gHaKF?rs=1&pid=ImgDetMain",
      location: "321 Pine Lane, Chicago, IL",
      email: "noah.wilson@example.com",
      contact: "+1 555-678-1234",
      bookedServices: [1, 7], // Noah booked service id 1 (John Mason) and id 7 (Michael Chef)
    },
    {
      id: 6,
      name: "Ava Martinez",
      category: "Customer",
      picture: "https://static.javatpoint.com/top10-technologies/images/top-10-hollywood-actors4.png",
      location: "123 Elm Ave, Austin, TX",
      email: "ava.martinez@example.com",
      contact: "+1 555-432-5678",
      bookedServices: [2, 9], // Ava booked service id 2 (Alex Mason) and id 9 (Anna Shifter)
    },
    {
      id: 7,
      name: "Elijah Garcia",
      category: "Customer",
      picture: "https://th.bing.com/th/id/OIP.GlbtcE6t3cQ-DS3RdpH59QHaFj?rs=1&pid=ImgDetMain",
      location: "789 Maple St, Denver, CO",
      email: "elijah.garcia@example.com",
      contact: "+1 555-876-5432",
      bookedServices: [4, 10], // Elijah booked service id 4 (Mike Gardner) and id 10 (Tom Electrician)
    },
    {
      id: 8,
      name: "Sophia Wilson",
      category: "Customer",
      picture: "https://i.pinimg.com/originals/40/d1/7c/40d17c8429ff8d540dcb03b4b73b7a40.jpg",
      location: "456 Willow St, Portland, OR",
      email: "sophia.wilson@example.com",
      contact: "+1 555-567-8901",
      bookedServices: [5], // Sophia booked service id 5 (David Labour)
    },
    {
      id: 9,
      name: "Mason Lee",
      category: "Customer",
      picture: "https://cdn1.vectorstock.com/i/1000x1000/52/23/businessman-in-suit-avatar-profile-vector-29005223.jpg",
      location: "852 Birch Rd, San Diego, CA",
      email: "mason.lee@example.com",
      contact: "+1 555-678-9012",
      bookedServices: [6, 8], // Mason booked service id 6 (Emily Chef) and id 8 (Mike Carpenter)
    },
    {
      id: 10,
      name: "Isabella Thompson",
      category: "Customer",
      picture: "https://i.pinimg.com/originals/70/c2/cc/70c2cc84b0ba191279abc9c5db1e85ec.jpg",
      location: "963 Cedar St, Philadelphia, PA",
      email: "isabella.thompson@example.com",
      contact: "+1 555-987-1234",
      bookedServices: [3, 10], // Isabella booked service id 3 (Sarah Gardner) and id 10 (Tom Electrician)
    },
  ];
  
// Define the combined columns for both customer and service provider views
// Define the combined columns for both customer and service provider views
// Define the combined columns for both customer and service provider views
const combinedColumns = [
    {
      field: "customerPicture",
      headerName: "Customer",
      width: 100,
      renderCell: (params) => (
        <Avatar alt={params.row.name} src={params.row.picture} />
      ),
    },
    {
      field: "serviceIcon",
      headerName: "Service Provider",
      width: 100,
      renderCell: (params) => (
        <Avatar alt={params.row.serviceName} src={params.row.icon} />
      ),
    },
    { field: "name", headerName: "Customer Name", width: 150 },
    { field: "serviceName", headerName: "Service Provider Name", width: 150 }, // New column for service provider name
    { field: "location", headerName: "Location", width: 200 },
    { field: "category", headerName: "Category", width: 120 },
    { field: "speciality", headerName: "Speciality", width: 200 },
    { field: "bookedBy", headerName: "Booked By", width: 150 },
  ];
  
  export default function AllAppointments() {
    const combinedRows = [];
  
    // Construct rows based on bookings
    customerRows.forEach((customer) => {
      customer.bookedServices.forEach((serviceId) => {
        const service = serviceRows.find((service) => service.id === serviceId);
        if (service) {
          combinedRows.push({
            id: `${customer.id}-${serviceId}`,
            icon: service.icon,
            picture: customer.picture, // Add customer picture
            name: customer.name,
            serviceName: service.name, // Add service provider name
            location: service.location,
            category: service.category,
            speciality: service.speciality,
            bookedBy: customer.name,
          });
        }
      });
    });
  
    // Return the DataGrid component
    return (
      <Box sx={{ height: 600, width: "100%" }}>
        <h2>Service Providers</h2>
        <DataGrid
          rows={combinedRows}
          columns={combinedColumns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
    );
  }
  