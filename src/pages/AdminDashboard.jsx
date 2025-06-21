import { useNavigate } from "react-router-dom"
const AdminDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = ()=>{
        localStorage.removeItem("access-token")
        localStorage.removeItem("refresh_token")
        navigate("/")
    }
  return (
    <>
    <h2>AdminDashboard</h2>
    <p>Welcome Admin! You can now manage users and data</p>
    <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default AdminDashboard