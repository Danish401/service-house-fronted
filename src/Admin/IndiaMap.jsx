import React, { useState, useEffect, useMemo } from "react";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { Box, Tooltip, Typography, Chip, Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { FaUsers, FaUserTie, FaMapMarkerAlt, FaMap } from "react-icons/fa";

// Major Indian cities with approximate coordinates
const INDIAN_CITIES = {
  "ludhiana": { lat: 30.9010, lng: 75.8573, state: "Punjab" },
  "mumbai": { lat: 19.0760, lng: 72.8777, state: "Maharashtra" },
  "delhi": { lat: 28.6139, lng: 77.2090, state: "Delhi" },
  "bangalore": { lat: 12.9716, lng: 77.5946, state: "Karnataka" },
  "bengaluru": { lat: 12.9716, lng: 77.5946, state: "Karnataka" },
  "hyderabad": { lat: 17.3850, lng: 78.4867, state: "Telangana" },
  "chennai": { lat: 13.0827, lng: 80.2707, state: "Tamil Nadu" },
  "kolkata": { lat: 22.5726, lng: 88.3639, state: "West Bengal" },
  "pune": { lat: 18.5204, lng: 73.8567, state: "Maharashtra" },
  "ahmedabad": { lat: 23.0225, lng: 72.5714, state: "Gujarat" },
  "jaipur": { lat: 26.9124, lng: 75.7873, state: "Rajasthan" },
  "surat": { lat: 21.1702, lng: 72.8311, state: "Gujarat" },
  "lucknow": { lat: 26.8467, lng: 80.9462, state: "Uttar Pradesh" },
  "kanpur": { lat: 26.4499, lng: 80.3319, state: "Uttar Pradesh" },
  "nagpur": { lat: 21.1458, lng: 79.0882, state: "Maharashtra" },
  "indore": { lat: 22.7196, lng: 75.8577, state: "Madhya Pradesh" },
  "thane": { lat: 19.2183, lng: 72.9781, state: "Maharashtra" },
  "bhopal": { lat: 23.2599, lng: 77.4126, state: "Madhya Pradesh" },
  "visakhapatnam": { lat: 17.6868, lng: 83.2185, state: "Andhra Pradesh" },
  "patna": { lat: 25.5941, lng: 85.1376, state: "Bihar" },
  "vadodara": { lat: 22.3072, lng: 73.1812, state: "Gujarat" },
  "ghaziabad": { lat: 28.6692, lng: 77.4538, state: "Uttar Pradesh" },
  "gurgaon": { lat: 28.4089, lng: 77.0378, state: "Haryana" },
  "gurugram": { lat: 28.4089, lng: 77.0378, state: "Haryana" },
  "coimbatore": { lat: 11.0168, lng: 76.9558, state: "Tamil Nadu" },
  "kochi": { lat: 9.9312, lng: 76.2673, state: "Kerala" },
  "chandigarh": { lat: 30.7333, lng: 76.7794, state: "Chandigarh" },
  "amritsar": { lat: 31.6340, lng: 74.8723, state: "Punjab" },
  "jalandhar": { lat: 31.3260, lng: 75.5762, state: "Punjab" },
};

// State center coordinates
const STATE_CENTERS = {
  "Punjab": { lat: 30.9010, lng: 75.8573 },
  "Maharashtra": { lat: 19.7515, lng: 75.7139 },
  "Delhi": { lat: 28.6139, lng: 77.2090 },
  "Karnataka": { lat: 12.9716, lng: 77.5946 },
  "Telangana": { lat: 17.3850, lng: 78.4867 },
  "Tamil Nadu": { lat: 11.1271, lng: 78.6569 },
  "West Bengal": { lat: 22.9868, lng: 87.8550 },
  "Gujarat": { lat: 23.0225, lng: 72.5714 },
  "Rajasthan": { lat: 26.9124, lng: 75.7873 },
  "Uttar Pradesh": { lat: 26.8467, lng: 80.9462 },
  "Madhya Pradesh": { lat: 22.9734, lng: 78.6569 },
  "Andhra Pradesh": { lat: 15.9129, lng: 79.7400 },
  "Bihar": { lat: 25.5941, lng: 85.1376 },
  "Haryana": { lat: 29.0588, lng: 76.0856 },
  "Kerala": { lat: 10.8505, lng: 76.2711 },
  "Chandigarh": { lat: 30.7333, lng: 76.7794 },
  "Assam": { lat: 26.2006, lng: 92.9376 },
  "Odisha": { lat: 20.9517, lng: 85.0985 },
  "Jharkhand": { lat: 23.6102, lng: 85.2799 },
  "Chhattisgarh": { lat: 21.2787, lng: 81.8661 },
  "Uttarakhand": { lat: 30.0668, lng: 79.0193 },
  "Himachal Pradesh": { lat: 31.1048, lng: 77.1734 },
  "Goa": { lat: 15.2993, lng: 74.1240 },
};

// Function to get coordinates from address
const getCoordinatesFromAddress = (address1, address2) => {
  if (!address1 && !address2) return null;
  
  const fullAddress = `${address1 || ""} ${address2 || ""}`.toLowerCase().trim();
  if (!fullAddress) return null;

  // Try to find city in address
  for (const [city, data] of Object.entries(INDIAN_CITIES)) {
    if (fullAddress.includes(city)) {
      const offset = (Math.random() - 0.5) * 0.3;
      return {
        coordinates: [data.lng + offset, data.lat + offset],
        city: city.charAt(0).toUpperCase() + city.slice(1),
        state: data.state,
        address: `${address1 || ""} ${address2 || ""}`.trim(),
      };
    }
  }

  // If no city found, try to find state and use state center
  const states = Object.keys(STATE_CENTERS);
  for (const state of states) {
    if (fullAddress.includes(state.toLowerCase())) {
      const center = STATE_CENTERS[state];
      const offset = (Math.random() - 0.5) * 0.8;
      return {
        coordinates: [center.lng + offset, center.lat + offset],
        city: "State Center",
        state: state,
        address: `${address1 || ""} ${address2 || ""}`.trim(),
      };
    }
  }

  return null;
};

const IndiaMap = () => {
  const [tooltipContent, setTooltipContent] = useState(null);
  const { isDarkMode } = useSelector((state) => state.bookings);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  // Get data from Redux
  const { allUsers } = useSelector((state) => state.auth);
  const { employees } = useSelector((state) => state.employeeRegister);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Process ALL locations from customers and employees
  const allLocations = useMemo(() => {
    const locs = [];

    // Process customers
    if (allUsers && Array.isArray(allUsers)) {
      allUsers.forEach((customer) => {
        const coords = getCoordinatesFromAddress(customer.address1, customer.address2);
        if (coords) {
          locs.push({
            ...coords,
            type: "customer",
            name: customer.name,
            email: customer.email,
            phone: customer.phone,
            id: customer._id,
            fullAddress: `${customer.address1 || ""} ${customer.address2 || ""}`.trim(),
          });
        }
      });
    }

    // Process employees
    if (employees && Array.isArray(employees)) {
      employees.forEach((employee) => {
        const coords = getCoordinatesFromAddress(employee.address1, employee.address2);
        if (coords) {
          locs.push({
            ...coords,
            type: "employee",
            name: employee.name,
            category: employee.category,
            speciality: employee.speciality,
            id: employee._id,
            fullAddress: `${employee.address1 || ""} ${employee.address2 || ""}`.trim(),
          });
        }
      });
    }

    return locs;
  }, [allUsers, employees]);

  // Group nearby locations (within 0.1 degree)
  const groupedLocations = useMemo(() => {
    const groups = [];
    const processed = new Set();

    allLocations.forEach((loc, idx) => {
      if (processed.has(idx)) return;

      const group = {
        coordinates: loc.coordinates,
        city: loc.city,
        state: loc.state,
        customers: [],
        employees: [],
        addresses: new Set(),
      };

      // Find nearby locations
      allLocations.forEach((otherLoc, otherIdx) => {
        if (processed.has(otherIdx)) return;

        const distance = Math.sqrt(
          Math.pow(loc.coordinates[0] - otherLoc.coordinates[0], 2) +
          Math.pow(loc.coordinates[1] - otherLoc.coordinates[1], 2)
        );

        if (distance < 0.15) {
          processed.add(otherIdx);
          if (otherLoc.type === "customer") {
            group.customers.push(otherLoc);
          } else {
            group.employees.push(otherLoc);
          }
          if (otherLoc.fullAddress) {
            group.addresses.add(otherLoc.fullAddress);
          }
        }
      });

      if (group.customers.length > 0 || group.employees.length > 0) {
        groups.push(group);
      }
    });

    return groups;
  }, [allLocations]);

  const mapScale = windowWidth < 768 ? 800 : windowWidth < 1024 ? 1000 : 1200;

  // Calculate statistics
  const totalCustomers = useMemo(() => {
    return allLocations.filter(l => l.type === "customer").length;
  }, [allLocations]);

  const totalEmployees = useMemo(() => {
    return allLocations.filter(l => l.type === "employee").length;
  }, [allLocations]);

  const uniqueLocations = useMemo(() => {
    return groupedLocations.length;
  }, [groupedLocations]);

  return (
    <Box className="w-full h-full flex flex-col items-center justify-center p-4 md:p-6">
      {/* Header with Statistics */}
      <div className="w-full mb-4 md:mb-6">
        <div className="text-center mb-4">
          <Typography
            variant="h4"
            className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            India - All Customer & Employee Locations
          </Typography>
          <Typography
            variant="body2"
            className={`text-sm md:text-base ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            View all customer and employee locations with addresses on the India map
          </Typography>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-4">
          <Box
            className={`p-4 rounded-xl transition-all duration-300 ${
              isDarkMode
                ? "bg-blue-900/30 border border-blue-500/30"
                : "bg-blue-50 border border-blue-200"
            }`}
          >
            <div className="flex items-center justify-center space-x-2 mb-2">
              <FaUsers className={isDarkMode ? "text-blue-300" : "text-blue-600"} />
              <Typography
                variant="h6"
                className={`font-bold ${isDarkMode ? "text-blue-200" : "text-blue-900"}`}
              >
                {totalCustomers}
              </Typography>
            </div>
            <Typography
              variant="body2"
              className={`text-center ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Total Customers
            </Typography>
          </Box>

          <Box
            className={`p-4 rounded-xl transition-all duration-300 ${
              isDarkMode
                ? "bg-purple-900/30 border border-purple-500/30"
                : "bg-purple-50 border border-purple-200"
            }`}
          >
            <div className="flex items-center justify-center space-x-2 mb-2">
              <FaUserTie className={isDarkMode ? "text-purple-300" : "text-purple-600"} />
              <Typography
                variant="h6"
                className={`font-bold ${isDarkMode ? "text-purple-200" : "text-purple-900"}`}
              >
                {totalEmployees}
              </Typography>
            </div>
            <Typography
              variant="body2"
              className={`text-center ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Total Employees
            </Typography>
          </Box>

          <Box
            className={`p-4 rounded-xl transition-all duration-300 ${
              isDarkMode
                ? "bg-emerald-900/30 border border-emerald-500/30"
                : "bg-emerald-50 border border-emerald-200"
            }`}
          >
            <div className="flex items-center justify-center space-x-2 mb-2">
              <FaMapMarkerAlt className={isDarkMode ? "text-emerald-300" : "text-emerald-600"} />
              <Typography
                variant="h6"
                className={`font-bold ${isDarkMode ? "text-emerald-200" : "text-emerald-900"}`}
              >
                {uniqueLocations}
              </Typography>
            </div>
            <Typography
              variant="body2"
              className={`text-center ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Unique Locations
            </Typography>
          </Box>
        </div>
      </div>

      {/* Map Container */}
      <Box
        className={`w-full max-w-6xl rounded-2xl p-4 md:p-6 lg:p-8 transition-all duration-300 ${
          isDarkMode
            ? "bg-gray-800/30 backdrop-blur-sm border border-gray-700/50"
            : "bg-gradient-to-br from-purple-50/50 to-indigo-50/50 border border-purple-100"
        }`}
      >
        <Box 
          className="w-full overflow-visible rounded-xl"
          sx={{
            width: "100%",
            height: { xs: "500px", sm: "600px", md: "700px", lg: "800px" },
            minHeight: "500px",
            position: "relative",
            backgroundColor: isDarkMode ? "rgba(31, 41, 55, 0.3)" : "rgba(249, 250, 251, 0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {groupedLocations.length === 0 ? (
            <Box className="text-center py-8">
              <FaMapMarkerAlt className={`text-6xl mb-4 mx-auto ${isDarkMode ? "text-gray-600" : "text-gray-400"}`} />
              <Typography
                variant="h6"
                className={isDarkMode ? "text-gray-400" : "text-gray-600"}
              >
                No location data available
              </Typography>
              <Typography
                variant="body2"
                className={`mt-2 ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}
              >
                Add addresses with city/state names to see locations on the map
              </Typography>
            </Box>
          ) : (
            <ComposableMap
              projectionConfig={{
                scale: mapScale,
                center: [78, 22],
              }}
              width={windowWidth < 768 ? 600 : windowWidth < 1024 ? 800 : 1000}
              height={windowWidth < 768 ? 500 : windowWidth < 1024 ? 600 : 700}
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Load India from world atlas */}
              <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@1/world/110m.json">
                {({ geographies }) => {
                  if (!geographies) {
                    return null;
                  }
                  
                  if (!mapLoaded) {
                    setTimeout(() => setMapLoaded(true), 100);
                  }
                  
                  try {
                    let geoArray = [];
                    if (Array.isArray(geographies)) {
                      geoArray = geographies;
                    } else if (geographies?.features && Array.isArray(geographies.features)) {
                      geoArray = geographies.features;
                    } else if (geographies?.objects && typeof geographies.objects === 'object') {
                      const objects = geographies.objects;
                      if (objects.countries) {
                        const countries = objects.countries;
                        if (countries.geometries && Array.isArray(countries.geometries)) {
                          geoArray = countries.geometries;
                        }
                      } else {
                        const keys = Object.keys(objects);
                        for (const key of keys) {
                          const obj = objects[key];
                          if (obj?.geometries && Array.isArray(obj.geometries)) {
                            geoArray = obj.geometries;
                            break;
                          }
                        }
                      }
                    }

                    // Find India (ID 356 in Natural Earth)
                    const indiaGeo = geoArray.find(geo => 
                      geo.id === 356 || 
                      geo.properties?.NAME === "India" ||
                      geo.properties?.NAME_LONG === "India" ||
                      geo.properties?.name === "India" ||
                      (geo.properties?.ISO_A3 === "IND")
                    );

                    if (indiaGeo) {
                      return (
                        <Geography
                          key={indiaGeo?.rsmKey || "india"}
                          geography={indiaGeo}
                          fill={isDarkMode ? "#374151" : "#e6e7ff"}
                          stroke={isDarkMode ? "#4b5563" : "#cbd5e1"}
                          strokeWidth={1}
                          style={{
                            default: {
                              fill: isDarkMode ? "#374151" : "#e6e7ff",
                              outline: "none",
                            },
                            hover: {
                              fill: isDarkMode ? "#4b5563" : "#d1d5ff",
                              outline: "none",
                            },
                          }}
                        />
                      );
                    }
                  } catch (error) {
                    console.error("Error rendering India map:", error);
                  }
                  
                  return null;
                }}
              </Geographies>

              {/* All Location Markers */}
              {groupedLocations.map((location, index) => {
                const total = location.customers.length + location.employees.length;
                const isHovered = hoveredLocation === index;
                const hasCustomers = location.customers.length > 0;
                const hasEmployees = location.employees.length > 0;
                
                return (
                  <Marker
                    key={index}
                    coordinates={location.coordinates}
                    onMouseEnter={() => {
                      setHoveredLocation(index);
                      setTooltipContent(location);
                    }}
                    onMouseLeave={() => {
                      setHoveredLocation(null);
                      setTooltipContent(null);
                    }}
                  >
                    <g>
                      {/* Outer ring for hover effect */}
                      {isHovered && (
                        <circle
                          r={12}
                          fill="none"
                          stroke={hasCustomers ? "#3b82f6" : "#9333ea"}
                          strokeWidth={2}
                          opacity={0.5}
                          style={{
                            animation: "pulse 2s infinite",
                          }}
                        />
                      )}
                      {/* Main marker */}
                      <circle
                        r={isHovered ? 10 : 8}
                        fill={hasCustomers ? "#3b82f6" : "#9333ea"}
                        stroke="#fff"
                        strokeWidth={2}
                        style={{
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          filter: isHovered ? "drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))" : "none",
                        }}
                      />
                      {/* Count badge */}
                      {total > 1 && (
                        <text
                          textAnchor="middle"
                          y={4}
                          style={{
                            fontFamily: "system-ui",
                            fontSize: "11px",
                            fill: "#fff",
                            fontWeight: "bold",
                            pointerEvents: "none",
                          }}
                        >
                          {total}
                        </text>
                      )}
                      {/* Location label on hover */}
                      {isHovered && (
                        <text
                          textAnchor="middle"
                          y={-15}
                          style={{
                            fontFamily: "system-ui",
                            fontSize: "13px",
                            fill: isDarkMode ? "#fff" : "#000",
                            fontWeight: "bold",
                            pointerEvents: "none",
                            textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                          }}
                        >
                          {location.city}, {location.state}
                        </text>
                      )}
                    </g>
                  </Marker>
                );
              })}
            </ComposableMap>
          )}
        </Box>

        {/* Detailed Tooltip Display */}
        {tooltipContent && (
          <Box
            className={`mt-4 md:mt-6 p-4 rounded-xl transition-all duration-300 ${
              isDarkMode
                ? "bg-purple-900/30 backdrop-blur-sm border border-purple-500/30 text-purple-200"
                : "bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-200 text-purple-900"
            }`}
          >
            <Typography variant="h6" className="font-bold mb-2 text-center">
              📍 {tooltipContent.city}, {tooltipContent.state}
            </Typography>
            
            {/* Show all addresses at this location */}
            {tooltipContent.addresses && tooltipContent.addresses.size > 0 && (
              <Box className="mb-3">
                <Typography variant="subtitle2" className="font-bold mb-2">
                  Addresses at this location:
                </Typography>
                <div className="space-y-1 max-h-24 overflow-y-auto">
                  {Array.from(tooltipContent.addresses).map((addr, idx) => (
                    <Chip
                      key={idx}
                      label={addr}
                      size="small"
                      className={`mr-1 mb-1 ${isDarkMode ? "bg-gray-700" : "bg-white"}`}
                    />
                  ))}
                </div>
              </Box>
            )}
            
            {tooltipContent.customers.length > 0 && (
              <Box className="mb-3">
                <Typography variant="subtitle2" className="font-bold mb-2 flex items-center space-x-2">
                  <FaUsers className="text-blue-500" />
                  <span>Customers ({tooltipContent.customers.length})</span>
                </Typography>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {tooltipContent.customers.map((customer, idx) => (
                    <Box key={idx} className={`p-2 rounded ${isDarkMode ? "bg-gray-700/50" : "bg-white/50"}`}>
                      <Typography variant="caption" className="font-semibold block">
                        👤 {customer.name}
                      </Typography>
                      {customer.email && (
                        <Typography variant="caption" className="block text-xs opacity-75">
                          📧 {customer.email}
                        </Typography>
                      )}
                      {customer.phone && (
                        <Typography variant="caption" className="block text-xs opacity-75">
                          📞 {customer.phone}
                        </Typography>
                      )}
                      {customer.fullAddress && (
                        <Typography variant="caption" className="block text-xs opacity-75 mt-1">
                          📍 {customer.fullAddress}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </div>
              </Box>
            )}

            {tooltipContent.employees.length > 0 && (
              <Box>
                <Typography variant="subtitle2" className="font-bold mb-2 flex items-center space-x-2">
                  <FaUserTie className="text-purple-500" />
                  <span>Employees ({tooltipContent.employees.length})</span>
                </Typography>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {tooltipContent.employees.map((employee, idx) => (
                    <Box key={idx} className={`p-2 rounded ${isDarkMode ? "bg-gray-700/50" : "bg-white/50"}`}>
                      <Typography variant="caption" className="font-semibold block">
                        👤 {employee.name}
                      </Typography>
                      {employee.category && (
                        <Typography variant="caption" className="block text-xs opacity-75">
                          🛠️ {employee.category} - {employee.speciality}
                        </Typography>
                      )}
                      {employee.fullAddress && (
                        <Typography variant="caption" className="block text-xs opacity-75 mt-1">
                          📍 {employee.fullAddress}
                        </Typography>
                      )}
                    </Box>
                  ))}
                </div>
              </Box>
            )}
          </Box>
        )}
      </Box>

      {/* Legend */}
      <Box
        className={`mt-4 md:mt-6 w-full max-w-4xl p-4 md:p-6 rounded-xl transition-all duration-300 ${
          isDarkMode
            ? "bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
            : "bg-white/50 backdrop-blur-sm border border-gray-200"
        }`}
      >
        <Typography
          variant="h6"
          className={`font-bold mb-3 text-center ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Map Legend
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          <div className="flex items-center justify-center space-x-3">
            <div className="w-6 h-6 rounded-full bg-blue-500 border-2 border-white" />
            <Typography variant="body2" className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              Customer Locations (Blue)
            </Typography>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-6 h-6 rounded-full bg-purple-500 border-2 border-white" />
            <Typography variant="body2" className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              Employee Locations (Purple)
            </Typography>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-bold">2</span>
            </div>
            <Typography variant="body2" className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              Multiple People (shows count)
            </Typography>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <FaMapMarkerAlt className={isDarkMode ? "text-gray-400" : "text-gray-600"} />
            <Typography variant="body2" className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
              Hover to see addresses & details
            </Typography>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default IndiaMap;
