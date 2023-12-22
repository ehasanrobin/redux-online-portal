import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useGetVideosQuery } from "../../features/videos/videosAPI";

const A_PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const { data: videos, isError } = useGetVideosQuery();
  if (videos?.length > 0) {
    console.log();
  }

  if (auth.accessToken && auth.user.role === "admin") {
    return <Navigate to={`/admin/dashboard`}></Navigate>;
  } else {
    return children;
  }
};

export default A_PrivateRoute;
