// import { useState, useEffect } from "react";
// import { useNavigate, useParams, useLocation } from "react-router-dom";
// import Videos from "../Courses/Videos";
// import BatchEdit from "../Batches/BatchEdit";

// const StoreForm = () => {
//   const [batchDetails, setBatchDetails] = useState({});
//   const { BatchId,VideoId } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Determine active tab from URL
//   const isVideosTab = location.pathname.includes(`/video/${BatchId}`);

//   const handleTabChange = (tab) => {
//     if (tab === "Videos") {
//       navigate(`/batch/${BatchId}/video/${VideoId}`);
//     } else {
//       navigate(`/batchesedit/${BatchId}`);
//     }
//   };


//   return (
//     <div className="main-container">
//       {/* Tab Navigation */}
//       <div className="flex border-b">
//         <button
//           className={`px-4 py-2 ${!isVideosTab ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
//           onClick={() => handleTabChange("Batches")}
//         >
//           Batches
//         </button>
//         <button
//           className={`px-4 py-2 ${isVideosTab ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
//           onClick={() => handleTabChange("Videos")}
//         >
//           Videos
//         </button>
//       </div>

//       {/* Content Rendering */}
//       {!isVideosTab ? (
//         <div>
//          <BatchEdit />
//         </div>
//       ) : (
//         <div>
//           <Videos />
//         </div>
//       )}
//     </div>
//   );
// };

// export default StoreForm;


// import { useState, useEffect } from "react";
// import { useNavigate, useParams, useLocation } from "react-router-dom";
// import Videos from "../Courses/Videos";
// import BatchEdit from "../Batches/BatchEdit";
// // import VideoDetails from "../Courses/VideoDetails"; 

// const StoreForm = () => {
//   const [batchDetails, setBatchDetails] = useState({});
//   const { BatchId, VideoId } = useParams();
//   const navigate = useNavigate();
//   const location = useLocation();

//   // Determine active tab from URL
//   const isVideosTab = location.pathname.includes(`/video/${BatchId}`);
//   const isVideoDetailsTab = location.pathname.includes(`/video/${BatchId}/${VideoId}`);

//   const handleTabChange = (tab) => {
//     if (tab === "Videos") {
//       navigate(`/batch/${BatchId}/video/${VideoId}`);
//     } else if (tab === "VideoDetails") {
//       navigate(`/batch/${BatchId}/video/details/${VideoId}`);
//     } else {
//       navigate(`/batch/${BatchId}`);
//     }
//   };

//   return (
//     <div className="main-container">
//       {/* Tab Navigation for Batches */}
//       <div className="flex border-b">
//         <button
//           className={`px-4 py-2 ${!isVideosTab ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
//           onClick={() => handleTabChange("Batches")}
//         >
//           Batches
//         </button>
//         <button
//           className={`px-4 py-2 ${isVideosTab ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
//           onClick={() => handleTabChange("Videos")}
//         >
//           Videos
//         </button>
//       </div>

//       {/* Content Rendering for Batches or Videos */}
//       {!isVideosTab ? (
//         <div>
//           <BatchEdit />
//         </div>
//       ) : (
//         <div>
//           {/* Tab Navigation for Videos */}
//           <div className="flex border-b mt-4">
//             <button
//               className={`px-4 py-2 ${!isVideoDetailsTab ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
//               onClick={() => handleTabChange("Videos")}
//             >
//               Video List
//             </button>
//             <button
//               className={`px-4 py-2 ${isVideoDetailsTab ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
//               onClick={() => handleTabChange("VideoDetails")}
//             >
//               Video Details
//             </button>
//           </div>

//           {/* Content Rendering for Video Tabs */}
//           {!isVideoDetailsTab ? (
//             <div>
//               <Videos />
//             </div>
//           ) : (
//             <div>
//               {/* <VideoDetails /> */}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default StoreForm;


import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Videos from "../Courses/Videos";
import BatchEdit from "../Batches/BatchEdit";

const StoreForm = () => {
  const [activeTab, setActiveTab] = useState("Batches"); // Tabs: "Batches", "Videos"
  const [activeVideoTab, setActiveVideoTab] = useState("VideoList"); // Video Tabs: "VideoList", "VideoDetails"

  const { BatchId } = useParams();
  const location = useLocation();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleVideoTabChange = (tab) => {
    setActiveVideoTab(tab);
  };

  return (
    <div className="main-container">
      {/* Tab Navigation for Batches */}
      <div className="flex border-b">
        <button
          className={`px-4 py-2 ${activeTab === "Batches" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
          onClick={() => handleTabChange("Batches")}
        >
          Students
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "Videos" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
          onClick={() => handleTabChange("Videos")}
        >
          Videos
        </button>
      </div>

      {/* Content Rendering for Batches or Videos */}
      {activeTab === "Batches" ? (
        <div>
          <BatchEdit />
        </div>
      ) : (
        <div>
            <Videos />
        </div>
      )}
    </div>
  );
};

export default StoreForm;
