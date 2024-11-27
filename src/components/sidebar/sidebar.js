import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaInbox,
  FaBook,
  FaTasks,
  FaUsers,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { routeNames } from "../../Constants/constants";
import { FaChalkboardTeacher, FaUserGraduate, FaVideo } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";
import { MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState(null);
  const navigate = useNavigate();

  // Load activePath from localStorage on component mount
  useEffect(() => {
    const storedPath = localStorage.getItem("activePath");
    if (storedPath) {
      setActivePath(storedPath);
    }
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
    setActivePath(path);
    localStorage.setItem("activePath", path); // Store activePath in localStorage
    setIsOpen(false); // Close the sidebar on mobile after navigation
  };

  return (
    <div className="flex">
<div className="fixed top-0 left-0 right-0 z-40 flex bg-white h-12 items-center gap-x-4 border-b border-gray-200 px-2 shadow-sm sm:gap-x-4 sm:px-4 lg:px-6">
  <div className="lg:hidden flex items-center p-2 z-40">
        <button
          className="p-2 text-purple-600 focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={24} />
        </button>
      </div>
        <form action="#" method="GET" className="relative w-full sm:w-1/4 flex mx-auto">
          <MagnifyingGlassIcon aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 h-full w-4 text-gray-400" />
          <input
            type="search"
            placeholder="Search..."
            className="block h-9 w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 sm:text-sm"
          />
        </form>

        <div className="flex items-center gap-x-3 lg:gap-x-4">
          <button className="-m-1.5 p-1.5 text-black hover:text-gray-500">
            <BellIcon aria-hidden="true" className="h-5 w-5" />
          </button>
          <div className="hidden lg:block lg:h-5 lg:w-px lg:bg-black" />
          <div className="relative">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="h-8 w-8 rounded-full bg-gray-50"
            />
          </div>
        </div>
      </div>


      <div
        className={`fixed z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:translate-x-0 lg:static bg-white shadow-lg w-60 h-screen flex flex-col p-4 `}
      >
        <div className="flex justify-between items-center mb-8 text-purple-600">
          <div className="flex items-center space-x-1">
            <h1 className="text-3xl font-bold tracking-tight">C!</h1>
            <h3 className="text-sm font-bold">COURSEUE</h3>
          </div>

          <button
            className="lg:hidden p-2 text-purple-600 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="flex flex-col justify-between h-[600px] sm:h-[700px] md:h-[740px] lg:h-full">
          <div>
            <h2 className="text-gray-400 mb-4">OVERVIEW</h2>
            <ul>
              <li
                className={`flex items-center mb-4 cursor-pointer ${
                  activePath === routeNames.dashboard
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 hover:text-purple-600"
                }`}
                onClick={() => handleNavigation(routeNames.dashboard)}
              >
                <FaTachometerAlt className="mr-4" />
                <span>Dashboard</span>
              </li>
              {/* <li
                className={`flex items-center mb-4 cursor-pointer ${
                  activePath === routeNames.courses
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 hover:text-purple-600"
                }`}
                onClick={() => handleNavigation(routeNames.courses)}
              >
                <FaChalkboardTeacher className="mr-4" />
                <span>Courses</span>
              </li> */}
              <li
                className={`flex items-center mb-4 cursor-pointer ${
                  activePath === routeNames.batches
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 hover:text-purple-600"
                }`}
                onClick={() => handleNavigation(routeNames.batches)}
              >
                <FaUsers className="mr-4" />
                <span>Batches</span>
              </li>
              <li
                className={`flex items-center mb-4 cursor-pointer ${
                  activePath === routeNames.assignment
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 hover:text-purple-600"
                }`}
                onClick={() => handleNavigation(routeNames.assignment)}
              >
                <FaUsers className="mr-4" />
                <span>Assignments</span>
              </li>
              <li
                className={`flex items-center mb-4 cursor-pointer ${
                  activePath === routeNames.lecturers
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 hover:text-purple-600"
                }`}
                onClick={() => handleNavigation(routeNames.lecturers)}
              >
                <FaUsers className="mr-4" />
                <span>Lecturers</span>
              </li>
              <li
                className={`flex items-center mb-4 cursor-pointer ${
                  activePath === routeNames.users
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 hover:text-purple-600"
                }`}
                onClick={() => handleNavigation(routeNames.users)}
              >
                <FaUserGraduate className="mr-4" />
                <span>Users</span>
              </li>
              <li
                className={`flex items-center mb-4 cursor-pointer ${
                  activePath === routeNames.video
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 hover:text-purple-600"
                }`}
                onClick={() => handleNavigation(routeNames.video)}
              >
                <FaVideo className="mr-4" />
                <span>Videos</span>
              </li>
              <li
                className={`flex items-center mb-4 cursor-pointer ${
                  activePath === routeNames.inbox
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 hover:text-purple-600"
                }`}
                onClick={() => handleNavigation(routeNames.inbox)}
              >
                <FaInbox className="mr-4" />
                <span>Inbox</span>
              </li>
              <li
                className={`flex items-center mb-4 cursor-pointer ${
                  activePath === routeNames.lesson
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 hover:text-purple-600"
                }`}
                onClick={() => handleNavigation(routeNames.lesson)}
              >
                <FaBook className="mr-4" />
                <span>Lesson</span>
              </li>
              <li
                className={`flex items-center mb-4 cursor-pointer ${
                  activePath === routeNames.task
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 hover:text-purple-600"
                }`}
                onClick={() => handleNavigation(routeNames.task)}
              >
                <FaTasks className="mr-4" />
                <span>Task</span>
              </li>
              <li
                className={`flex items-center mb-4 cursor-pointer ${
                  activePath === routeNames.group
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 hover:text-purple-600"
                }`}
                onClick={() => handleNavigation(routeNames.group)}
              >
                <FaUsers className="mr-4" />
                <span>Group</span>
              </li>
              <li
                className={`flex items-center mb-4 cursor-pointer ${
                  activePath === routeNames.Feedback
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 hover:text-purple-600"
                }`}
                onClick={() => handleNavigation(routeNames.Feedback)}
              >
                <MdFeedback className="mr-4" />
                <span>Feedback</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-gray-400 mb-4">SETTINGS</h2>
            <ul>
              <li
                className={`flex items-center mb-4 cursor-pointer ${
                  activePath === routeNames.settings
                    ? "text-purple-600 font-semibold"
                    : "text-gray-600 hover:text-purple-600"
                }`}
                onClick={() => handleNavigation(routeNames.settings)}
              >
                <FaCog className="mr-4" />
                <span>Settings</span>
              </li>
              <li
                className="flex items-center text-red-600 hover:text-red-700 cursor-pointer"
                onClick={() => handleNavigation(routeNames.login)}
              >
                <FaSignOutAlt className="mr-4" />
                <span>Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="lg:hidden flex items-center p-2 z-40">
        <button
          className="p-2 text-purple-600 focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <FaBars size={24} />
        </button>
      </div> */}
    </div>
  );
};

