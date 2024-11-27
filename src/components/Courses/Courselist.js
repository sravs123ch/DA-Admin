// import React, { useState } from "react";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TableFooter from "@mui/material/TableFooter";
// import TablePagination from "@mui/material/TablePagination";
// import Button from "@mui/material/Button";
// import {
//   StyledTableCell,
//   StyledTableRow,
//   TablePaginationActions,
// } from "../CustomTablePagination";
// import { FaPlus } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { MdOutlineCancel } from "react-icons/md";
// import { AiOutlineEdit } from "react-icons/ai";

// const initialPayments = [
//   {
//     orderNumber: "ORD12345",
//     courseName: "Python: Presenting Data with Streamlit",
//     dateAdded: "2024-08-15",
//     amount: "$29.09",
//     category: "Software Development",
//     type: "Python",
//   },
//   {
//     orderNumber: "ORD12346",
//     courseName: "Python: Extract Data From PDF",
//     dateAdded: "2024-08-16",
//     amount: "$19.09",
//     category: "Software Development",
//     type: "Python",
//   },
//   {
//     orderNumber: "ORD12345",
//     courseName: "Python & SQL Server: Manage Database Transactions",
//     dateAdded: "2024-08-15",
//     amount: "$49.09",
//     category: "Software Development",
//     type: "Python",
//   },

//   {
//     orderNumber: "ORD1234",
//     courseName: "Python & SQL Server: Bulk Loading Data",
//     dateAdded: "2024-08-15",
//     amount: "$49.09",
//     category: "Software Development",
//     type: "Python",
//   },
//   {
//     orderNumber: "ORD12346",
//     courseName: "Terraform Azure: Tests",
//     dateAdded: "2024-08-16",
//     amount: "$59.09",
//     category: "Software Engineering",
//     type: "Azure",
//   },
//   {
//     orderNumber: "ORD12345",
//     courseName: "Terraform Azure: Reusable SQL Database Configurations",
//     dateAdded: "2024-08-15",
//     amount: "$19.09",
//     category: "Software Engineering",
//     type: "Azure",
//   },
//   {
//     orderNumber: "ORD12346",
//     courseName: "Terraform Azure: SQL Server VM",
//     dateAdded: "2024-08-16",
//     amount: "$24.09",
//     category: "Software Engineering",
//     type: "Azure",
//   },
//   {
//     orderNumber: "ORD12347",
//     courseName: "Terraform Azure: Import SQL Database",
//     dateAdded: "2024-08-16",
//     amount: "$26.09",
//     category: "Software Engineering",
//     type: "Azure",
//   },
//   // Add more initial data if needed
// ];

// export default function Courselist() {
//   const [payments, setPayments] = useState(initialPayments);
//   const [filteredPayments, setFilteredPayments] = useState(initialPayments);
//   const [page, setPage] = useState(0);
//   const navigate = useNavigate();
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const [selectedFilter, setSelectedFilter] = useState("All");

//   const handleFilterChange = (filter) => {
//     if (filter === "All") {
//       setFilteredPayments(payments);
//     } else {
//       setFilteredPayments(
//         payments.filter((payment) => payment.type === filter)
//       );
//     }
//     setSelectedFilter(filter);
//     setPage(0);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
//   const handleSaveRole = () => {
//     navigate("/coursesadd");
//   };

//   const emptyRows =
//     page > 0
//       ? Math.max(0, (1 + page) * rowsPerPage - filteredPayments.length)
//       : 0;

//   return (
//     <div className="main-container">
//       {/* <div className="mt-6  p-6 rounded-lg "> */}
//         {/* Header and filter buttons section */}
//         <div className="mb-4">
//           <div className=" flex justify-between">
//             <h2 className="heading">Courses</h2>
//             <div className="search-button-group">
//               <button
//                 type="button"
//                 className="action-button"
//                 onClick={handleSaveRole}
//               >
//                 <FaPlus aria-hidden="true" className="icon" />
//                 Add Course
//               </button>
//             </div>
//           </div>

//           <div className="flex justify-center space-x-2">
//             <Button
//               variant="contained"
//               style={{
//                 backgroundColor:
//                   selectedFilter === "All" ? "#003375" : "#d1d5db",
//                 color: selectedFilter === "All" ? "white" : "#1f29337",
//                 borderRadius: "0.375rem",
//               }}
//               onClick={() => handleFilterChange("All")}
//             >
//               All
//             </Button>
//             <Button
//               variant="contained"
//               style={{
//                 backgroundColor:
//                   selectedFilter === "Python" ? "#003375" : "#d1d5db",
//                 color: selectedFilter === "Python" ? "white" : "#1f29337",
//                 borderRadius: "0.375rem",
//               }}
//               onClick={() => handleFilterChange("Python")}
//             >
//               Python
//             </Button>
//             <Button
//               variant="contained"
//               style={{
//                 backgroundColor:
//                   selectedFilter === "Azure" ? "#003375" : "#d1d5db",
//                 color: selectedFilter === "Azure" ? "white" : "#1f29337",
//                 borderRadius: "0.375rem",
//               }}
//               onClick={() => handleFilterChange("Azure")}
//             >
//               Azure
//             </Button>
//           </div>
//         </div>

