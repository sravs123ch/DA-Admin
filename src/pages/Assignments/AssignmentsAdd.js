// import React, { useState } from "react";

// const AddAssignments = () => {
//   const [formData, setFormData] = useState({
//     BatchId: "",
//     AssignmentName: "",
//     NumberOfAssignments: "",
//     Topics: "",
//     LecturerName: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Assignment Submitted:", formData);

//     // Reset the form
//     setFormData({
//       BatchId: "",
//       AssignmentName: "",
//       NumberOfAssignments: "",
//       Topics: "",
//       LecturerName: "",
//     });
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 mt-10">
//       <h2 className="text-2xl font-bold text-center mb-4">Add Assignment</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Batch ID */}
//         <div className="flex flex-col">
//           <label htmlFor="BatchId" className="text-gray-700 font-medium mb-1">
//             Batch ID
//           </label>
//           <input
//             type="text"
//             id="BatchId"
//             name="BatchId"
//             value={formData.BatchId}
//             onChange={handleInputChange}
//             className="p-2 border rounded-md border-gray-300"
//             placeholder="Enter Batch ID"
//           />
//         </div>

//         {/* Assignment Name */}
//         <div className="flex flex-col">
//           <label htmlFor="AssignmentName" className="text-gray-700 font-medium mb-1">
//             Assignment Name
//           </label>
//           <input
//             type="text"
//             id="AssignmentName"
//             name="AssignmentName"
//             value={formData.AssignmentName}
//             onChange={handleInputChange}
//             className="p-2 border rounded-md border-gray-300"
//             placeholder="Enter Assignment Name"
//           />
//         </div>

//         {/* Number of Assignments */}
//         <div className="flex flex-col">
//           <label htmlFor="NumberOfAssignments" className="text-gray-700 font-medium mb-1">
//             Number of Assignments
//           </label>
//           <input
//             type="number"
//             id="NumberOfAssignments"
//             name="NumberOfAssignments"
//             value={formData.NumberOfAssignments}
//             onChange={handleInputChange}
//             className="p-2 border rounded-md border-gray-300"
//             placeholder="Enter Number of Assignments"
//           />
//         </div>

//         {/* Topics */}
//         <div className="flex flex-col">
//           <label htmlFor="Topics" className="text-gray-700 font-medium mb-1">
//             Topics
//           </label>
//           <input
//             type="text"
//             id="Topics"
//             name="Topics"
//             value={formData.Topics}
//             onChange={handleInputChange}
//             className="p-2 border rounded-md border-gray-300"
//             placeholder="Enter Topics"
//           />
//         </div>

//         {/* Lecturer Name */}
//         <div className="flex flex-col">
//           <label htmlFor="LecturerName" className="text-gray-700 font-medium mb-1">
//             Lecturer Name
//           </label>
//           <input
//             type="text"
//             id="LecturerName"
//             name="LecturerName"
//             value={formData.LecturerName}
//             onChange={handleInputChange}
//             className="p-2 border rounded-md border-gray-300"
//             placeholder="Enter Lecturer Name"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
//         >
//           Add Assignment
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddAssignments;


// // import React, { Fragment, useState } from "react";
// // import filelogo from "../../assests/Images/DA/upload-file.png";
// // import csvlogo from "../../assests/Images/DA/csv-file.png";
// // import { useNavigate } from "react-router-dom";
// // import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
// // import axios from "axios";
// // const AddCourse = () => {
// //   const [downloadProgress, setDownloadProgress] = useState(70); // Simulate progress value
// //   const [step, setStep] = useState(1); // Track the current step in the process
// //   const navigate = useNavigate();
// //   const [selectedFile, setSelectedFile] = useState(null); // State for file input
// //   const [fileInfo, setFileInfo] = useState(null); // Store file info after upload
// //   const [formData, setFormData] = useState({
// //     CourseId:"",
// //     BatchId:"",
// //     Day:"",
// //     Name:"",
// //     Description:"",
// //     UploadVideos:"",
  
// //   }); // Form data for inputs

// //   // Dummy data for batches and courses
// //   const batches = ["Batch 1", "Batch 2", "Batch 3", "Batch 4"];
// //   const courses = [
// //     "Python: Presenting Data with Streamlit",
// //     "	Python: Extract Data From PDF",
// //     "Python & SQL Server: Manage Database Transactions",
// //     "	Python & SQL Server: Bulk Loading Data",
// //     "	Terraform Azure: Tests",
// //     "	Terraform Azure: Reusable SQL Database Configurations",
// //     "	Terraform Azure: SQL Server VM",
// //     "Terraform Azure: Import SQL Database",
// //   ];