export default Sidebar;


// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   FaBars,
//   FaTimes,
//   FaTachometerAlt,
//   FaInbox,
//   FaBook,
//   FaTasks,
//   FaUsers,
//   FaCog,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { routeNames } from "../../Constants/constants";
// import { FaChalkboardTeacher, FaUserGraduate, FaVideo } from "react-icons/fa";
// import { MdFeedback } from "react-icons/md";
// import { Bars3Icon, MagnifyingGlassIcon, BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";


// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activePath, setActivePath] = useState(null);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedPath = localStorage.getItem("activePath");
//     if (storedPath) {
//       setActivePath(storedPath);
//     }
//   }, []);

//   const handleNavigation = (path) => {
//     navigate(path);
//     setActivePath(path);
//     localStorage.setItem("activePath", path);
//     setIsOpen(false);
//   };

//   return (
//     <div className="flex flex-col lg:flex-row">
//       {/* Top Navigation Bar */}
//       <div className="fixed top-0 left-0 right-0 z-40 flex bg-white h-12 items-center gap-x-4 border-b border-gray-200 px-2 shadow-sm sm:gap-x-4 sm:px-4 lg:px-6">
//       {/* <div className="flex justify-between items-center mb-0 text-purple-600">
//           <div className="flex items-center space-x-1">
//             <h1 className="text-3xl font-bold tracking-tight">C!</h1>
//             <h3 className="text-sm font-bold">COURSEUE</h3>
//           </div>

