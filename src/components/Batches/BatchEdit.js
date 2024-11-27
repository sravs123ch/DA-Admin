
// // import { useState,useContext,useEffect } from "react";
// // import { FaPlus } from "react-icons/fa";
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableContainer,
// //   TableHead,
// //   TableRow,
// //   TableFooter,
// //   TablePagination,
// //   Paper,
// // } from "@mui/material";
// // import { ToastContainer } from "react-toastify"; // Assuming ToastContainer is for notifications
// // import {
// //   StyledTableCell,
// //   StyledTableRow,
// //   TablePaginationActions,
// // } from "../CustomTablePagination";
// // import { MdOutlineCancel,MdDelete } from "react-icons/md";
// // import { FaEdit } from 'react-icons/fa';
// // import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
// // import { MdVisibility } from "react-icons/md";
// // import { BatchContext  } from "../../Context/BatchContext";
// // import { useNavigate } from "react-router-dom";
// // import { useParams } from "react-router-dom";
// // import { Link } from "react-router-dom";

// // const StoreForm = () => {
// //   const [isEditMode, setIsEditMode] = useState(false);
// //   const [formData, setFormData] = useState({
// //     Name: "",
// //     Code: "",
// //     Amount: "",
// //     Category: "",
// //   });
// //   const [selectedBatch, setSelectedBatch] = useState(null);
// //   // const { setBatchDetails } = useContext(BatchContext);
 
// //   const [batchDetails, setBatchDetails] = useState({
// //     BatchCode: "",
// //     BatchId: "",
// //     BatchName: "",
// //     CourseId: "",
// //     CreatedBy: "",
// //     UpdatedBy: "",
// //     Users: [],
// //   });
  
// //   const { BatchId,VideoId } = useParams(); // Access the parameter inside `BatchEdit` component

// //   console.log("BatchId",BatchId);
// //   console.log("VideoId",VideoId);

// //   const [searchName, setSearchName] = useState("");
// //   const [rowsPerPage, setRowsPerPage] = useState(5);
// //   const [page, setPage] = useState(0);
// //   const navigate = useNavigate();
// //   const [editingUserId, setEditingUserId] = useState(null);
// // const [editedUserData, setEditedUserData] = useState({});

// // const [activeTab, setActiveTab] = useState("");

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }));
// //   };

// //   const handleFormSubmit = () => {
// //     // Handle form submission logic here
// //   };

// //   const handleCancel = () => {
// //     // Reset form and exit edit mode
// //     setFormData({
// //       Name: "",
// //       Code: "",
// //       Amount: "",
// //       Category: "",
// //     });
// //     setIsEditMode(false);
// //     setSelectedBatch(null);
// //   };

// //   // const handleEditClick = (batch) => {
// //   //   setIsEditMode(true);
// //   //   setSelectedBatch(batch);
// //   //   setFormData({
// //   //     Name: batch.batchName,
// //   //     Code: batch.BatchId,
// //   //     Amount: batch.students,
// //   //     Category: "", // Set if you have a category field
// //   //   });
// //   // };

// //   // const handleDelete = (BatchId) => {
// //   //   setBatches((prevBatches) => prevBatches.filter((batch) => batch.batchID !== BatchId));
// //   // };

// //   const handleChangePage = (event, newPage) => {
// //     setPage(newPage);
// //   };

// //   const handleChangeRowsPerPage = (event) => {
// //     setRowsPerPage(parseInt(event.target.value, 10));
// //     setPage(0);
// //   };
// //   // const filteredUsers = staticUsers.filter(
// //   //   (user) =>
// //   //     user.FirstName.toLowerCase().includes(searchName.toLowerCase()) ||
// //   //     user.LastName.toLowerCase().includes(searchName.toLowerCase()) ||
// //   //     user.Email.toLowerCase().includes(searchName.toLowerCase()) ||
// //   //     user.RegisteredIP.includes(searchName)
// //   // );

// //   // const displayUsers = filteredUsers.slice(
// //   //   page * rowsPerPage,
// //   //   page * rowsPerPage + rowsPerPage
// //   // );

// //   const handleNavigateToVideos = () => {
// //     navigate(`/video/${BatchId}`); // Navigate to the "/video" route
// //   };

