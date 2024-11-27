import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { IoEllipsisHorizontalCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const VideoData = () => {
  const courses = [
    {
      id: 1,
      title: "Mastering Python for Data Science",
      category: "Python",
      imgSrc:
        "https://dummyimage.com/300x150/4a90e2/ffffff&text=Python+Data+Science",
      progress: 0,
      avatarCount: 3,
    },
    {
      id: 2,
      title: "Automating Infrastructure with Terraform",
      category: "Terraform",
      imgSrc:
        "https://dummyimage.com/300x150/8e44ad/ffffff&text=Terraform+Automation",
      progress: 27,
      avatarCount: 2,
    },
    {
      id: 3,
      title: "Advanced Python for Backend Development",
      category: "Python",
      imgSrc:
        "https://dummyimage.com/300x150/3498db/ffffff&text=Python+Backend",
      progress: 67,
      avatarCount: 4,
    },
    // New Cards
    {
      id: 4,
      title: "Building Scalable Apps with Python Flask",
      category: "Python",
      imgSrc: "https://dummyimage.com/300x150/16a085/ffffff&text=Python+Flask",
      progress: 90,
      avatarCount: 5,
    },
    {
      id: 5,
      title: "Terraform for AWS Infrastructure Management",
      category: "Terraform",
      imgSrc: "https://dummyimage.com/300x150/f39c12/ffffff&text=Terraform+AWS",
      progress: 55,
      avatarCount: 4,
    },
    {
      id: 6,
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
  const { id, title, category, imgSrc, progress, avatarCount } = course;

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
        <p className="text-purple-600 text-xs font-semibold mb-2 uppercase h-6 flex justify-center">
          {category}
        </p>

        {/* Title Section (with consistent height and text truncation) */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 h-14 ">
          {title}
        </h3>
        {/* Watch Now Button */}
        <div className="mt-4 flex justify-center">
          <Link
            to={`/playback/${id}`}
            className="block w-full  py-2 bg-purple-600 text-white text-sm font-semibold rounded-lg text-center hover:bg-purple-700 transition-all"
          >
            Open Video
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoData;
