import React from "react";

import ContinueWatching from "./VideoData";

const VideosUI = () => {
  return (
    <div className="main-container">
      {/* Scrollable Sidebar */}

      {/* Right content with scroll */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <div className="p-6">
          <ContinueWatching />
        </div>
      </div>
    </div>
  );
};

export default VideosUI;
