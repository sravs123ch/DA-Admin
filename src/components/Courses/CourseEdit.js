
// import { useState } from "react";
// import { FaPlus } from "react-icons/fa";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, TablePagination, Paper } from "@mui/material";
// import { ToastContainer } from "react-toastify"; // Assuming ToastContainer is for notifications
// import {
//   StyledTableCell,
//   StyledTableRow,
//   TablePaginationActions,
// } from "../CustomTablePagination";
// import { MdOutlineCancel } from "react-icons/md";

// const StoreForm = () => {
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     Name: "",
//     Code: "",
//     Amount: "",
//     Category: "",
//   });
//   const [batches, setBatches] = useState([
//     {
//       batchID: "B001",
//       batchName: "Course 1",
//       students: 50,
//       dateAdded: "2024-10-01",
//     },
//     {
//       batchID: "B002",
//       batchName: "Course 2",
//       students: 35,
//       dateAdded: "2024-09-15",
//     },
//     {
//       batchID: "B003",
//       batchName: "Course 3",
//       students: 42,
//       dateAdded: "2024-08-30",
//     },
//     {
//       batchID: "B004",
//       batchName: "Course 4",
//       students: 28,
//       dateAdded: "2024-07-20",
//     },
//   ]); // Sample batch data
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [page, setPage] = useState(0);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleFormSubmit = () => {
//     // Handle form submission logic here
//   };

//   const handleCancel = () => {
//     // Reset form and exit edit mode
//     setFormData({
//       Name: "",
//       Code: "",
//       Amount: "",
//       Category: "",
//     });
//     setIsEditMode(false);
//   };

//   const handleDelete = (batchId) => {
//     // Handle delete logic here
//     setBatches((prevBatches) => prevBatches.filter((batch) => batch.batchID !== batchId));
//   };

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   return (
//     <div className="main-container">
//       <div className="body-container">
//         <ToastContainer />
//         <div className="mb-4">
//           <div className="flex justify-between">
//             <h2 className="heading">Courses</h2>
//             <div className="search-button-group">
//               <button
//                 type="button"
//                 className="action-button"
//                 onClick={() => setIsEditMode(true)} // Set edit mode on button click
//               >
//                 <FaPlus aria-hidden="true" className="icon" />
//                 {isEditMode ? "Edit Courses" : "Edit Courses"}
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
//           <div className="flex items-center gap-4">
//             <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Name">Name</label>
//             <input
//               name="Name"
//               id="Name"
//               value={formData.Name}
//               onChange={handleInputChange}
//               disabled={!isEditMode} // Disable input when not in edit mode
//               className={`p-1 mt-2 mb-1 w-full border rounded-md ${isEditMode ? "border-gray-400" : "border-gray-300"}`}
//             />
//           </div>
//           <div className="flex items-center gap-4">
//             <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Code">Code</label>
//             <input
//               type="text"
//               name="Code"
//               id="Code"
//               value={formData.Code}
//               onChange={handleInputChange}
//               disabled={!isEditMode} // Disable input when not in edit mode
//               className={`p-1 mt-2 mb-1 w-full border rounded-md ${isEditMode ? "border-gray-400" : "border-gray-300"}`}
//             />
//           </div>
//           <div className="flex items-center gap-4 mb-4">
//             <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Amount">Amount</label>
//             <input
//               type="number"
//               name="Amount"
//               id="Amount"
//               value={formData.Amount}
//               onChange={handleInputChange}
//               disabled={!isEditMode} // Disable input when not in edit mode
//               className={`p-1 mt-2 mb-1 w-full border rounded-md ${isEditMode ? "border-gray-400" : "border-gray-300"}`}
//             />
//           </div>
//           <div className="flex items-center gap-4 mb-4">
//             <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Category">Category</label>
//             <input
//               type="text"
//               name="Category"
//               id="Category"
//               value={formData.Category}
//               onChange={handleInputChange}
//               disabled={!isEditMode} // Disable input when not in edit mode
//               className={`p-1 mt-2 mb-1 w-full border rounded-md ${isEditMode ? "border-gray-400" : "border-gray-300"}`}
//             />
//           </div>
//         </div>

//         <div className="mt-6 flex justify-end gap-4 mb-6">
//           <button
//             type="submit"
//             className="button-base save-btn"
//             onClick={handleFormSubmit}
//           >
//             {isEditMode ? "Update" : "Save"}
//           </button>
//           <button
//             type="button"
//             onClick={handleCancel}
//             className="button-base cancel-btn"
//           >
//             Cancel
//           </button>
//         </div>

//         <TableContainer
//           component={Paper}
//           className="bg-white rounded-lg shadow-md"
//         >
//           <Table>
//             <TableHead>
//               <StyledTableRow>
//                 <StyledTableCell align="center">Batch ID</StyledTableCell>
//                 <StyledTableCell align="center">Batch Name</StyledTableCell>
//                 <StyledTableCell align="center">Total Students</StyledTableCell>
//                 <StyledTableCell align="center">Date Created</StyledTableCell>
//                 {isEditMode && <StyledTableCell align="center">Actions</StyledTableCell>}
//               </StyledTableRow>
//             </TableHead>
//             <TableBody>
//               {batches.map((item, index) => (
//                 <StyledTableRow key={index}>
//                   <StyledTableCell align="center">{item.batchID}</StyledTableCell>
//                   <StyledTableCell align="center">{item.batchName}</StyledTableCell>
//                   <StyledTableCell align="center">{item.students}</StyledTableCell>
//                   <StyledTableCell align="center">{item.dateAdded}</StyledTableCell>
//                   {isEditMode && (
//                     <StyledTableCell align="center">
                   

// <button
//                                   type="button"
                               
//                                   className="button delete-button ml-24"
//                                 >
//                                   <MdOutlineCancel
//                                     aria-hidden="true"
//                                     className="h-4 w-4"
//                                   />
//                                   Delete
//                                 </button>
//                     </StyledTableCell>
//                   )}
//                 </StyledTableRow>
//               ))}
//             </TableBody>
//             <TableFooter>
//               <TableRow>
//                 <TablePagination
//                   rowsPerPageOptions={[5, 10, 25]}
//                   colSpan={5}
//                   count={batches.length}
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
//                 />
//               </TableRow>
//             </TableFooter>
//           </Table>
//         </TableContainer>
//       </div>
//     </div>
//   );
// };

// export default StoreForm;


import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  TablePagination,
  Paper,
} from "@mui/material";
import { ToastContainer } from "react-toastify"; // Assuming ToastContainer is for notifications
import {
  StyledTableCell,
  StyledTableRow,
  TablePaginationActions,
} from "../CustomTablePagination";
import { MdOutlineCancel,MdDelete } from "react-icons/md";
import { FaEdit } from 'react-icons/fa';

const StoreForm = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Code: "",
    Amount: "",
    Category: "",
  });
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [batches, setBatches] = useState([
    {
      batchID: "B001",
      batchName: "Course 1",
      students: 50,
      dateAdded: "2024-10-01",
    },
    {
      batchID: "B002",
      batchName: "Course 2",
      students: 35,
      dateAdded: "2024-09-15",
    },
    {
      batchID: "B003",
      batchName: "Course 3",
      students: 42,
      dateAdded: "2024-08-30",
    },
    {
      batchID: "B004",
      batchName: "Course 4",
      students: 28,
      dateAdded: "2024-07-20",
    },
  ]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    // Handle form submission logic here
  };

  const handleCancel = () => {
    // Reset form and exit edit mode
    setFormData({
      Name: "",
      Code: "",
      Amount: "",
      Category: "",
    });
    setIsEditMode(false);
    setSelectedBatch(null);
  };

  const handleEditClick = (batch) => {
    setIsEditMode(true);
    setSelectedBatch(batch);
    setFormData({
      Name: batch.batchName,
      Code: batch.batchID,
      Amount: batch.students,
      Category: "", // Set if you have a category field
    });
  };

  const handleDelete = (batchId) => {
    setBatches((prevBatches) => prevBatches.filter((batch) => batch.batchID !== batchId));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="main-container">
      <div className="body-container">
        <ToastContainer />
        <div className="mb-4">
          <div className="flex justify-between">
            <h2 className="heading">Courses</h2>
            <div className="search-button-group">
            {!isEditMode && (
              <button
                type="button"
                className="action-button"
                onClick={() => setIsEditMode(true)}
              >
                <FaEdit aria-hidden="true" className="icon" />
                Edit
              </button>
            )}
               {isEditMode && (
    <button
      type="button"
      className="button-base cancel-btn"
      onClick={() => {
        setIsEditMode(false); // Optionally, exit edit mode after delete
      }}
    >
      <MdDelete aria-hidden="true" className="icon" />
      Delete
    </button>
  )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          {isEditMode ? (
            <>
              <div className="flex items-center gap-4">
                <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Name">Name</label>
                <input
                  name="Name"
                  id="Name"
                  value={formData.Name}
                  onChange={handleInputChange}
                  className="p-1 mt-2 mb-1 w-full border rounded-md border-gray-400"
                />
              </div>
              <div className="flex items-center gap-4">
                <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Code">Code</label>
                <input
                  type="text"
                  name="Code"
                  id="Code"
                  value={formData.Code}
                  onChange={handleInputChange}
                  className="p-1 mt-2 mb-1 w-full border rounded-md border-gray-400"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Amount">Amount</label>
                <input
                  type="number"
                  name="Amount"
                  id="Amount"
                  value={formData.Amount}
                  onChange={handleInputChange}
                  className="p-1 mt-2 mb-1 w-full border rounded-md border-gray-400"
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Category">Category</label>
                <input
                  type="text"
                  name="Category"
                  id="Category"
                  value={formData.Category}
                  onChange={handleInputChange}
                  className="p-1 mt-2 mb-1 w-full border rounded-md border-gray-400"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-4">
                <label className="w-1/3 text-xs font-medium text-gray-700">Name:</label>
                <span>{selectedBatch?.batchName || "N/A"}</span>
              </div>
              <div className="flex items-center gap-4">
                <label className="w-1/3 text-xs font-medium text-gray-700">Code:</label>
                <span>{selectedBatch?.batchID || "N/A"}</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <label className="w-1/3 text-xs font-medium text-gray-700">Amount:</label>
                <span>{selectedBatch?.students || "N/A"}</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <label className="w-1/3 text-xs font-medium text-gray-700">Category:</label>
                <span>{formData.Category || "N/A"}</span>
              </div>
            </>
          )}
        </div>

        <div className="mt-6 flex justify-end gap-4 mb-6">
          {isEditMode && (
            <>
              <button
                type="submit"
                className="button-base save-btn"
                onClick={handleFormSubmit}
              >
                {selectedBatch ? "Save" : "Update"}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="button-base cancel-btn"
              >
                Cancel
              </button>
            </>
          )}
        </div>
         <TableContainer
          component={Paper}
          className="bg-white rounded-lg shadow-md"
        >
          <Table>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell align="center">Batch ID</StyledTableCell>
                <StyledTableCell align="center">Batch Name</StyledTableCell>
                <StyledTableCell align="center">Total Students</StyledTableCell>
                <StyledTableCell align="center">Date Created</StyledTableCell>
                {isEditMode && <StyledTableCell align="center">Actions</StyledTableCell>}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {batches.map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="center">{item.batchID}</StyledTableCell>
                  <StyledTableCell align="center">{item.batchName}</StyledTableCell>
                  <StyledTableCell align="center">{item.students}</StyledTableCell>
                  <StyledTableCell align="center">{item.dateAdded}</StyledTableCell>
                  {isEditMode && (
                    <StyledTableCell align="center">
                   

<button
                                  type="button"
                               
                                  className="button delete-button ml-24"
                                >
                                  <MdOutlineCancel
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                  />
                                  Delete
                                </button>
                    </StyledTableCell>
                  )}
                </StyledTableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={5}
                  count={batches.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default StoreForm;
