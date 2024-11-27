import React, { useState, useEffect,useContext } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
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
import {
  StyledTableCell,
  StyledTableRow,
  TablePaginationActions,
} from "../CustomTablePagination";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { AiOutlineEdit } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import { Combobox } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/20/solid";
import { ChevronRight } from '@mui/icons-material';
import { BatchContext  } from "../../Context/BatchContext";
// API endpoint
const API_URL = "https://da-backend-7smk.onrender.com/api/Batchs/getAllBatches";

const Batches = () => {
  const [batches, setBatches] = useState([]);
  const [roleName, setRoleName] = useState("");
  const [openModal, setOpenModal] = useState(false); // State for modal visibility
  const [formData, setFormData] = useState({
    CourseId: "",
    BatchCode: "",
    BatchName: "",
  });
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState([]); // Course search results
  const navigate = useNavigate();
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState(""); // For managing the search query
  const { BatchDetails } = useContext(BatchContext);

  // Fetch batches from API
  useEffect(() => {
    const fetchBatches = async () => {
      try {
        const response = await axios.get(API_URL);
        setBatches(response.data); // Set fetched data to state
      } catch (error) {
        toast.error("Failed to fetch batches.");
      }
    };

    fetchBatches();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const handleAddBatch = () => {
  //   setOpenModal(true); // Open the modal on button click
  // };
  const handleAddBatch = () => {
    // setBatchDetails(null);
    // navigate("/batches/new");
    setOpenModal(true); 
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Close the modal
  };

  const handleSubmitBatch = () => {
    // Handle the form submission
    // Call API to add a new batch, etc.
    console.log(formData);
    toast.success("Batch added successfully!");
    setOpenModal(false); // Close modal after submission
  };
  const [error, setError] = useState(false);
  

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};
const [courses, setCourses] = useState([]);
  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const response = await axios.get('https://da-backend-7smk.onrender.com/api/courses/getAllCourses');
  //       setCourses(response.data.courses);
  //       setFilteredCourses(response.data.courses);
  //     } catch (error) {
  //       toast.error("Failed to fetch courses.");
  //     }
  //   };
    
  //   fetchCourses();
  // }, []);

  const handleNavigateToCourseDetails = (BatchId) => {
    navigate(`/batch/${BatchId}`);
  }; 
  


  return (
    <div className="main-container">
      <div className="flex justify-between items-center mb-5">
        <h2 className="heading">Batches</h2>
        <div className="search-button-group">
          <button
            type="button"
            className="action-button"
            onClick={handleAddBatch}
          >
            <FaPlus aria-hidden="true" className="icon" />
            Add Batch
          </button>
        </div>
      </div>
      <ToastContainer />

      <hr className="border-gray-300 my-4 mb-4" />

      <div className="mb-4 flex flex-col sm:flex-row justify-center items-center">
        <label className="block font-semibold mr-[14px]">Batches</label>
        <input
          type="text"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          className="border border-gray-300 p-2 w-full sm:w-1/2 rounded-md"
          placeholder="Search Batches..."
        />
      </div>

      <hr className="border-gray-300 my-4 mb-6" />

      <TableContainer component={Paper} className="bg-white rounded-lg shadow-md">
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">Batch ID</StyledTableCell>
              <StyledTableCell align="center">Batch Name</StyledTableCell>
              <StyledTableCell align="center">Total Students</StyledTableCell>
              <StyledTableCell align="center">Date Created</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {batches.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center">{item.BatchId}</StyledTableCell>
                <StyledTableCell align="center">{item.BatchName}</StyledTableCell>
                <StyledTableCell align="center">{item.students}</StyledTableCell>
                <StyledTableCell align="center">{item.dateAdded}</StyledTableCell>
        
          {/* <StyledTableCell align="center">
            <button
              type="button"
              onClick={() => handleNavigateToCourseDetails(item.BatchId)}
              className="text-white bg-blue-500 hover:bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center"
            >
              <ChevronRight />
            </button>
          </StyledTableCell> */}

{/* <StyledTableCell className="flex items-center justify-center left-24">
  <button
    type="button"
    onClick={() => handleNavigateToCourseDetails(item.BatchId)}
    className="text-white bg-blue-500 hover:bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center"
  >
    <ChevronRight />
  </button>
</StyledTableCell> */}

<StyledTableCell>
            <button
              type="button"
              onClick={() => handleNavigateToCourseDetails(item.BatchId)}
              className="text-white bg-blue-500 hover:bg-blue-700 rounded-full w-8 h-8 flex items-center justify-center"
            >
              <ChevronRight />
            </button>
          </StyledTableCell>



              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 20, 25]}
                colSpan={5}
                count={batches.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>

      {/* Add Batch Modal */}
      <Dialog open={openModal} onClose={handleCloseModal}
       PaperProps={{
        style: { width: '600px', maxWidth: '80%', height:'250px'}  // Adjust width as desired
      }}
      >
        <DialogTitle>Add Batch</DialogTitle>
        <DialogContent>
         
       
            <div className="flex items-center gap-4">
              <label className="w-1/3 text-gray-700 mb-2" htmlFor="BatchCode">
                Batch Code
              </label>
              <input
                name="BatchCode"
                id="BatchCode"
                value={formData.BatchCode}
                onChange={handleInputChange}
                className={`p-1 mt-2 mb-1 w-full border rounded-md ${error ? "border-red-500" : "border-gray-400"}`}
              />
            </div>

            <div className="flex items-center gap-4">
              <label className="w-1/3 text-gray-700" htmlFor="BatchName">
                Batch Name
              </label>
              <input
                type="text"
                name="BatchName"
                id="BatchName"
                value={formData.BatchName}
                onChange={handleInputChange}
                className={`p-1 mt-2 mb-1 w-full border rounded-md ${error ? "border-red-500" : "border-gray-400"}`}
              />
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmitBatch} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Batches;
