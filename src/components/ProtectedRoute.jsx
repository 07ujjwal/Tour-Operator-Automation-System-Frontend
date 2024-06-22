import { Navigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore.getState();

  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
