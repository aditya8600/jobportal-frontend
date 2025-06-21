import { useState, useEffect } from "react"
import axios from "axios"

const MyApplications = () => {
    const [applications, setApplications] = useState([])

    useEffect(()=>{
        const token = localStorage.getItem("access_token")

        axios.get("http://localhost:8000/api/my-applications/",{
            headers:{
                Authorization: `Bearer ${token}`
            },
        })
        .then((res)=>{
            setApplications(res.data)
        })
        .catch((error)=>{
        console.log("Failed to fetch applications",error)
        })
    },[])
  return (
      <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Applications</h2>
      {applications.length === 0 ? (
        <p className="text-gray-500">You have not applied to any jobs yet.</p>
      ) : (
        <div className="space-y-4">
          {applications.map((app) => (
            <div key={app.id} className="p-4 border rounded shadow">
              <h3 className="text-xl font-semibold">{app.job_post?.title ||"Untitled Job" }</h3>
              <p className="text-sm text-gray-600">{app.job_post?.company_name || "Company N/A"}</p>
              <p className="text-sm text-gray-500">Status: {app.status}</p>
              <p className="text-sm text-gray-400">
                Applied on: {new Date(app.applied_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyApplications