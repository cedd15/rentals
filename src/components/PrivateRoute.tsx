import type { JSX } from "react";
import { Navigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

export default function PrivateRoute({ children } : { children : JSX.Element}) {
     const { token } = useAuth();

     console.log("PrivateRoute token:", token);

    return token ? children : <Navigate to="/login" state={{ from: location }} replace />;
}