// // // useEffect(() => {
// // //     const fetchBatchDetails = async () => {
// // //       try {
// // //         const response = await fetch(
// // //           `https://da-backend-7smk.onrender.com/api/Batchs/getBatchById/${BatchId}`
// // //         );
// // //         if (!response.ok) {
// // //           throw new Error("Failed to fetch batch details");
// // //         }
// // //         const data = await response.json();
// // //         setBatchDetails({
// // //           BatchCode: data.BatchCode,
// // //           BatchId: data.BatchId,
// // //           BatchName: data.BatchName,
// // //           CourseId: data.CourseId,
// // //           CreatedBy: data.CreatedBy,
// // //           UpdatedBy: data.UpdatedBy,
// // //           Users: data.Users,
// // //         });
// // //       } catch (error) {
// // //         console.error("Error fetching batch details:", error);
// // //       }
// // //     };
  
// // //     fetchBatchDetails();
// // //   }, [BatchId]);

// // // Refactor the API call into a separate function
// // const fetchBatchDetails = async () => {
// //   try {
// //     const response = await fetch(
// //       `https://da-backend-7smk.onrender.com/api/Batchs/getBatchById/${BatchId}`
// //     );
// //     if (!response.ok) {
// //       throw new Error("Failed to fetch batch details");
// //     }
// //     const data = await response.json();
// //     setBatchDetails({
// //       BatchCode: data.BatchCode,
// //       BatchId: data.BatchId,
// //       BatchName: data.BatchName,
// //       CourseId: data.CourseId,
// //       CreatedBy: data.CreatedBy,
// //       UpdatedBy: data.UpdatedBy,
// //       Users: data.Users,
// //     });
// //   } catch (error) {
// //     console.error("Error fetching batch details:", error);
// //   }
// // };

// // // Call the API on initial render or when BatchId changes
// // useEffect(() => {
// //   fetchBatchDetails();
// // }, [BatchId]);

// // //   const handleEditClick = () => {
// // //     setIsEditMode(true);
// // //     setFormData({
// // //       Name: batchDetails.BatchName,
// // //       Code: batchDetails.BatchCode,
// // //       Amount: batchDetails.Users.length, // Or another field
// // //       Category: "", // If applicable
// // //     });


// // //   // Handler for navigating to the videos route and refetching data
// // //   const handleNavigateToVideos = (BatchId) => {
// // //     fetchBatchDetails(); // Refetch batch details
// // //     navigate(`/video/${BatchId}`); // Navigate to the "/video" route
// // //   };
// // // };

// //     // const handleDeleteClick = async (UserID) => {
// //     //   setIsLoading(true);
// //     //   try {
// //     //     await deleteUserById(userId);
// //     //     fetchUsers(); // Refresh the user list after deletion
// //     //   } catch (error) {
// //     //     console.error("Error deleting user:", error);
// //     //   } finally {
// //     //     setIsLoading(false);
// //     //   }
// //     // };

// // // const handleEditClick = (userId) => {
// // //       navigate(`/usersform/${userId}`);
// // //     };
    

// // const handleEditClick = (userId) => {
// //   const user = batchDetails.Users.find((u) => u.UserId === userId);
// //   setEditedUserData(user); // Initialize the editable data with the selected user's details
// //   setEditingUserId(userId); // Set the `editingUserId` to the selected user's ID
// // };

 

// //   const handleSaveClick = (userId) => {
// //     setBatchDetails((prevDetails) => ({
// //       ...prevDetails,
// //       Users: prevDetails.Users.map((user) =>
// //         user.UserId === userId ? { ...user, ...editedUserData } : user
// //       ),
// //     }));
// //     setEditingUserId(null);
// //   };
  
  
// //   return (
// //     <div className="main-container">
// //  <div className="flex border-b">
// //         <button
// //           className={`px-4 py-2 ${
// //             activeTab === "Batches" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
// //           }`}
// //           onClick={() => setActiveTab("Batches")}
// //         >
// //          Batches
// //         </button>
// //         <button
// //           className={`px-4 py-2 ${
// //             activeTab === "Videos" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
// //           }`}
// //           onClick={() => setActiveTab("Videos")}
// //         >
// //           Videos
// //         </button>
// //       </div>

// //       <div className="mt-4">
// //         {/* {activeTab === "Videos" && (
// //           <div>
// //             <h2 className="text-lg font-semibold">Store Management</h2>
           
// //             <button
// //               onClick={() => navigate(`/video/${BatchId}`)}
// //               className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
// //             >
// //               Go to Store Video
// //             </button>
// //           </div>
// //         )} */}
// //         {activeTab === "batch" && (
// //           <Link to={`/video/${BatchId}`} className="cursor-pointer">
// //             <h2 className="text-lg font-semibold">Batch Management</h2>
// //           </Link>
// //         )}
// //       </div>
// //       {activeTab === "Batches" && (
// //       <div className="body-container">
// //         <ToastContainer />
// //         <div className="mb-4">
// //           <div className="flex justify-between">
// //             <h2 className="heading">Batches</h2>
// //             <div className="search-button-group">
            