//           <button
//             className="lg:hidden p-2 text-purple-600 focus:outline-none"
//             onClick={() => setIsOpen(false)}
//           >
//             <FaTimes size={24} />
//           </button>
//         </div> */}
//         <button
//           type="button"
//           onClick={() => setSidebarOpen(true)}
//           className="-m-1.5 p-1.5 text-black lg:hidden"
//         >
//           {/* <Bars3Icon aria-hidden="true" className="h-5 w-5" /> */}
//         </button>

//         <form action="#" method="GET" className="relative w-full sm:w-1/4 flex mx-auto">
//           <MagnifyingGlassIcon aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 h-full w-4 text-gray-400" />
//           <input
//             type="search"
//             placeholder="Search..."
//             className="block h-9 w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 sm:text-sm"
//           />
//         </form>

//         <div className="flex items-center gap-x-3 lg:gap-x-4">
//           <button className="-m-1.5 p-1.5 text-black hover:text-gray-500">
//             <BellIcon aria-hidden="true" className="h-5 w-5" />
//           </button>
//           <div className="hidden lg:block lg:h-5 lg:w-px lg:bg-black" />
//           <div className="relative">
//             <img
//               src="https://via.placeholder.com/40"
//               alt="Profile"
//               className="h-8 w-8 rounded-full bg-gray-50"
//             />
//           </div>
//         </div>
//       </div>

//      <div className="flex">
//        <div
//         className={`fixed z-10 transform ${
//           isOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 lg:translate-x-0 lg:static bg-white shadow-lg w-60 h-screen flex flex-col p-4`}
//       >
//         {/* <div className="flex justify-between items-center mb-8 text-purple-600">
//           <div className="flex items-center space-x-1">
//             <h1 className="text-3xl font-bold tracking-tight">C!</h1>
//             <h3 className="text-sm font-bold">COURSEUE</h3>
//           </div>

//           <button
//             className="lg:hidden p-2 text-purple-600 focus:outline-none"
//             onClick={() => setIsOpen(false)}
//           >
//             <FaTimes size={24} />
//           </button>
//         </div> */}

