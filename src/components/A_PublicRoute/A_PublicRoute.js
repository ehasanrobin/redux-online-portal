import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const A_PublicRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  if (!auth.accessToken || auth.user.role !== "admin") {
    return <Navigate to={"/admin/login"}></Navigate>;
  } else {
    return children;
  }
};

export default A_PublicRoute;