// //   // Handle input changes
// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];

// //     setSelectedFile(file);

// //     if (file) {
// //       setFileInfo({
// //         name: file.name,

// //         size: (file.size / 1024 / 1024).toFixed(2), // Convert bytes to MB

// //         type: file.type,
// //       });
// //     }
// //   };

// //   // Handle step navigation
// //   const nextStep = () => setStep(step + 1);
 
// //   const prevStep = () => setStep(step - 1);


// //   const handleSubmit = async () => {
// //     const { BatchCode, BatchName, CourseId } = formData;
// //     const dataToSend = { BatchCode, BatchName, CourseId }; // Ensuring only required fields are sent

// //     try {
// //       // Make POST request to the createBatch API with only required data
// //       const response = await axios.post(
// //         "https://da-backend-7smk.onrender.com/api/Batchs/createBatch",
// //         dataToSend,
// //         {
// //           headers: {
// //             "Content-Type": "application/json",
// //           },
// //         }
// //       );

// //       // Handle success response
// //       alert("Batch created successfully!");
// //       console.log("Response:", response.data);

// //       // // Call handleSave with cleaned formData
// //       // handleSave(dataToSend);
// //     } catch (error) {
// //       // Handle error response
// //       console.error("Error creating batch:", error);
// //       alert("An error occurred while creating the batch.");
// //     }
// //   };

// //   return (
// //     <div className="main-container">
// //       <Fragment>
// //         <div className="flex flex-col items-center justify-center py-4  ">
// //           {/* Progress Steps */}
// //           <div className="w-full max-w-3xl flex justify-between items-center mb-6">
// //             <div className="flex items-center">
// //               <div
// //                 className={`rounded-full text-white w-6 h-6 flex items-center justify-center ${
// //                   step >= 1 ? "bg-blue-600" : "bg-gray-400"
// //                 }`}
// //               >
// //                 1
// //               </div>
// //               <span
// //                 className={`ml-2 ${
// //                   step >= 1 ? "text-gray-800" : "text-gray-500"
// //                 }`}
// //               >
// //                 Informations
// //               </span>
// //             </div>
// //             <div className="flex items-center">
// //               <div
// //                 className={`rounded-full text-white w-6 h-6 flex items-center justify-center ${
// //                   step >= 2 ? "bg-blue-600" : "bg-gray-400"
// //                 }`}
// //               >
// //                 2
// //               </div>
// //               <span
// //                 className={`ml-2 ${
// //                   step >= 2 ? "text-gray-800" : "text-gray-500"
// //                 }`}
// //               >
// //                 Upload file
// //               </span>
// //             </div>
// //           </div>

// //           {/* Step Content */}
// //           <div className="w-3/4  bg-white rounded-lg shadow-lg p-10  ">
// //             {step === 1 && (
// //               <div className="grid gap-y-4">
// //                 {/* Page 1: Name, Email, Batch, Course, and Auth Code Inputs */}
// //                 <h2 className="text-lg font-semibold mb-4">
// //                   Course Activities
// //                 </h2>

// //                 <div className="flex items-center gap-4">
// //                   <label className="w-1/3 text-gray-700 mb-2" htmlFor="CourseId">
// //                     Course Id
// //                   </label>
// //                   <select
// //                     name="CourseId"
// //                     id="CourseId"
// //                     value={formData.CourseId}
// //                     onChange={handleInputChange}
// //                     className={`p-1 mt-2 mb-1 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 `}
// //                   >
// //                     <option value="">Select Course</option>
// //                     {courses.map((course) => (
// //                       <option key={course} value={course}>
// //                         {course}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>
  
// //                 <div className="flex items-center gap-4">
// //                   <label className="w-1/3 text-gray-700 mb-2" htmlFor="BatchId">
// //                     Batch Id
// //                   </label>
// //                   <select
// //                     name="BatchId"
// //                     id="BatchId"
// //                     value={formData.BatchId}
// //                     onChange={handleInputChange}
// //                     className={`p-1 mt-2 mb-1 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 `}
// //                   >
// //                     <option value="">Select Batch</option>
// //                     {batches.map((batch) => (
// //                       <option key={batch} value={batch}>
// //                         {batch}
// //                       </option>
// //                     ))}
// //                   </select>
// //                 </div>
                
