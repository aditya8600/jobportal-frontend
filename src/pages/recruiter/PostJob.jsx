import { useState } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";


const PostJob = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [salary, setSalary] = useState("");
    const [deadline, setDeadline] = useState("");
    const navigate = useNavigate("")

    const handleJobPost = async(e) =>{
        e.preventDefault();
        try{
            const response = await API.post("/recruiter/jobposts/",{
                title,
                description,
                location,
                salary,
                deadline : deadline || null,
            });
            alert("Job Posted Successfully")
            navigate("/recruiter-dashboard/my-jobs")
        }catch(error){
            console.log("Job Post Failed",error.response?.data || error.message)
            alert("Error Posting Job")
        }
    };
  return (
    <div className="max-w-3xl mx-auto bg-white p-8 mt-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Post a New Job</h2>
        <form onSubmit={handleJobPost} className="space-y-4" >
            <input type="text" placeholder="Job Title" value={title} onChange={(e)=>setTitle(e.target.value)} required className="w-full border border-gray-300 rounded px-4 py-2"/>
             <br /><br />
         <input type="text" placeholder="Location" value={location} onChange={(e)=>setLocation(e.target.value)} required className="w-full border border-gray-300 rounded px-4 py-2" /> 
         <br /><br />  
         <textarea placeholder="Job Description" value={description} onChange={(e)=>setDescription(e.target.value)} required rows={5} className="w-full border border-gray-300 rounded px-4 py-2"></textarea > 
         <br /><br />
         <input type="number" step="0.01" placeholder="Salary" value={salary} onChange={(e)=> setSalary(e.target.value)} required className="w-full border border-gray-300 rounded px-4 py-2" /> 
         <br /><br />
         <input type="date" placeholder="Application Deadline" value={deadline} onChange={(e)=>setDeadline(e.target.value)} className="w-full border border-gray-300 rounded px-4 py-2" />
          <br /><br />
         <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition duration-200">Post Job</button>
        </form>
    </div>
  );
};

export default PostJob