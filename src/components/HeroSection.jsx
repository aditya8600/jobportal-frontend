import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getCurrentUser from "../services/getCurrentUser";

const HeroSection = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const u = await getCurrentUser();
        setUser(u);
      } catch {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  const renderActionButton = () => {
    if (!user) {
      return (
        <Link
          to="/login"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-100 transition"
        >
          Login to Browse Jobs
        </Link>
      );
    }

    if (user.role === "candidate") {
      return (
        <Link
          to="/candidate-dashboard/jobs"
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-100 transition"
        >
          Browse Jobs
        </Link>
      );
    }

    if (user.role === "recruiter") {
      return (
        <Link
          to="/recruiter-dashboard"
          className="border border-green-600 text-green-600 px-6 py-3 rounded-full hover:bg-green-100 transition"
        >
          Recruiter Dashboard
        </Link>
      );
    }

    if (user.role === "admin") {
      return (
        <Link
          to="/admin-dashboard"
          className="border border-gray-700 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Admin Dashboard
        </Link>
      );
    }

    return null;
  };

  return (
    <div className="pt-24 pb-16 bg-blue-50 text-center px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
        Your Dream Job, Just One Click Away
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
        Explore top opportunities, apply instantly, or hire the best talent — all in one platform.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          to="/register"
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
        {renderActionButton()}
      </div>
    </div>
  );
};

export default HeroSection;