//         <div className="flex flex-col justify-between h-[600px] sm:h-[700px] md:h-[740px] lg:h-full">
//           <div>
//             <h2 className="text-gray-400 mb-8">OVERVIEW</h2>
//             <ul>
//               <li
//                 className={`flex items-center mb-4 cursor-pointer ${
//                   activePath === routeNames.dashboard
//                     ? "text-purple-600 font-semibold"
//                     : "text-gray-600 hover:text-purple-600"
//                 }`}
//                 onClick={() => handleNavigation(routeNames.dashboard)}
//               >
//                 <FaTachometerAlt className="mr-4" />
//                 <span>Dashboard</span>
//               </li>
//               <li
//                 className={`flex items-center mb-4 cursor-pointer ${
//                   activePath === routeNames.courses
//                     ? "text-purple-600 font-semibold"
//                     : "text-gray-600 hover:text-purple-600"
//                 }`}
//                 onClick={() => handleNavigation(routeNames.courses)}
//               >
//                 <FaChalkboardTeacher className="mr-4" />
//                 <span>Courses</span>
//               </li>
//               <li
//                 className={`flex items-center mb-4 cursor-pointer ${
//                   activePath === routeNames.batches
//                     ? "text-purple-600 font-semibold"
//                     : "text-gray-600 hover:text-purple-600"
//                 }`}
//                 onClick={() => handleNavigation(routeNames.batches)}
//               >
//                 <FaUsers className="mr-4" />
//                 <span>Batches</span>
//               </li>
//               <li
//                 className={`flex items-center mb-4 cursor-pointer ${
//                   activePath === routeNames.users
//                     ? "text-purple-600 font-semibold"
//                     : "text-gray-600 hover:text-purple-600"
//                 }`}
//                 onClick={() => handleNavigation(routeNames.users)}
//               >
//                 <FaUserGraduate className="mr-4" />
//                 <span>Users</span>
//               </li>
//               <li
//                 className={`flex items-center mb-4 cursor-pointer ${
//                   activePath === routeNames.video
//                     ? "text-purple-600 font-semibold"
//                     : "text-gray-600 hover:text-purple-600"
//                 }`}
//                 onClick={() => handleNavigation(routeNames.video)}
//               >
//                 <FaVideo className="mr-4" />
//                 <span>Videos</span>
//               </li>
//               <li
//                 className={`flex items-center mb-4 cursor-pointer ${
//                   activePath === routeNames.inbox
//                     ? "text-purple-600 font-semibold"
//                     : "text-gray-600 hover:text-purple-600"
//                 }`}
//                 onClick={() => handleNavigation(routeNames.inbox)}
//               >
//                 <FaInbox className="mr-4" />
//                 <span>Inbox</span>
//               </li>
//               <li
//                 className={`flex items-center mb-4 cursor-pointer ${
//                   activePath === routeNames.lesson
//                     ? "text-purple-600 font-semibold"
//                     : "text-gray-600 hover:text-purple-600"
//                 }`}
//                 onClick={() => handleNavigation(routeNames.lesson)}
//               >
//                 <FaBook className="mr-4" />
//                 <span>Lesson</span>
//               </li>
//               <li
//                 className={`flex items-center mb-4 cursor-pointer ${
//                   activePath === routeNames.task
//                     ? "text-purple-600 font-semibold"
//                     : "text-gray-600 hover:text-purple-600"
//                 }`}
//                 onClick={() => handleNavigation(routeNames.task)}
//               >
//                 <FaTasks className="mr-4" />
//                 <span>Task</span>
//               </li>
//               <li
//                 className={`flex items-center mb-4 cursor-pointer ${
//                   activePath === routeNames.group
//                     ? "text-purple-600 font-semibold"
//                     : "text-gray-600 hover:text-purple-600"
//                 }`}
//                 onClick={() => handleNavigation(routeNames.group)}
//               >
//                 <FaUsers className="mr-4" />
//                 <span>Group</span>
//               </li>
//               <li
//                 className={`flex items-center mb-4 cursor-pointer ${
//                   activePath === routeNames.Feedback
//                     ? "text-purple-600 font-semibold"
//                     : "text-gray-600 hover:text-purple-600"
//                 }`}
//                 onClick={() => handleNavigation(routeNames.Feedback)}
//               >
//                 <MdFeedback className="mr-4" />
//                 <span>Feedback</span>
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-gray-400 mb-4">SETTINGS</h2>
//             <ul>
//               <li
//                 className={`flex items-center mb-4 cursor-pointer ${
//                   activePath === routeNames.settings
//                     ? "text-purple-600 font-semibold"
//                     : "text-gray-600 hover:text-purple-600"
//                 }`}
//                 onClick={() => handleNavigation(routeNames.settings)}
//               >
//                 <FaCog className="mr-4" />
//                 <span>Settings</span>
//               </li>
//               <li
//                 className="flex items-center text-red-600 hover:text-red-700 cursor-pointer"
//                 onClick={() => handleNavigation(routeNames.login)}
//               >
//                 <FaSignOutAlt className="mr-4" />
//                 <span>Logout</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       <div className="lg:hidden flex items-center p-2">
//         <button
//           className="p-2 text-purple-600 focus:outline-none"
//           onClick={() => setIsOpen(true)}
//         >
//           <FaBars size={24} />
//         </button>
//       </div>
//     </div>

//       {/* Main Content Area */}
//       <main className="flex-1 pt-16 lg:pt-0 lg:pl-60">
//         <div className="px-2 sm:px-4 lg:px-6">
//           {/* Main content goes here */}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Sidebar;