// // <button
// //   type="button"
// //   className="button-base view-btn"
// //   onClick={handleNavigateToVideos}
// // >
// //   <MdVisibility aria-hidden="true" className="icon" />
// //   Videos
// // </button>
// //             {!isEditMode && (
// //               <button
// //                 type="button"
// //                 className="action-button"
// //                 onClick={() => setIsEditMode(true)}
// //               >
// //                 <FaEdit aria-hidden="true" className="icon" />
// //                 Edit
// //               </button>
// //             )}
// //                {isEditMode && (
// //     <button
// //       type="button"
// //       className="button-base cancel-btn"
// //       onClick={() => {
// //         setIsEditMode(false); // Optionally, exit edit mode after delete
// //       }}
// //     >
// //       <MdDelete aria-hidden="true" className="icon" />
// //       Delete
// //     </button>

// //   )}
// //             </div>
// //           </div>
// //         </div>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
// //           {isEditMode ? (
// //             <>
// //               <div className="flex items-center gap-4">
// //                 <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Name">Name</label>
// //                 <input
// //                   name="Name"
// //                   id="Name"
// //                   value={batchDetails.BatchName}
// //                   onChange={handleInputChange}
// //                   className="p-1 mt-2 mb-1 w-full border rounded-md border-gray-400"
// //                 />
// //               </div>
// //               <div className="flex items-center gap-4">
// //                 <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Code">Code</label>
// //                 <input
// //                   type="text"
// //                   name="Code"
// //                   id="Code"
// //                   value={batchDetails.BatchCode}
// //                   onChange={handleInputChange}
// //                   className="p-1 mt-2 mb-1 w-full border rounded-md border-gray-400"
// //                 />
// //               </div>
           
// //             </>
// //           ) : (
// //             <>
// //               <div className="flex items-center gap-4">
// //                 <label className="w-1/3 text-xs font-medium text-gray-700">Name:</label>
// //                 <span>{batchDetails.BatchName || "N/A"}</span>
// //               </div>
// //               <div className="flex items-center gap-4">
// //                 <label className="w-1/3 text-xs font-medium text-gray-700">Code:</label>
// //                 <span>{batchDetails.BatchCode || "N/A"}</span>
// //               </div>
          
// //             </>
// //           )}
// //         </div>

// //         <div className="mt-6 flex justify-end gap-4 mb-6">
// //           {isEditMode && (
// //             <>
// //               <button
// //                 type="submit"
// //                 className="button-base save-btn"
// //                 onClick={handleFormSubmit}
// //               >
// //                 {selectedBatch ? "Save" : "Update"}
// //               </button>
// //               <button
// //                 type="button"
// //                 onClick={handleCancel}
// //                 className="button-base cancel-btn"
// //               >
// //                 Cancel
// //               </button>
// //             </>
// //           )}
// //         </div>
// //         <TableContainer component={Paper} className="mt-4">
// //         <Table>
// //           <TableHead>
// //             <TableRow>
// //               <StyledTableCell>Name</StyledTableCell>
// //               <StyledTableCell>Email</StyledTableCell>
// //               <StyledTableCell>Device IP</StyledTableCell>
// //               <StyledTableCell>Batch</StyledTableCell>
// //               {isEditMode && (<StyledTableCell align="center">Actions</StyledTableCell>)}
// //             </TableRow>
// //           </TableHead>
        
// //           {/* <TableBody>
// //   {batchDetails.Users.map((user, index) => (
// //     <StyledTableRow key={user.UserId}>
// //       <StyledTableCell>{index + 1}</StyledTableCell>
// //       <StyledTableCell>{user.Username}</StyledTableCell>
// //       <StyledTableCell>{user.Email}</StyledTableCell>
// //       <StyledTableCell>{user.Phone || "N/A"}</StyledTableCell>
// //       {isEditMode && (<StyledTableCell>
// //                     <div className="button-container">
// //                       <button
// //                         type="button"
// //                         onClick={() => handleEditClick(user.UserId)}
// //                         className="button edit-button"
// //                       >
// //                         <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
// //                         Edit
// //                       </button>

// //                       <button
// //                         type="button"
// //                         // onClick={() => handleDeleteClick(user.UserId)}
// //                         className="button delete-button"
// //                       >
// //                         <MdOutlineCancel
// //                           aria-hidden="true"
// //                           className="h-4 w-4"
// //                         />
// //                         Delete
// //                       </button>
// //                     </div>
// //                   </StyledTableCell>
// //       )}
// //     </StyledTableRow>
// //   ))}
// // </TableBody> */}


