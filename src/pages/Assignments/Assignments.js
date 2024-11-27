
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
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAddLecturer = () => {
    navigate("/assignmentsadd");
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

  const [assignments, setAssignments] = useState([
    {
      BatchId: "A1",
      AssignmentName: "Introduction to React",
      NumberOfAssignments: 3,
      Topics: "Components, Props, State",
    },
    {
      BatchId: "B2",
      AssignmentName: "Advanced JavaScript",
      NumberOfAssignments: 4,
      Topics: "ES6+, Async/Await, Closures",
    },
    {
      BatchId: "C3",
      AssignmentName: "Database Basics",
      NumberOfAssignments: 2,
      Topics: "SQL, Normalization",
    },
    {
      BatchId: "D4",
      AssignmentName: "Software Testing",
      NumberOfAssignments: 5,
      Topics: "Unit Testing, Integration Testing",
    },
    {
      BatchId: "E5",
      AssignmentName: "System Design",
      NumberOfAssignments: 3,
      Topics: "Design Patterns, Scalability",
    },
  ]);
  

  return (
    <div className="main-container">
     
     <div className="flex justify-between items-center mb-5">
  <h2 className="heading">Assignments</h2>

  <div className="mb-4 flex flex-col sm:flex-row justify-center items-center w-1/2">
    <input
      type="text"
      className="border border-gray-300 p-2 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-md"
      placeholder="Search Assignments..."
    />
  </div>

  <div className="search-button-group">
          <button
            type="button"
            className="action-button"
            onClick={handleAddLecturer}
          >
            <FaPlus aria-hidden="true" className="icon" />
            Add Assignments
          </button>
        </div>
</div>


      <TableContainer component={Paper} className="bg-white rounded-lg shadow-md">
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">Batch ID</StyledTableCell>
              <StyledTableCell align="center">Name of Assignments</StyledTableCell>
              <StyledTableCell align="center">Number of Assignments</StyledTableCell>
              <StyledTableCell align="center">Topics</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
  {assignments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
    <StyledTableRow key={index}>
      <StyledTableCell align="center">{item.BatchId}</StyledTableCell>
      <StyledTableCell align="center">{item.AssignmentName}</StyledTableCell>
      <StyledTableCell align="center">{item.NumberOfAssignments}</StyledTableCell>
      <StyledTableCell align="center">{item.Topics}</StyledTableCell>
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
    </div>
  );
};

export default Lecturers;
