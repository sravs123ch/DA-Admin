// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import {
//   Paper,
//   TableContainer,
//   Table,
//   TableHead,
//   TableBody,
//   TableFooter,
//   TableRow,
//   TablePagination,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Button,
// } from "@mui/material";
// import { StyledTableCell, StyledTableRow } from "../../components/CustomTablePagination";
// import { FaPlus } from "react-icons/fa";
// import { AiOutlineEdit } from "react-icons/ai";
// import { MdOutlineCancel } from "react-icons/md";

// const API_URL = "https://da-backend-7smk.onrender.com/api/lecturers/getAllLecturers";

// const Lecturers = () => {
//   const [lecturers, setLecturers] = useState([]);
//   const [openModal, setOpenModal] = useState(false); // State for modal visibility
//   const [formData, setFormData] = useState({
//     Name: "",
//     Specialization: "",
//     Batches: "",
//   });
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [page, setPage] = useState(0);

//   // Fetch lecturers from API
//   useEffect(() => {
//     const fetchLecturers = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         setLecturers(response.data); // Set fetched data to state
//       } catch (error) {
//         toast.error("Failed to fetch lecturers.");
//       }
//     };

//     fetchLecturers();
//   }, []);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleAddLecturer = () => {
//     setOpenModal(true); // Open the modal on button click
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false); // Close the modal
//   };

//   const handleSubmitLecturer = async () => {
//     try {
//       // API call to add a new lecturer
//       await axios.post("https://da-backend-7smk.onrender.com/api/lecturers/addLecturer", formData);
//       toast.success("Lecturer added successfully!");
//       setOpenModal(false); // Close modal after submission
//     } catch (error) {
//       toast.error("Failed to add lecturer.");
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div className="main-container">
//       <div className="flex justify-between items-center mb-5">
//         <h2 className="heading">Lecturers</h2>
//         <button type="button" className="action-button" onClick={handleAddLecturer}>
//           <FaPlus aria-hidden="true" className="icon" />
//           Add Lecturer
//         </button>
//       </div>
//       <ToastContainer />

//       <hr className="border-gray-300 my-4 mb-4" />

//       <TableContainer component={Paper} className="bg-white rounded-lg shadow-md">
//         <Table>
//           <TableHead>
//             <StyledTableRow>
//               <StyledTableCell align="center">Lecturer ID</StyledTableCell>
//               <StyledTableCell align="center">Name</StyledTableCell>
//               <StyledTableCell align="center">Specialization</StyledTableCell>
//               <StyledTableCell align="center">Batches</StyledTableCell>
//               <StyledTableCell align="center">Actions</StyledTableCell>
//             </StyledTableRow>
//           </TableHead>
//           <TableBody>
//             {lecturers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
//               <StyledTableRow key={index}>
//                 <StyledTableCell align="center">{item.LecturerId}</StyledTableCell>
//                 <StyledTableCell align="center">{item.Name}</StyledTableCell>
//                 <StyledTableCell align="center">{item.Specialization}</StyledTableCell>
//                 <StyledTableCell align="center">{item.Batches}</StyledTableCell>
//                 <StyledTableCell align="center">
//                   <div className="button-container flex justify-center">
//                     <button type="button" className="button edit-button">
//                       <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
//                       Edit
//                     </button>
//                     <button type="button" className="button delete-button">
//                       <MdOutlineCancel aria-hidden="true" className="h-4 w-4" />
//                       Delete
//                     </button>
//                   </div>
//                 </StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//           <TableFooter>
//             <TableRow>
//               <TablePagination
//                 rowsPerPageOptions={[5, 10, 25]}
//                 colSpan={5}
//                 count={lecturers.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 onPageChange={handleChangePage}
//                 onRowsPerPageChange={handleChangeRowsPerPage}
//               />
//             </TableRow>
//           </TableFooter>
//         </Table>
//       </TableContainer>

//       {/* Add Lecturer Modal */}
//       <Dialog open={openModal} onClose={handleCloseModal}>
//         <DialogTitle>Add Lecturer</DialogTitle>
//         <DialogContent>
//           <div className="flex items-center gap-4 mb-2">
//             <label className="w-1/3 text-gray-700" htmlFor="Name">
//               Name
//             </label>
//             <input
//               name="Name"
//               id="Name"
//               value={formData.Name}
//               onChange={handleInputChange}
//               className="p-1 mt-2 mb-1 w-full border rounded-md border-gray-400"
//             />
//           </div>