// // <TableBody>
// //   {batchDetails.Users.map((user, index) => (
// //     <StyledTableRow key={user.UserId}>
// //       <StyledTableCell>{index + 1}</StyledTableCell>
// //       <StyledTableCell>
// //         {editingUserId === user.UserId ? (
// //           <input
// //             type="text"
// //             value={editedUserData.Username}
// //             onChange={(e) =>
// //               setEditedUserData((prev) => ({ ...prev, Username: e.target.value }))
// //             }
// //             className="border p-1"
// //           />
// //         ) : (
// //           user.Username
// //         )}
// //       </StyledTableCell>
// //       <StyledTableCell>
// //         {editingUserId === user.UserId ? (
// //           <input
// //             type="email"
// //             value={editedUserData.Email}
// //             onChange={(e) =>
// //               setEditedUserData((prev) => ({ ...prev, Email: e.target.value }))
// //             }
// //             className="border p-1"
// //           />
// //         ) : (
// //           user.Email
// //         )}
// //       </StyledTableCell>
// //       <StyledTableCell>
// //         {editingUserId === user.UserId ? (
// //           <input
// //             type="text"
// //             value={editedUserData.Phone || ""}
// //             onChange={(e) =>
// //               setEditedUserData((prev) => ({ ...prev, Phone: e.target.value }))
// //             }
// //             className="border p-1"
// //           />
// //         ) : (
// //           user.Phone || "N/A"
// //         )}
// //       </StyledTableCell>
// //       {isEditMode && (
// //         <StyledTableCell>
// //           {editingUserId === user.UserId ? (
// //             // <div className="button-container">
// //             //   <button
// //             //     type="button"
// //             //     onClick={() => handleSaveClick(user.UserId)}
// //             //     className="button save-button"
// //             //   >
// //             //     Save
// //             //   </button>
// //             //   <button
// //             //     type="button"
// //             //     onClick={() => setEditingUserId(null)}
// //             //     className="button cancel-button"
// //             //   >
// //             //     Cancel
// //             //   </button>
// //             // </div>
// //             <div className="button-container">
// //   <button
// //     type="button"
// //      className="button-base save-btn"
// //     onClick={() => handleSaveClick(user.UserId)}
// //     // className={saveButtonStyles}
// //   >
// //    Update
// //   </button>
// //   <button
// //     type="button"
// //     onClick={() => setEditingUserId(null)}
// //      className="button-base cancel-btn"
// //     // className={cancelButtonStyles}
// //   >
// //     Cancel
// //   </button>
// // </div>

// //           ) : (
// //             <div className="button-container">
// //               <button
// //                 type="button"
// //                 onClick={() => handleEditClick(user.UserId)}
// //                 className="button edit-button"
// //               >
// //                 <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
// //                 Edit
// //               </button>
// //               <button
// //                 type="button"
// //                 className="button delete-button"
// //               >
// //                 <MdOutlineCancel
// //                   aria-hidden="true"
// //                   className="h-4 w-4"
// //                 />
// //                 Delete
// //               </button>
// //             </div>
// //           )}
// //         </StyledTableCell>
// //       )}
// //     </StyledTableRow>
// //   ))}
// // </TableBody>

// //           <TableFooter>
// //             <TableRow>
// //               <TablePagination
// //                 rowsPerPageOptions={[10, 25, 50, { label: "All", value: -1 }]}
// //                 colSpan={6}
// //                 count={batchDetails.Users.length}
// //                 rowsPerPage={rowsPerPage}
// //                 page={page}
// //                 SelectProps={{
// //                   inputProps: {
// //                     "aria-label": "rows per page",
// //                   },
// //                   native: true,
// //                 }}
// //                 onChangePage={handleChangePage}
// //                 onChangeRowsPerPage={handleChangeRowsPerPage}
// //                 ActionsComponent={TablePaginationActions}
// //               />
// //             </TableRow>
// //           </TableFooter>
// //         </Table>
// //       </TableContainer>
// //       </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default StoreForm;




