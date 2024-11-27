
// import React from "react";
// import { useState, useEffect } from "react";
// import { Container, Grid, Card, Typography } from "@mui/material"; // Import Grid, Card, Typography from Material-UI
// import { Event, Star, People } from "@mui/icons-material"; // Import necessary icons from Material-UI Icons

// import { Pie } from "react-chartjs-2"; // Import Pie chart from react-chartjs-2
// import { Chart, ArcElement, Title, Tooltip, Legend } from "chart.js"; // Import necessary components from chart.js
// import Banner from "../../banner";
// import { Box } from "@mui/material";
// import { BsBell } from "react-icons/bs"; // Importing BsBell from react-icons/bs
// import { FiMoreVertical } from "react-icons/fi"; // Importing FiMoreVertical from react-icons/fi
// import { FaUser } from "react-icons/fa"; // Player icon
// import { GiSoccerBall } from "react-icons/gi"; // Sports icon
// import { AiOutlineCalendar } from "react-icons/ai"; // Events icon
// import { GiChart } from "react-icons/gi"; // Analysis icon
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
// } from "chart.js";
// import { Doughnut } from "react-chartjs-2";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Avatar,
//   Button,
//   Menu,
//   MenuItem,
//   IconButton,
// } from "@mui/material";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );
// // Register the components required for Pie chart
// Chart.register(ArcElement, Title, Tooltip, Legend); // Ensure ArcElement is registered here

// const SportsDashboard = () => {
//   const sportsEvents = [
//     {
//       EventID: 1,
//       EventName: "National Marathon 2024",
//       Date: "2024-04-15",
//       Location: "New York",
//       Participants: 1500,
//       Rating: 4.7,
//     },
//     {
//       EventID: 2,
//       EventName: "City Triathlon Championship",
//       Date: "2024-06-10",
//       Location: "Los Angeles",
//       Participants: 800,
//       Rating: 4.5,
//     },
//     {
//       EventID: 3,
//       EventName: "International Soccer Cup",
//       Date: "2024-07-20",
//       Location: "London",
//       Participants: 20000,
//       Rating: 4.8,
//     },
//   ];

 
//   // Static chart data for boys and girls participation
//   const tableData = [
//     {
//       courseName: "Full-Stack Web Development",
//       batchName: "Batch A - November 2024",
//       date: "2024-11-10",
//       event: "National Coding Marathon",
//       progress: "Upcoming",
//       enrolled: "150 Students",
//       // profile: "https://randomuser.me/api/portraits/men/1.jpg",
//     },
//     {
//       courseName: "Data Science and Analytics",
//       batchName: "Batch B - November 2024",
//       date: "2024-11-15",
//       event: "World Hackathon Championship",
//       progress: "Upcoming",
//       enrolled: "200 Students",
//       // profile: "https://randomuser.me/api/portraits/men/2.jpg",
//     },
//     {
//       courseName: "Cybersecurity Essentials",
//       batchName: "Batch C - November 2024",
//       date: "2024-11-20",
//       event: "Regional Coding Contest",
//       progress: "Upcoming",
//       enrolled: "120 Students",
//       // profile: "https://randomuser.me/api/portraits/men/3.jpg",
//     },
//     {
//       courseName: "Artificial Intelligence",
//       batchName: "Batch D - November 2024",
//       date: "2024-11-25",
//       event: "Global Algorithm Championship",
//       progress: "Upcoming",
//       enrolled: "180 Students",
//       // profile: "https://randomuser.me/api/portraits/men/4.jpg",
//     },
//   ];
  
//   const chartData = {
//     labels: ["Boys", "Girls"],
//     datasets: [
//       {
//         label: "Participation Percentage",
//         data: [70, 30], // 70% Boys, 30% Girls
//         backgroundColor: ["#ff5722", "#1976d2"], // Orange for boys, blue for girls
//         borderColor: ["#e64a19", "#115293"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const barChartData = {
//     labels: [
//       "Web Development",
//       "Data Science",
//       "Cybersecurity",
//       "Mobile App Development",
//       "Cloud Computing",
//       "Game Development",
//       "AI & Machine Learning",
//     ],
//     datasets: [
//       {
//         label: "Boys",
//         data: [60, 40, 55, 70, 50, 45, 65], // Participation data for boys
//         backgroundColor: "#1976d2", // Blue color for boys
//         borderColor: "#115293",
//         borderWidth: 1,
//       },
//       {
//         label: "Girls",
//         data: [30, 20, 45, 40, 35, 25, 50], // Participation data for girls
//         backgroundColor: "#ff5722", // Orange color for girls
//         borderColor: "#e64a19",
//         borderWidth: 1,
//       },
//     ],
//   };
  
