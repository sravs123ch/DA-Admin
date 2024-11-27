import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
// import Navigation from "./components/Navigation/Navigation";

const MainLayout = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="lg:w-60 md:w-12">
        <Sidebar />
        {/* < Navigation/> */}
      </div>
      <div className="flex-grow overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