// //                 <div className="flex items-center gap-4">
// //                   <label className="w-1/3   text-gray-700">Day</label>
// //                   <input
// //                     type="number"
// //                     name="Day"
// //                     id="Day"
// //                     value={formData.Day}
// //                     onChange={handleInputChange}
// //                     className={`p-1 mt-2 mb-1 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 `}
// //                   />
// //                 </div>

// //                 <div className="flex items-center gap-4">
// //                   <label className="w-1/3   text-gray-700" htmlFor="Name">
// //                     Name
// //                   </label>
// //                   <input
// //                     type="text"
// //                     name="Name"
// //                     id="Name"
// //                     value={formData.Name}
// //                     onChange={handleInputChange}
// //                     className={`p-1 mt-2 mb-1 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 `}
// //                   />
// //                 </div>
// //                 <div className="flex items-center gap-4">
// //                   <label className="w-1/3 text-gray-700 mb-2" htmlFor="Description">
// //                     Description
// //                   </label>
// //                   <textarea
// //                     type="email"
// //                     name="Description"
// //                     id="Description"
// //                     value={formData.Description}
// //                     onChange={handleInputChange}
// //                     className={`p-1 mt-2 mb-1 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 `}
// //                   />
// //                 </div>

// //                 <div className="mt-10 flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
// //                   <button
// //                     className="bg-gray-200 px-4 py-2 rounded shadow w-full sm:w-auto"
// //                     // onClick={handleClose}
// //                   >
// //                     Close
// //                   </button>
// //                   <button
// //                     className="bg-[#003375] text-white px-4 py-2 rounded shadow w-full sm:w-auto"
// //                     // onClick={handleSaveRole}
// //                   >
// //                     Save
// //                   </button>
// //                 </div>
// //               </div>
// //             )}

// //             {step === 2 && (
// //               <div>
// //                 {/* Page 2: File Upload */}
// //                 <div className="border-dashed border-2 border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer">
// //                   <label
// //                     htmlFor="file-upload"
// //                     className="w-full h-full flex flex-col items-center justify-center"
// //                   >
// //                     <img
// //                       src={filelogo}
// //                       alt="Upload Icons"
// //                       className="w-12 h-12 mb-4"
// //                     />
// //                     <p className="text-gray-700 mb-2 text-lg">
// //                       Create or upload a file
// //                     </p>
// //                     <p className="text-sm text-gray-500">
// //                       Maximum file size: 2 GB
// //                     </p>
// //                     <p className="text-sm text-gray-500 mb-4">
// //                       Supported formats: MP4, MOV, MKV, PDF, CSV, DOC
// //                     </p>
// //                     <input
// //                       id="file-upload"
// //                       type="file"
// //                       accept=".csv"
// //                       onChange={handleFileChange}
// //                       className="hidden"
// //                     />
// //                   </label>
// //                 </div>

// //                 {/* Template Files */}
// //                 <div className="mt-6">
// //                   <div className="flex items-center justify-between py-2 border-b border-gray-200 h-16 ">
// //                     <div className="flex items-center h-12">
// //                       <div className="rounded-md bg-green-200 h-3/4">
// //                         <div className="flex justify-center items-center h-full w-[36px] ">
// //                           <img
// //                             src={csvlogo}
// //                             alt="File Icon"
// //                             className="w-6 h-6  text-center "
// //                           />
// //                         </div>
// //                       </div>
// //                       <span className="text-sm text-gray-700 ml-2">
// //                         classification_v3
// //                       </span>
// //                     </div>
// //                     <div className="flex items-center space-x-2 ">
// //                       <div className="text-xs text-gray-500">XLSX - 1.2 MB</div>
// //                       <div className="text-xs text-gray-500">3 sec left</div>
// //                       <div className="w-36 bg-gray-200 rounded-full h-2">
// //                         <div
// //                           className="bg-blue-600 h-2 rounded-full"
// //                           style={{ width: `${downloadProgress}%` }}
// //                         ></div>
// //                       </div>
// //                       <button className="text-gray-500 hover:text-red-600">
// //                         <svg
// //                           xmlns="http://www.w3.org/2000/svg"
// //                           className="h-5 w-5"
// //                           fill="none"
// //                           viewBox="0 0 24 24"
// //                           stroke="currentColor"
// //                         >
// //                           <path
// //                             strokeLinecap="round"
// //                             strokeLinejoin="round"
// //                             strokeWidth="2"
// //                             d="M6 18L18 6M6 6l12 12"
// //                           />
// //                         </svg>
// //                       </button>
// //                     </div>
// //                   </div>
// //                   <div className="flex items-center justify-between py-2 mt-4 border-b border-gray-200">
// //                     <div className="flex items-center h-12">
// //                       <div className="rounded-md bg-green-200 h-3/4">
// //                         <div className="flex justify-center items-center h-full w-[36px] ">
// //                           <img
// //                             src={csvlogo}
// //                             alt="File Icon"
// //                             className="w-6 h-6  text-center "
// //                           />
// //                         </div>
// //                       </div>
// //                       <span className="text-sm text-gray-700 ml-2">
// //                         Template Classification
// //                       </span>
// //                     </div>
// //                     <button class="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-100 hover:shadow-md transition duration-200">
// //                       <FileDownloadOutlinedIcon fontSize="small" />
// //                       Download
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           {/* Step Navigation Buttons */}
// //           <div className="w-full max-w-3xl flex justify-between items-center mt-8">
// //             {step > 1 && (
// //               <button
// //                 className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
// //                 onClick={prevStep}
// //               >
// //                 Back
// //               </button>
// //             )}
// //             {step <= 2 && (
// //               <button
// //                 className={`px-4 py-2 rounded-lg text-white ${
// //                   step <= 2
// //                     ? "bg-blue-600 hover:bg-blue-700"
// //                     : "bg-green-600 hover:bg-green-700"
// //                 }`}
// //                 onClick={step < 2 ? nextStep : handleSubmit}
// //               >
// //                 {step < 2 ? "Next" : "Save"}
// //               </button>
// //             )}
// //           </div>
// //         </div>
// //       </Fragment>
// //     </div>
// //   );
// // };