//           <div className="flex items-center gap-4 mb-2">
//             <label className="w-1/3 text-gray-700" htmlFor="Specialization">
//               Specialization
//             </label>
//             <input
//               name="Specialization"
//               id="Specialization"
//               value={formData.Specialization}
//               onChange={handleInputChange}
//               className="p-1 mt-2 mb-1 w-full border rounded-md border-gray-400"
//             />
//           </div>

//           <div className="flex items-center gap-4">
//             <label className="w-1/3 text-gray-700" htmlFor="Batches">
//               Batches
//             </label>
//             <input
//               name="Batches"
//               id="Batches"
//               value={formData.Batches}
//               onChange={handleInputChange}
//               className="p-1 mt-2 mb-1 w-full border rounded-md border-gray-400"
//               placeholder="Enter batch codes separated by commas"
//             />
//           </div>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} color="secondary">
//             Cancel
//           </Button>
//           <Button onClick={handleSubmitLecturer} color="primary">
//             Submit
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default Lecturers;


import React, { useState } from "react";
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableFooter,
  TableRow,
  TablePagination,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { StyledTableCell, StyledTableRow } from "../../components/CustomTablePagination";
import { FaPlus } from "react-icons/fa";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";

const Lecturers = () => {
  const [lecturers, setLecturers] = useState([
  
      { LecturerId: 1, Name: "John Doe", Specialization: "Software Engineering", Batches: "A1, B2" },
      { LecturerId: 2, Name: "Jane Smith", Specialization: "Software Development", Batches: "C3, D4" },
      { LecturerId: 3, Name: "Mark Wilson", Specialization: "Software Architecture", Batches: "E5, F6" },
      { LecturerId: 4, Name: "Emily Davis", Specialization: "Software Testing", Batches: "G7, H8" },
      { LecturerId: 5, Name: "Paul Brown", Specialization: "Software Design", Batches: "I9, J10" },
    
  ]);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Specialization: "",
    Batches: "",
  });
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAddLecturer = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSubmitLecturer = () => {
    const newLecturer = {
      LecturerId: lecturers.length + 1,
      ...formData,
    };
    setLecturers((prevLecturers) => [...prevLecturers, newLecturer]);
    setFormData({ Name: "", Specialization: "", Batches: "" });
    setOpenModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="main-container">
     
     <div className="flex justify-between items-center mb-5">
  <h2 className="heading">Lecturers</h2>

  <div className="mb-4 flex flex-col sm:flex-row justify-center items-center w-1/2">
    <input
      type="text"
      className="border border-gray-300 p-2 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-md"
      placeholder="Search Lecturers..."
    />
  </div>

  <div className="search-button-group">
          <button
            type="button"
            className="action-button"
            onClick={handleAddLecturer}
          >
            <FaPlus aria-hidden="true" className="icon" />
            Add Lecturers
          </button>
        </div>
</div>


      <TableContainer component={Paper} className="bg-white rounded-lg shadow-md">
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">Lecturer ID</StyledTableCell>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Specialization</StyledTableCell>
              {/* <StyledTableCell align="center">Batches</StyledTableCell> */}
              <StyledTableCell align="center">Actions</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {lecturers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center">{item.LecturerId}</StyledTableCell>
                <StyledTableCell align="center">{item.Name}</StyledTableCell>
                <StyledTableCell align="center">{item.Specialization}</StyledTableCell>
                {/* <StyledTableCell align="center">{item.Batches}</StyledTableCell> */}
                <StyledTableCell align="center">
                  <div className="button-container flex justify-center">
                    <button type="button" className="button edit-button">
                      <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
                      Edit
                    </button>
                    <button type="button" className="button delete-button">
                      <MdOutlineCancel aria-hidden="true" className="h-4 w-4" />
                      Delete
                    </button>
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={5}
                count={lecturers.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      {/* Add Lecturer Modal */}
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Add Lecturer</DialogTitle>
        <DialogContent>

<div className="flex items-center gap-4 mb-2">
  <label className="w-1/3 text-gray-700" htmlFor="Name">
    Name
  </label>
  <input
    name="Name"
    id="Name"
    value={formData.Name}
    onChange={handleInputChange}
    className="p-1 mt-2 mb-1 w-full max-w-sm border rounded-md border-gray-400"
  />
</div>

<div className="flex items-center gap-4 mb-2">
  <label className="w-1/3 text-gray-700" htmlFor="Specialization">
    Specialization
  </label>
  <input
    name="Specialization"
    id="Specialization"
    value={formData.Specialization}
    onChange={handleInputChange}
    className="p-1 mt-2 mb-1 w-full max-w-sm border rounded-md border-gray-400"
  />
</div>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmitLecturer} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Lecturers;
