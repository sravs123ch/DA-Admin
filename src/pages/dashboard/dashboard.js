// import React from "react";
// import ContinueWatching from "../../sections";
// import Banner from "../../banner";

// const Dashboard = () => {
//   return (
//     <div className="h-screen lg:flex">
//       <div className="flex-1 flex flex-col overflow-y-auto">
//         <div className="p-6">
//           <Banner />
//           <ContinueWatching />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React from "react";
import { useState, useEffect } from "react";
import { Container, Grid, Card, Typography } from "@mui/material"; // Import Grid, Card, Typography from Material-UI
import { Event, Star, People } from "@mui/icons-material"; // Import necessary icons from Material-UI Icons

import { Pie } from "react-chartjs-2"; // Import Pie chart from react-chartjs-2
import { Chart, ArcElement, Title, Tooltip, Legend } from "chart.js"; // Import necessary components from chart.js
import Banner from "../../banner";
import { Box } from "@mui/material";
import { BsBell } from "react-icons/bs"; // Importing BsBell from react-icons/bs
import { FiMoreVertical } from "react-icons/fi"; // Importing FiMoreVertical from react-icons/fi
import { FaUser } from "react-icons/fa"; // Player icon
import { GiSoccerBall } from "react-icons/gi"; // Sports icon
import { AiOutlineCalendar } from "react-icons/ai"; // Events icon
import { GiChart } from "react-icons/gi"; // Analysis icon
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Button,
  Menu,
  MenuItem,
  IconButton,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
// Register the components required for Pie chart
Chart.register(ArcElement, Title, Tooltip, Legend); // Ensure ArcElement is registered here

const SportsDashboard = () => {
  const sportsEvents = [
    {
      EventID: 1,
      EventName: "National Marathon 2024",
      Date: "2024-04-15",
      Location: "New York",
      Participants: 1500,
      Rating: 4.7,
    },
    {
      EventID: 2,
      EventName: "City Triathlon Championship",
      Date: "2024-06-10",
      Location: "Los Angeles",
      Participants: 800,
      Rating: 4.5,
    },
    {
      EventID: 3,
      EventName: "International Soccer Cup",
      Date: "2024-07-20",
      Location: "London",
      Participants: 20000,
      Rating: 4.8,
    },
  ];

  // const tableData = [
  //   {
  //     sportName: "Cricket",
  //     date: "2024-11-10",
  //     event: "National Championship",
  //     progress: "Live",
  //     enrolled: "150 Students",
  //     profile: "https://randomuser.me/api/portraits/men/1.jpg",
  //   },
  //   {
  //     sportName: "Football",
  //     date: "2024-11-15",
  //     event: "World Cup Qualifier",
  //     progress: "Live",
  //     enrolled: "200 Students",
  //     profile: "https://randomuser.me/api/portraits/men/2.jpg",
  //   },
  //   {
  //     sportName: "Basketball",
  //     date: "2024-11-20",
  //     event: "Regional League",
  //     progress: "Upcoming",
  //     enrolled: "120 Students",
  //     profile: "https://randomuser.me/api/portraits/men/3.jpg",
  //   },
  //   {
  //     sportName: "Tennis",
  //     date: "2024-11-25",
  //     event: "Grand Slam",
  //     progress: "Upcoming",
  //     enrolled: "180  Students",
  //     profile: "https://randomuser.me/api/portraits/men/4.jpg",
  //   },
  // ];
  // Static chart data for boys and girls participation
  const tableData = [
    {
      courseName: "Full-Stack Web Development",
      batchName: "Batch A - November 2024",
      date: "2024-11-10",
      event: "National Coding Marathon",
      progress: "Upcoming",
      enrolled: "150 Students",
      // profile: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      courseName: "Data Science and Analytics",
      batchName: "Batch B - November 2024",
      date: "2024-11-15",
      event: "World Hackathon Championship",
      progress: "Upcoming",
      enrolled: "200 Students",
      // profile: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      courseName: "Cybersecurity Essentials",
      batchName: "Batch C - November 2024",
      date: "2024-11-20",
      event: "Regional Coding Contest",
      progress: "Upcoming",
      enrolled: "120 Students",
      // profile: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      courseName: "Artificial Intelligence",
      batchName: "Batch D - November 2024",
      date: "2024-11-25",
      event: "Global Algorithm Championship",
      progress: "Upcoming",
      enrolled: "180 Students",
      // profile: "https://randomuser.me/api/portraits/men/4.jpg",
    },
  ];
  
  const chartData = {
    labels: ["Boys", "Girls"],
    datasets: [
      {
        label: "Participation Percentage",
        data: [70, 30], // 70% Boys, 30% Girls
        backgroundColor: ["#ff5722", "#1976d2"], // Orange for boys, blue for girls
        borderColor: ["#e64a19", "#115293"],
        borderWidth: 1,
      },
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

  // const sportsData = {
  //   labels: ['Cricket', 'Kabaddi', 'Football', 'Basketball', 'Hockey', 'Tennis'],
  //   datasets: [
  //     {
  //       data: [30, 10, 20, 10, 30], // percentages for each sport
  //       backgroundColor: [
  //         '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
  //       ],
  //     },
  //   ],
  // };
 
  // const barChartData = {
  //   labels: [
  //     "Web Development",
  //     "Data Science",
  //     "Cybersecurity",
  //     "Mobile App Development",
  //     "Cloud Computing",
  //     "Game Development",
  //     "AI & Machine Learning",
  //   ],
  //   datasets: [
  //     {
  //       label: "Students",
  //       data: [120, 80, 95, 110, 90, 85, 100], // Participation data for students
  //       backgroundColor: "#ff5722", // Green color for students
  //       borderColor: "#e64a19",
  //       borderWidth: 0.5, 
  //     },
  //   ],
  // };
  
  const sportsData = {
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
        data: [30, 10, 20, 10, 30], // percentages for each sport
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const dataset = tooltipItem.dataset;
            const total = dataset.data.reduce((sum, val) => sum + val, 0);
            const value = dataset.data[tooltipItem.dataIndex];
            const percentage = ((value / total) * 100).toFixed(2);
            return `${
              sportsData.labels[tooltipItem.dataIndex]
            }: ${percentage}%`;
          },
        },
      },
      legend: {
        position: "top",
        labels: {
          boxWidth: 10,
          font: {
            size: 12,
          },
          generateLabels: function (chart) {
            const data = chart.data;
            return data.labels.map((label, index) => {
              return {
                text: label,
                fillStyle: data.datasets[0].backgroundColor[index],
              };
            });
          },
        },
      },
      datalabels: {
        display: true,
        formatter: (value, context) => {
          const percentage = (
            (value / sportsData.datasets[0].data.reduce((a, b) => a + b, 0)) *
            100
          ).toFixed(2);
          const label = sportsData.labels[context.dataIndex];
          return `${label}: ${percentage}%`; // Show sport name and percentage
        },
        color: "#fff",
        font: {
          size: 14,
          weight: "bold",
        },
        align: "center",
        anchor: "center",
      },
    },
  };

  // Define two datasets for the two circles
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

  const averageRating =
    sportsEvents.reduce((acc, event) => acc + event.Rating, 0) /
    sportsEvents.length;

  // Simulating data fetching
  const [chartsData, setChartData] = useState(null);

  const [anchorEl, setAnchorEl] = useState(null);
  const [currentRow, setCurrentRow] = useState(null);

  const handleClick = (event, rowIndex) => {
    setAnchorEl(event.currentTarget);
    setCurrentRow(rowIndex);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentRow(null);
  };
  return (
    <Container>
      <Banner />

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <SportsCard watched="8/15" title="Players" />
        <SportsCard watched="3/14" title="Sports" />
        <SportsCard watched="2/6" title="Events" />
        <SportsCard watched="9/10" title="Analysis" />
      </div> */}

         {/* <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Performance Analysis
            </Typography>
            <Bar
              data={performanceData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    title: { display: true, text: "Subjects" },
                  },
                  y: {
                    title: { display: true, text: "Marks" },
                    min: 0,
                    max: 50,
                  },
                },
              }}
              height={50} // Reduced height
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Attendance Overview
            </Typography>
            <Pie
              data={attendanceData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  tooltip: {
                    callbacks: {
                      label: function (tooltipItem) {
                        const dataset = tooltipItem.dataset;
                        const total = dataset.data.reduce((sum, val) => sum + val, 0);
                        const value = dataset.data[tooltipItem.dataIndex];
                        const percentage = ((value / total) * 100).toFixed(2);
                        return `${attendanceData.labels[tooltipItem.dataIndex]}: ${percentage}%`;
                      },
                    },
                  },
                },
              }}
              height={50} // Reduced height
            />
          </Card>
        </Grid>
      </Grid> */}


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
             Coding Participation Analysis
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            >
              <Doughnut
                data={data}
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
                data={barChartData}
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

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Course Name</TableCell>
              <TableCell>Batch Name</TableCell>
              <TableCell>Date</TableCell>
              {/* <TableCell>Event</TableCell> */}
              <TableCell>progress</TableCell>
              <TableCell>Enrolled</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {/* <Avatar
                      alt={row.competitionName}
                      // src={row.profile}
                      sx={{ width: 30, height: 30, marginRight: 1 }}
                    /> */}
                    {row.courseName}
                  </Box>
                </TableCell>
                <TableCell>
                 
                    {row.batchName}
                
                </TableCell>
                <TableCell>{row.date}</TableCell>
                {/* <TableCell>{row.event}</TableCell> */}
               
                <TableCell>
  <span
    className={`status-pill ${
      row.progress === "Live"
        ? "status-active" // Apply active status class
        : row.progress === "Upcoming"
        ? "status-inactive" // Apply inactive status class
        : "bg-gray-500 text-white" // Default gray color
    } flex items-center justify-center w-24 h-8`}
  >
    {row.progress}
  </span>
</TableCell>


                <TableCell>{row.enrolled}</TableCell>
                <TableCell>
                  <IconButton onClick={(event) => handleClick(event, index)}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={currentRow === index}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <Button variant="contained" color="primary" size="small">
                        View
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Button variant="outlined" color="secondary" size="small">
                        Edit
                      </Button>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <Button variant="outlined" color="error" size="small">
                        Delete
                      </Button>
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: "white",
              boxShadow: 3,
              borderRadius: 2,
              padding: 2,
              width: "100%",
              display: "flex",
              flexDirection: "column", // Stack elements vertically
              alignItems: "center",
            }}
          >
            <Typography variant="h5" align="center" gutterBottom>
              Students Participation on weekly Assignments
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row", // Align sports list and chart side by side
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginRight: 2, // Increase margin for space
                  minWidth: "200px", // Ensure enough space for label and list
                }}
              >
                <Typography variant="h6" gutterBottom>
                  List of Courses
                </Typography>

                {sportsData.labels.map((sport, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: 1,
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor:
                          sportsData.datasets[0].backgroundColor[index],
                        width: 15,
                        height: 15,
                        marginRight: 1,
                        borderRadius: "50%",
                      }}
                    />
                    <Typography variant="body1">{sport}</Typography>
                  </Box>
                ))}


              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Doughnut
                  data={sportsData}
                  options={options}
                  height={200}
                  width={200}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SportsDashboard;