// // export default AddCourse;


// import React, { Fragment, useState } from "react";
// import filelogo from "../../assests/Images/DA/upload-file.png";
// import csvlogo from "../../assests/Images/DA/csv-file.png";
// import { useNavigate } from "react-router-dom";
// import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
// import axios from "axios";
// const AddCourse = () => {
//   const [downloadProgress, setDownloadProgress] = useState(70); // Simulate progress value
//   const [step, setStep] = useState(1); // Track the current step in the process
//   const navigate = useNavigate();
//   const [selectedFile, setSelectedFile] = useState(null); // State for file input
//   const [fileInfo, setFileInfo] = useState(null); // Store file info after upload
//   const [videoURL, setVideoURL] = useState(null);
//   const [formData, setFormData] = useState({
//     CourseId:"",
//     BatchId:"",
//     Day:"",
//     Name:"",
//     Description:"",
//     UploadVideos:"",
  
//   }); // Form data for inputs

//   // Dummy data for batches and courses
//   const batches = ["Batch 1", "Batch 2", "Batch 3", "Batch 4"];
//   const courses = [
//     "Python: Presenting Data with Streamlit",
//     "	Python: Extract Data From PDF",
//     "Python & SQL Server: Manage Database Transactions",
//     "	Python & SQL Server: Bulk Loading Data",
//     "	Terraform Azure: Tests",
//     "	Terraform Azure: Reusable SQL Database Configurations",
//     "	Terraform Azure: SQL Server VM",
//     "Terraform Azure: Import SQL Database",
//   ];

//   // Handle input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
  
//     if (file) {
//       const fileSizeInMB = file.size / 1024 / 1024;
  
//       // Check if file size exceeds 2 GB
//       if (fileSizeInMB > 2048) {
//         alert("File size exceeds the maximum limit of 2 GB.");
//         return;
//       }
  
//       // Set the selected file and other file information
//       setSelectedFile(file);
//       setFileInfo({
//         name: file.name,
//         size: fileSizeInMB.toFixed(2), // Convert bytes to MB
//         type: file.type,
//       });
  
//       // Create video URL for preview
//       setVideoURL(URL.createObjectURL(file));
  
//       // Update the UploadVideos field in formData with the file
//       setFormData({
//         ...formData,
//         UploadVideos: file,
//       });
//     }
//   };
  
//   const nextStep = () => setStep(step + 1);
 
//   const prevStep = () => setStep(step - 1);


//   const handleSubmit = async () => {
//     const { CourseId, BatchId, Day, Name, Description, UploadVideos } = formData;
  
//     // Create a new FormData object to send data, including the file
//     const dataToSend = new FormData();
//     dataToSend.append("CourseId", CourseId);
//     dataToSend.append("BatchId", BatchId);
//     dataToSend.append("Day", Day);
//     dataToSend.append("Name", Name);
//     dataToSend.append("Description", Description);
//     dataToSend.append("UploadVideos", UploadVideos);
  
    
  
//     try {
//       // Make POST request to the createBatch API with FormData
//       const response = await axios.post(
//         "https://da-backend-7smk.onrender.com/api/CourseVideos/createCourseVideo",
//         dataToSend,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data", // Important for file uploads
//           },
//         }
//       );
  
//       // Handle success response
//       alert("Batch created successfully!");
//       console.log("Response:", response.data);
  
//     } catch (error) {
//       // Handle error response
//       console.error("Error creating batch:", error);
//       alert("An error occurred while creating the batch.");
//     }
//   };
  

//   return (
//     <div className="main-container">
//       <Fragment>
//         <div className="flex flex-col items-center justify-center py-4  ">
//           {/* Progress Steps */}
//           <div className="w-full max-w-3xl flex justify-between items-center mb-6">
//             <div className="flex items-center">
//               <div
//                 className={`rounded-full text-white w-6 h-6 flex items-center justify-center ${
//                   step >= 1 ? "bg-blue-600" : "bg-gray-400"
//                 }`}
//               >
//                 1
//               </div>
//               <span
//                 className={`ml-2 ${
//                   step >= 1 ? "text-gray-800" : "text-gray-500"
//                 }`}
//               >
//                 Informations
//               </span>
//             </div>
//             <div className="flex items-center">
//               <div
//                 className={`rounded-full text-white w-6 h-6 flex items-center justify-center ${
//                   step >= 2 ? "bg-blue-600" : "bg-gray-400"
//                 }`}
//               >
//                 2
//               </div>
//               <span
//                 className={`ml-2 ${
//                   step >= 2 ? "text-gray-800" : "text-gray-500"
//                 }`}
//               >
//                 Upload file
//               </span>
//             </div>
//           </div>

//           {/* Step Content */}
//           <div className="w-3/4  bg-white rounded-lg shadow-lg p-10  ">
//             {step === 1 && (
//               <div className="grid gap-y-4">
//                 {/* Page 1: Name, Email, Batch, Course, and Auth Code Inputs */}
//                 <h2 className="text-lg font-semibold mb-4">
//                   Course Activities
//                 </h2>

//                 <div className="flex items-center gap-4">
//                   <label className="w-1/3 text-gray-700 mb-2" htmlFor="CourseId">
//                     Course Id
//                   </label>
//                   {/* <select
//                     name="CourseId"
//                     id="CourseId"
//                     value={formData.CourseId}
//                     onChange={handleInputChange}
//                     className={`p-1 mt-2 mb-1 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 `}
//                   >
//                     <option value="">Select Course</option>
//                     {courses.map((course) => (
//                       <option key={course} value={course}>
//                         {course}
//                       </option>
//                     ))}
//                   </select> */}
//                    <input
//                     type="number"
//                     name="CourseId"
//                     id="CourseId"
//                     value={formData.CourseId}
//                     onChange={handleInputChange}
//                     className={`p-1 mt-2 mb-1 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 `}
//                   />
//                 </div>
  
//                 <div className="flex items-center gap-4">
//                   <label className="w-1/3 text-gray-700 mb-2" htmlFor="BatchId">
//                     Batch Id
//                   </label>
//                   {/* <select
//                     name="BatchId"
//                     id="BatchId"
//                     value={formData.BatchId}
//                     onChange={handleInputChange}
//                     className={`p-1 mt-2 mb-1 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 `}
//                   >
//                     <option value="">Select Batch</option>
//                     {batches.map((batch) => (
//                       <option key={batch} value={batch}>
//                         {batch}
//                       </option>
//                     ))}
//                   </select> */}
//                    <input
//                     type="number"
//                     name="BatchId"
//                     id="BatchId"
//                     value={formData.BatchId}
//                     onChange={handleInputChange}
//                     className={`p-1 mt-2 mb-1 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 `}
//                   />
//                 </div>
                
//                 <div className="flex items-center gap-4">
//                   <label className="w-1/3   text-gray-700">Day</label>
//                   <input
//                     type="number"
//                     name="Day"
//                     id="Day"
//                     value={formData.Day}
//                     onChange={handleInputChange}
//                     className={`p-1 mt-2 mb-1 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 `}
//                   />
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <label className="w-1/3   text-gray-700" htmlFor="Name">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     name="Name"
//                     id="Name"
//                     value={formData.Name}
//                     onChange={handleInputChange}
//                     className={`p-1 mt-2 mb-1 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 `}
//                   />
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <label className="w-1/3 text-gray-700 mb-2" htmlFor="Description">
//                     Description
//                   </label>
//                   <textarea
//                     type="email"
//                     name="Description"
//                     id="Description"
//                     value={formData.Description}
//                     onChange={handleInputChange}
//                     className={`p-1 mt-2 mb-1 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 `}
//                   />
//                 </div>

