import React from "react";
import { BsPlayFill } from "react-icons/bs";

function Playlist({ videos, onVideoSelect, selectedVideo }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-white mb-4">Playlist</h2>
      <ul className="space-y-2">
        {videos.map((video) => (
          <li
            key={video.videoId} // Use videoId as the unique key
            onClick={() => onVideoSelect(video)}
            className={`p-2 cursor-pointer rounded-md flex items-center space-x-2 ${
              selectedVideo && selectedVideo.videoId === video.videoId
                ? "bg-gray-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-black"
            }`}
          >
            {selectedVideo && selectedVideo.videoId === video.videoId && (
              <BsPlayFill className="text-green-500 text-xl" />
            )}
            <span>{video.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
