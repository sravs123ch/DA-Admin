import { Assignment } from "@mui/icons-material";

export const routeNames = {
  login: "/",
  dashboard: "/dashboard",
  courses: "/courses",
  batches: "/batches",
  users: "/users",
  video: "/video",
  Feedback:"/feedback",
  videoPlayback: (courseId, videoId) => `/playback/${courseId}/${videoId}`,
  inbox: "/inbox",
  lesson: "/lesson",
  task: "/task",
  group: "/group",
  settings: "/settings",
  assignment:"/assignment",
  lecturers:"/lecturers"
};