// import { useState,useContext,useEffect } from "react";
// import { FaPlus } from "react-icons/fa";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TableFooter,
//   TablePagination,
//   Paper,
// } from "@mui/material";
// import { ToastContainer } from "react-toastify"; // Assuming ToastContainer is for notifications
// import {
//   StyledTableCell,
//   StyledTableRow,
//   TablePaginationActions,
// } from "../CustomTablePagination";
// import { MdOutlineCancel,MdDelete } from "react-icons/md";
// import { FaEdit } from 'react-icons/fa';
// import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
// import { MdVisibility } from "react-icons/md";
// import { BatchContext  } from "../../Context/BatchContext";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import Videos from "../Courses/Videos";

// const StoreForm = () => {
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     Name: "",
//     Code: "",
//     Amount: "",
//     Category: "",
//   });
//   const [selectedBatch, setSelectedBatch] = useState(null);
//   // const { setBatchDetails } = useContext(BatchContext);
 
//   const [batchDetails, setBatchDetails] = useState({
//     BatchCode: "",
//     BatchId: "",
//     BatchName: "",
//     CourseId: "",
//     CreatedBy: "",
//     UpdatedBy: "",
//     Users: [],
//   });
  
//   const { BatchId,VideoId } = useParams(); // Access the parameter inside `BatchEdit` component

//   console.log("BatchId",BatchId);
//   console.log("VideoId",VideoId);

//   const [searchName, setSearchName] = useState("");
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [page, setPage] = useState(0);
//   const navigate = useNavigate();
//   const [editingUserId, setEditingUserId] = useState(null);
// const [editedUserData, setEditedUserData] = useState({});

// const [activeTab, setActiveTab] = useState("Batches");

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
//     setSelectedBatch(null);
//   };


//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };


//   const handleNavigateToVideos = () => {
//     navigate(`/video/${BatchId}`); // Navigate to the "/video" route
//   };


// // Refactor the API call into a separate function
// const fetchBatchDetails = async () => {
//   try {
//     const response = await fetch(
//       `https://da-backend-7smk.onrender.com/api/Batchs/getBatchById/${BatchId}`
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch batch details");
//     }
//     const data = await response.json();
//     setBatchDetails({
//       BatchCode: data.BatchCode,
//       BatchId: data.BatchId,
//       BatchName: data.BatchName,
//       CourseId: data.CourseId,
//       CreatedBy: data.CreatedBy,
//       UpdatedBy: data.UpdatedBy,
//       Users: data.Users,
//     });
//   } catch (error) {
//     console.error("Error fetching batch details:", error);
//   }
// };

// // Call the API on initial render or when BatchId changes
// useEffect(() => {
//   fetchBatchDetails();
// }, [BatchId]);
    

// const handleEditClick = (userId) => {
//   const user = batchDetails.Users.find((u) => u.UserId === userId);
//   setEditedUserData(user); // Initialize the editable data with the selected user's details
//   setEditingUserId(userId); // Set the `editingUserId` to the selected user's ID
// };

 

//   const handleSaveClick = (userId) => {
//     setBatchDetails((prevDetails) => ({
//       ...prevDetails,
//       Users: prevDetails.Users.map((user) =>
//         user.UserId === userId ? { ...user, ...editedUserData } : user
//       ),
//     }));
//     setEditingUserId(null);
//   };
//   const handleVideoClick = () => {
//     setActiveTab("Videos");
//     // navigate(`/video/${BatchId}`); 
//   };
//   const handleBatchesClick = () => {
//     setActiveTab("Batches");
//     navigate(`/batchesedit/${BatchId}`); 
//   };
//   useEffect(() => {
//     if (activeTab === "Videos") {
//       // Use navigate instead of history.push
//       // navigate(`/video/${BatchId}`);
//       // window.history.replaceState({}, '', `/video/${BatchId}`);

//     }
//   }, [activeTab, BatchId, navigate]);

//   const handleTabChange = (tab) => {
//     if (tab === "Videos") {
//       navigate(`/video/${BatchId}`);
//     } else {
//       navigate(`/batchesedit/${BatchId}`);
//     }
//   };
  
//   return (
//     <div className="main-container">
//   <div className="flex border-b">
//         <button
//           className={`px-4 py-2 ${
//             activeTab === "Batches" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
//           }`}
//           onClick={handleBatchesClick}
//         >
//          Batches
//         </button>
       
//         <button
//       className={`px-4 py-2 ${
//         activeTab === "Videos" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
//       }`}
//       onClick={handleVideoClick}
//     >
//       Videos
//     </button>
//       </div> 
//      {activeTab === "Videos" && (
//           <div>
//             <Videos />
//           </div>
//         )}
  
//       {activeTab === "Batches" && (
//       <div className="body-container">
//         <ToastContainer />
//         <div className="mb-4">
//           <div className="flex justify-between">
//             <h2 className="heading"></h2>
//             <div className="search-button-group">
            