//   const sportsData = {
//     labels: [
//       "Web Development",
//       "Data Science",
//       "Cybersecurity",
//       "Mobile App Development",
//       "Cloud Computing",
//       "Game Development",
//       "AI & Machine Learning",
//     ],
//     datasets: [
//       {
//         data: [30, 10, 20, 10, 30], // percentages for each sport
//         backgroundColor: [
//           "#FF6384",
//           "#36A2EB",
//           "#FFCE56",
//           "#4BC0C0",
//           "#9966FF",
//           "#FF9F40",
//         ],
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     cutout: "70%",
//     plugins: {
//       tooltip: {
//         callbacks: {
//           label: function (tooltipItem) {
//             const dataset = tooltipItem.dataset;
//             const total = dataset.data.reduce((sum, val) => sum + val, 0);
//             const value = dataset.data[tooltipItem.dataIndex];
//             const percentage = ((value / total) * 100).toFixed(2);
//             return `${
//               sportsData.labels[tooltipItem.dataIndex]
//             }: ${percentage}%`;
//           },
//         },
//       },
//       legend: {
//         position: "top",
//         labels: {
//           boxWidth: 10,
//           font: {
//             size: 12,
//           },
//           generateLabels: function (chart) {
//             const data = chart.data;
//             return data.labels.map((label, index) => {
//               return {
//                 text: label,
//                 fillStyle: data.datasets[0].backgroundColor[index],
//               };
//             });
//           },
//         },
//       },
//       datalabels: {
//         display: true,
//         formatter: (value, context) => {
//           const percentage = (
//             (value / sportsData.datasets[0].data.reduce((a, b) => a + b, 0)) *
//             100
//           ).toFixed(2);
//           const label = sportsData.labels[context.dataIndex];
//           return `${label}: ${percentage}%`; // Show sport name and percentage
//         },
//         color: "#fff",
//         font: {
//           size: 14,
//           weight: "bold",
//         },
//         align: "center",
//         anchor: "center",
//       },
//     },
//   };

//   // Define two datasets for the two circles
//   const data = {
//     labels: ["Boys", "Girls"],
//     datasets: [
//       {
//         label: "Inner Circle",
//         data: [70, 30], // Adjust these values for inner ring percentages
//         backgroundColor: ["#FFA500", "#1E90FF"],
//         hoverBackgroundColor: ["#FFB84D", "#4FA4FF"],
//       },
//     ],
//   };

//   const averageRating =
//     sportsEvents.reduce((acc, event) => acc + event.Rating, 0) /
//     sportsEvents.length;

//   // Simulating data fetching
//   const [chartsData, setChartData] = useState(null);

//   const [anchorEl, setAnchorEl] = useState(null);
//   const [currentRow, setCurrentRow] = useState(null);

//   const handleClick = (event, rowIndex) => {
//     setAnchorEl(event.currentTarget);
//     setCurrentRow(rowIndex);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setCurrentRow(null);
//   };
//   return (
//     <Container>
    

//       <div className="relative bg-purple-200 rounded-lg p-8 flex flex-col lg:flex-row justify-between items-center mb-10 mt-16">
//         <div>
//           <p className="text-white text-sm uppercase mb-2">Online Course</p>
//           <h1 className="text-white text-3xl font-semibold mb-5">
//             Sharpen Your Skills With Professional Online Courses
//           </h1>
//           <button className="bg-black text-white px-4 py-2 rounded-full">
//             Join Now
//           </button>
//         </div>

//         {/* Dummy Image (hidden on mobile) */}
//         <div className="hidden lg:block">
//           <img
//             src="https://via.placeholder.com/200"
//             alt="Course Banner"
//             className="w-48"
//           />
//         </div>
//       </div>

