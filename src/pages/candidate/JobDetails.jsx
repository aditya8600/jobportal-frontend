import { useState ,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
    const {id} = useParams();
    const[jobs,setJobs]=useState(null)
    const[error,setErrors] = useState("")
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/jobs/${id}/`)
        .then((res)=>{
            setJobs(res.data)
        })
        .catch((error)=>{
            setErrors("Job Not Found")
        })
    },[id])
    const handleApply =()=>{
        const token = localStorage.getItem("access_token")
        if(!token){
            alert("Please login to apply for job")
            navigate("/login")
            return
        }

        axios.post(`http://localhost:8000/api/jobs/${id}/apply/`,{},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        }).then(()=>{
            alert("Application Submitted Successfully")
            navigate("/candidate-dashboard/jobs")
        }).catch((error)=>{
            console.log(error)
            if (error.response?.data?.detail) {
            alert(error.response.data.detail);
            } else {
            alert("You have already applied or are not authorized.");
         }
        })
    }
    if(error) return <div>{error}</div>
    if(!jobs) return <div>Loading...</div>
  return (
    <div className="p-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold-mb-2">{jobs.title}</h2>
        <p className="text-gray-700 mb-1">Company : {jobs.company_name}</p>
        <p className="text-gray-500 mb-4">Location : {jobs.location}</p>
        <p className="mb-6">{jobs.description}</p>

        <button onClick={handleApply}
         className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
           Apply Now
        </button>
    </div>
  )
}

export default JobDetails