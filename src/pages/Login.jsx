import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import getCurrentUser from "../services/getCurrentUser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    console.log("Trying to logging with:",email,password)

    try {
      const response = await API.post("login/", {
        email,
        password,
      });
      console.log("Login response", response.data); 

      
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);

      
      const user = await getCurrentUser();
      if (user.role === "candidate") {
        navigate("/candidate-dashboard");
      } else if (user.role === "recruiter") {
        navigate("/recruiter-dashboard");
      } else if (user.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        alert("Unknown role. Please contact support.");
      }
    } catch (error) {
        console.log("Login error:",error)
      if (error.response?.data) {
        setError(JSON.stringify(error.response.data, null, 2));
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Login to Your Account
        </h2>

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring"
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

        {error && (
          <div className="mt-4 text-sm text-red-600 whitespace-pre-wrap">
            {error}
          </div>
        )}

        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;