//       <Grid container spacing={2}>
//         {/* Doughnut Chart Section */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               backgroundColor: "white",
//               boxShadow: 3, // equivalent to shadow-md
//               borderRadius: 2, // equivalent to rounded-lg
//               padding: 2, // equivalent to p-4
//               width: "100%", // equivalent to w-full
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Typography variant="h5" gutterBottom>
//              Coding Participation Analysis
//             </Typography>
//             <Box
//               sx={{ display: "flex", justifyContent: "center", width: "100%" }}
//             >
//               <Doughnut
//                 data={data}
//                 options={{
//                   responsive: true,
//                   maintainAspectRatio: false,
//                   cutout: "70%",
//                   plugins: {
//                     tooltip: {
//                       callbacks: {
//                         label: function (tooltipItem) {
//                           const dataset = tooltipItem.dataset;
//                           const total = dataset.data.reduce(
//                             (sum, val) => sum + val,
//                             0
//                           );
//                           const value = dataset.data[tooltipItem.dataIndex];
//                           const percentage = ((value / total) * 100).toFixed(2);
//                           return `${
//                             data.labels[tooltipItem.dataIndex]
//                           }: ${percentage}%`;
//                         },
//                       },
//                     },
//                   },
//                 }}
//                 height={200}
//                 width={200}
//               />
//             </Box>
//           </Box>
//         </Grid>

//         {/* Bar Chart Section */}
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               backgroundColor: "white",
//               boxShadow: 3,
//               borderRadius: 2,
//               padding: 2,
//               width: "100%",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Typography variant="h5" gutterBottom>
//               Courses Analysis
//             </Typography>
//             <Box
//               sx={{ display: "flex", justifyContent: "center", width: "100%" }}
//             >
//               <Bar
//                 data={barChartData}
//                 options={{
//                   responsive: true,
//                   maintainAspectRatio: false,
//                   scales: {
//                     x: {
//                       title: {
//                         display: true,
//                         text: "Courses",
//                       },
//                     },
//                     y: {
//                       title: {
//                         display: true,
//                         text: "Participation (%)",
//                       },
//                     },
//                   },
//                 }}
//                 height={200}
//                 width={300}
//               />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>

//       <Grid>
//         <Grid item xs={12} md={6}>
//           <Box
//             sx={{
//               backgroundColor: "white",
//               boxShadow: 3,
//               borderRadius: 2,
//               padding: 2,
//               width: "100%",
//               display: "flex",
//               flexDirection: "column", // Stack elements vertically
//               alignItems: "center",
//             }}
//           >
//             <Typography variant="h5" align="center" gutterBottom>
//               Students Participation on weekly Assignments
//             </Typography>

//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "row", // Align sports list and chart side by side
//                 alignItems: "center",
//                 width: "100%",
//               }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   marginRight: 2, // Increase margin for space
//                   minWidth: "200px", // Ensure enough space for label and list
//                 }}
//               >
//                 <Typography variant="h6" gutterBottom>
//                   List of Courses
//                 </Typography>

//                 {sportsData.labels.map((sport, index) => (
//                   <Box
//                     key={index}
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       marginBottom: 1,
//                     }}
//                   >
//                     <Box
//                       sx={{
//                         backgroundColor:
//                           sportsData.datasets[0].backgroundColor[index],
//                         width: 15,
//                         height: 15,
//                         marginRight: 1,
//                         borderRadius: "50%",
//                       }}
//                     />
//                     <Typography variant="body1">{sport}</Typography>
//                   </Box>
//                 ))}


//               </Box>

//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   width: "100%",
//                 }}
//               >
//                 <Doughnut
//                   data={sportsData}
//                   options={options}
//                   height={200}
//                   width={200}
//                 />
//               </Box>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default SportsDashboard;


// import React from "react";
// import { Container, Grid, Card, Typography, Box } from "@mui/material";
// import { Bar, Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   ArcElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const StudentDashboard = () => {
//   // Mock data for performance
//   const performanceData = {
//     labels: ["Math", "Science", "History", "English", "Art"],
//     datasets: [
//       {
//         label: "Marks",
//         data: [85, 90, 78, 88, 92], // Mock scores
//         backgroundColor: "#1976d2",
//         borderColor: "#115293",
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Mock data for attendance
//   const attendanceData = {
//     labels: ["Present", "Absent"],
//     datasets: [
//       {
//         data: [90, 10], // Attendance percentage
//         backgroundColor: ["#4CAF50", "#FF5722"], // Green for present, orange for absent
//         borderColor: ["#388E3C", "#D84315"],
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Mock table data for assignments
//   const assignments = [
//     { subject: "Math", assignment: "Algebra Worksheet", dueDate: "2024-12-01", status: "Pending" },
//     { subject: "Science", assignment: "Physics Lab Report", dueDate: "2024-12-03", status: "Completed" },
//     { subject: "History", assignment: "Essay on WWII", dueDate: "2024-12-05", status: "Pending" },
//     { subject: "English", assignment: "Book Analysis", dueDate: "2024-12-07", status: "Pending" },
//   ];

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
//         Student Dashboard
//       </Typography>

