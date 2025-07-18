import {Navigate} from "react-router-dom"

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("access_token")
    console.log("PrivateRoute check - token:", token);

    if(!token){
        return <Navigate to="/login"/>
    }
  return children
}

export default PrivateRoute
