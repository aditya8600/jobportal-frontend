import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../services/api";

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [deadline, setDeadline] = useState("");

  
  useEffect(() => {
    API.get(`/recruiter/jobposts/${id}/`)
      .then((res) => {
        const job = res.data;
        setTitle(job.title);
        setDescription(job.description);
        setLocation(job.location);
        setSalary(job.salary);
        setDeadline(job.deadline || "");
      })
      .catch((err) => {
        console.error("Failed to fetch job", err);
        alert("Job not found or error occurred");
        navigate("/recruiter/my-jobs");
      });
  }, [id]);

  
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/recruiter/jobposts/${id}/`, {
        title,
        description,
        location,
        salary,
        deadline: deadline || null,
      });
      alert("Job updated successfully");
      navigate("/recruiter/my-jobs");
    } catch (err) {
      console.error("Update failed", err);
      alert("Failed to update job");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-8 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Edit Job</h2>
      <form onSubmit={handleUpdate} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required className="border p-2 rounded"
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required className="border p-2 rounded"
        />
        <br />
        <br />
        <textarea
          placeholder="Job Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={5}
          cols={40} className="border p-2 rounded"
        ></textarea>
        <br />
        <br />
        <input
          type="number"
          step="0.01"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          required className="border p-2 rounded"
        />
        <br />
        <br />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)} className="border p-2 rounded"
        />
        <br />
        <br />
        <button type="submit" className="bg-blue-600 text-white py-2 pxx-4 rounded hover:bg-blue-700">Update Job</button>
      </form>
    </div>
  );
};

export default EditJob;