//       {/* Quick Stats */}
//       <Grid container spacing={3} sx={{ mb: 3 }}>
//         <Grid item xs={12} md={3}>
//           <Card sx={{ p: 3, textAlign: "center", backgroundColor: "#1976d2", color: "#fff" }}>
//             <Typography variant="h5">GPA</Typography>
//             <Typography variant="h4">3.8</Typography>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={3}>
//           <Card sx={{ p: 3, textAlign: "center", backgroundColor: "#4CAF50", color: "#fff" }}>
//             <Typography variant="h5">Attendance</Typography>
//             <Typography variant="h4">90%</Typography>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={3}>
//           <Card sx={{ p: 3, textAlign: "center", backgroundColor: "#FFC107", color: "#fff" }}>
//             <Typography variant="h5">Completed Assignments</Typography>
//             <Typography variant="h4">12</Typography>
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={3}>
//           <Card sx={{ p: 3, textAlign: "center", backgroundColor: "#FF5722", color: "#fff" }}>
//             <Typography variant="h5">Pending Assignments</Typography>
//             <Typography variant="h4">3</Typography>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* Charts */}
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <Card sx={{ p: 3 }}>
//             <Typography variant="h5" gutterBottom>
//               Performance Analysis
//             </Typography>
//             <Bar
//               data={performanceData}
//               options={{
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 scales: {
//                   x: {
//                     title: { display: true, text: "Subjects" },
//                   },
//                   y: {
//                     title: { display: true, text: "Marks" },
//                     min: 0,
//                     max: 100,
//                   },
//                 },
//               }}
//               height={200}
//             />
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Card sx={{ p: 3 }}>
//             <Typography variant="h5" gutterBottom>
//               Attendance Overview
//             </Typography>
//             <Pie
//               data={attendanceData}
//               options={{
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                   tooltip: {
//                     callbacks: {
//                       label: function (tooltipItem) {
//                         const dataset = tooltipItem.dataset;
//                         const total = dataset.data.reduce((sum, val) => sum + val, 0);
//                         const value = dataset.data[tooltipItem.dataIndex];
//                         const percentage = ((value / total) * 100).toFixed(2);
//                         return `${attendanceData.labels[tooltipItem.dataIndex]}: ${percentage}%`;
//                       },
//                     },
//                   },
//                 },
//               }}
//               height={200}
//             />
//           </Card>
//         </Grid>
//       </Grid>

//       {/* Assignments */}
//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h5" gutterBottom>
//           Upcoming Assignments
//         </Typography>
//         <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
//           <thead>
//             <tr>
//               <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Subject</th>
//               <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Assignment</th>
//               <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Due Date</th>
//               <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {assignments.map((assignment, index) => (
//               <tr key={index}>
//                 <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>{assignment.subject}</td>
//                 <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>{assignment.assignment}</td>
//                 <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>{assignment.dueDate}</td>
//                 <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>{assignment.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </Box>
//     </Container>
//   );
// };

// export default StudentDashboard;

import React from "react";
import { Container, Grid, Card, Typography, Box } from "@mui/material";
import { Bar, Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import {  LinearProgress } from "@mui/material";
import { PieChart } from '@mui/x-charts/PieChart';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const StudentDashboard = () => {
  // Mock data for performance
  const performanceData = {
    labels: ["Math", "Science", "History", "English", "Art"],
    datasets: [
      {
        label: "Marks",
        data: [85, 90, 78, 88, 92], // Mock scores
        backgroundColor: "#1976d2",
        borderColor: "#115293",
        borderWidth: 1,
      },
    ],
  };

  // Mock data for attendance
  const attendanceData = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        data: [90, 10], // Attendance percentage
        backgroundColor: ["#4CAF50", "#FF5722"], // Green for present, orange for absent
        borderColor: ["#388E3C", "#D84315"],
        borderWidth: 1,
      },
    ],
  };

  // Mock table data for assignments
  const assignments = [
    { subject: "Math", assignment: "Algebra Worksheet", dueDate: "2024-12-01", status: "Pending" },
    { subject: "Science", assignment: "Physics Lab Report", dueDate: "2024-12-03", status: "Completed" },
    { subject: "History", assignment: "Essay on WWII", dueDate: "2024-12-05", status: "Pending" },
    { subject: "English", assignment: "Book Analysis", dueDate: "2024-12-07", status: "Pending" },
  ];

  const data = {
    labels: ["Boys", "Girls"],
    datasets: [
      {
        label: "Inner Circle",
        data: [70, 30], // Adjust these values for inner ring percentages
        backgroundColor: ["#FFA500", "#1E90FF"],
        hoverBackgroundColor: ["#FFB84D", "#4FA4FF"],
      },
      // {
      //   label: 'Outer Circle',
      //   data: [70, 30], // Adjust these values for outer ring percentages
      //   backgroundColor: ['#FFA500', '#1E90FF'],
      //   hoverBackgroundColor: ['#FFB84D', '#4FA4FF'],
      // },
    ],
  };

  const barChartData = {
    labels: [
      "Web Development",
      "Data Science",
      "Cybersecurity",
      "Mobile App Development",
      "Cloud Computing",
      "Game Development",
      "AI & Machine Learning",
    ],
    datasets: [
      {
        label: "Boys",
        data: [60, 40, 55, 70, 50, 45, 65], // Participation data for boys
        backgroundColor: "#1976d2", // Blue color for boys
        borderColor: "#115293",
        borderWidth: 1,
      },
      {
        label: "Girls",
        data: [30, 20, 45, 40, 35, 25, 50], // Participation data for girls
        backgroundColor: "#ff5722", // Orange color for girls
        borderColor: "#e64a19",
        borderWidth: 1,
      },
    ],
  };

const weeklyProgress = [
    { day: "Monday", progress: 80 }, // Representing 80%
    { day: "Tuesday", progress: 60 },
    { day: "Wednesday", progress: 50 },
    { day: "Thursday", progress: 70 },
    { day: "Friday", progress: 90 },
    { day: "Saturday", progress: 40 },
  ];

  return (
    <Container>
   

<div className="relative bg-purple-200 rounded-lg p-8 flex flex-col lg:flex-row justify-between items-center mb-10 mt-16">
         <div>
           <p className="text-white text-sm uppercase mb-2">Online Course</p>
           <h1 className="text-white text-3xl font-semibold mb-5">
             Sharpen Your Skills With Professional Online Courses
           </h1>
           <button className="bg-black text-white px-4 py-2 rounded-full">
             Join Now
           </button>
         </div>

         {/* Dummy Image (hidden on mobile) */}
         <div className="hidden lg:block">
           <img
            src="https://via.placeholder.com/200"
            alt="Course Banner"
            className="w-48"
          />
        </div>
      </div>

      {/* Quick Stats */}
      {/* <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 3, textAlign: "center", backgroundColor: "#4CAF50", color: "#fff" }}>
            <Typography variant="h5">Attendance</Typography>
            <Typography variant="h4">90%</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 3, textAlign: "center", backgroundColor: "#FFC107", color: "#fff" }}>
            <Typography variant="h5">Completed Assignments</Typography>
            <Typography variant="h4">12</Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card sx={{ p: 3, textAlign: "center", backgroundColor: "#FF5722", color: "#fff" }}>
            <Typography variant="h5">Pending Assignments</Typography>
            <Typography variant="h4">3</Typography>
          </Card>
        </Grid>
      </Grid> */}
<Grid container spacing={3} justifyContent="center" sx={{ mb: 3 }}>
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ p: 3, textAlign: "center", backgroundColor: "#4CAF50", color: "#fff" }}>
      <Typography variant="h5">Attendance</Typography>
      <Typography variant="h4">90%</Typography>
    </Card>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ p: 3, textAlign: "center", backgroundColor: "#FFC107", color: "#fff" }}>
      <Typography variant="h5">Completed Assignments</Typography>
      <Typography variant="h4">12</Typography>
    </Card>
  </Grid>
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ p: 3, textAlign: "center", backgroundColor: "#FF5722", color: "#fff" }}>
      <Typography variant="h5">Pending Assignments</Typography>
      <Typography variant="h4">3</Typography>
    </Card>
  </Grid>
