import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
// import { StoreContext } from "../../Context/storeContext";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import { Combobox } from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/solid";
import LoadingAnimation from "../../components/Loading/LoadingAnimation";
import "react-toastify/dist/ReactToastify.css";
import { TableContainer } from "@mui/material";
import {
  TableFooter,
  TablePagination,
} from "@mui/material";

import {
  StyledTableCell,
  StyledTableRow,
  TablePaginationActions,
} from "../CustomTablePagination";
import { IoIosSearch, IoIosCall, IoMdMail } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { DataContext } from "../../Context/DataContext";
import { AiOutlineEdit } from "react-icons/ai";
import '../../index.css'; 



const steps = ["Course Details", "Batch Details"];

function StoreForm() {
  const location = useLocation();

  const handleUserSelect = (user) => {
    setSelectedUsers([user]);
    setIsFocused(false);
    setSearchQuery(`${user.FirstName} ${user.LastName}`);
  };
  const saveSelectedUser = async () => {
    if (selectedUsers.length > 0) {
      setIsLoading(true); // Show loading animation
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("No authentication token found");
        }

        const store =
          location.state?.storeDetails?.store || storeDetails?.store;
        const storeID = store?.StoreID || "";

        const payload = {
          MapStoreUserID: 0,
          StoreID: storeID,
          UserID: selectedUsers[0].UserID,
          CreatedBy: "Danny",
          FirstName: selectedUsers[0].FirstName,
          LastName: selectedUsers[0].LastName,
          Email: selectedUsers[0].Email,
          PhoneNumber: selectedUsers[0].PhoneNumber,
        };

        const response = await axios.post(
          // CREATEORUPDATE_MAPSTOREUSER,
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 201) {
          setTableUsers((prevUsers) => [...prevUsers, selectedUsers[0]]);
          setSelectedUsers([]);
          toast.success("User  added successfully!");
        } else {
          console.error("Failed to add user:", response.data);
          toast.error(response.data.message); // Display the error message
        }
      } catch (error) {
        console.error("Error adding user:", error);
        if (error.response) {
          toast.error(error.response.data.message); // Display the error message
        } else {
          toast.error("Error adding user");
        }
      } finally {
        setIsLoading(false); // Hide loading animation
      }
    } else {
      console.error("No user selected");
    }
  };

  const navigate = useNavigate();
  

