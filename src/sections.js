import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoEllipsisHorizontalCircleSharp } from "react-icons/io5";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { routeNames } from "./Constants/constants";
import { useCallback } from 'react'; // Import useCallback from React
import axios from 'axios'; // Import axios for API requests

const ContinueWatching = () => {
  const courses = [
    {
      courseId: 1,
      videoId: 1,
      title: "Mastering Python for Data Science",
      category: "Python",
      imgSrc:
        "https://dummyimage.com/300x150/4a90e2/ffffff&text=Python+Data+Science",
      progress: 0,
      avatarCount: 3,
    },
    {
      courseId: 2,
      videoId: 2,
      title: "Automating Infrastructure with Terraform",
      category: "Terraform",
      imgSrc:
        "https://dummyimage.com/300x150/8e44ad/ffffff&text=Terraform+Automation",
      // "https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=1024x1024&w=is&k=20&c=CVhpekieDK_UB8vtEDw-dKKGWzDpsxcQt-XEQIkgm3Y=",
      progress: 27,
      avatarCount: 2,
    },
    {
      courseId: 3,
      videoId: 3,
      title: "Advanced Python for Backend Development",
      category: "Python",
      imgSrc:
        "https://dummyimage.com/300x150/3498db/ffffff&text=Python+Backend",
      progress: 67,
      avatarCount: 4,
    },
    // New Cards
    {
      courseId: 4,
      videoId: 3,
      title: "Building Scalable Apps with Python Flask",
      category: "Python",
      imgSrc: "https://dummyimage.com/300x150/16a085/ffffff&text=Python+Flask",
      progress: 90,
      avatarCount: 5,
    },
    {
      courseId: 5,
      videoId: 3,
      title: "Terraform for AWS Infrastructure Management",
      category: "Terraform",
      imgSrc: "https://dummyimage.com/300x150/f39c12/ffffff&text=Terraform+AWS",
      progress: 55,
      avatarCount: 4,
    },
    {
      courseId: 6,
      videoId: 3,
      title: "Full-Stack Development with Python and Flask",
      category: "Full Stack",
      imgSrc:
        "https://dummyimage.com/300x150/e74c3c/ffffff&text=Full+Stack+Python",
      progress: 0,
      avatarCount: 6,
    },
  ];
  return (
    <div className="p-5 bg-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-semibold">Continue Watching</h2>
        <div className="flex space-x-3">
          <button className="p-2 bg-white shadow-md rounded-full">
            <FiChevronLeft size={20} />
          </button>
          <button className="p-2 bg-white shadow-md rounded-full">
            <FiChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

const CourseCard = ({ course }) => {
  const { courseId, videoId, title, category, imgSrc, progress, avatarCount } =
    course;

    const fetchAllCourseVideos = useCallback(async () => {
      try {
        const response = await axios.get('https://da-backend-7smk.onrender.com/api/CourseVideos/getAllCourseVideos');
        console.log('Course videos:', response.data);
        // Optionally, do something with the response data if needed
      } catch (error) {
        console.error('Error fetching course videos:', error);
      }
    }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col justify-between transition-transform transform hover:scale-105 h-full">
      {/* Image Section */}
      <div className="relative">
        <img src={imgSrc} alt={title} className="w-full h-48 object-cover" />
        <IoEllipsisHorizontalCircleSharp className="absolute top-3 right-3 text-white text-2xl cursor-pointer" />
      </div>

      {/* Content Section */}
      <div className="p-4 flex-grow flex flex-col">
        {/* Category Section */}
        <p className="text-purple-600 text-xs font-semibold mb-2 uppercase h-6">
          {category}
        </p>

        {/* Title Section (with consistent height and text truncation) */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 h-14">
          {title}
        </h3>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 h-2 rounded-full mb-4">
          <div
            className="bg-purple-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Avatars and Progress */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex -space-x-2">
            {Array(avatarCount)
              .fill(" ")
              .map((_, idx) => (
                <img
                  key={idx}
                  src={`https://i.pravatar.cc/40?img=${idx + 1}`}
                  alt="Avatar"
                  className="w-8 h-8 rounded-full border-2 border-white shadow"
                />
              ))}
          </div>
          <div className="flex items-center space-x-1">
            <BsFillPersonFill className="text-gray-500" />
            <span className="text-sm text-gray-500">{`+${progress}`}</span>
          </div>
        </div>

        {/* Watch Now Button */}
        {/* <div className="mt-auto">
          <Link
            to={routeNames.videoPlayback(courseId, videoId)}
            className="block w-full py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg text-center hover:bg-purple-700 transition-all"
          >
            {progress > 0 ? "Continue Watching" : "Watch Now"}
          </Link>
        </div> */}
         <div className="mt-auto">
      <Link
        to={routeNames.videoPlayback(courseId, videoId)}
        className="block w-full py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg text-center hover:bg-purple-700 transition-all"
        onClick={fetchAllCourseVideos}
      >
        {progress > 0 ? "Continue Watching" : "Watch Now"}
      </Link>
    </div>
      </div>
    </div>
  );
};

export default ContinueWatching;
