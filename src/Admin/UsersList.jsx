



import React from "react";
import { Box, Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";




export const Data1 = [
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
  {
    id: 11,
    name: "Linda Plumber",
    category: "Plumber",
    icon: "https://th.bing.com/th/id/OIP.0le1QWF5qmpu7IBXQmLaAgHaFS?rs=1&pid=ImgDetMain",
    location: "753 Waterline Street, Boston, MA",
    description:
      "Expert plumber offering pipe repairs, water heater installations, and emergency plumbing services for residential areas.",
    gmail: "linda.plumber@example.com",
    speciality: "Emergency Plumbing",
  },
  {
    id: 12,
    name: "Paul Painter",
    category: "Painter",
    icon: "https://th.bing.com/th/id/OIP.npxSXzzm0eqq4u7YiPVSHwAAAA?rs=1&pid=ImgDetMain",
    location: "246 Art Lane, Austin, TX",
    description:
      "Professional painter specializing in interior and exterior painting, decorative finishes, and wallpapering for homes and offices.",
    gmail: "paul.painter@example.com",
    speciality: "Interior & Exterior Painting",
  },
  {
    id: 13,
    name: "John Painter",
    category: "Painter",
    icon: "https://example.com/john-painter-icon.jpg",
    location: "987 Palette Ave, Dallas, TX",
    description:
      "Experienced painter with a focus on residential and commercial projects, known for precision and attention to detail.",
    gmail: "john.painter@example.com",
    speciality: "Residential Painting",
  },
  {
    id: 14,
    name: "Claire Cleaner",
    category: "Cleaning",
    icon: "https://th.bing.com/th/id/OIP.KkxfezKFPzxP8MXBT4hdxwHaE7?rs=1&pid=ImgDetMain",
    location: "369 Tidy Avenue, Denver, CO",
    description:
      "Reliable cleaning services for residential and commercial properties, offering deep cleaning, office cleaning, and regular maintenance.",
    gmail: "claire.cleaner@example.com",
    speciality: "Deep Cleaning",
  },
  {
    id: 15,
    name: "Mark Cleaner",
    category: "Cleaning",
    icon: "https://example.com/mark-cleaner-icon.jpg",
    location: "122 Sparkle St, Phoenix, AZ",
    description:
      "Experienced cleaner offering eco-friendly cleaning solutions for homes and offices.",
    gmail: "mark.cleaner@example.com",
    speciality: "Eco-Friendly Cleaning",
  },
  {
    id: 16,
    name: "Tom Electrician",
    category: "Electrician",
    icon: "https://www.build-review.com/wp-content/uploads/2022/03/Electrician.jpg",
    location: "789 Light St, Atlanta, GA",
    description:
      "Electrician specializing in renewable energy installations and electrical troubleshooting.",
    gmail: "tom.electrician@example.com",
    speciality: "Renewable Energy",
  },
  {
    id: 17,
    name: "David Labour",
    category: "Labour",
    icon: "https://www.helpsafetyservices.com/helpss/wp-content/uploads/2019/09/two-construction-workers-1404x702.jpg",
    location: "234 Hardwork St, Chicago, IL",
    description:
      "General labor services for various construction projects, focused on efficiency and quality.",
    gmail: "david.labour2@example.com",
    speciality: "Construction Efficiency",
  },
  {
    id: 18,
    name: "Samuel Mason",
    category: "Mason",
    icon: "https://example.com/samuel-mason-icon.jpg",
    location: "512 Stone Street, Philadelphia, PA",
    description:
      "Experienced in heritage building masonry and custom stonework for commercial spaces.",
    gmail: "samuel.mason@example.com",
    speciality: "Custom Stonework",
  },
  {
    id: 19,
    name: "Lisa Gardner",
    category: "Gardner",
    icon: "https://example.com/lisa-gardner-icon.jpg",
    location: "564 Greenway Dr, Portland, OR",
    description:
      "Specializes in sustainable gardening and landscape design with eco-friendly methods.",
    gmail: "lisa.gardner@example.com",
    speciality: "Sustainable Gardening",
  },
  {
    id: 20,
    name: "Nina Painter",
    category: "Painter",
    icon: "https://example.com/nina-painter-icon.jpg",
    location: "789 Color Rd, Miami, FL",
    description:
      "Artistically-inclined painter offering mural painting and creative finishes for homes and public spaces.",
    gmail: "nina.painter@example.com",
    speciality: "Mural Painting",
  },
];

function UsersList({ userList = Data1, title }) {
  return (
    <Box sx={{ padding: 4, backgroundColor: "#f5f5f5" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "#7d66d9", textAlign: "center" }}
      >
      
      </Typography>
      <Grid container spacing={3}>
        {userList.length > 0
          ? userList.map((user) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
               
                  <Card
                    sx={{
                      borderRadius: 2,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                      transition: "0.3s",
                      "&:hover": {
                        boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
                        transform: "scale(1.02)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      src={user.icon}
                      alt={user.name}
                      sx={{
                        height: { xs: 150, md: 200 },
                        objectFit: "cover",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" sx={{ color: "#7d66d9" }}>
                        {user.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#555", fontStyle: "italic" }}>
                        {user.category} - {user.speciality}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#777", mt: 1 }}>
                        {user.location}
                      </Typography>
                    </CardContent>
                   
                  </Card>
              
              </Grid>
            ))
          : Array.from({ length: 8 }, (_, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <Box
                  className="animate-pulse"
                  sx={{
                    width: "100%",
                    height: { xs: 150, md: 200 },
                    backgroundColor: "#e0e0e0",
                    borderRadius: 2,
                  }}
                />
              </Grid>
            ))}
      </Grid>
    </Box>
  );
}

export default UsersList;
