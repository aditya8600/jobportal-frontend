import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import getCurrentUser from "../services/getCurrentUser";


const Register = () => {

   const [formData, setFormData] = useState({
    email:"",
    password:"",
    role:"candidate",
   })
    
    const [error, setError]= useState("")
    const navigate = useNavigate()
    
    const handleChange=(e)=>{
        setFormData((prev)=>({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    };
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setError("")
        try{
           const res = await API.post("register/",formData)

           const loginResponse = await API.post("login/",{
            email: formData.email,
            password: formData.password,
           })
          localStorage.setItem("access_token", loginResponse.data.access)
          localStorage.setItem("refresh_token", loginResponse.data.refresh)

           const user = await getCurrentUser()
              if (user.role === "candidate") {
        navigate("/candidate-dashboard");
          } else if (user.role === "recruiter") {
        navigate("/recruiter-dashboard");
          } else if (user.role === "admin") {
        navigate("/admin-dashboard");
          } else {
        alert("Unknown role. Please contact support.");
          }
        }catch(error){
            if(error.response?.data){
               setError(JSON.stringify(error.response.data, null,2))
            }else{
            setError("Registration Failed..Try Again")
            }   
        }
    };
  return (
     <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Create an Account
        </h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring"
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring"
        >
          <option value="candidate">Candidate</option>
          <option value="recruiter">Recruiter</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>

        {error && (
          <div className="mt-4 text-red-600 text-sm whitespace-pre-wrap">
            {error}
          </div>
        )}

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};
export default Register