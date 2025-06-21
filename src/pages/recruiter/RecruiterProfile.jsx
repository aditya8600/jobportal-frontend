import { useEffect, useState } from "react";
import API from "../../services/api";

const RecruiterProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async () => {
    try {
      const res = await API.get("/me/");
      setUser(res.data);
    } catch (error) {
      console.error("Failed to fetch profile", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (loading) {
    return <p className="text-center">Loading profile...</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Recruiter Profile</h2>

      {user ? (
        <div className="space-y-4 text-gray-700">
          <p>
            <span className="font-medium text-gray-900">Name:</span> {user.name || "N/A"}
          </p>
          <p>
            <span className="font-medium text-gray-900">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-medium text-gray-900">Role:</span> {user.role}
          </p>
          {user.company && (
            <p>
              <span className="font-medium text-gray-900">Company:</span> {user.company}
            </p>
          )}
          {user.created_at && (
            <p>
              <span className="font-medium text-gray-900">Joined:</span> {new Date(user.created_at).toLocaleDateString()}
            </p>
          )}
        </div>
      ) : (
        <p className="text-center text-red-500">Failed to load profile</p>
      )}
    </div>
  );
};

export default RecruiterProfile;
