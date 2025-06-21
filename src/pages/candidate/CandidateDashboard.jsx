import { useEffect, useState } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import getCurrentUser from "../../services/getCurrentUser";

const CandidateDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const u = await getCurrentUser();
        setUser(u);
      } catch (error) {
        console.error("Failed to load user:", error);
        navigate("/login");
      }
    };
    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">Candidate Dashboard</h1>

        {user ? (
          <>
            <p className="text-gray-600 mb-6">
              Welcome, <span className="font-semibold">{user.email}</span>  <br />
              Role: <span className="text-blue-600 capitalize">{user.role}</span>
            </p>

            <div className="flex gap-4 mb-6">
              <Link
                to="jobs"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Browse Jobs
              </Link>

              <Link
                to="my-applications"
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded hover:bg-blue-200"
              >
                My Applications
              </Link>
            </div>

            <Outlet /> 

            <div className="mt-6">
              <button
                onClick={handleLogout}
                className="text-sm text-red-600 underline hover:text-red-800"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-4 text-gray-500">
            <span className="animate-pulse">Loading your dashboard...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidateDashboard;