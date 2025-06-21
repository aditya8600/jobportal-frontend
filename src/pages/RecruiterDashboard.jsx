import { useNavigate, Link,Outlet } from "react-router-dom"
const Recruiterdashboard = () => {
    const navigate = useNavigate();

    const handleLogout =()=>{
        localStorage.removeItem("access_token")
        localStorage.removeItem("refresh_token")
        navigate("/")
    }
  return (
    <div className="min-h-screen flex bg-gray-100">
        <aside className="w-64 bg-white shadow-md p-4">
    <h2 className="text-2xl font-bold mb-6">Recruiter Panel</h2>
    <nav className="flex flex-col gap-4">
          <Link to="post-job" className="hover:text-blue-600">Post a Job</Link>
          <Link to="my-jobs" className="hover:text-blue-600">My Job Posts</Link>
          <Link to="applications" className="hover:text-blue-600">Applications</Link>
          <Link to="profile" className="hover:text-blue-600">Profile</Link>
          <button onClick={handleLogout} className="text-red-600 mt-4">Logout</button>
    </nav>
    </aside>
        <main className="flex-1 p-6">
        <Outlet /> 
      </main>
    </div>
    
  );
};

export default Recruiterdashboard