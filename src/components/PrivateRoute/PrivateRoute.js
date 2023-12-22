import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useGetVideosQuery } from "../../features/videos/videosAPI";

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const { data: videos, isError } = useGetVideosQuery();

  if (auth.accessToken && auth.user.role === "student") {
    return <Navigate to={`/coursePlayer/1`}></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