const[storeDetails,setStoreDetails]=useState([]);

  // useEffect(() => {
  //   if (countriesData && statesData && citiesData) {
  //     setCountries(countriesData.data || []);
  //     setStates(statesData.data || []);
  //     setCities(citiesData.data || []);
  //   }
  // }, [countriesData, statesData, citiesData]);

  const [formData, setFormData] = useState(
    location.state?.storeDetails || {
      TenantID: 1,
      StoreID: null,
      StoreName: "",
      Email: "",
      Phone: "",
      AddressLine1: "",
      AddressLine2: "",
      CityID: "",
      StateID: "",
      CountryID: "",
      ZipCode: "",
    }
  );

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const isEditMode = Boolean(
    location.state?.storeDetails?.store || storeDetails?.store
  );

  const storeId = storeDetails?.store?.StoreID;

  const fetchUsersByStoreId = async (storeId) => {
    // Remove API call logic
    // Instead, you might want to set some dummy data or leave it empty
    setTableUsers([]);
  };
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   // Remove API call
  //   toast.success("User action simulated successfully!");
  //   setTimeout(() => {
  //     navigate("/Stores");
  //   }, 1500);
  //   setIsLoading(false);
  // };


    const handleFormSubmit = async () => {
    const { Code, Name } = formData;
    const dataToSend = { Code, Name }; // Ensuring only required fields are sent

    try {
      // Make POST request to the createBatch API with only required data
      const response = await axios.post(
        "https://da-backend-7smk.onrender.com/api/courses/createCourse",
        dataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      
      console.log("Response:", response.data);
      navigate('/courses');

      // Call handleSave with cleaned formData
      // handleSave(dataToSend);
    } catch (error) {
      // Handle error response
      console.error("Error creating batch:", error);
      
    }
  };



  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const handleFinish = () => {
    setTimeout(() => {
      navigate("/user");
    }, 500);
  };

  const staticTableUsers = [
    {
      MapStoreUserID: 1,
      FirstName: "John",
      LastName: "Doe",
      Email: "john.doe@example.com",
      PhoneNumber: "123-456-7890",
    },
    {
      MapStoreUserID: 2,
      FirstName: "Jane",
      LastName: "Smith",
      Email: "jane.smith@example.com",
      PhoneNumber: "098-765-4321",
    },
    {
      MapStoreUserID: 3,
      FirstName: "Alice",
      LastName: "Johnson",
      Email: "alice.johnson@example.com",
      PhoneNumber: "555-123-4567",
    },
  ];

  //  Dummy data for batches
const batches = [
  {
    batchID: "1",
    batchName: "Batch 1",
    dateAdded: "2024-08-15",
    students: "30",
    category: "Software Development",
  },
  {
    batchID: "2",
    batchName: "Batch 2",
    dateAdded: "2024-08-16",
    students: "35",
    category: "Software Development",
  },
  {
    batchID: "3",
    batchName: "Batch 3",
    dateAdded: "2024-08-16",
    students: "28",
    category: "Software Engineering",
  },
  {
    batchID: "4",
    batchName: "Batch 4",
    dateAdded: "2024-08-16",
    students: "40",
    category: "Software Engineering",
  },
];


  const isStepSkipped = (step) => false;
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const [users, setUsers] = useState([]); // All users from the API
  const [filteredUsers, setFilteredUsers] = useState([]); // Users after filtering
  const [query, setQuery] = useState("");
  const [tableUsers, setTableUsers] = useState([]); // Users added to the table
  const [selectedUsers, setSelectedUsers] = useState([]); // Users selected in the popup
  const [isModalOpen, setIsModalOpen] = useState(false); // Control the modal state
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const mapStoreUser = async (selectedUser) => {
    // Remove API call logic
    // You might want to add the user to tableUsers directly
    setTableUsers((prevUsers) => [...prevUsers, selectedUser]);
  };

 
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  
  const handleCancel = () => {
    setIsLoading(true);

    setTimeout(() => {
      navigate("/courses");
    }, 100); // Delay by 500ms
  };

  const handleStepClick = (index) => {
    setActiveStep(index);
  };
  const isStepOptional = (step) => step === 1;

  const handleRemoveUser = async (MapStoreUserID) => {
    // Remove API call
    // Just filter out the user from tableUsers
    const updatedUsers = tableUsers.filter(
      (user) => user.MapStoreUserID !== MapStoreUserID
    );
    setTableUsers(updatedUsers);
  };

  // Handle click event on user selection
  const handleUserClick = (user) => {
    mapStoreUser(user).then(() => {
      setTableUsers((prevUsers) => [...prevUsers, user]);
    });
  };
  useEffect(() => {
    // Instead of fetching, set some initial data if needed
    if (storeId && isEditMode !== "") {
      setTableUsers([]); // or set some dummy data
    }
  }, [storeId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 const [rowsPerPage, setRowsPerPage] = useState(5); // For pagination
const [page, setPage] = useState(0); // For pagination

 const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));

    setPage(0);
  };
  return (
    // <div className="p-6 mr-10 sm:px-6 lg:px-8 pt-4 ml-10 lg:ml-80 w-1/8 rounded-lg">
    <div className="main-container"> 
      {/* <div className="p-6 mb-7 sm:px-6 lg:px-8 pt-4 bg-white shadow-lg rounded-lg"> */}
      {/* <div className="p-6 mb-7 sm:px-6 lg:px-8 pt-4 rounded-lg"> */}
      <div className="body-container">
        <ToastContainer />
        <Box sx={{ width: "90%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {
                onClick: () => handleStepClick(index), // Add onClick handler
                style: { cursor: "pointer" }, // Add cursor style for pointer
              };

              if (isStepOptional(index)) {
                // Optional step logic
              }

              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>

          <React.Fragment>
            {activeStep === 0 && (
              <>

<div className="flex justify-center">
         <div className="p-4 w-3/4 ">
             <div className="flex items-center gap-4 mb-4">
               <label className="w-1/3 text-gray-700" htmlFor="Name">
               Name
               </label>
               <input
  name="Name"
  id="Name"
  value={formData.Name}
  onChange={handleInputChange}
  className={`p-1 mt-2 mb-1 w-full border rounded-md ${
    error ? "border-red-500" : "border-gray-400"
  }`}
/>
            </div>

            <div className="flex items-center gap-4">
              <label className="w-1/3 text-gray-700" htmlFor="Code">
               Code
              </label>
              <input
                type="text"
                name="Code"
                id="Code"
                value={formData.Code}
                onChange={handleInputChange}
                className={`p-1 mt-2 mb-1 w-full border rounded-md ${
                  error ? "border-red-500" : "border-gray-400"
                }`}
              />
            </div>

            {/* Amount */}
  <div className="flex items-center gap-4 mt-4">
    <label className="w-1/3 text-gray-700 mb-2" htmlFor="Amount">
      Amount
    </label>
    <input
      type="number"
      name="Amount"
      id="Amount"
      value={formData.Amount}
      onChange={handleInputChange}
      className={`p-1 mt-2 mb-1 w-full border rounded-md ${
        error ? "border-red-500" : "border-gray-400"
      }`}
    />
  </div>

  {/* Category */}
  <div className="flex items-center gap-4 mt-4">
    <label className="w-1/3 text-gray-700 mb-2" htmlFor="Category">
      Category
    </label>
    <input
      type="text"
      name="Category"
      id="Category"
      value={formData.Category}
      onChange={handleInputChange}
      className={`p-1 mt-2 mb-1 w-full border rounded-md ${
        error ? "border-red-500" : "border-gray-400"
      }`}
    />
  </div>
  </div>
  </div>
            
                <div className="mt-6 flex justify-end gap-4">
                  <button
                    type="submit"
                    className="button-base save-btn"
                    onClick={handleFormSubmit}
                  >
                    {isEditMode ? "Update" : "Save"}
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="button-base cancel-btn"
                  >
                    Cancel
                  </button>
                </div>
                
              </>
            )}

            {activeStep === 1 && (
              <div>
                <div>
                  <div className="relative flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg pb-2 mx-auto">
                    <div className="relative w-80 max-w-md mx-auto">
                      {/* Search Input */}
                      <div className="flex items-center justify-center relative">
                        <input
                          id="searchName"
                          type="text"
                          placeholder="Search by Name..."
                          value={searchQuery}
                          // onChange={handleSearchChange}
                          onFocus={() => setIsFocused(true)}
                          className={`mt-1 p-2 pr-10 border border-gray-300 rounded-md text-sm md:text-base w-full ${
                            isFocused ? "border-blue-500" : "border-gray-300"
                          }`}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <IoIosSearch aria-label="Search Icon" />
                        </div>
                      </div>

                      {/* Dropdown for filtered users */}
                      {searchQuery.length >= 3 && isFocused && (
                        <div
                          className="absolute top-full mt-1 w-full bg-white shadow-lg border border-gray-300 rounded-lg z-10"
                          style={{ maxHeight: "200px", overflowY: "auto" }}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          onFocus={() => setIsFocused(true)}
                          onBlur={() => setIsFocused(false)}
                        >
                          {loading ? (
                            <div className="flex justify-center p-4">
                              <LoadingAnimation />
                              {/* Display loading animation when loading */}
                            </div>
                          ) : filteredUsers.length > 0 ? (
                            <div>
                              <div className="mb-2 text-sm text-gray-600 px-2">
                                {filteredUsers.length} Result
                                {filteredUsers.length > 1 ? "s" : ""}
                              </div>

                              {filteredUsers.map((user) => (
                                <div
                                  key={user.UserID}
                                  className="relative cursor-pointer flex flex-col p-2 hover:bg-gray-100 group"
                                  onClick={() => handleUserSelect(user)}
                                >
                                  <span className="font-medium">
                                    {user.FirstName} {user.LastName}
                                  </span>
                                  <div className="flex items-center text-xs md:text-sm text-gray-500">
                                    <IoIosCall
                                      className="w-4 h-4 mr-1"
                                      aria-label="Phone Icon"
                                    />
                                    <span>{user.PhoneNumber}</span>
                                  </div>
                                  <div className="flex items-center text-xs md:text-sm text-gray-500">
                                    <IoMdMail
                                      className="w-4 h-4 mr-1"
                                      aria-label="Email Icon"
                                    />
                                    <span>{user.Email}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="flex justify-center p-4 text-gray-500">
                              {loading ? (
                                <LoadingAnimation />
                              ) : (
                                "No results found."
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    {/* Selected User */}
                  </div>

                  <TableContainer
          // sx={{ width: "90%", margin: "0 auto", }}
          component={Paper}
          className="bg-white rounded-lg shadow-md "
        >
          <Table>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell align="center">Batch ID</StyledTableCell>
                <StyledTableCell align="center">Batch Name</StyledTableCell>
                <StyledTableCell align="center">Total Students</StyledTableCell>
                <StyledTableCell align="center">Date Created</StyledTableCell>
                {/* <StyledTableCell align="center">Category</StyledTableCell> */}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {batches.map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="center">
                    {item.batchID}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.batchName}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.students}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {item.dateAdded}
                  </StyledTableCell>
                  {/* <StyledTableCell align="center">
                    <span
                      className={`inline-block px-4 py-2 text-xs font-semibold rounded-full
                        ${
                          item.category === "Software Engineering"
                            ? "bg-cyan-200 text-cyan-800"
                            : item.category === "Software Development"
                            ? "bg-green-200 text-green-800"
                            : ""
                        }`}
                    >
                      {item.category}
                    </span>
                  </StyledTableCell> */}
                </StyledTableRow>
              ))}
            </TableBody>
            {/* Pagination */}

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

                  // Customize pagination controls if needed
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
                  <div className="mt-6 flex justify-end gap-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={saveSelectedUser}
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={handleCancel}
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-red-200"
                    >
                      Cancel
                    </button>
                  </div>

                  {isLoading && <LoadingAnimation />}
                </div>
              </div>
            )}

            <Box className="flex justify-between mt-4">
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Back
              </Button>
              <Button
                onClick={
                  activeStep === steps.length - 1 ? handleFinish : handleNext
                }
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        </Box>
      </div>
    </div>
  );
}

export default StoreForm;



// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { useNavigate, useLocation } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableHead from "@mui/material/TableHead";
// import Paper from "@mui/material/Paper";
// import TableRow from "@mui/material/TableRow";
// import "react-toastify/dist/ReactToastify.css";
// import { TableContainer ,TableCell} from "@mui/material";
// import {
//   TableFooter,
//   TablePagination,
// } from "@mui/material";

// import {
//   StyledTableCell,
//   StyledTableRow,
//   TablePaginationActions,
// } from "../CustomTablePagination";
// import '../../index.css'; 
// import { FaPlus } from "react-icons/fa";



// const steps = ["Course Details", "Batch Details"];

// function StoreForm() {
//   const location = useLocation();
//   const navigate = useNavigate();
  

// const[storeDetails,setStoreDetails]=useState([]);

//   const [formData, setFormData] = useState(
//     location.state?.storeDetails || {
//       TenantID: 1,
//       StoreID: null,
//       StoreName: "",
//       Email: "",
//       Phone: "",
//       AddressLine1: "",
//       AddressLine2: "",
//       CityID: "",
//       StateID: "",
//       CountryID: "",
//       ZipCode: "",
//     }
//   );

//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [activeStep, setActiveStep] = useState(0);
//   const [isLoading, setIsLoading] = useState(false);

//   const isEditMode = Boolean(
//     location.state?.storeDetails?.store || storeDetails?.store
//   );

//   const storeId = storeDetails?.store?.StoreID;

//   const fetchUsersByStoreId = async (storeId) => {
//     // Remove API call logic
//     // Instead, you might want to set some dummy data or leave it empty
//     setTableUsers([]);
//   };
//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };


//     const handleFormSubmit = async () => {
//     const { Code, Name } = formData;
//     const dataToSend = { Code, Name }; // Ensuring only required fields are sent

//     try {
//       // Make POST request to the createBatch API with only required data
//       const response = await axios.post(
//         "https://da-backend-7smk.onrender.com/api/courses/createCourse",
//         dataToSend,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

      
//       console.log("Response:", response.data);
//       navigate('/courses');

//       // Call handleSave with cleaned formData
//       // handleSave(dataToSend);
//     } catch (error) {
//       // Handle error response
//       console.error("Error creating batch:", error);
      
//     }
//   };



//   const handleNext = () => {
//     setActiveStep((prevStep) => prevStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevStep) => prevStep - 1);
//   };
//   const handleFinish = () => {
//     setTimeout(() => {
//       navigate("/user");
//     }, 500);
//   };

 

//   //  Dummy data for batches
// const batches = [
//   {
//     batchID: "1",
//     batchName: "Batch 1",
//     dateAdded: "2024-08-15",
//     students: "30",
//     category: "Software Development",
//   },
//   {
//     batchID: "2",
//     batchName: "Batch 2",
//     dateAdded: "2024-08-16",
//     students: "35",
//     category: "Software Development",
//   },
//   {
//     batchID: "3",
//     batchName: "Batch 3",
//     dateAdded: "2024-08-16",
//     students: "28",
//     category: "Software Engineering",
//   },
//   {
//     batchID: "4",
//     batchName: "Batch 4",
//     dateAdded: "2024-08-16",
//     students: "40",
//     category: "Software Engineering",
//   },
// ];


 
//   const [tableUsers, setTableUsers] = useState([]); // Users added to the table
  
//   const [isHovered, setIsHovered] = useState(false);
//   const [isFocused, setIsFocused] = useState(false);

//   const mapStoreUser = async (selectedUser) => {
//     // Remove API call logic
//     // You might want to add the user to tableUsers directly
//     setTableUsers((prevUsers) => [...prevUsers, selectedUser]);
//   };

 
//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => setIsHovered(false);

  
//   const handleCancel = () => {
//     setIsLoading(true);

//     setTimeout(() => {
//       navigate("/courses");
//     }, 100); // Delay by 500ms
//   };

//   const handleStepClick = (index) => {
//     setActiveStep(index);
//   };
//   const isStepOptional = (step) => step === 1;

//   const handleRemoveUser = async (MapStoreUserID) => {
//     // Remove API call
//     // Just filter out the user from tableUsers
//     const updatedUsers = tableUsers.filter(
//       (user) => user.MapStoreUserID !== MapStoreUserID
//     );
//     setTableUsers(updatedUsers);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//  const [rowsPerPage, setRowsPerPage] = useState(5); // For pagination
// const [page, setPage] = useState(0); // For pagination

//  const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

// const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));

//     setPage(0);
//   };
//   return (
// <div className="main-container">
// <div className="body-container">
//   <ToastContainer />
//   <div className="mb-4">
//         <div className="flex justify-between">
//           <h2 className="heading">Courses</h2>
//           <div className="search-button-group">
//             <button type="button" className="action-button" onClick={() => navigate("/coursesadd")}>
//               <FaPlus aria-hidden="true" className="icon" />
// Edit Courses
//             </button>
//           </div>
//         </div>
//       </div>
  
//   <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
//     <div className="flex items-center gap-4">
//       <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Name">Name</label>
//       <input
//         name="Name"
//         id="Name"
//         value={formData.Name}
//         onChange={handleInputChange}
//         className={`p-1 mt-2 mb-1 w-full border rounded-md ${error ? "border-red-500" : "border-gray-400"}`}
//       />
//     </div>
//     <div className="flex items-center gap-4">
//       <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Code">Code</label>
//       <input
//         type="text"
//         name="Code"
//         id="Code"
//         value={formData.Code}
//         onChange={handleInputChange}
//         className={`p-1 mt-2 mb-1 w-full border rounded-md ${error ? "border-red-500" : "border-gray-400"}`}
//       />
//     </div>
//     <div className="flex items-center gap-4 mb-4">
//       <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Amount">Amount</label>
//       <input
//         type="number"
//         name="Amount"
//         id="Amount"
//         value={formData.Amount}
//         onChange={handleInputChange}
//         className={`p-1 mt-2 mb-1 w-full border rounded-md ${error ? "border-red-500" : "border-gray-400"}`}
//       />
//     </div>
//     <div className="flex items-center gap-4 mb-4">
//       <label className="w-1/3 text-xs font-medium text-gray-700" htmlFor="Category">Category</label>
//       <input
//         type="text"
//         name="Category"
//         id="Category"
//         value={formData.Category}
//         onChange={handleInputChange}
//         className={`p-1 mt-2 mb-1 w-full border rounded-md ${error ? "border-red-500" : "border-gray-400"}`}
//       />
//     </div>
//   </div>

//   <div className="mt-6 flex justify-end gap-4 mb-6">
//     <button
//       type="submit"
//       className="button-base save-btn"
//       onClick={handleFormSubmit}
//     >
//       {isEditMode ? "Update" : "Save"}
//     </button>
//     <button
//       type="button"
//       onClick={handleCancel}
//       className="button-base cancel-btn"
//     >
//       Cancel
//     </button>
//   </div>

//                    <TableContainer
//           // sx={{ width: "90%", margin: "0 auto", }}
//           component={Paper}
//           className="bg-white rounded-lg shadow-md "
//         >
//           <Table>
//             <TableHead>
//               <StyledTableRow>
//                 <StyledTableCell align="center">Batch ID</StyledTableCell>
//                 <StyledTableCell align="center">Batch Name</StyledTableCell>
//                 <StyledTableCell align="center">Total Students</StyledTableCell>
//                 <StyledTableCell align="center">Date Created</StyledTableCell>
//                 {/* <StyledTableCell align="center">Category</StyledTableCell> */}
//               </StyledTableRow>
//             </TableHead>
//             <TableBody>
//               {batches.map((item, index) => (
//                 <StyledTableRow key={index}>
//                   <StyledTableCell align="center">
//                     {item.batchID}
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     {item.batchName}
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     {item.students}
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     {item.dateAdded}
//                   </StyledTableCell>
//                   {/* <StyledTableCell align="center">
//                     <span
//                       className={`inline-block px-4 py-2 text-xs font-semibold rounded-full
//                         ${
//                           item.category === "Software Engineering"
//                             ? "bg-cyan-200 text-cyan-800"
//                             : item.category === "Software Development"
//                             ? "bg-green-200 text-green-800"
//                             : ""
//                         }`}
//                     >
//                       {item.category}
//                     </span>
//                   </StyledTableCell> */}
//                 </StyledTableRow>
//               ))}
//             </TableBody>
//             {/* Pagination */}

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

//                   // Customize pagination controls if needed
//                 />
//               </TableRow>
//             </TableFooter>
//           </Table>
//         </TableContainer>
// </div>
// </div>

//   );
// }

// export default StoreForm;


// import { useState } from "react";
// import { FaPlus } from "react-icons/fa";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableFooter, TablePagination, Paper } from "@mui/material";
// import { ToastContainer } from "react-toastify"; // Assuming ToastContainer is for notifications
// import {
//   StyledTableCell,
//   StyledTableRow,
//   TablePaginationActions,
// } from "../CustomTablePagination";
// const StoreForm = () => {
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [formData, setFormData] = useState({
//     Name: "",
//     Code: "",
//     Amount: "",
//     Category: "",
//   });
//   const [batches, setBatches] = useState([]); // Example batch data
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

//                            <TableContainer
//           // sx={{ width: "90%", margin: "0 auto", }}
//           component={Paper}
//           className="bg-white rounded-lg shadow-md "
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
//                   <StyledTableCell align="center">
//                     {item.batchID}
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     {item.batchName}
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     {item.students}
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                     {item.dateAdded}
//                   </StyledTableCell>
//                   <StyledTableCell align="center">
//                   {isEditMode && (
//                     <TableCell align="center">
//                       <button type="button" className="text-red-500" onClick={() => handleDelete(item.batchID)}>
//                         Delete
//                       </button>
//                     </TableCell>
//                   )}
//                   </StyledTableCell> 
//                 </StyledTableRow>
//               ))}
//             </TableBody>
//             {/* Pagination */}

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

//                   // Customize pagination controls if needed
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
