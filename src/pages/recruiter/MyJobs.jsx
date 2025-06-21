import { useEffect, useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      const response = await API.get("/recruiter/jobposts/");
      setJobs(response.data);
    } catch (error) {
      console.error("Failed to fetch jobs", error);
    }
  };

  const deleteJob = async (id) => {
    try {
      await API.delete(`/recruiter/jobposts/${id}/`);
      setJobs(jobs.filter((job) => job.id !== id));
      alert("Job Deleted Successfully");
    } catch (error) {
      console.error("Failed to delete job", error);
      alert("Error Deleting Job");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">My Posted Jobs</h2>
      {jobs.length === 0 ? (
        <p className="text-center text-gray-600">No jobs posted yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white shadow-md rounded-lg p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-blue-700">{job.title}</h3>
                <p className="text-gray-500 text-sm">{job.location}</p>
              </div>
              <p className="mb-2 text-gray-700">{job.description}</p>
              <div className="text-sm text-gray-600 mb-2">
                <p><span className="font-medium">Salary:</span> ₹{job.salary}</p>
                {job.deadline && (
                  <p><span className="font-medium">Deadline:</span> {job.deadline}</p>
                )}
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={() => navigate(`/recruiter/edit-job/${job.id}`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteJob(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyJobs;
