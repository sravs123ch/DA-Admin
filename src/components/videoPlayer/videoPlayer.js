// import React, { useRef, useState, useEffect } from "react";
// import {
//   BsPlayFill,
//   BsPauseFill,
//   BsVolumeUp,
//   BsFullscreen,
// } from "react-icons/bs";
// import { MdVolumeOff } from "react-icons/md";
// import { useParams } from "react-router-dom";

// function VideoPlayer({ video }) {
//   const videoRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMuted, setIsMuted] = useState(false);
//   const [volume, setVolume] = useState(1);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);

//   useEffect(() => {
//     const videoElement = videoRef.current;

//     const handleLoadedMetadata = () => setDuration(videoElement.duration);
//     const handleTimeUpdate = () => setCurrentTime(videoElement.currentTime);

//     videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
//     videoElement.addEventListener("timeupdate", handleTimeUpdate);

//     return () => {
//       videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
//       videoElement.removeEventListener("timeupdate", handleTimeUpdate);
//     };
//   }, []);

//   useEffect(() => {
//     setIsPlaying(false);
//     videoRef.current.pause();
//     setCurrentTime(0);
//   }, [video]);

//   const togglePlayPause = () => {
//     if (isPlaying) videoRef.current.pause();
//     else videoRef.current.play();
//     setIsPlaying(!isPlaying);
//   };

//   const toggleMute = () => {
//     setIsMuted(!isMuted);
//     videoRef.current.muted = !isMuted;
//   };

//   const handleVolumeChange = (event) => {
//     const newVolume = event.target.value;
//     setVolume(newVolume);
//     videoRef.current.volume = newVolume;
//   };

//   const handleFullscreen = () => {
//     if (videoRef.current.requestFullscreen)
//       videoRef.current.requestFullscreen();
//   };

//   const handleProgressChange = (event) => {
//     const newTime = parseFloat(event.target.value);
//     videoRef.current.currentTime = newTime;
//     setCurrentTime(newTime);
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60)
//       .toString()
//       .padStart(2, "0");
//     const seconds = Math.floor(time % 60)
//       .toString()
//       .padStart(2, "0");
//     return `${minutes}:${seconds}`;
//   };

//   const { VideoId } = useParams();
//   console.log("VideoId from useParams:", VideoId); // Log to check the value
  
//   const fetchVideoIdDetails = async () => {
//     try {
//       const response = await fetch(
//         `https://da-backend-7smk.onrender.com/api/CourseVideos/getCourseVideoById/${VideoId}`
//       );
//       if (!response.ok) {
//         throw new Error("Failed to fetch video details");
//       }
//       const data = await response.json();
//       console.log("Fetched data:", data); // Log the fetched data to check
//     } catch (error) {
//       console.error("Error fetching video details:", error);
//     }
//   };

//   useEffect(() => {
//     if (VideoId) {
//       fetchVideoIdDetails();
//     } else {
//       console.error("VideoId is undefined!");
//     }
//   }, [VideoId]);



  

//   return (
//     <div className="relative group overflow-hidden rounded-lg shadow-lg bg-black">
//       {/* Video Element */}
//       {/* <video
//         ref={videoRef}
//         src={video.url}
//         className="w-full h-full rounded-lg"
//         controls={false}
//         onClick={togglePlayPause}
//       /> */}
//        <video
//         ref={videoRef}
//         src={video?.url || ""}
//         className="w-full h-full rounded-lg"
//         controls={false}
//         // onClick={togglePlayPause}
//       />

//       {/* Initial Play Button */}
//       {!isPlaying && (
//         <button
//           onClick={togglePlayPause}
//           className="absolute inset-0 flex items-center justify-center text-white text-6xl bg-black bg-opacity-50 rounded-lg transition-all duration-300 hover:scale-105"
//         >
//           <BsPlayFill />
//         </button>
//       )}

//       {/* Controls Overlay */}
//       {isPlaying && (
//         <div className="absolute bottom-0 w-full p-4 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black via-black/70 to-transparent">
//           {/* Progress Bar */}
//           <input
//             type="range"
//             min="0"
//             max={duration}
//             step="0.1"
//             value={currentTime}
//             onChange={handleProgressChange}
//             className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
//           />

