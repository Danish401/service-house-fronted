

// import React from "react";
// import { PolarArea, Line, Bar, Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   RadialLinearScale,
//   ArcElement,
//   Tooltip,
//   Legend,
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
//   BarElement,
//   Title
// } from "chart.js";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// // Register Chart.js modules
// ChartJS.register(
//   RadialLinearScale,
//   ArcElement,
//   Tooltip,
//   Legend,
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
//   BarElement,
//   Title
// );

// const ChartComponent = () => {
//   // Polar Area Chart Data
//   const polarAreaData = {
//     labels: ["Employee", "Customer", "Accepted", "Rejected", "Completed", "Pending"],
//     datasets: [
//       {
//         data: [300, 500, 200, 150, 600, 100],
//         backgroundColor: [
//           "#7d66d9",
//           "#9b9ef0",
//           "#a38ae8",
//           "#abbdf9",
//           "#e9d5ff",
//           "#e2ddfe",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Shaded Area Line Chart Data
//   const shadedAreaLineData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Performance",
//         data: [65, 59, 80, 81, 56, 55],
//         fill: true,
//         backgroundColor: "rgba(123,102,217,0.3)",
//         borderColor: "#7d66d9",
//         tension: 0.4,
//       },
//     ],
//   };

//   // Bar Chart Data
//   const barChartData = {
//     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//     datasets: [
//       {
//         label: "Votes",
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           "#7d66d9",
//           "#9b9ef0",
//           "#a38ae8",
//           "#abbdf9",
//           "#e9d5ff",
//           "#e2ddfe",
//         ],
//         borderColor: [
//           "#7d66d9",
//           "#9b9ef0",
//           "#a38ae8",
//           "#abbdf9",
//           "#e9d5ff",
//           "#e2ddfe",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Pie Chart Data
//   const pieChartData = {
//     labels: ["Completed", "Pending", "Rejected"],
//     datasets: [
//       {
//         data: [300, 150, 100],
//         backgroundColor: ["#7d66d9", "#abbdf9", "#e2ddfe"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Component styles
//   const styles = {
//     container: {
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "space-between",
//       gap: "20px",
//       padding: "20px",
//       backgroundColor: "#ffffff",
//       color: "#111827",
//       borderRadius: "10px",
//     },
//     chartContainer: {
//       flex: "1 1 calc(50% - 40px)",
//       backgroundColor: "#f9fafb",
//       padding: "20px",
//       borderRadius: "10px",
//       boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//       height: "400px", // Ensures proper height for the map
//     },
//     title: {
//       textAlign: "center",
//       marginBottom: "10px",
//       color: "#111827",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       {/* Polar Area Chart */}
//       <div style={styles.chartContainer}>
//         <h3 style={styles.title}>Polar Area Chart</h3>
//         <PolarArea data={polarAreaData} />
//       </div>

//       {/* Shaded Area Line Chart */}
//       <div style={styles.chartContainer}>
//         <h3 style={styles.title}>Shaded Area Line Chart</h3>
//         <Line data={shadedAreaLineData} />
//       </div>

//       {/* Bar Chart */}
//       <div style={styles.chartContainer}>
//         <h3 style={styles.title}>Bar Chart</h3>
//         <Bar data={barChartData} />
//       </div>

//       {/* Pie Chart */}
//       <div style={styles.chartContainer}>
//         <h3 style={styles.title}>Pie Chart</h3>
//         <Pie data={pieChartData} />
//       </div>

//       {/* World Map Chart */}
//       <div style={styles.chartContainer}>
//         <h3 style={styles.title}>World Map</h3>
//         <ComposableMap
//           projectionConfig={{ scale: 160 }}
//           style={{ width: "100%", height: "100%" }}
//         >
//           <Geographies geography="https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson">
//             {({ geographies }) =>
//               geographies.map((geo) => (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   style={{
//                     default: { fill: "#9b9ef0", outline: "none" },
//                     hover: { fill: "#5b5bd6", outline: "none" },
//                     pressed: { fill: "#e9d5ff", outline: "none" },
//                   }}
//                 />
//               ))
//             }
//           </Geographies>
//         </ComposableMap>
//       </div>
//     </div>
//   );
// };

// export default ChartComponent;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBookings } from "../features/bookingSlice";
import { PolarArea, Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
} from "chart.js";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

ChartJS.register(
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  BarElement,
  Title
);

