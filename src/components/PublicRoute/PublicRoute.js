import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  if (!auth.accessToken || auth.user.role !== "student") {
    return <Navigate to={"/"}></Navigate>;
  } else {
    return children;
  }
};

export default PublicRoute;