//                 {/* <div className="mt-10 flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
//                   <button
//                     className="bg-gray-200 px-4 py-2 rounded shadow w-full sm:w-auto"
//                     // onClick={handleClose}
//                   >
//                     Close
//                   </button>
//                   <button
//                     className="bg-[#003375] text-white px-4 py-2 rounded shadow w-full sm:w-auto"
//                     // onClick={handleSaveRole}
//                   >
//                     Save
//                   </button>
//                 </div> */}
//               </div>
//             )}

//             {step === 2 && (
//               <div>

// <div className="border-dashed border-2 border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer">
//       <label htmlFor="file-upload" className="w-full h-full flex flex-col items-center justify-center">
//         <img src={filelogo} alt="Upload Icons" className="w-12 h-12 mb-4" />
//         <p className="text-gray-700 mb-2 text-lg">Upload Video</p>
//         <p className="text-sm text-gray-500 mb-4">Supported formats: MP4, MOV, MKV, PDF, CSV, DOC</p>
//         <input
//           id="file-upload"
//           type="file"
//           accept=".mp4, .mov, .mkv, .pdf, .csv, .doc"
//           onChange={handleFileChange}
//           className="hidden"
//         />
//       </label>

//       {/* Show video preview if a video is selected */}
//       {videoURL && (
//         <div className="mt-4 w-full flex flex-col items-center">
//           <video width="400" controls>
//             <source src={videoURL} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//           <p className="text-sm text-gray-500 mt-2">File: {fileInfo.name}</p>
//           <p className="text-sm text-gray-500">Size: {fileInfo.size} MB</p>
//         </div>
//       )}
//     </div>

//               </div>
//             )}
//           </div>

//           {/* Step Navigation Buttons */}
//           <div className="w-full max-w-3xl flex justify-between items-center mt-8">
//             {step > 1 && (
//               <button
//                 className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
//                 onClick={prevStep}
//               >
//                 Back
//               </button>
//             )}
//             {step <= 2 && (
//               <button
//                 className={`px-4 py-2 rounded-lg text-white ${
//                   step <= 2
//                     ? "bg-blue-600 hover:bg-blue-700"
//                     : "bg-green-600 hover:bg-green-700"
//                 }`}
//                 onClick={step < 2 ? nextStep : handleSubmit}
//               >
//                 {step < 2 ? "Next" : "Save"}
//               </button>
//             )}
//           </div>
//         </div>
//       </Fragment>
//     </div>
//   );
// };

// export default AddCourse;




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

import LoadingAnimation from "../../components/Loading/LoadingAnimation";
import "react-toastify/dist/ReactToastify.css";

import '../../index.css'; 

import { AiOutlineVideoCamera, AiOutlineFileText } from "react-icons/ai"; 
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/24/solid";
import { Combobox } from "@headlessui/react";
import filelogo from "../../assests/Images/DA/upload-file.png";
import csvlogo from "../../assests/Images/DA/csv-file.png";
import VideoIcon from '@mui/icons-material/VideoLibrary'; // MUI video icon
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'; // MUI download icon
import PdfIcon from '@mui/icons-material/PictureAsPdf'; // MUI PDF icon


const steps = ["Assignments Details", "Uploads"];
const courses = [
  { id: "PYTHON-1", name: "Python" },
  { id: "AZURE-1", name: "Azure" }
];

