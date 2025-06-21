import { useEffect } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/");
  };

  useEffect(() => {
    API.get("me/")
      .then((res) => {
        const role = res.data.role;
        if (role === "admin") navigate("/admin-dashboard");
        else if (role === "recruiter") navigate("/recruiter-dashboard");
        else if (role === "candidate") navigate("/candidate-dashboard");
        else logout();
      })
      .catch((error) => {
        console.log("Auth Failed", error);
        logout();
      });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-2">Redirecting...</h2>
        <p>Taking you to your dashboard.</p>
      </div>
    </div>
  );
};

export default Dashboard;
