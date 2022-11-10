import React  from "react";
import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";

// const PrivateRoute = ({children, ...rest}) => {
//     let {user} = useContext(AuthContext);
//     return <Route {...rest}>{!user ?  <Navigate to="/login"/> : children}</Route>;
// };

// export default PrivateRoute;

const PrivateRoute = ({children}) => {
    let {user} = useContext(AuthContext);
    return user ? children : <Navigate to="/login"/>;
};

export default PrivateRoute;