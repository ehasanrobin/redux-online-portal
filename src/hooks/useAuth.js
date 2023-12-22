import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loggedIn } from "../features/auth/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const [authCheck, setAuthCheck] = useState(false);
  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      const { accessToken, user } = JSON.parse(auth);
      dispatch(
        loggedIn({
          accessToken,
          user,
        })
      );
    }
    setAuthCheck(true);
  }, []);

  // setAuthCheck(true);
  return authCheck;
};
