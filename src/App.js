import { Route, Routes } from "react-router-dom";
import "./App.css";
import A_PrivateRoute from "./components/A_PrivateRoute/A_PrivateRoute";
import A_PublicRoute from "./components/A_PublicRoute/A_PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import { useAuth } from "./hooks/useAuth";
import AdminLogin from "./pages/Dashboard/AdminLogin";
import Dashboard from "./pages/Dashboard/Dashboard";
import CoursePlayer from "./pages/StudentPortal/CoursePlayer";
import Quiz from "./pages/StudentPortal/Quiz";
import StudentLogin from "./pages/StudentPortal/StudentLogin";
import StudentRegistration from "./pages/StudentPortal/StudentRegistration";
import VideosList from "./pages/Dashboard/VideosList";
function App() {
  const checkAuthentication = useAuth();

  return (
    <>
      {!checkAuthentication ? (
        <div>authenticating</div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <StudentLogin />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/register" element={<StudentRegistration />}></Route>
          <Route
            path="/quizzers/:videoId"
            element={
              <PublicRoute>
                <Quiz />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/coursePlayer/:id"
            element={
              <PublicRoute>
                <CoursePlayer />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/admin/login"
            element={
              <A_PrivateRoute>
                <AdminLogin />
              </A_PrivateRoute>
            }
          ></Route>
          <Route
            path="/admin/dashboard"
            element={
              <A_PublicRoute>
                <Dashboard />
              </A_PublicRoute>
            }
          ></Route>
          <Route
            path="/admin/videoList"
            element={
              <A_PublicRoute>
                <VideosList />
              </A_PublicRoute>
            }
          ></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
