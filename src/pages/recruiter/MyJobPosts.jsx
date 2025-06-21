import { useState,useEffect } from "react";
import API from "../../services/api";
import axios from "axios";


const MyJobPosts = () => {
    const[jobs, SetJobs] = useState([])
     
    const fetchJobs = async()=>{
        try {
            const response = await API.get(""/recruiter/jobposts/"")
            SetJobs(response.data)
        } catch (error) {
          console.log("Error fetching jon posts",error)
          alert("Erro in fetching job posts")  
        }
    }

    useEffect(()=>{
        fetchJobs()
    },[])
  return (
    <div style={{padding:"20px"}}>
        <h2>My Job Posts</h2>
        {jobs.length ===0 ?(
            <p>No Job Posted Yet</p>
        ):(
            <ul>
                {jobs.map((job)=>{
                    <li key={job.id} style={{marginBottom:"20px"}}>
                        <strong>{job.title}</strong> - {job.location} <br />
                        Deadline: {job.deadline} <br />
                        <button>Edit</button><button>Delete</button>
                    </li>
                })}
            </ul>
        )}

    </div>
  )
}

export default MyJobPosts