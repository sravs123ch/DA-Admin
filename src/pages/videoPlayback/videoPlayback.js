// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import VideoPlayer from "./components/videoPlayer";
// import Playlist from "./components/playlist";
// import { routeNames } from "./Constants/constants";
// import { videoUrls } from "./Constants/videoUrl";

// function VideoPlayback() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const videoId = id ? parseInt(id) : 1;
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const videos = [
//     {
//       courseId: 101,
//       videoId: 1,
//       title: "Sample Video 1",
//       url: videoUrls[1],
//     },
//     {
//       courseId: 101,
//       videoId: 2,
//       title: "Sample Video 2",
//       url: videoUrls[2],
//     },
//     {
//       courseId: 102,
//       videoId: 3,
//       title: "Sample Video 3",
//       url: videoUrls[3],
//     },
//   ];

//   useEffect(() => {
//     const video = videos.find((video) => video.id === videoId);
//     setSelectedVideo(video);
//   }, [videoId]);

//   const handleVideoSelect = (video) => {
//     // Change the route to the selected video's ID
//     navigate(routeNames.videoPlayback(video.id));
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-gray-600 text-white relative">
//       {/* Video Player Section */}
//       <div className="flex-1 flex flex-col justify-center items-center p-6 relative">
//         <h1 className="text-2xl font-semibold mb-4 text-center md:text-left">
//           Course Title
//         </h1>
//         {selectedVideo ? (
//           <>
//             <div className="relative w-full h-full">
//               {/* Video Player */}
//               <VideoPlayer video={selectedVideo} />

//               {/* Watermark */}
//               <div className="absolute bottom-4 right-4 text-gray-300 opacity-70 text-xs md:text-sm lg:text-base font-semibold pointer-events-none">
//                 User: ID123 | {new Date().toLocaleString()}
//               </div>
//             </div>
//             <h2 className="text-xl font-semibold mt-6 mb-4 text-center md:text-left">
//               Topic Description
//             </h2>
//             <p className="text-gray-200 text-sm text-center md:text-left">
//               This is a brief description of the topic covered in the video.
//               Learn more as you watch!
//             </p>
//           </>
//         ) : (
//           <p className="text-center text-gray-400">Video not found</p>
//         )}
//       </div>

//       {/* Playlist Section */}
//       <div className="w-full md:w-1/3 h-1/3 md:h-full overflow-y-auto bg-gray-400 p-6 rounded-t-3xl md:rounded-none">
//         <Playlist
//           videos={videos}
//           onVideoSelect={handleVideoSelect}
//           selectedVideo={selectedVideo}
//         />
//       </div>
//     </div>
//   );
// }

// export default VideoPlayback;

// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import { routeNames } from "../../Constants/constants";
// import { videoUrls } from "../../Constants/videoUrl";
// import VideoPlayer from "../../components/videoPlayer/videoPlayer";
// import Playlist from "../../components/playlist/playlist";


// // Define the video data outside the component to avoid re-creation on each render
// const videos = [
//   {
//     // courseId: 101,
//     videoId: 1,
//     title: "Sample Video 1",
//     url: videoUrls[1],
//   },
//   {
//     // courseId: 101,
//     videoId: 2,
//     title: "Sample Video 2",
//     url: videoUrls[2],
//   },
//   {
//     // courseId: 101,
//     videoId: 3,
//     title: "Sample Video 3",
//     url: videoUrls[3],
//   },
// ];

// function VideoPlayback() {
//   const { courseId, videoId } = useParams(); // retrieve both courseId and videoId from the route
//   const navigate = useNavigate();
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const { VideoId } = useParams();
//   const [video, setVideo] = useState(null);
//   const [videoDetails, setVideoDetails] = useState(null); 
//   const { BatchId } = useParams(); 
  
//   // Fetch the video details
//   const fetchVideoIdDetails = async () => {
//     try {
//       const response = await fetch(
//         `https://da-backend-7smk.onrender.com/api/CourseVideos/getCourseVideoById/${VideoId}`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch video details");
//       }
//       const data = await response.json();
//       console.log("Fetched data:", data); // Log to check data structure
//       setVideoDetails(data); // Store the fetched video data
//     } catch (error) {
//       console.error("Error fetching video details:", error);
//     }
//   };

//   useEffect(() => {
//     if (VideoId) {
//       fetchVideoIdDetails();
//     }
//   }, [VideoId]);

//   useEffect(() => {
//     // Parse the videoId to ensure it’s a number
//     const id = videoId ? parseInt(videoId) : 1;
//     const video = videos.find((video) => video.videoId === id);
//     setSelectedVideo(video || null); // Set to null if video not found to handle gracefully
//   }, [videoId]); // Only depend on videoId to avoid the infinite loop

//   const handleVideoSelect = (video) => {
//     // Change the route to the selected video's ID
//     navigate(routeNames.videoPlayback(video.courseId, video.videoId));
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
//     <div className="flex flex-col md:flex-row h-screen bg-gray-600 text-white relative mt-10">
//       {/* Video Player Section */}
//       <div className="flex-1 flex flex-col justify-center items-center p-6 relative">
//         {/* <h1 className="text-2xl font-semibold mb-4 text-center md:text-left">
//           Course Title
//         </h1> */}

// <h3 className="text-xl font-semibold">{videos.Name}</h3>
//         {selectedVideo ? (
//           <>
//             <div className="relative w-full h-full">
//               {/* Video Player */}
//               <VideoPlayer video={selectedVideo} />

//               {/* Watermark */}
//               <div className="absolute bottom-4 right-4 text-gray-300 opacity-70 text-xs md:text-sm lg:text-base font-semibold pointer-events-none">
//                 User: ID123 | {new Date().toLocaleString()}
//               </div>
//             </div>
//             <h2 className="text-xl font-semibold mt-6 mb-4 text-center md:text-left">
//               Topic Description
//             </h2>
//             <p className="text-gray-200 text-sm text-center md:text-left">
//               This is a brief description of the topic covered in the video.
//               Learn more as you watch!
//             </p>
//           </>
//         ) : (
//           <p className="text-center text-gray-400">Video not found</p>
//         )}
//       </div>

//       {/* Playlist Section */}
//       {/* <Playlist
//         videos={videos}
//         onVideoSelect={handleVideoSelect}
//         selectedVideo={selectedVideo}
//       /> */}
//       {/* <div className="w-full md:w-1/3 h-1/3 md:h-full overflow-y-auto bg-gray-400 p-6 rounded-t-3xl md:rounded-none">

//       </div> */}

// <div className="w-full md:w-1/3 h-1/3 md:h-full overflow-y-auto bg-gray-400 p-6 rounded-t-3xl md:rounded-none">
//         {/* Here, displaying the video Name and Description */}
//         {videoDetails ? (
//           <>
//             {/* <h3 className="text-xl font-semibold">{videoDetails.Name}</h3> */}
//             <p className="text-gray-300 mt-2">{videoDetails.Description}</p>
//           </>
//         ) : (
//           <p>Loading video details...</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default VideoPlayback;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import VideoPlayer from "../../components/videoPlayer/videoPlayer";

// function VideoPlayback() {
//   const { BatchId } = useParams();
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   // Fetch videos for the batch
//   const fetchBatchDetails = async () => {
//     try {
//       const response = await fetch(
//         `https://da-backend-7smk.onrender.com/api/Batchs/getBatchById/${BatchId}`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch batch details");
//       }
//       const data = await response.json();
//       setVideos(data.videos || []);
//       if (data.videos && data.videos.length > 0) {
//         setSelectedVideo(data.videos[0]); // Set the first video as default
//       }
//     } catch (error) {
//       console.error("Error fetching batch details:", error);
//     }
//   };

//   useEffect(() => {
//     fetchBatchDetails();
//   }, [BatchId]);

//   const handleVideoSelect = (video) => {
//     setSelectedVideo(video);
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-gray-600 text-white">
  
//       {/* Video Player Section */}
//       <div className="flex-1 flex flex-col justify-center items-center p-6 bg-gray-600">
//         {selectedVideo ? (
//           <>
//             <div className="relative w-full h-64 md:h-full">
//               <VideoPlayer video={selectedVideo.VideoUrl} />
//             </div>
//             <h2 className="text-2xl font-semibold mt-4">{selectedVideo.Name}</h2>
//             <p className="text-gray-300 mt-2">{selectedVideo.Description}</p>
//           </>
//         ) : (
//           <p className="text-gray-400">No video selected</p>
//         )}
//       </div>

//       <div className="w-full md:w-1/3 h-1/3 md:h-full overflow-y-auto bg-gray-800 p-4">
//         <h2 className="text-xl font-bold mb-4">Playlist</h2>
//         {videos.map((video) => (
//           <div
//             key={video.VideoId}
//             className={`p-2 mb-2 cursor-pointer rounded ${
//               selectedVideo?.VideoId === video.VideoId
//                 ? "bg-gray-700"
//                 : "bg-gray-900 hover:bg-gray-700"
//             }`}
//             onClick={() => handleVideoSelect(video)}
//           >
//             <h3 className="text-lg font-semibold">{video.Name}</h3>
//             <p className="text-sm text-gray-400">Day {video.Day}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default VideoPlayback;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../../components/videoPlayer/videoPlayer";

function VideoPlayback() {
  const { BatchId } = useParams();
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch videos for the batch
  const fetchBatchDetails = async () => {
    try {
      const response = await fetch(
        `https://da-backend-7smk.onrender.com/api/Batchs/getBatchById/${BatchId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch batch details");
      }
      const data = await response.json();
      const validVideos = (data.videos || []).filter(video => video.VideoUrl);
      setVideos(validVideos);
      if (validVideos.length > 0) {
        setSelectedVideo(validVideos[0]); // Set the first valid video as default
      }
    } catch (error) {
      console.error("Error fetching batch details:", error);
    }
  };

  useEffect(() => {
    fetchBatchDetails();
  }, [BatchId]);

const handleVideoSelect = async (video) => {
  try {
    console.log("Fetching video details for:", video.VideoId);
    
    const response = await fetch(
      `https://da-backend-7smk.onrender.com/api/CourseVideos/getCourseVideoById/${video.VideoId}`
    );
    
    if (!response.ok) {
      throw new Error("Failed to fetch video details");
    }
    
    const videoData = await response.json();
    console.log("Fetched video data:", videoData);
    
    if (videoData.VideoUrl) {
      console.log("Before setting, selectedVideo: ", selectedVideo);
      setSelectedVideo({ VideoUrl: videoData.VideoUrl }); // Only setting VideoUrl
      console.log("Video URL set:", videoData.VideoUrl);
    } else {
      console.error("Video URL not available for this video.");
    }
  } catch (error) {
    console.error("Error fetching video:", error);
  }
};

  return (
    <div className="flex flex-col md:flex-row h-screen  text-black">
      {/* Video Player Section */}
      <div className="flex-1 flex flex-col justify-center items-center p-6">

<div className="relative w-full h-64 md:h-full -mt-60">
 
<div className="relative w-full h-64 md:h-full" key={selectedVideo?.VideoUrl}>
  {selectedVideo && selectedVideo.VideoUrl ? (
    <video controls className="w-full h-full">
      <source src={selectedVideo.VideoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <p className="text-gray-400">No video available</p>
  )}
   {selectedVideo?.Description && (
    <div className="mt-4 text-gray-700">
      <p>{selectedVideo.Description}</p>
    </div>
  )}
</div>

</div>

      </div>

      {/* Playlist Section */}
      <div className="w-full md:w-1/3 h-1/3 md:h-full overflow-y-auto p-4">
        <h2 className="text-xl font-bold mb-4">Playlist</h2>
{videos.map((video) => (
  <div
    key={video.VideoId}
    className={`p-2 mb-2 cursor-pointer rounded ${
      selectedVideo?.VideoId === video.VideoId
        ? "bg-gray-400"
        : "bg-gray-400 hover:bg-gray-500"
    }`}
    onClick={() => handleVideoSelect(video)}
  >
    <h3 className="text-lg font-semibold">{video.Name}</h3>
    <p className="text-sm">Day {video.Day}</p>
  </div>
))}

      </div>
    

    </div>
  );
}

export default VideoPlayback;