// <button
//   type="button"
//   className="button-base view-btn"
//   onClick={handleNavigateToVideos}
// >
//   <MdVisibility aria-hidden="true" className="icon" />
//   Videos
// </button>
//             {!isEditMode && (
//               <button
//                 type="button"
//                 className="action-button"
//                 onClick={() => setIsEditMode(true)}
//               >
//                 <FaEdit aria-hidden="true" className="icon" />
//                 Edit
//               </button>
//             )}
//                {isEditMode && (
//     <button
//       type="button"
//       className="button-base cancel-btn"
//       onClick={() => {
//         setIsEditMode(false); // Optionally, exit edit mode after delete
//       }}
//     >
//       <MdDelete aria-hidden="true" className="icon" />
//       Delete
//     </button>

//   )}
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
//           {isEditMode ? (
//             <>
//               <div className="flex items-center gap-4">
//                 <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Name">Name</label>
//                 <input
//                   name="Name"
//                   id="Name"
//                   value={batchDetails.BatchName}
//                   onChange={handleInputChange}
//                   className="p-1 mt-2 mb-1 w-full border rounded-md border-gray-400"
//                 />
//               </div>
//               <div className="flex items-center gap-4">
//                 <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Code">Code</label>
//                 <input
//                   type="text"
//                   name="Code"
//                   id="Code"
//                   value={batchDetails.BatchCode}
//                   onChange={handleInputChange}
//                   className="p-1 mt-2 mb-1 w-full border rounded-md border-gray-400"
//                 />
//               </div>
           
//             </>
//           ) : (
//             <>
//               <div className="flex items-center gap-4">
//                 <label className="w-1/3 text-xs font-medium text-gray-700">Name:</label>
//                 <span>{batchDetails.BatchName || "N/A"}</span>
//               </div>
//               <div className="flex items-center gap-4">
//                 <label className="w-1/3 text-xs font-medium text-gray-700">Code:</label>
//                 <span>{batchDetails.BatchCode || "N/A"}</span>
//               </div>
          
//             </>
//           )}
//         </div>

//         <div className="mt-6 flex justify-end gap-4 mb-6">
//           {isEditMode && (
//             <>
//               <button
//                 type="submit"
//                 className="button-base save-btn"
//                 onClick={handleFormSubmit}
//               >
//                 {selectedBatch ? "Save" : "Update"}
//               </button>
//               <button
//                 type="button"
//                 onClick={handleCancel}
//                 className="button-base cancel-btn"
//               >
//                 Cancel
//               </button>
//             </>
//           )}
//         </div>
//         <TableContainer component={Paper} className="mt-4">
//         <Table>
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Name</StyledTableCell>
//               <StyledTableCell>Email</StyledTableCell>
//               <StyledTableCell>Device IP</StyledTableCell>
//               {/* <StyledTableCell>Batch</StyledTableCell> */}
//               {isEditMode && (<StyledTableCell>Actions</StyledTableCell>)}
//             </TableRow>
//           </TableHead>
   


// <TableBody>
//   {batchDetails.Users.map((user, index) => (
//     <StyledTableRow key={user.UserId}>
//       <StyledTableCell>{index + 1}</StyledTableCell>
//       <StyledTableCell>
//         {editingUserId === user.UserId ? (
//           <input
//             type="text"
//             value={editedUserData.Username}
//             onChange={(e) =>
//               setEditedUserData((prev) => ({ ...prev, Username: e.target.value }))
//             }
//             className="border p-1"
//           />
//         ) : (
//           user.Username
//         )}
//       </StyledTableCell>
//       <StyledTableCell>
//         {editingUserId === user.UserId ? (
//           <input
//             type="email"
//             value={editedUserData.Email}
//             onChange={(e) =>
//               setEditedUserData((prev) => ({ ...prev, Email: e.target.value }))
//             }
//             className="border p-1"
//           />
//         ) : (
//           user.Email
//         )}
//       </StyledTableCell>
//       {/* <StyledTableCell>
//         {editingUserId === user.UserId ? (
//           <input
//             type="text"
//             value={editedUserData.Phone || ""}
//             onChange={(e) =>
//               setEditedUserData((prev) => ({ ...prev, Phone: e.target.value }))
//             }
//             className="border p-1"
//           />
//         ) : (
//           user.Phone || "N/A"
//         )}
//       </StyledTableCell> */}
//       {isEditMode && (
//         <StyledTableCell>
//           {editingUserId === user.UserId ? (
//             <div className="button-container">
//   <button
//     type="button"
//      className="button-base save-btn"
//     onClick={() => handleSaveClick(user.UserId)}
//     // className={saveButtonStyles}
//   >
//    Update
//   </button>
//   <button
//     type="button"
//     onClick={() => setEditingUserId(null)}
//      className="button-base cancel-btn"
//     // className={cancelButtonStyles}
//   >
//     Cancel
//   </button>
// </div>

