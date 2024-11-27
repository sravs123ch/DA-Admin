// import React, { useState, useEffect, useContext } from "react";
// import Select from "react-select";
// // import { DataContext } from "../../Context/DataContext";
// import { toast, ToastContainer } from "react-toastify";
// // import LoadingAnimation from "../../components/Loading/LoadingAnimation";
// import { useNavigate } from "react-router-dom";
// import { FaPlus, FaTable } from "react-icons/fa";

// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import VideoData from "./VideoData";
// import { useParams } from "react-router-dom";
// import { IoEllipsisHorizontalCircleSharp } from "react-icons/io5";
// import { Link } from "react-router-dom";

// const Courses = () => {
//   const [roleName, setRoleName] = useState("");
//   const [storeId, setStoreId] = useState("0");
//   const [permissionsByModule, setPermissionsByModule] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [isLoading, setIsLoading] = useState(false);
//   const { BatchId } = useParams(); 
//   const navigate = useNavigate();
//   // const { storesData } = useContext(DataContext);
//   const [stores, setStores] = useState([]);


//   useEffect(() => {
//     const permissions = [
//       { ID: 1, Name: "View Dashboard", Module: "Course 1", IsChecked: false },
//       { ID: 11, Name: "View Courses", Module: "Course 1", IsChecked: false },
//       {
//         ID: 11,
//         Name: "Download Courses",
//         Module: "Course 1",
//         IsChecked: false,
//       },
//       { ID: 11, Name: "Delete Courses", Module: "Course 1", IsChecked: false },
//       { ID: 2, Name: "Edit Reports", Module: "Course 2", IsChecked: false },
//       {
//         ID: 5,
//         Name: "Create New Report",
//         Module: "Course 2",
//         IsChecked: false,
//       },
//       { ID: 10, Name: "Import Data", Module: "Course 2", IsChecked: false },
//       { ID: 9, Name: "Export Data", Module: "Course 2", IsChecked: false },
//       { ID: 13, Name: "View Reports", Module: "Course 2", IsChecked: false },
//       { ID: 3, Name: "Manage Users", Module: "Course 3", IsChecked: false },
//       { ID: 6, Name: "Delete Users", Module: "Course 3", IsChecked: false },
//       { ID: 14, Name: "Reset Passwords", Module: "Course 3", IsChecked: false },
//       {
//         ID: 7,
//         Name: "View User Activity",
//         Module: "Course 3",
//         IsChecked: false,
//       },
//       { ID: 4, Name: "Send Feedback", Module: "Course 4", IsChecked: false },
//       {
//         ID: 8,
//         Name: "Send Notifications",
//         Module: "Course 4",
//         IsChecked: false,
//       },
//       {
//         ID: 15,
//         Name: "Approve Requests",
//         Module: "Course 4",
//         IsChecked: false,
//       },
//       { ID: 12, Name: "Manage Settings", Module: "Course 5", IsChecked: false },
//       { ID: 16, Name: "Audit Trail", Module: "Course 5", IsChecked: false },
//     ];

//     const categorizedPermissions = permissions.reduce((acc, permission) => {
//       if (!acc[permission.Module]) {
//         acc[permission.Module] = [];
//       }
//       acc[permission.Module].push(permission);
//       return acc;
//     }, {});

//     setPermissionsByModule(categorizedPermissions);
//     setLoading(false);
//   }, []);

//   const handleCheckboxChange = (moduleName, permissionId) => {
//     setPermissionsByModule((prevState) => ({
//       ...prevState,
//       [moduleName]: prevState[moduleName].map((permission) =>
//         permission.ID === permissionId
//           ? { ...permission, IsChecked: !permission.IsChecked }
//           : permission
//       ),
//     }));
//   };

//   const handleSelectAllChange = (moduleName, isChecked) => {
//     setPermissionsByModule((prevState) => ({
//       ...prevState,
//       [moduleName]: prevState[moduleName].map((permission) => ({
//         ...permission,
//         IsChecked: isChecked,
//       })),
//     }));
//   };

//   const handleSaveRole = () => {
//     navigate("/videoadd");
//   };
//   const [videos, setVideos] = useState([]);
//   const fetchBatchDetails = async () => {
//     try {
//       const response = await fetch(
//         `https://da-backend-7smk.onrender.com/api/Batchs/getBatchById/${BatchId}`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch batch details");
//       }
//       const data = await response.json();
//       setVideos(data.videos); 
//       console.log(data.videos);
     
//     } catch (error) {
//       console.error("Error fetching batch details:", error);
//     }
//   };
//   useEffect(() => {
//     fetchBatchDetails();
//   }, [BatchId]);

//   return (
//     <div className="main-container">
//       {/* <div className="mt-6 p-6 rounded-lg"> */}
//         <div className="flex justify-between items-center mb-5">
//           <h2 className="heading">Videos</h2>
//           <div className="search-button-group">
//             <button
//               type="button"
//               className="action-button"
//               onClick={handleSaveRole}
//             >
//               <FaPlus aria-hidden="true" className="icon" />
//               Add Video
//             </button>
//           </div>
//         </div>
//         <ToastContainer />
//         <hr className="border-gray-300 my-4 mb-4" />

