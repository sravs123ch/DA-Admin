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

// import {
//   CREATEORUPDATE_STORES_API,
//   GETALLUSERS_API,
//   CREATEORUPDATE_MAPSTOREUSER,
//   GET_MAPSTORE_USERBYSTOREID,
//   DELETEMAPSTOREUSER,
// } from "../../Constants/apiRoutes";
// import "../../style.css";
import LoadingAnimation from "../../components/Loading/LoadingAnimation";
import "react-toastify/dist/ReactToastify.css";
import { TableContainer } from "@mui/material";

import {
  StyledTableCell,
  StyledTableRow,
  TablePaginationActions,
} from "../CustomTablePagination";
import { IoIosSearch, IoIosCall, IoMdMail } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { DataContext } from "../../Context/DataContext";
import '../../index.css'; 
import { useParams } from "react-router-dom";


const steps = ["User Details", "Device Information"];

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
      Username: "",
      Email: "",
      Phone: "",
      Address: "",
      Password:"",
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

const handleFormSubmit = async (event) => {
  event.preventDefault();
  setIsLoading(true);


  try {
    const response = await axios.post(
      "https://da-backend-7smk.onrender.com/api/Users/users",
      formData
    );

    if (response.status === 200 || response.status === 201) {
      toast.success("User created successfully!");
      setTimeout(() => {
        navigate("/users"); // Navigate to the desired page
      }, 1500);
    } else {
      toast.error("Failed to create user. Please try again.");
    }
  } catch (error) {
    console.error("Error creating user:", error);
    toast.error("An error occurred while creating the user.");
  } finally {
    setIsLoading(false);
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
  // const { UserID } = useParams(); 

  const mapStoreUser = async (selectedUser) => {
    // Remove API call logic
    // You might want to add the user to tableUsers directly
    setTableUsers((prevUsers) => [...prevUsers, selectedUser]);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value.trim().toLowerCase();
    setSearchQuery(query);

    // Start loading when search begins
    setLoading(true);

    // Simulate a delay (optional) to visualize the loading animation
    setTimeout(() => {
      const filtered = users.filter((user) => {
        const firstName = user.FirstName?.trim().toLowerCase() || "";
        const lastName = user.LastName?.trim().toLowerCase() || "";
        const email = user.Email?.trim().toLowerCase() || "";

        return (
          firstName.includes(query) ||
          lastName.includes(query) ||
          email.includes(query)
        );
      });

      setFilteredUsers(filtered);

      // Stop loading after filtering
      setLoading(false);
    }, 500); // Optional delay for visualizing the loading state
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleCustomerSelect = (customer) => {
    // Check if the user is already in the table
    const isUserInTable = tableUsers.some(
      (user) => user.CustomerID === customer.CustomerID
    );

    // If the user is not in the table, add them
    if (!isUserInTable) {
      setTableUsers((prevUsers) => [...prevUsers, customer]);
    }

    // Clear the search query without updating it to the selected customer's name
    setSearchQuery("");
    setFilteredUsers([]); // Clear the dropdown after selection
  };

  // Close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  // Handle the addition of filtered users to the table
  const handleAddUsers = () => {
    setTableUsers((prevUsers) => [...prevUsers, ...selectedUsers]); // Add selected users to the table
    setSelectedUsers([]); // Clear selected users
    setIsModalOpen(false); // Close the modal after adding users
  };

  // Handle user selection in the popup (you can make this more complex to allow selecting multiple users)
  const handleSelectUser = (user) => {
    setSelectedUsers([user]); // Select the user to be added
  };

  const handleCancel = () => {
    setIsLoading(true);

    setTimeout(() => {
      navigate("/users");
    }, 500); // Delay by 500ms
  };

  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
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

  const [selectedBatch, setSelectedBatch] = useState(null); // To store the selected batch
  const [selectedCourse, setSelectedCourse] = useState(null); 
  const [filteredBatches, setFilteredBatches] = useState([]);
  const [batches, setBatches] = useState([]);
// Refactor the API call into a separate function
// const fetchUserDetails = async () => {
//   try {
//     const response = await fetch(
//       `https://da-backend-7smk.onrender.com/api/Users/getUserById/${UserID}`
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch batch details");
//     }
//     const data = await response.json();
//     // setBatchDetails({
//     //   BatchCode: data.BatchCode,
//     //   BatchId: data.BatchId,
//     //   BatchName: data.BatchName,
//     //   CourseId: data.CourseId,
//     //   CreatedBy: data.CreatedBy,
//     //   UpdatedBy: data.UpdatedBy,
//     //   Users: data.Users,
//     // });
//   } catch (error) {
//     console.error("Error fetching batch details:", error);
//   }
// };

// // Call the API on initial render or when BatchId changes
// useEffect(() => {
//   fetchUserDetails();
// }, [UserID]);
 
const { UserId } = useParams(); // Match the case
console.log("Extracted UserId from URL:", UserId); // Debugging
const fetchUserDetails = async () => {

  try {
    const response = await fetch(
      `https://da-backend-7smk.onrender.com/api/Users/getUserById/${UserId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user details");
    }
    const data = await response.json();
    setFormData({
      Username: data. Username||"",
      Email:data.Email|| "",
      Phone:data.Phone|| "",
      Address:data.Address|| "",
      Password:data.Password||"",
      
    });
    console.log("Fetched user details:", data);
  } catch (error) {
    console.error("Error fetching user details:", error);
  }
};

useEffect(() => {
  fetchUserDetails();
}, [UserId]);

      useEffect(() => {
        const fetchBatches = async () => {
          try {
            const response = await axios.get('https://da-backend-7smk.onrender.com/api/Batchs/getAllBatches');
            setBatches(response.data); // Set the batch data from the backend
            setFilteredBatches(response.data); // Initialize filteredBatches with the fetched batches
          } catch (error) {
            toast.error("Failed to fetch batches.");
          }
        };
    
        fetchBatches();
      }, []); // Empty dependency array means this runs once when the component mounts
    
      // Handle query change for filtering
      const handleQueryChange = (event) => {
        const inputValue = event.target.value;
        setQuery(inputValue);
    
        // Filter batches based on the query input
        setFilteredBatches(
          batches.filter((batch) =>
            batch.BatchName.toLowerCase().includes(inputValue.toLowerCase()) // Assuming batch name is 'BatchName'
          )
        );
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                  <div className="flex items-center gap-4">
                    <label className="w-1/3 text-xs font-medium text-gray-700">
                      User Name
                    </label>
                    <input
                      type="text"
                      name="Username"
                      value={formData.Username}
                      onChange={handleFormChange}
                      className={`p-1 mt-2 mb-1 w-full border rounded-md ${
                        error ? "border-red-500" : "border-gray-400"
                      }`}
                    />
                  </div>
                  {/* <div className="flex items-center gap-4">
                    <label className="w-1/3 text-xs font-medium text-gray-700">
                      User Code
                    </label>
                    <input
                      type="text"
                      name="StoreCode"
                      value={formData.StoreCode}
                      onChange={handleFormChange}
                      className={`p-1 w-full border rounded-md ${
                        error ? "border-red-500" : "border-gray-400"
                      }`}
                    />
                  </div>                */}
   <div className="flex items-center gap-4">
                    <label className="w-1/3 text-xs font-medium text-gray-700">
                      Contact
                    </label>
                    <input
                      type="text"
                      name="Phone"
                      value={formData.Phone || ""}
                      onChange={handleFormChange}
                      className={`p-1 w-full border rounded-md ${
                        error ? "border-red-500" : "border-gray-400"
                      }`}
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <label className="w-1/3 text-xs font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="text"
                      name="Email"
                      value={formData.Email}
                      onChange={handleFormChange}
                      className={`p-1 w-full border rounded-md ${
                        error ? "border-red-500" : "border-gray-400"
                      }`}
                    />
                  </div>  
                  <div className="flex items-center gap-4">
                    <label className="w-1/3 text-xs font-medium text-gray-700">
                     Password
                    </label>
                    <input
                      type="text"
                      name="Password"
                      value={formData.Password || ""}
                      onChange={handleFormChange}
                      className={`p-1 w-full border rounded-md ${
                        error ? "border-red-500" : "border-gray-400"
                      }`}
                    />
                  </div>            
               

                  <div className="flex items-center gap-4">
                    <label className="w-1/3 text-xs font-medium text-gray-700">
                     Address
                    </label>
                    <input
                      type="text"
                      name="Address"
                      value={formData.Address|| ""}
                      onChange={handleFormChange}
                      className={`p-1 w-full border rounded-md ${
                        error ? "border-red-500" : "border-gray-400"
                      }`}
                    />
                  </div>



<div className="flex items-center gap-4">
      <label className="w-1/3 text-xs font-medium text-gray-700">Batch</label>
      <div className="w-full">
        <Combobox as="div" value={selectedBatch} onChange={setSelectedBatch}>
          <div className="relative">
            <Combobox.Input
              className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              onChange={handleQueryChange} // Set up the query for filtering batches
              displayValue={(batch) => batch?.BatchName || ""} // Show the batch name in the input field
              placeholder="Select a batch"
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </Combobox.Button>

            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredBatches.length > 0 ? (
                filteredBatches.map((batch) => (
                  <Combobox.Option
                    key={batch.BatchId} // Use BatchId as the key
                    value={batch} // Set the batch object as the value
                    className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
                  >
                    <span className="block truncate font-normal group-data-[selected]:font-semibold">
                      {batch.BatchName} {/* Display the batch name */}
                    </span>
                    <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                      <CheckIcon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </Combobox.Option>
                ))
              ) : (
                <div className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-500">
                  No results found
                </div>
              )}
            </Combobox.Options>
          </div>
        </Combobox>
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
                      {/* <div className="flex items-center justify-center relative">
                        <input
                          id="searchName"
                          type="text"
                          placeholder="Search by Name..."
                          value={searchQuery}
                          onChange={handleSearchChange}
                          onFocus={() => setIsFocused(true)}
                          className={`mt-1 p-2 pr-10 border border-gray-300 rounded-md text-sm md:text-base w-full ${
                            isFocused ? "border-blue-500" : "border-gray-300"
                          }`}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <IoIosSearch aria-label="Search Icon" />
                        </div>
                      </div> */}

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
                   
                  </div>


<div className="flex items-center gap-2 justify-center">
  <label className="w-40 text-xs font-medium text-gray-700">
    Device ID
  </label>
  <input
    type="text"
    name="DeviceId"
    value={formData.DeviceId}
    onChange={handleFormChange}
    className={`p-1 mt-2 mb-1 w-1/3 border rounded-md ${
      error ? "border-red-500" : "border-gray-400"
    }`}
  />
</div>


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

                <TableContainer
                    component={Paper}
                    sx={{ width: "90%", margin: "0 auto", mt: 4 }}
                  >
                    <Table aria-label="store users table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell align="center">
                            Device Id
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            Action
                          </StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {/* {staticTableUsers.map((user) => (
                          <TableRow key={user.MapStoreUserID}>
                            <StyledTableCell align="center">
                              {user.PhoneNumber}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                              <div className="button-container flex justify-center">
                                <button
                                  type="button"
                                  // onClick={() => handleEditClick(person.UserID)}
                                  className="button edit-button"
                                >
                                  <AiOutlineEdit
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                  />
                                  Edit
                                </button>

                                <button
                                  type="button"
                                  // onClick={() =>
                                  //   handleDeleteClick(person.UserID)
                                  // }
                                  className="button delete-button"
                                >
                                  <MdOutlineCancel
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                  />
                                  Delete
                                </button>
                              </div>
                            </StyledTableCell>
                          </TableRow>
                        ))} */}
                      </TableBody>
                    </Table>
                  </TableContainer>

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
