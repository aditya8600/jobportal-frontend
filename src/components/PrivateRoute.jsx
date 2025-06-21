import {Navigate} from "react-router-dom"

const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("access-token")

    if(!token){
        return <Navigate to="/"/>
    }
  return children
}

export default PrivateRoute
