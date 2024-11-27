import React from "react";
import { useRoutes } from "react-router-dom";
import LoginPage from "./pages/login/login";
import MainLayout from "./mainLayout";
import Inbox from "./pages/inbox/inbox";
import Lesson from "./pages/lesson/lesson";
import TaskPage from "./pages/task/task";
import GroupPage from "./pages/group/group";
import SettingsPage from "./pages/settings/settings";
import VideoPlayback from "./pages/videoPlayback/videoPlayback";
import NotFound from "./pages/notFound/notFound";
import Dashboard from "./pages/dashboard/dashboard";
import Videos from "./components/Courses/Videos";
import AddCourse from "./components/Courses/AddVideo";
import Batches from "./components/Batches/Batches";
import BatchAdd from "./components/Batches/BatchAdd";
import FeedbackComponent from "./components/FeedBack/feeedbackForm";
import Courseslist from "./components/Courses/Courselist";
import CoursesAdd from "./components/Courses/CourseAdd";
import RegistrationForm from "./pages/register/register";
// import Reports from "./components/Reports/ReportsStatic";
import Users from "./components/User/User";
import Userform from "./components/User/Userform";
import CoursesEdit from "./components/Courses/CourseEdit";
import Assessments from "./pages/Assignments/Assignments";
import Lecturers from "./pages/Lecturers/lecturers";
import AssessmentsAdd from "./pages/Assignments/AssignmentsAdd";
import BatchEdit from "./components/Batches/BatchEdit";
import Student from "./pages/dashboard/Student";
import Batch from "./components/Batches/Batch1" 

const AppRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegistrationForm />,
    },
    {
      element: <MainLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/studentdashboard",
          element: <Student />,
        },
        {
          path: "/courses",
          element: <Courseslist />,
         
        },
        {
          path: "/coursesadd",
          element: <CoursesAdd />,
        },
        {
          path: "/coursesedit",
          element: <CoursesEdit />,
        },
        {
          path: "/users",
          element: <Users />,
         
        },
        {
          path: "/usersform/:UserId",
          element: <Userform />,
         
        },
       
        {
          path: "/batches",
          element: <Batches />,
        },
        {
          path: "/batch/:BatchId",
          element: <Batch />,
        },
        {
          path: "/batch/:BatchId/video/:VideoId", 
          element: <Videos />,
        },
        {
          path: "/batchesadd",
          element: <BatchAdd />,
        },
        // {
        //   path: `/batchesedit/:BatchId`,
        //   element: <BatchEdit />,
        // },
        {
          path: "/videoadd",
          element: <AddCourse />,
        },
        // {
        //   path: "/video/:BatchId/:VideoId",
        // //  path:"/batch/:BatchId/video/:VideoId",
        //   element: <Videos />,
        // },
       
        
        {
          path: "/inbox",
          element: <Inbox />,
        },
        {
          path: "/lesson",
          element: <Lesson />,
        },
        {
          path: "/task",
          element: <TaskPage />,
        },
        {
          path: "/group",
          element: <GroupPage />,
        },
      
        {
          path: "/feedback",
          element: <FeedbackComponent/>,
        },
        {
          path: "/settings",
          element: <SettingsPage />,
        },
        {
          path: "/videos/:VideoId",
          element: <VideoPlayback />,
        },
        {
          path: "/assignment",
          element: <Assessments/>,
        },
        {
          path: "/assignmentsadd",
          element: <AssessmentsAdd/>,
        },
        {
          path: "/lecturers",
          element: <Lecturers/>,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};

export default AppRoutes;