//           {/* Controls Row */}
//           <div className="flex items-center justify-between mt-2">
//             {/* Play/Pause Button */}
//             <button
//               onClick={togglePlayPause}
//               className="text-white text-3xl hover:scale-110 transition-transform"
//             >
//               {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
//             </button>

//             {/* Time Display */}
//             <div className="text-white text-sm mx-4">
//               {formatTime(currentTime)} / {formatTime(duration)}
//             </div>

//             {/* Volume Control */}
//             <div className="flex items-center space-x-2">
//               <button
//                 onClick={toggleMute}
//                 className="text-white text-2xl hover:scale-110 transition-transform"
//               >
//                 {isMuted || volume === 0 ? <MdVolumeOff /> : <BsVolumeUp />}
//               </button>
//               <input
//                 type="range"
//                 min="0"
//                 max="1"
//                 step="0.1"
//                 value={volume}
//                 onChange={handleVolumeChange}
//                 className="w-28 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
//               />
//             </div>

//             {/* Fullscreen Button */}
//             <button
//               onClick={handleFullscreen}
//               className="text-white text-2xl hover:scale-110 transition-transform"
//             >
//               <BsFullscreen />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default VideoPlayer;

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { BsPlayFill, BsPauseFill, BsFullscreen } from "react-icons/bs";
import { MdVolumeOff } from "react-icons/md";
import { BsVolumeUp } from "react-icons/bs";

const VideoPlayer = () => {
  const { VideoId } = useParams();
  const [video, setVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const videoRef = useRef(null);

  // Fetch the video details
  const fetchVideoIdDetails = async () => {
    try {
      const response = await fetch(
        `https://da-backend-7smk.onrender.com/api/CourseVideos/getCourseVideoById/${VideoId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch video details");
      }
      const data = await response.json();
      console.log("Fetched data:", data); // Log to check data structure
      setVideo(data); // Store the fetched video data
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  useEffect(() => {
    if (VideoId) {
      fetchVideoIdDetails();
    }
  }, [VideoId]);

  // Play/Pause the video
  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update progress
  const handleProgressChange = (e) => {
    const newTime = e.target.value;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Update volume
  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  // Mute/Unmute
  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Fullscreen
  const handleFullscreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  // Format time (e.g., 1:45 for 105 seconds)
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg bg-black">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={video?.VideoUrl || ""}
        className="w-full h-full rounded-lg"
        controls={false}
        onClick={togglePlayPause}
        onTimeUpdate={() => setCurrentTime(videoRef.current.currentTime)}
        onLoadedMetadata={() => setDuration(videoRef.current.duration)}
      />

      {/* Initial Play Button */}
      {!isPlaying && (
        <button
          onClick={togglePlayPause}
          className="absolute inset-0 flex items-center justify-center text-white text-6xl bg-black bg-opacity-50 rounded-lg transition-all duration-300 hover:scale-105"
        >
          <BsPlayFill />
        </button>
      )}

      {/* Controls Overlay */}
      {isPlaying && (
        <div className="absolute bottom-0 w-full p-4 flex flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black via-black/70 to-transparent">
          {/* Progress Bar */}
          <input
            type="range"
            min="0"
            max={duration}
            step="0.1"
            value={currentTime}
            onChange={handleProgressChange}
            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          />

          {/* Controls Row */}
          <div className="flex items-center justify-between mt-2">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="text-white text-3xl hover:scale-110 transition-transform"
            >
              {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
            </button>

            {/* Time Display */}
            <div className="text-white text-sm mx-4">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>

            {/* Volume Control */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMute}
                className="text-white text-2xl hover:scale-110 transition-transform"
              >
                {isMuted || volume === 0 ? <MdVolumeOff /> : <BsVolumeUp />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-28 h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Fullscreen Button */}
            {/* <button
              onClick={handleFullscreen}
              className="text-white text-2xl hover:scale-110 transition-transform"
            >
              <BsFullscreen />
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
