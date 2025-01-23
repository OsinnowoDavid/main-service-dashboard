// import { useAuth } from "";
import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    // const { isAuthenticated } = useAuth();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isAuthenticated, _setIsAuthenticated] = useState(true);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