const ChartComponent = () => {
  const dispatch = useDispatch();
  const { allbookings: bookings, loading, error, isDarkMode } = useSelector(
    (state) => state.bookings
  );

  useEffect(() => {
    dispatch(getAllBookings());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Calculate data
  const employeeCount = new Set(bookings.map((b) => b.employee._id)).size;
  const customerCount = new Set(bookings.map((b) => b.customer._id)).size;
  const statusCounts = bookings.reduce(
    (acc, booking) => {
      acc[booking.status] = (acc[booking.status] || 0) + 1;
      return acc;
    },
    { Pending: 0, Accepted: 0, Completed: 0, Rejected: 0 }
  );
  const monthlyBookings = bookings.reduce((acc, booking) => {
    const month = new Date(booking.date).toLocaleString("default", {
      month: "short",
    });
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});

  // Colors for light and dark modes
  const lightColors = ["#7d66d9", "#9b9ef0", "#a38ae8", "#abbdf9", "#e9d5ff"];
  const darkColors = [
    "#009688",
    "#00897b",
    "#00796b",
    "#00695c",
    "#b2dfdb",
    "#80cbc4",
  ];

  const backgroundColors = isDarkMode ? darkColors : lightColors;

  // Chart data
  const polarAreaData = {
    labels: ["Employees", "Customers", "Accepted", "Rejected", "Completed", "Pending"],
    datasets: [
      {
        data: [
          employeeCount,
          customerCount,
          statusCounts.Accepted,
          statusCounts.Rejected,
          statusCounts.Completed,
          statusCounts.Pending,
        ],
        backgroundColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  const shadedAreaLineData = {
    labels: Object.keys(monthlyBookings),
    datasets: [
      {
        label: "Monthly Bookings",
        data: Object.values(monthlyBookings),
        fill: true,
        backgroundColor: isDarkMode ? "rgba(0, 150, 136, 0.3)" : "rgba(123,102,217,0.3)",
        borderColor: isDarkMode ? "#00897b" : "#7d66d9",
        tension: 0.4,
      },
    ],
  };

  const barChartData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        label: "Booking Status",
        data: Object.values(statusCounts),
        backgroundColor: backgroundColors,
        borderColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ["Completed", "Pending", "Rejected"],
    datasets: [
      {
        data: [
          statusCounts.Completed,
          statusCounts.Pending,
          statusCounts.Rejected,
        ],
        backgroundColor: backgroundColors.slice(0, 3),
        borderWidth: 1,
      },
    ],
  };

  // Dynamic styles for dark mode
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "20px",
      padding: "20px",
      backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
      color: isDarkMode ? "#e5e7eb" : "#111827",
      borderRadius: "10px",
    },
    chartContainer: {
      flex: "1 1 calc(50% - 40px)",
      backgroundColor: isDarkMode ? "#374151" : "#f9fafb",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: isDarkMode
        ? "0px 4px 6px rgba(0, 0, 0, 0.6)"
        : "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    title: {
      textAlign: "center",
      marginBottom: "10px",
      color: isDarkMode ? "#e5e7eb" : "#111827",
    },
  };

  return (
    <div style={styles.container}>
      {/* Polar Area Chart */}
      <div style={styles.chartContainer}>
        <h3 style={styles.title}>Polar Area Chart</h3>
        <PolarArea data={polarAreaData} />
      </div>

      {/* Shaded Area Line Chart */}
      <div style={styles.chartContainer}>
        <h3 style={styles.title}>Monthly Bookings</h3>
        <Line data={shadedAreaLineData} />
      </div>

      {/* Bar Chart */}
      <div style={styles.chartContainer}>
        <h3 style={styles.title}>Booking Status</h3>
        <Bar data={barChartData} />
      </div>

      {/* Pie Chart */}
      <div style={styles.chartContainer}>
        <h3 style={styles.title}>Status Distribution</h3>
        <Pie data={pieChartData} />
      </div>

      {/* World Map */}
      <div style={styles.chartContainer}>
        <h3 style={styles.title}>World Map</h3>
        <ComposableMap
          projectionConfig={{ scale: 160 }}
          style={{ width: "100%", height: "100%" }}
        >
          <Geographies geography="https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {
                      fill: isDarkMode ? "#4b5563" : "#9b9ef0",
                      outline: "none",
                    },
                    hover: {
                      fill: isDarkMode ? "#6b7280" : "#5b5bd6",
                      outline: "none",
                    },
                    pressed: {
                      fill: isDarkMode ? "#d1d5db" : "#e9d5ff",
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default ChartComponent;



//wom
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllBookings } from "../features/bookingSlice";
// import { PolarArea, Line, Bar, Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   RadialLinearScale,
//   ArcElement,
//   Tooltip,
//   Legend,
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
//   BarElement,
//   Title,
// } from "chart.js";
// import { ComposableMap, Geographies, Geography } from "react-simple-maps";
// // Register Chart.js modules
// ChartJS.register(
//   RadialLinearScale,
//   ArcElement,
//   Tooltip,
//   Legend,
//   LineElement,
//   PointElement,
//   LinearScale,
//   CategoryScale,
//   BarElement,
//   Title
// );

// const ChartComponent = () => {
//   const dispatch = useDispatch();
//   const { allbookings: bookings, loading, error } = useSelector(
//     (state) => state.bookings
//   );

//   useEffect(() => {
//     dispatch(getAllBookings());
//   }, [dispatch]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   // Calculate data
//   const employeeCount = new Set(bookings.map((b) => b.employee._id)).size;
//   const customerCount = new Set(bookings.map((b) => b.customer._id)).size;
//   const statusCounts = bookings.reduce(
//     (acc, booking) => {
//       acc[booking.status] = (acc[booking.status] || 0) + 1;
//       return acc;
//     },
//     { Pending: 0, Accepted: 0, Completed: 0, Rejected: 0 }
//   );
//   const monthlyBookings = bookings.reduce((acc, booking) => {
//     const month = new Date(booking.date).toLocaleString("default", {
//       month: "short",
//     });
//     acc[month] = (acc[month] || 0) + 1;
//     return acc;
//   }, {});

//   // Chart data
//   const polarAreaData = {
//     labels: ["Employees", "Customers", "Accepted", "Rejected", "Completed", "Pending"],
//     datasets: [
//       {
//         data: [
//           employeeCount,
//           customerCount,
//           statusCounts.Accepted,
//           statusCounts.Rejected,
//           statusCounts.Completed,
//           statusCounts.Pending,
//         ],
//         backgroundColor: [
//           "#7d66d9",
//           "#9b9ef0",
//           "#a38ae8",
//           "#abbdf9",
//           "#e9d5ff",
//           "#e2ddfe",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const shadedAreaLineData = {
//     labels: Object.keys(monthlyBookings),
//     datasets: [
//       {
//         label: "Monthly Bookings",
//         data: Object.values(monthlyBookings),
//         fill: true,
//         backgroundColor: "rgba(123,102,217,0.3)",
//         borderColor: "#7d66d9",
//         tension: 0.4,
//       },
//     ],
//   };

//   const barChartData = {
//     labels: Object.keys(statusCounts),
//     datasets: [
//       {
//         label: "Booking Status",
//         data: Object.values(statusCounts),
//         backgroundColor: [
//           "#7d66d9",
//           "#9b9ef0",
//           "#a38ae8",
//           "#abbdf9",
//           "#e9d5ff",
//         ],
//         borderColor: [
//           "#7d66d9",
//           "#9b9ef0",
//           "#a38ae8",
//           "#abbdf9",
//           "#e9d5ff",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const pieChartData = {
//     labels: ["Completed", "Pending", "Rejected"],
//     datasets: [
//       {
//         data: [
//           statusCounts.Completed,
//           statusCounts.Pending,
//           statusCounts.Rejected,
//         ],
//         backgroundColor: ["#7d66d9", "#abbdf9", "#e2ddfe"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Component styles
//   const styles = {
//     container: {
//       display: "flex",
//       flexWrap: "wrap",
//       justifyContent: "space-between",
//       gap: "20px",
//       padding: "20px",
//       backgroundColor: "#ffffff",
//       color: "#111827",
//       borderRadius: "10px",
//     },
//     chartContainer: {
//       flex: "1 1 calc(50% - 40px)",
//       backgroundColor: "#f9fafb",
//       padding: "20px",
//       borderRadius: "10px",
//       boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//     },
//     title: {
//       textAlign: "center",
//       marginBottom: "10px",
//       color: "#111827",
//     },
//   };

//   return (
//     <div style={styles.container}>
//       {/* Polar Area Chart */}
//       <div style={styles.chartContainer}>
//         <h3 style={styles.title}>Polar Area Chart</h3>
//         <PolarArea data={polarAreaData} />
//       </div>

//       {/* Shaded Area Line Chart */}
//       <div style={styles.chartContainer}>
//         <h3 style={styles.title}>Monthly Bookings</h3>
//         <Line data={shadedAreaLineData} />
//       </div>

//       {/* Bar Chart */}
//       <div style={styles.chartContainer}>
//         <h3 style={styles.title}>Booking Status</h3>
//         <Bar data={barChartData} />
//       </div>

//       {/* Pie Chart */}
//       <div style={styles.chartContainer}>
//         <h3 style={styles.title}>Status Distribution</h3>
//         <Pie data={pieChartData} />
//       </div>
//       {/* map */}
//          <div style={styles.chartContainer}>
//       <h3 style={styles.title}>World Map</h3>
//       <ComposableMap
//           projectionConfig={{ scale: 160 }}
//           style={{ width: "100%", height: "100%" }}
//         >
//           <Geographies geography="https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson">
//             {({ geographies }) =>
//               geographies.map((geo) => (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   style={{
//                     default: { fill: "#9b9ef0", outline: "none" },
//                     hover: { fill: "#5b5bd6", outline: "none" },
//                     pressed: { fill: "#e9d5ff", outline: "none" },
//                   }}
//                 />
//               ))
//             }
//           </Geographies>
//         </ComposableMap>
//       </div>
//     </div>
//   );
// };

// export default ChartComponent;
