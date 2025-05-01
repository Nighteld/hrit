import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import MainLayoutAuthenticated from "../layouts/MainLayoutLoggedIn.jsx";

const ProtectedRoute = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <MainLayoutAuthenticated>
      <Outlet />
    </MainLayoutAuthenticated>
  );
};

export default ProtectedRoute;
