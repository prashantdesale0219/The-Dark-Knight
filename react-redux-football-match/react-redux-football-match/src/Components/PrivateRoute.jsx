import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const {isAuth} = useSelector(state => state.AuthReducer)
    return (isAuth !== false) ? children : <Navigate to="/login"/>
};
