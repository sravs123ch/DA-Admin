// import React, { useState, useEffect, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import TableBody from "@mui/material/TableBody";
// import Table from "@mui/material/Table";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
// import TableFooter from "@mui/material/TableFooter";
// import TablePagination from "@mui/material/TablePagination";
// import { FaPlus, FaTable } from "react-icons/fa";
// import * as XLSX from "xlsx";
// import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
// import { IoIosSearch } from "react-icons/io";
// import { MdOutlineCancel } from "react-icons/md";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// // import "../../style.css";
// import {
//   StyledTableCell,
//   StyledTableRow,
//   TablePaginationActions,
// } from "../CustomTablePagination";

// const API_URL = "https://da-backend-7smk.onrender.com/api/Users/getAllUsers";


// function User() {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const navigate = useNavigate();
//   const [users, setUsers] = useState([]);
//   const [searchName, setSearchName] = useState("");

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         setUsers(response.data); // Set fetched data to state
//       } catch (error) {
//         toast.error("Failed to fetch batches.");
//       }
//     };

//     fetchUsers();
//   }, []);


//   const staticUsers = [
//     {
//       UserID: 1,
//       FirstName: "Hallie",
//       LastName: "Warner",
//       Email: "HallieWarner@gmail.com",
//       RegisteredIP: "172.16.0.45",
//       RoleID: "1",
//       Batch: "Batch 1",
//       ProfileImage: "https://example.com/profile1.jpg",
//     },

//     {
//       UserID: 2,
//       FirstName: "Raven",
//       LastName: "McCann",
//       Email: "McCann@gmail.com",
//       RegisteredIP: "192.168.100.5",
//       RoleID: "2",
//       Batch: "Batch 1",
//       ProfileImage: "https://example.com/profile2.jpg",
//     },
//     {
//       UserID: 3,
//       FirstName: "Heath",
//       LastName: "Goodwin",
//       Email: "HeathGoodwin@gmail.com",
//       RegisteredIP: "10.0.0.25",
//       RoleID: "2",
//       Batch: "Batch 2",
//       ProfileImage: "https://example.com/profile2.jpg",
//     },
//     {
//       UserID: 4,
//       FirstName: "Arya",
//       LastName: "Sloan",
//       Email: "Arya@gmail.com",
//       RegisteredIP: "10.1.2.3",
//       RoleID: "2",
//       Batch: "Batch 2",
//       ProfileImage: "https://example.com/profile2.jpg",
//     },
//     {
//       UserID: 5,
//       FirstName: "Ricardo",
//       LastName: "Marin",
//       Email: "Ricardo@gmail.com",
//       RegisteredIP: "192.168.99.99",
//       RoleID: "2",
//       Batch: "Batch 1",
//       ProfileImage: "https://example.com/profile2.jpg",
//     },
//   ];

//   const handleAddUserClick = () => {
//     navigate("/usersform/new");
//   };

//   const handleExportUsersData = () => {
//     console.log("Export users data");
//   };
//   const exportToExcel = (data, fileName) => {
//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
//     XLSX.writeFile(workbook, `${fileName}.xlsx`);
//   };

//   const filteredUsers = staticUsers.filter(
//     (user) =>
//       user.FirstName.toLowerCase().includes(searchName.toLowerCase()) ||
//       user.LastName.toLowerCase().includes(searchName.toLowerCase()) ||
//       user.Email.toLowerCase().includes(searchName.toLowerCase()) ||
//       user.RegisteredIP.includes(searchName)
//   );

//   const displayUsers =users.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

  
//   const handleEditClick = (UserId) => {
//     navigate(`/usersform/${UserId}`);
//   }; 

//   return (
//     <div className="main-container">
//       <div className="flex flex-col w-full">
//         <div className="flex flex-wrap items-center justify-between w-full">
//           <h2 className="heading">Students</h2>
//           <ul className="flex flex-wrap items-center gap-2 p-2 justify-center w-full sm:w-auto sm:justify-end">
//             <li>
//               <button
//                 type="button"
//                 className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
//                 onClick={handleAddUserClick}
//               >
//                 <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                 Add Student
//               </button>
//             </li>
//             <li>
//               <button
//                 type="button"
//                 className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
//                 onClick={handleExportUsersData}
//               >
//                 <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
//                 Export Students
//               </button>
//             </li>
//           </ul>
//         </div>