//         <div className="mb-4 flex flex-col sm:flex-row justify-center items-center">
//           <label className="block font-semibold mr-[14px]">Videos</label>
//           <input
//             type="text"
//             value={roleName}
//             onChange={(e) => setRoleName(e.target.value)}
//             className="border border-gray-300 p-2 w-full sm:w-1/2 rounded-md"
//             placeholder="Search Videos..."
//           />
//         </div>

//         <hr className="border-gray-300 my-4 mb-4" />
//         <div className="flex space-x-3 justify-end p-1">
//           <button className="p-2 bg-white shadow-md rounded-full">
//             <FiChevronLeft size={20} />
//           </button>
//           <button className="p-2 bg-white shadow-md rounded-full">
//             <FiChevronRight size={20} />
//           </button>
//         </div>
//         {/* <div className="flex-1 flex flex-col overflow-y-auto">
    
//           <VideoData videos={videos} />
//         </div> */}

// <div className="flex-1 flex flex-col overflow-y-auto p-5 bg-gray-100">
//       {/* Header (Optional) */}

//       {/* Course Cards */}
//       {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {videos.length > 0 ? (
//           videos.map((videos) => <VideoCard key={videos.VideoId} videos={videos} />)
//         ) : (
//           <p className="text-center text-gray-500">Loading videos...</p>
//         )}
//       </div> */}

      
//     </div>


//         <div className="mt-10 flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
//           <button
//             className="bg-gray-200 px-4 py-2 rounded shadow w-full sm:w-auto"
//             // onClick={() => navigate("/roleuser")}
//           >
//             Close
//           </button>
//           <button
//             className="bg-[#003375] text-white px-4 py-2 rounded shadow w-full sm:w-auto"
//             onClick={handleSaveRole}
//           >
//             Save
//           </button>
//         </div>
//       {/* </div> */}
//       {/* {loading && <LoadingAnimation />} */}
//     </div>
//   );
// };

// // const VideoCard = ({ videos }) => {
// //   // Validate destructured properties
// //   const { VideoId, Name, Description, VideoUrl, Day } = videos || {};
 

// //   return (
// //     <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between transition-transform transform hover:scale-105 h-full">
// //       {/* Image Section */}
// //       {/* <div className="relative">
// //         <img
// //           src={videoSrc}
// //           alt={Name}
// //           className="w-full h-48 object-cover"
// //         />
// //       </div> */}
// //       {/* Video Section */}
// // <div className="relative">
// //   <video
// //     src={videos ? videos .VideoUrl : ""}
// //     alt={videos ? videos.Name : ""}
// //     className="w-full h-48 object-cover"
// //     controls
// //   >
// //     Your browser does not support the video tag.
// //   </video>
// // </div>


// //       {/* Content Section */}
// //       <div className="p-4 flex-grow flex flex-col">
// //         {/* Category Section */}
// //         <p className="text-purple-600 text-xs font-semibold mb-2 uppercase h-6 flex justify-center">
// //           {`Day ${Day || "N/A"}`}
// //         </p>

// //         {/* Title Section */}
// //         <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 h-14">
// //           {Name || "Untitled"}
// //         </h3>

// //         {/* Description Section */}
// //         <p className="text-sm text-gray-600 mb-4 line-clamp-3">
// //           {Description || "No description available."}
// //         </p>

// //         {/* Watch Now Button */}
// //         <div className="mt-4 flex justify-center">
// //           <Link
// //             to={`/videos/${VideoId || ""}`}
// //             className="block w-full py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg text-center hover:bg-purple-700 transition-all"
// //           >
// //             Open Video
// //           </Link>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };


// export default Courses;