</Grid>

      {/* Charts */}
   
<Grid container spacing={2}>
        {/* Doughnut Chart Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: 3, // equivalent to shadow-md
              borderRadius: 2, // equivalent to rounded-lg
              padding: 2, // equivalent to p-4
              width: "100%", // equivalent to w-full
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" gutterBottom>
            Attendance 
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <Doughnut
                
                 data={attendanceData}
                 options={{
                   responsive: true,
                   maintainAspectRatio: false,
                  cutout: "70%",
                  plugins: {
                    tooltip: {
                      callbacks: {
                        label: function (tooltipItem) {
                          const dataset = tooltipItem.dataset;
                          const total = dataset.data.reduce(
                            (sum, val) => sum + val,
                            0
                          );
                          const value = dataset.data[tooltipItem.dataIndex];
                          const percentage = ((value / total) * 100).toFixed(2);
                          return `${
                            data.labels[tooltipItem.dataIndex]
                          }: ${percentage}%`;
                        },
                      },
                    },
                  },
                }}
                height={200}
                width={200}
              />
            </Box>
          </Box>
        </Grid>

        {/* Bar Chart Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: 3,
              borderRadius: 2,
              padding: 2,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Courses Analysis
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <Bar
                data={performanceData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      title: {
                        display: true,
                        text: "Courses",
                      },
                    },
                    y: {
                      title: {
                        display: true,
                        text: "Participation (%)",
                      },
                    },
                  },
                }}
                height={200}
                width={300}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* <Grid container spacing={2}>
      <Card sx={{ p: 3, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Time Spent on Learning (Weekly)
        </Typography>
        <Box sx={{ mt: 2 }}>
          {weeklyProgress.map((item, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item xs={2}>
                  <Typography variant="body1">{item.day}</Typography>
                </Grid>
                <Grid item xs={8}>
                  <LinearProgress
                    variant="determinate"
                    value={item.progress}
                    sx={{ height: 10, borderRadius: 5 }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Typography variant="body1">{item.progress}%</Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
      </Card>
      </Grid> */}

