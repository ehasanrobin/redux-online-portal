import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/image/learningportal.svg";
import { useLoginMutation } from "../../features/auth/authAPI";

const StudentLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { data, isLoading, isSuccess, isError }] = useLoginMutation();
  const navigate = useNavigate();
  if (isSuccess && !isLoading && !isError) {
    navigate("/coursePlayer/1");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
  };
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section class="py-6 bg-primary h-screen grid place-items-center">
        <div class="mx-auto max-w-md px-5 lg:px-0">
          <div>
            <Link to={"/"}>
              <img class="h-12 mx-auto" src={logo} />
            </Link>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-slate-100">
              Sign in to Student Account
            </h2>
          </div>
          <form class="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autocomplete="email"
                  required
                  class="login-input rounded-t-md"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label for="password" class="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autocomplete="current-password"
                  required
                  class="login-input rounded-b-md"
                  placeholder="Password"
                />
              </div>
            </div>

            <div class="flex items-center justify-end">
              <div class="text-sm">
                <Link
                  to={"/register"}
                  class="font-medium text-violet-600 hover:text-violet-500"
                >
                  Create New Account
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default StudentLogin;
