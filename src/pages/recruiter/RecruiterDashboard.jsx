import { Link,Outlet } from "react-router-dom";

const RecruiterDashboard = () => {
  return (
    <div className="min-h screen flex bg-gray-100">
        <aside className="w-64 bg-white shadow-md p-4">
            <h2 className="text-2xl font-bold mb-6">Recruiter Panel</h2>
            <nav className="flex flex-col gap-4">
                <Link to='/recruiter/post-job' className="hover:text-blue-600">Post a Job</Link>
                <Link to='/recruiter/my-jobs' className="hover:text-blue-600">My Jobs</Link>
                <Link to='/recruiter/applications' className="hover:text-blue-600">Applications</Link>
                <Link to='/recruiter/profile' className="hover:text-blue-600">Profile</Link>
            </nav>
        </aside>
        <main className="flex-1 p-6">
            <Outlet/>
        </main>
    </div>
  )
}

export default RecruiterDashboard