function VideoForm() {
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


 
  const [downloadProgress, setDownloadProgress] = useState(70); // Simulate progress value

const[storeDetails,setStoreDetails]=useState([]);


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

 
  const handleCancel = () => {
    setIsLoading(true);

    setTimeout(() => {
      navigate("/Stores");
    }, 1500); // Delay by 500ms
  };

  const handleStepClick = (index) => {
    setActiveStep(index);
  };
  const isStepOptional = (step) => step === 1;

  
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
const [batches, setBatches] = useState([]);


 const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));

    setPage(0);
  };
    const  handleFormSubmit = async () => {
    const { CourseId, BatchId, Day, Name, Description, UploadVideos } = formData;
  
    // Create a new FormData object to send data, including the file
    const dataToSend = new FormData();
    dataToSend.append("CourseId", CourseId);
    dataToSend.append("BatchId", BatchId);
    dataToSend.append("Day", Day);
    dataToSend.append("Name", Name);
    dataToSend.append("Description", Description);
    dataToSend.append("UploadVideos", UploadVideos);
  
    
  
    try {
      // Make POST request to the createBatch API with FormData
      const response = await axios.post(
        "https://da-backend-7smk.onrender.com/api/CourseVideos/createCourseVideo",
        dataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );
  
      // Handle success response
      alert("Batch created successfully!");
      console.log("Response:", response.data);
  
    } catch (error) {
      // Handle error response
      console.error("Error creating batch:", error);
      alert("An error occurred while creating the batch.");
    }
  };
  

  const [videoInfo, setVideoInfo] = useState({ name: "", size: "" });
  const [fileInfo, setFileInfo] = useState({ name: "", size: "" });

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.includes("video")) {
      setVideoInfo({
        name: file.name,
        size: (file.size / (1024 * 1024)).toFixed(2), // Convert size to MB
      });
      setFormData({
                ...formData,
                UploadVideos: file,
              });
    }
  };

  

  // Filter courses based on query
  // const filteredCourses = query === ""
  //   ? courses
  //   : courses.filter(course =>
  //       course.name.toLowerCase().includes(query.toLowerCase())
  //     );
     
      const [batchQuery, setBatchQuery] = useState(""); // for searching batches
      const [courses, setCourses] = useState([]);
      const [filteredCourses, setFilteredCourses] = useState([]);
    
      
      // Step 3: Filter batches based on batchQuery
      useEffect(() => {
        if (batchQuery === "") {
          setFilteredBatches(batches);
        } else {
          setFilteredBatches(
            batches.filter((batch) =>
              batch.name.toLowerCase().includes(batchQuery.toLowerCase())
            )
          );
        }
      }, [batchQuery, batches]);


  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);


   // Handle file upload change
   const handleFileChange = (event) => {
    // Get the file(s) selected by the user
    const files = Array.from(event.target.files);
    // Add the new files to the already uploaded files (if any)
    setUploadedFiles((prevFiles) => [...prevFiles, ...files]);
  };

 
  const getFileIcon = (file) => {
    const fileType = file.type;
    const fileName = file.name.toLowerCase();

    if (fileType.startsWith('video') || fileName.endsWith('.mp4') || fileName.endsWith('.mov') || fileName.endsWith('.mkv')) {
      return <VideoIcon fontSize="large" className="text-blue-500" />;
    }
    if (fileName.endsWith('.pdf')) {
      return <PdfIcon fontSize="large" className="text-red-500" />;
    }
    if (fileName.endsWith('.csv')) {
      return <PdfIcon className="w-6 h-6 text-green-500" />;
    }
    return <FileDownloadOutlinedIcon fontSize="large" className="text-gray-500" />;
  };

  const [selectedBatch, setSelectedBatch] = useState(null); // To store the selected batch
  const [selectedCourse, setSelectedCourse] = useState(null); 
  const [filteredBatches, setFilteredBatches] = useState([]);
 
  useEffect(() => {
        const fetchCourses = async () => {
          try {
            const response = await axios.get('https://da-backend-7smk.onrender.com/api/courses/getAllCourses');
            setCourses(response.data.courses);
            setFilteredCourses(response.data.courses);
          } catch (error) {
            toast.error("Failed to fetch courses.");
          }
        };
        
        fetchCourses();
      }, []);

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
  <div className="flex justify-center">
  <div className="p-4 w-3/4 ">
                 {/* <div className="flex items-center gap-4">
                   <label className="w-1/3 text-gray-700 mb-2" htmlFor="CourseId">
                     Course Id
                   </label>
                   <input
                    type="number"
                    name="CourseId"
                    id="CourseId"
                    value={formData.CourseId}
                    onChange={handleInputChange}
                    className={`p-1 mt-2 mb-1 w-full border rounded-md ${
                      error ? "border-red-500" : "border-gray-400"
                    }`}
                  />
                </div>
                
  
                <div className="flex items-center gap-4">
                  <label className="w-1/3 text-gray-700 mb-2" htmlFor="BatchId">
                    Batch Id
                  </label>
                   <input
                    type="number"
                    name="BatchId"
                    id="BatchId"
                    value={formData.BatchId}
                    onChange={handleInputChange}
                    className={`p-1 mt-2 mb-1 w-full border rounded-md ${
                      error ? "border-red-500" : "border-gray-400"
                    }`}
                  />
                </div> */}
  