//           ) : (
//             <div className="button-container">
//               <button
//                 type="button"
//                 onClick={() => handleEditClick(user.UserId)}
//                 className="button edit-button"
//               >
//                 <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
//                 Edit
//               </button>
//               <button
//                 type="button"
//                 className="button delete-button"
//               >
//                 <MdOutlineCancel
//                   aria-hidden="true"
//                   className="h-4 w-4"
//                 />
//                 Delete
//               </button>
//             </div>
//           )}
//         </StyledTableCell>
//       )}
//     </StyledTableRow>
//   ))}
// </TableBody>

//           <TableFooter>
//             <TableRow>
//               <TablePagination
//                 rowsPerPageOptions={[10, 25, 50, { label: "All", value: -1 }]}
//                 colSpan={6}
//                 count={batchDetails.Users.length}
//                 rowsPerPage={rowsPerPage}
//                 page={page}
//                 SelectProps={{
//                   inputProps: {
//                     "aria-label": "rows per page",
//                   },
//                   native: true,
//                 }}
//                 onChangePage={handleChangePage}
//                 onChangeRowsPerPage={handleChangeRowsPerPage}
//                 ActionsComponent={TablePaginationActions}
//               />
//             </TableRow>
//           </TableFooter>
//         </Table>
//       </TableContainer>
//       </div>
//       )}
//     </div>
//   );
// };

// export default StoreForm;


import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdVisibility } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify"; 
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import Videos from "../Courses/Videos";
import {
  StyledTableCell,
  StyledTableRow,
  TablePaginationActions,
} from "../CustomTablePagination";
import { MdOutlineCancel } from "react-icons/md";
import {
  
    TableFooter,
    TablePagination,
   
  } from "@mui/material";

