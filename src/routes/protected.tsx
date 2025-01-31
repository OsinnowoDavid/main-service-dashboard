// import { useAuth } from "";
import Layouts from "@/layout/layout";
import { useAppSelector } from "@/store/hooks/redux-hook";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const auth = useAppSelector((state) => state.auth.auth);
  console.log(auth);

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Layouts>
      <Outlet />
    </Layouts>
  );
};

export default ProtectedRoute;