<div className="flex items-center gap-4 mb-4">
<label className="w-1/3 text-gray-700" htmlFor="BatchId">
    Course Name
  </label>
  <div className="w-full">
    <Combobox
      as="div"
      value={selectedCourse}
      onChange={(course) => {
        setSelectedCourse(course); // Set the selected course object
        setFormData((prevData) => ({
          ...prevData,
          CourseId: course?.CourseId || "", // Update CourseId, but leave CourseName for display
        }));
      }}
    >
      <div className="relative">
        <Combobox.Input
          id="CourseId"
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(course) => course ? course.Name : ''} // Display the CourseName in the input field
          placeholder="Select a course"
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </Combobox.Button>

        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Combobox.Option
                key={course.CourseId}
                value={course}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white"
              >
                <span className="block truncate font-normal group-data-[selected]:font-semibold">
                  {course.Name} {/* Display CourseName in the options */}
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


<div className="flex items-center gap-4 mb-4">
<label className="w-1/3 text-gray-700" htmlFor="BatchId">
    Batch Name
  </label>
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

    
<div className="flex items-center gap-4 mb-4">
<label className="w-1/3 text-gray-700" htmlFor="BatchId">
   Lecturer Name
  </label>
      <div className="w-full">
        <Combobox as="div" value={selectedBatch} onChange={setSelectedBatch}>
          <div className="relative">
            <Combobox.Input
              className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              onChange={handleQueryChange} // Set up the query for filtering batches
              displayValue={(batch) => batch?.BatchName || ""} // Show the batch name in the input field
              placeholder="Select Lecturer"
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



                <div className="flex items-center gap-4">
                  <label className="w-1/3   text-gray-700">Number Of Assignments</label>
                  <input
                    type="number"
                    name="Day"
                    id="Day"
                    value={formData.Day}
                    onChange={handleInputChange}
                    className={`p-1 mt-2 mb-1 w-full border rounded-md ${
                      error ? "border-red-500" : "border-gray-400"
                    }`}
                  />
                </div>

                <div className="flex items-center gap-4">
                  <label className="w-1/3   text-gray-700" htmlFor="Name">
                   Topic
                  </label>
                  <input
                    type="text"
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
                  <label className="w-1/3 text-gray-700 mb-2" htmlFor="Description">
                    Description
                  </label>
                  <textarea
                    type="email"
                    name="Description"
                    id="Description"
                    value={formData.Description}
                    onChange={handleInputChange}
                    className={`p-1 mt-2 mb-1 w-full border rounded-md ${
                      error ? "border-red-500" : "border-gray-400"
                    }`}
                  />
                </div>
                </div>
                </div>
            
                {/* <div className="mt-6 flex justify-end gap-4">
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
                </div> */}
                
              </>
            )}

            {activeStep === 1 && (
              <div>
                <div>
  

<div>
      <div className="border-dashed border-2 border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer">
        <label htmlFor="file-upload" className="w-full h-full flex flex-col items-center justify-center">
          <img src={filelogo} alt="Upload Icon" className="w-12 h-12 mb-4" />
          <p className="text-gray-700 mb-2 text-lg">Upload Videos and Files</p>
          <p className="text-sm text-gray-500 mb-4">Supported formats: MP4, MOV, MKV, PDF, CSV, DOC</p>
          <input
            id="file-upload"
            type="file"
            accept=".csv,.pdf,.doc,.mp4,.mov,.mkv"
            onChange={handleFileChange}
            className="hidden"
            multiple
          />
        </label>
      </div>

      <div className="mt-6">
        {uploadedFiles.length > 0 ? (
          uploadedFiles.map((file, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200">
              <div className="flex items-center h-12">
                <div className="rounded-md bg-blue-200 h-3/4">
                  <div className="flex justify-center items-center h-full w-[36px]">
                    {getFileIcon(file)}
                  </div>
                </div>
                <span className="text-sm text-gray-700 ml-2">{file.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-xs text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</div>
                <div className="w-36 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <button className="text-gray-500 hover:text-red-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <button className="flex items-center bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 shadow-sm hover:bg-gray-100 hover:shadow-md transition duration-200">
                  <FileDownloadOutlinedIcon fontSize="small" />
                  Download
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No files uploaded yet.</p>
        )}
      </div>
    </div>
                  <div className="mt-6 flex justify-end gap-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-custom-darkblue py-2 px-4 text-sm font-medium text-white hover:text-black shadow-sm hover:bg-custom-lightblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={handleFormSubmit}
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

export default VideoForm;