<Grid container spacing={2}>
  {/* Time Spent on Learning */}
  <Grid item xs={12} md={6}>
    <Card sx={{ p: 3, mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Time Spent on Learning
      </Typography>
      <Box sx={{ mt: 2 }}>
        {weeklyProgress.map((item, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={2}>
                <Typography variant="body1">{item.day}</Typography>
              </Grid>
              <Grid item xs={8}>
                <LinearProgress
                  variant="determinate"
                  value={item.progress}
                  sx={{ height: 10, borderRadius: 5 }}
                />
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1">{item.progress}%</Typography>
              </Grid>
            </Grid>
          </Box>
        ))}
      </Box>
    </Card>
  </Grid>

  {/* Complete Your Profile Section */}
  {/* <Grid item xs={12} md={6}>
    <Card sx={{ p: 3, mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Complete Your Profile
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        Please complete your profile to get personalized recommendations.
      </Typography>
      <LinearProgress
        variant="determinate"
        value={60} // Example of progress (60% complete)
        sx={{ height: 10, borderRadius: 5, mb: 2 }}
      />

      
      <Typography variant="body2" sx={{ mb: 2 }}>
        60% Complete
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }}>
        We need some more information about you to provide a complete experience.
      </Typography>
      <Box>
        <Typography variant="body2" sx={{ mb: 2 }}>
          Feedback Message:
        </Typography>
        <Box sx={{ mb: 2 }}>
          <textarea
            rows="4"
            cols="50"
            placeholder="Enter your feedback here..."
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              resize: "none",
            }}
          />
        </Box>
        <button
          style={{
            padding: "10px 15px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit Feedback
        </button>
      </Box>
    </Card>
  </Grid> */}

<Grid item xs={12} md={6}>
        <Card sx={{ p: 3, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Complete Your Profile
          </Typography>
          <PieChart
            series={[{
              startAngle: -90,
              endAngle: 90,
              data: [{ label: 'Complete', value: 60 }, { label: 'Remaining', value: 40 }],
            }]}
            height={200}
            // sx={{ mb: 2 }}
          />
          {/* <Typography variant="body2" sx={{ mb: 2 }}>
            60% Complete
          </Typography> */}
        
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
  <Typography variant="body2" sx={{ mb: 0, mr: 3 }}> {/* Increased margin-right */}
    Feedback Please?
  </Typography>
  <button
    style={{
      padding: "10px 15px",
      backgroundColor: "#4CAF50",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    }}
  >
    Feedback
  </button>
</Box>


        </Card>
      </Grid>
</Grid>

      {/* Assignments */}
      {/* <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Upcoming Assignments
        </Typography>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Subject</th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Assignment</th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Due Date</th>
              <th style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment, index) => (
              <tr key={index}>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>{assignment.subject}</td>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>{assignment.assignment}</td>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>{assignment.dueDate}</td>
                <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }}>{assignment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box> */}
    </Container>
  );
};

export default StudentDashboard;