import React, { useState, useEffect, useContext } from "react";
import Select from "react-select";
// import { DataContext } from "../../Context/DataContext";
import { toast, ToastContainer } from "react-toastify";
// import LoadingAnimation from "../../components/Loading/LoadingAnimation";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaTable } from "react-icons/fa";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import VideoData from "./VideoData";
import { useParams } from "react-router-dom";
import { IoEllipsisHorizontalCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

import VideoPlayback from "../../pages/videoPlayback/videoPlayback";

const Courses = () => {
  const [roleName, setRoleName] = useState("");
  const [storeId, setStoreId] = useState("0");
  const [permissionsByModule, setPermissionsByModule] = useState({});
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { BatchId } = useParams(); 
  const navigate = useNavigate();
  // const { storesData } = useContext(DataContext);
  const [stores, setStores] = useState([]);


  useEffect(() => {
    const permissions = [
      { ID: 1, Name: "View Dashboard", Module: "Course 1", IsChecked: false },
      { ID: 11, Name: "View Courses", Module: "Course 1", IsChecked: false },
      {
        ID: 11,
        Name: "Download Courses",
        Module: "Course 1",
        IsChecked: false,
      },
      { ID: 11, Name: "Delete Courses", Module: "Course 1", IsChecked: false },
      { ID: 2, Name: "Edit Reports", Module: "Course 2", IsChecked: false },
      {
        ID: 5,
        Name: "Create New Report",
        Module: "Course 2",
        IsChecked: false,
      },
      { ID: 10, Name: "Import Data", Module: "Course 2", IsChecked: false },
      { ID: 9, Name: "Export Data", Module: "Course 2", IsChecked: false },
      { ID: 13, Name: "View Reports", Module: "Course 2", IsChecked: false },
      { ID: 3, Name: "Manage Users", Module: "Course 3", IsChecked: false },
      { ID: 6, Name: "Delete Users", Module: "Course 3", IsChecked: false },
      { ID: 14, Name: "Reset Passwords", Module: "Course 3", IsChecked: false },
      {
        ID: 7,
        Name: "View User Activity",
        Module: "Course 3",
        IsChecked: false,
      },
      { ID: 4, Name: "Send Feedback", Module: "Course 4", IsChecked: false },
      {
        ID: 8,
        Name: "Send Notifications",
        Module: "Course 4",
        IsChecked: false,
      },
      {
        ID: 15,
        Name: "Approve Requests",
        Module: "Course 4",
        IsChecked: false,
      },
      { ID: 12, Name: "Manage Settings", Module: "Course 5", IsChecked: false },
      { ID: 16, Name: "Audit Trail", Module: "Course 5", IsChecked: false },
    ];

    const categorizedPermissions = permissions.reduce((acc, permission) => {
      if (!acc[permission.Module]) {
        acc[permission.Module] = [];
      }
      acc[permission.Module].push(permission);
      return acc;
    }, {});

    setPermissionsByModule(categorizedPermissions);
    setLoading(false);
  }, []);

  const handleCheckboxChange = (moduleName, permissionId) => {
    setPermissionsByModule((prevState) => ({
      ...prevState,
      [moduleName]: prevState[moduleName].map((permission) =>
        permission.ID === permissionId
          ? { ...permission, IsChecked: !permission.IsChecked }
          : permission
      ),
    }));
  };

  const handleSelectAllChange = (moduleName, isChecked) => {
    setPermissionsByModule((prevState) => ({
      ...prevState,
      [moduleName]: prevState[moduleName].map((permission) => ({
        ...permission,
        IsChecked: isChecked,
      })),
    }));
  };

  const handleSaveRole = () => {
    navigate("/videoadd");
  };
  const [videos, setVideos] = useState([]);
  const fetchBatchDetails = async () => {
    try {
      const response = await fetch(
        `https://da-backend-7smk.onrender.com/api/Batchs/getBatchById/${BatchId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch batch details");
      }
      const data = await response.json();
      setVideos(data.videos); 
      console.log(data.videos);
     
    } catch (error) {
      console.error("Error fetching batch details:", error);
    }
  };
  useEffect(() => {
    fetchBatchDetails();
  }, [BatchId]);

  return (
    <div className="main-container">
      {/* <div className="mt-6 p-6 rounded-lg"> */}
        <div className="flex justify-between items-center mb-5 -mt-16">
          <h2 className="heading"></h2>
          <div className="search-button-group">
            <button
              type="button"
              className="action-button"
              onClick={handleSaveRole}
            >
              <FaPlus aria-hidden="true" className="icon" />
              Add Video
            </button>
          </div>
        </div>
        <ToastContainer />
        <hr className="border-gray-300 my-4 mb-4" />

        <div className="mb-4 flex flex-col sm:flex-row justify-center items-center">
          <label className="block font-semibold mr-[14px]">Videos</label>
          <input
            type="text"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
            className="border border-gray-300 p-2 w-full sm:w-1/2 rounded-md"
            placeholder="Search Videos..."
          />
        </div>

        <hr className="border-gray-300 my-4 mb-4" />
        {/* <div className="flex space-x-3 justify-end p-1">
          <button className="p-2 bg-white shadow-md rounded-full">
            <FiChevronLeft size={20} />
          </button>
          <button className="p-2 bg-white shadow-md rounded-full">
            <FiChevronRight size={20} />
          </button>
        </div> */}
        {/* <div className="flex-1 flex flex-col overflow-y-auto">
    
          <VideoData videos={videos} />
        </div> */}

      {/* Header (Optional) */}
{/* <div className="flex-1 flex flex-col overflow-y-auto p-5 bg-gray-100">

    

      
    </div> */}


<div className="flex-1 flex flex-col overflow-y-auto p-5 bg-gray-100">
  <VideoPlayback />
</div>



        <div className="mt-10 flex flex-col sm:flex-row justify-end space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            className="bg-gray-200 px-4 py-2 rounded shadow w-full sm:w-auto"
            // onClick={() => navigate("/roleuser")}
          >
            Close
          </button>
          <button
            className="bg-[#003375] text-white px-4 py-2 rounded shadow w-full sm:w-auto"
            onClick={handleSaveRole}
          >
            Save
          </button>
        </div>
      {/* </div> */}
      {/* {loading && <LoadingAnimation />} */}
    </div>
  );
};

export default Courses;
