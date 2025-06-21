import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Admindashboard from "./pages/Admindashboard";
import Recruiterdashboard from "./pages/Recruiterdashboard";
import CandidateDashboard from "./pages/candidate/CandidateDashboard";
import PrivateRoute from "./components/PrivateRoute";
import PostJob from "./pages/recruiter/PostJob";
import MyJobs from "./pages/recruiter/MyJobs";
import EditJob from "./pages/recruiter/EditJob";
import HomePage from "./pages/HomePage";
import Applications from "./pages/recruiter/Applications";
import RecruiterProfile from "./pages/recruiter/RecruiterProfile";
import RecruiterHome from "./pages/recruiter/RecruiterHome";
import JobListings from "./pages/candidate/JobListings";
import JobDetails from "./pages/candidate/JobDetails";
import MyApplications from "./pages/candidate/MyApplications";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />


        <Route
          path="/admin-dashboard"
          element={<PrivateRoute><Admindashboard /></PrivateRoute>}
        />

        <Route
          path="/candidate-dashboard"
          element={<PrivateRoute><CandidateDashboard /></PrivateRoute>}
        >
          <Route path="jobs" element={<JobListings />} />
          <Route path="job/:id" element={<JobDetails />} />
          <Route path="my-applications" element={<MyApplications />} />
        </Route>

        <Route
          path="/recruiter-dashboard"
          element={<PrivateRoute><Recruiterdashboard /></PrivateRoute>}
        >
          <Route index element={<RecruiterHome />} />
          <Route path="post-job" element={<PostJob />} />
          <Route path="my-jobs" element={<MyJobs />} />
          <Route path="edit-job/:id" element={<EditJob />} />
          <Route path="applications" element={<Applications />} />
          <Route path="profile" element={<RecruiterProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;