const StoreForm = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({ Name: "", Code: "", Amount: "", Category: "" });
  const [batchDetails, setBatchDetails] = useState({ BatchCode: "", BatchId: "", BatchName: "", Users: [] });
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUserData, setEditedUserData] = useState({});
  const [activeTab, setActiveTab] = useState("Batches");
  
  const { BatchId,VideoId } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Fetch batch details when BatchId changes
  useEffect(() => {
    const fetchBatchDetails = async () => {
      try {
        const response = await fetch(`https://da-backend-7smk.onrender.com/api/Batchs/getBatchById/${BatchId}`);
        if (!response.ok) throw new Error("Failed to fetch batch details");
        const data = await response.json();
        setBatchDetails(data);
      } catch (error) {
        console.error("Error fetching batch details:", error);
      }
    };

    fetchBatchDetails();
  }, [BatchId]);

  const handleEditClick = (userId) => {
    const user = batchDetails.Users.find((u) => u.UserId === userId);
    setEditedUserData(user);
    setEditingUserId(userId);
  };

  const handleSaveClick = (userId) => {
    setBatchDetails((prevDetails) => ({
      ...prevDetails,
      Users: prevDetails.Users.map((user) => 
        user.UserId === userId ? { ...user, ...editedUserData } : user
      ),
    }));
    setEditingUserId(null);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setEditedUserData({});
    setEditingUserId(null);
  };

  console.log("VideoId",VideoId);

  console.log("BatchId",  BatchId);

  
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // const handleTabChange = (tab) => {
  //   setActiveTab(tab);
  //   navigate(tab === "Videos" ? `/video/${BatchId}/${VideoId}` : `/batchesedit/${BatchId}`);
  // };
  

  return (
    <div className="main-container">
      {/* <div className="flex border-b">
        <button
          className={`px-4 py-2 ${activeTab === "Batches" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
          onClick={() => handleTabChange("Batches")}
        >
          Batches
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "Videos" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
          onClick={() => handleTabChange("Videos")}
        >
          Videos
        </button>
      </div> */}
      
      {activeTab === "Videos" ? <Videos /> : (
        <div className="body-container -mt-20">
          <ToastContainer />
          <div className="mb-4 flex justify-between">
            <h2 className="heading"></h2>
            <div className="search-button-group">
              <button className="button-base view-btn" onClick={() => navigate(`/video/${BatchId}`)}>
                <MdVisibility aria-hidden="true" className="icon" /> Videos
              </button>
              <button className="action-button" onClick={() => setIsEditMode(true)}>
                <FaEdit aria-hidden="true" className="icon" /> Edit
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {isEditMode ? (
              <>
                <div className="flex items-center gap-4">
                  {/* <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Name">Name</label> */}
                  <label className="w-1/3 text-xs font-bold text-gray-700" htmlFor="Name">
  Name
</label>

                  <input
                    name="Name"
                    id="Name"
                    value={editedUserData.Name || batchDetails.BatchName}
                    onChange={(e) => setEditedUserData((prev) => ({ ...prev, Name: e.target.value }))}
                    className="p-1 mt-2 mb-1 w-full border rounded-md border-gray-400"
                  />
                </div>
                <div className="flex items-center gap-4">
                  {/* <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Code">Code</label> */}
                  <label className="w-1/3 text-xs font-bold text-gray-700" htmlFor="Code">
                  Code
</label>

                  <input
                    type="text"
                    name="Code"
                    id="Code"
                    value={editedUserData.Code || batchDetails.BatchCode}
                    onChange={(e) => setEditedUserData((prev) => ({ ...prev, Code: e.target.value }))}
                    className="p-1 mt-2 mb-1 w-full border rounded-md border-gray-400"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center gap-4">
                  <label className="w-1/3 text-xs font-bold text-gray-700">Name:</label>
                  <span>{batchDetails.BatchName || "N/A"}</span>
                </div>
                <div className="flex items-center gap-4">
                  <label className="w-1/3 text-xs font-bold text-gray-700">Code:</label>
                  <span>{batchDetails.BatchCode || "N/A"}</span>
                </div>
              </>
            )}
          </div>

          {isEditMode && (
            <div className="mt-6 flex justify-end gap-4 mb-6">
              <button className="button-base save-btn" onClick={handleSaveClick}>Save</button>
              <button className="button-base cancel-btn" onClick={handleCancel}>Cancel</button>
            </div>
          )}

         <TableContainer component={Paper} className="mt-4">
         <Table>
           <TableHead>
             <TableRow>
               <StyledTableCell>Name</StyledTableCell>
               <StyledTableCell>Email</StyledTableCell>
               <StyledTableCell>Device IP</StyledTableCell>
               {/* <StyledTableCell>Batch</StyledTableCell> */}
               {isEditMode && (<StyledTableCell>Actions</StyledTableCell>)}
             </TableRow>
           </TableHead>
   


 <TableBody>
   {batchDetails.Users.map((user, index) => (
    <StyledTableRow key={user.UserId}>
      <StyledTableCell>{index + 1}</StyledTableCell>
      <StyledTableCell>
        {editingUserId === user.UserId ? (
          <input
            type="text"
            value={editedUserData.Username}
            onChange={(e) =>
              setEditedUserData((prev) => ({ ...prev, Username: e.target.value }))
            }
            className="border p-1"
          />
        ) : (
          user.Username
        )}
      </StyledTableCell>
      <StyledTableCell>
        {editingUserId === user.UserId ? (
          <input
            type="email"
            value={editedUserData.Email}
            onChange={(e) =>
              setEditedUserData((prev) => ({ ...prev, Email: e.target.value }))
            }
            className="border p-1"
          />
        ) : (
          user.Email
        )}
      </StyledTableCell>
      {isEditMode && (
        <StyledTableCell>
          {editingUserId === user.UserId ? (
            <div className="button-container">
  <button
    type="button"
     className="button-base save-btn"
    onClick={() => handleSaveClick(user.UserId)}
    // className={saveButtonStyles}
  >
   Update
  </button>
  <button
    type="button"
    onClick={() => setEditingUserId(null)}
     className="button-base cancel-btn"
    // className={cancelButtonStyles}
  >
    Cancel
  </button>
</div>

          ) : (
            <div className="button-container">
              <button
                type="button"
                onClick={() => handleEditClick(user.UserId)}
                className="button edit-button"
              >
                <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
                Edit
              </button>
              <button
                type="button"
                className="button delete-button"
              >
                <MdOutlineCancel
                  aria-hidden="true"
                  className="h-4 w-4"
                />
                Delete
              </button>
            </div>
          )}
        </StyledTableCell>
      )}
    </StyledTableRow>
  ))}
</TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[10, 25, 50, { label: "All", value: -1 }]}
                colSpan={6}
                count={batchDetails.Users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    "aria-label": "rows per page",
                  },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
        </div>
      )}
    </div>
  );
};

export default StoreForm;
