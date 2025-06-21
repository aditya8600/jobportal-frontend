import axios from "axios";

const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8000/api/"
    : "https://jobportal-backend-m5so.onrender.com/api/";

const API = axios.create({
  baseURL,
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