//         <div className="flex flex-wrap items-center justify-center w-full  ">
//           <div className="flex-container">
//             <div className="search-container-c-u">
//               <input
//                 id="searchName"
//                 type="text"
//                 placeholder="Search by Name or Email or Mobile"
//                 value={searchName}
//                 onChange={(e) => setSearchName(e.target.value)}
//                 className="search-input"
//               />
//               <div className="search-icon-container-c-u">
//                 <IoIosSearch />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <TableContainer component={Paper} className="mt-4">
//         <Table>
//           <TableHead>
//             <TableRow>
//               <StyledTableCell>Name</StyledTableCell>
//               <StyledTableCell>Email</StyledTableCell>
//               <StyledTableCell>Address
//               </StyledTableCell>
//               <StyledTableCell>Batch</StyledTableCell>
//               <StyledTableCell align="center">Actions</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((user) => (
//               <StyledTableRow key={user.UserID}>
//                 <StyledTableCell component="th" scope="row">
//                   {/* {user.FirstName}&nbsp;{user.LastName} */}
//                   {user.Username}
//                 </StyledTableCell>
//                 <StyledTableCell>{user.Email}</StyledTableCell>
//                 <StyledTableCell>{user.Address}</StyledTableCell>
//                 <StyledTableCell>
//                   {/* {roleOptions.find((role) => role.id === user.RoleID).name} */}
//                   {user.Batch}
//                 </StyledTableCell>
//                 {/* <StyledTableCell>
//                   <AiOutlineEdit
//                     size={20}
//                     onClick={() => handleEditClick(user.UserID)}
//                     className="cursor-pointer"
//                   />
//                   <MdOutlineCancel
//                     size={20}
//                     onClick={() => handleDeleteClick(user.UserID)}
//                     className="cursor-pointer"
//                   />
//                 </StyledTableCell> */}
//                 <StyledTableCell align="center">
//                   <div className="button-container flex justify-center">
//                     <button
//                       type="button"
//                       onClick={() => handleEditClick(user.UserId)}
//                       className="button edit-button"
//                     >
//                       <AiOutlineEdit aria-hidden="true" className="h-4 w-4" />
//                       Edit
//                     </button>

//                     <button
//                       type="button"
//                       // onClick={() => handleDeleteClick(person.UserID)}
//                       className="button delete-button"
//                     >
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
//                 rowsPerPageOptions={[10, 25, 50]}
//                 colSpan={5}
//                 count={users.length}
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
//     </div>
//   );
// }

// export default User;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import { FaPlus, FaTable } from "react-icons/fa";
import * as XLSX from "xlsx";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import {
  StyledTableCell,
  StyledTableRow,
  TablePaginationActions,
} from "../CustomTablePagination";

const API_URL = "https://da-backend-7smk.onrender.com/api/Users/getAllUsers";

function User() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [searchName, setSearchName] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(API_URL);
        setUsers(response.data); // Set fetched data to state
      } catch (error) {
        toast.error("Failed to fetch users.");
      }
    };

    fetchUsers();
  }, []);

  const handleAddUserClick = () => {
    navigate("/usersform/new");
  };

  const handleExportUsersData = () => {
    console.log("Export users data");
  };

  const exportToExcel = (data, fileName) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
  };

  const filteredUsers = users.filter((user) => {
    const firstName = user.FirstName || "";
    const lastName = user.LastName || "";
    const email = user.Email || "";
    const registeredIP = user.RegisteredIP || "";
  
    return (
      firstName.toLowerCase().includes(searchName.toLowerCase()) ||
      lastName.toLowerCase().includes(searchName.toLowerCase()) ||
      email.toLowerCase().includes(searchName.toLowerCase()) ||
      registeredIP.includes(searchName)
    );
  });
  

  // Apply pagination to filtered users
  const displayUsers = filteredUsers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleEditClick = (UserId) => {
    navigate(`/usersform/${UserId}`);
  };

  return (
    <div className="main-container">
      <div className="flex flex-col w-full">
        <div className="flex flex-wrap items-center justify-between w-full">
          <h2 className="heading">Students</h2>
          <ul className="flex flex-wrap items-center gap-2 p-2 justify-center w-full sm:w-auto sm:justify-end">
            <li>
              <button
                type="button"
                className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                onClick={handleAddUserClick}
              >
                <FaPlus aria-hidden="true" className="-ml-0.5 h-4 w-4" />
                Add Student
              </button>
            </li>
            <li>
              <button
                type="button"
                className="inline-flex items-center gap-x-1.5 rounded-md bg-custom-darkblue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-custom-lightblue hover:text-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                onClick={handleExportUsersData}
              >
                <FaTable aria-hidden="true" className="-ml-0.5 h-4 w-4" />
                Export Students
              </button>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-center w-full">
          <div className="flex-container">
            <div className="search-container-c-u">
              <input
                id="searchName"
                type="text"
                placeholder="Search by Name or Email or Mobile"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                className="search-input"
              />
              <div className="search-icon-container-c-u">
                <IoIosSearch />
              </div>
            </div>
          </div>
        </div>
      </div>

      <TableContainer component={Paper} className="mt-4">
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone</StyledTableCell>
              <StyledTableCell>Address</StyledTableCell>
              <StyledTableCell>Batch</StyledTableCell>
              <StyledTableCell align="center">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayUsers.map((user) => (
              <StyledTableRow key={user.UserID}>
                <StyledTableCell component="th" scope="row">
                  {user.Username} 
                </StyledTableCell>
                <StyledTableCell>{user.Email}</StyledTableCell>
                <StyledTableCell>{user.Phone}</StyledTableCell>
                <StyledTableCell>{user.Address}</StyledTableCell>
                <StyledTableCell>{user.Batch}</StyledTableCell>
                {/* <StyledTableCell align="center">
                  <div className="button-container flex justify-center">
                    <button
                      type="button"
                      onClick={() => handleEditClick(user.UserID)}
                      className="p-1.5 bg-blue-500 text-white rounded-md"
                    >
                      <AiOutlineEdit />
                    </button>
                    <button
                      type="button"
                      className="p-1.5 bg-red-500 text-white rounded-md"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </StyledTableCell> */}

<StyledTableCell align="center">
                   <div className="button-container flex justify-center">
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
                      // onClick={() => handleDeleteClick(person.UserID)}
                      className="button delete-button"
                    >
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
                rowsPerPageOptions={[10, 25, 100]}
                colSpan={6}
                count={filteredUsers.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
}

export default User;
