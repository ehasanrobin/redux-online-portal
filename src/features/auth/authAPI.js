import { apiSlice } from "../api/apiSlice";
import { loggedIn } from "./authSlice";

export const authapi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({
        url: "/login?role=student",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = await queryFulfilled;
        console.log(result?.data);
        if (result?.data?.accessToken && result?.data?.user) {
          localStorage.setItem("auth", JSON.stringify(result.data));
          dispatch(loggedIn(result.data));
        }
      },
    }),
    adminLogin: build.mutation({
      query: (data) => ({
        url: "/login?role=admin",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const result = await queryFulfilled;
        console.log(result?.data);
        if (result?.data?.accessToken && result?.data?.user) {
          localStorage.setItem("auth", JSON.stringify(result.data));
          dispatch(loggedIn(result.data));
        }
      },
    }),
    register: build.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useAdminLoginMutation } =
  authapi;
