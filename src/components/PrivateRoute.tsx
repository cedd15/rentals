import type { JSX } from "react";
import { Navigate, useLocation } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children } : { children : JSX.Element}) {
     const { token } = useAuth();
     const location = useLocation();

     console.log("PrivateRoute token:", token);

    return token ? children : <Navigate to="/login" state={{ from: location.pathname }} replace />;
}