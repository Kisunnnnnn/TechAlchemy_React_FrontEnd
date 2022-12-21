
import { Navigate, Route, useNavigate } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => {
    const email = localStorage.getItem("email")



    if (email) {
        return <Component />
    }
    return <Navigate to="/" />

}
export default PrivateRoute