//         {/* Table section */}
//         <TableContainer
//           component={Paper}
//           className="bg-white rounded-lg shadow-md"
//         >
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <StyledTableCell>Course Id</StyledTableCell>
//                 <StyledTableCell>Course Name</StyledTableCell>
//                 <StyledTableCell align="center">Amount</StyledTableCell>
//                 <StyledTableCell align="center">Date Added</StyledTableCell>
//                 <StyledTableCell align="center">Category</StyledTableCell>
//                 <StyledTableCell align="center">Actions</StyledTableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {filteredPayments
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((item, index) => (
//                   <StyledTableRow key={index}>
//                     <StyledTableCell>{item.orderNumber}</StyledTableCell>
//                     <StyledTableCell>{item.courseName}</StyledTableCell>
//                     <StyledTableCell align="center">
//                       {item.amount}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       {item.dateAdded}
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                       <span
//                         className={`inline-block px-4 py-2 text-xs font-semibold rounded-full
//                         ${
//                           item.category === "Software Engineering"
//                             ? "bg-cyan-200 text-cyan-800 "
//                             : item.category === "Software Development"
//                             ? "bg-green-200 text-green-800"
//                             : ""
//                         }`}
//                       >
//                         {item.category}
//                       </span>
//                     </StyledTableCell>
//                     <StyledTableCell align="center">
//                               <div className="button-container flex justify-center">
//                                 <button
//                                   type="button"
//                                   // onClick={() => handleEditClick(person.UserID)}
//                                   className="button edit-button"
//                                 >
//                                   <AiOutlineEdit
//                                     aria-hidden="true"
//                                     className="h-4 w-4"
//                                   />
//                                   Edit
//                                 </button>

//                                 <button
//                                   type="button"
//                                   // onClick={() =>
//                                   //   handleDeleteClick(person.UserID)
//                                   // }
//                                   className="button delete-button"
//                                 >
//                                   <MdOutlineCancel
//                                     aria-hidden="true"
//                                     className="h-4 w-4"
//                                   />
//                                   Delete
//                                 </button>
//                               </div>
//                             </StyledTableCell>
//                   </StyledTableRow>

//                 ))}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: 53 * emptyRows }}>
//                   <StyledTableCell colSpan={5} />
//                 </TableRow>
//               )}
//             </TableBody>
//             <TableFooter>
//               <TableRow>
//                 <TablePagination
//                   rowsPerPageOptions={[5, 10, 25]}
//                   colSpan={5}
//                   count={filteredPayments.length}
//                   rowsPerPage={rowsPerPage}
//                   page={page}
//                   SelectProps={{
//                     inputProps: {
//                       "aria-label": "rows per page",
//                     },
//                     native: true,
//                   }}
//                   onPageChange={handleChangePage}
//                   onRowsPerPageChange={handleChangeRowsPerPage}
//                   ActionsComponent={TablePaginationActions} // Use custom pagination actions
//                 />
//               </TableRow>
//             </TableFooter>
//           </Table>
//         </TableContainer>
//       </div>
//     // </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TableFooter from "@mui/material/TableFooter";
// import TablePagination from "@mui/material/TablePagination";
// import Button from "@mui/material/Button";
// import {
//   StyledTableCell,
//   StyledTableRow,
//   TablePaginationActions,
// } from "../CustomTablePagination";
// import { FaPlus } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { MdOutlineCancel } from "react-icons/md";
// import { AiOutlineEdit } from "react-icons/ai";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Courselist = () => {
//   const [courses, setCourses] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const navigate = useNavigate();
//   const [selectedFilter, setSelectedFilter] = useState("All");


//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get(
//           `https://da-backend-7smk.onrender.com/api/courses/getAllCourses`
//         );
//         setCourses(response.data.courses); // Set fetched courses to state
//       } catch (error) {
//         toast.error("Failed to fetch courses.");
//       }
//     };
  
//     fetchCourses();
//   }, []);
  

//   const handleFilterChange = (filter) => {
//     setSelectedFilter(filter);
//     setPage(0);
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleSaveRole = () => {
//     navigate("/coursesadd");
//   };

//   const emptyRows = Math.max(0, (1 + page) * rowsPerPage - courses.length);

//   return (
//     <div className="main-container">
//       <ToastContainer />
//       <div className="mb-4">
//         <div className="flex justify-between">
//           <h2 className="heading">Courses</h2>
//           <div className="search-button-group">
//             <button type="button" className="action-button" onClick={handleSaveRole}>
//               <FaPlus aria-hidden="true" className="icon" />
//               Add Course
//             </button>
//           </div>
//         </div>

//         <div className="flex justify-center space-x-2">
//           <Button
//             variant="contained"
//             style={{
//               backgroundColor: selectedFilter === "All" ? "#003375" : "#d1d5db",
//               color: selectedFilter === "All" ? "white" : "#1f29337",
//               borderRadius: "0.375rem",
//             }}
//             onClick={() => handleFilterChange("All")}
//           >
//             All
//           </Button>
//         </div>
//       </div>

//       <TableContainer component={Paper} className="bg-white rounded-lg shadow-md">
//         <Table>
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Course Id</StyledTableCell>
//               <StyledTableCell>Course Name</StyledTableCell>
//               <StyledTableCell>Course Code</StyledTableCell>
//               <StyledTableCell>Batches</StyledTableCell>
//               <StyledTableCell align="center">Actions</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {Array.isArray(courses) && courses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((course) => (
//               <StyledTableRow>
//                 <StyledTableCell>{course.CourseId}</StyledTableCell>
//                 <StyledTableCell>{course.Name}</StyledTableCell>
//                 <StyledTableCell>{course.Code}</StyledTableCell>
//                 <StyledTableCell>
//                   {course.batches && course.batches.length > 0 ? (
//                     course.batches.map((batch) => (
//                       <div key={batch.BatchId}>
//                         {batch.BatchName} ({batch.BatchCode})
//                       </div>
//                     ))
//                   ) : (
//                     <div>No batches</div>
//                   )}
//                 </StyledTableCell>
//                 <StyledTableCell align="center">
//                   <div className="button-container flex justify-center">
//                     <button type="button" className="button edit-button">
//                       <AiOutlineEdit aria-hidden="true" className="h-4 w-4" /> Edit
//                     </button>
//                     <button type="button" className="button delete-button">
//                       <MdOutlineCancel aria-hidden="true" className="h-4 w-4" /> Delete
//                     </button>
//                   </div>
//                 </StyledTableCell>
//               </StyledTableRow>
//             ))}
//             {emptyRows > 0 && (
//               <TableRow style={{ height: 53 * emptyRows }}>
//                 <StyledTableCell colSpan={5} />
//               </TableRow>
//             )}
//           </TableBody>
//           <TableFooter>
//             <TableRow>
//               <TablePagination
//                 rowsPerPageOptions={[5, 10, 25]}
//                 colSpan={5}
//                 count={courses.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 onPageChange={handleChangePage}
//                 onRowsPerPageChange={handleChangeRowsPerPage}
//               />
//             </TableRow>
//           </TableFooter>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Courselist;


import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import Button from "@mui/material/Button";
import {
  StyledTableCell,
  StyledTableRow,
  TablePaginationActions,
} from "../CustomTablePagination";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChevronRight } from '@mui/icons-material';

const Courselist = () => {
  const [courses, setCourses] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `https://da-backend-7smk.onrender.com/api/courses/getAllCourses`
        );
        setCourses(response.data.courses);
      } catch (error) {
        toast.error("Failed to fetch courses.");
      }
    };
  
    fetchCourses();
  }, []);
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  

  const handleNavigateToCourseDetails = () => {
    navigate("/coursesedit");
  };

  const emptyRows = Math.max(0, (1 + page) * rowsPerPage - courses.length);

  return (
    <div className="main-container">
      <ToastContainer />
      <div className="mb-4">
        <div className="flex justify-between">
          <h2 className="heading">Courses</h2>
          <div className="search-button-group">
            <button type="button" className="action-button" onClick={() => navigate("/coursesadd")}>
              <FaPlus aria-hidden="true" className="icon" />
              Add Course
            </button>
          </div>
        </div>
      </div>
<TableContainer component={Paper} className="bg-white rounded-lg shadow-md">
        <Table>
        <TableHead>
            <TableRow>
              <StyledTableCell>Course Id</StyledTableCell>
              <StyledTableCell>Course Name</StyledTableCell>
              <StyledTableCell>Course Code</StyledTableCell>
              <StyledTableCell>Amount</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(courses) && courses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((course) => (
              <StyledTableRow key={course.CourseId}>
                <StyledTableCell>{course.CourseId}</StyledTableCell>
                <StyledTableCell>{course.Name}</StyledTableCell>
                <StyledTableCell>{course.Code}</StyledTableCell>
                <StyledTableCell>{course.Amount}</StyledTableCell>

  <StyledTableCell align="center">
            <button
              type="button"
              onClick={handleNavigateToCourseDetails}
              className="text-white bg-blue-500 hover:bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center"
            >
              <ChevronRight />
            </button>
          </StyledTableCell>

              </StyledTableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <StyledTableCell colSpan={4} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={5}
                count={courses.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>



    </div>
  );
};

export default Courselist;
