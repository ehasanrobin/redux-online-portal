import React, { useState } from "react";
import logo from "../../assets/image/learningportal.svg";
import { useAdminLoginMutation } from "../../features/auth/authAPI";
const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [AdminLogin, { isLoading, isSuccess, isError }] =
    useAdminLoginMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    AdminLogin({
      email,
      password,
    });
  };
  return (
    <section class="py-6 bg-primary h-screen grid place-items-center">
      <div class="mx-auto max-w-md px-5 lg:px-0">
        <div>
          <img class="h-12 mx-auto" src={logo} />
          <h2 class="mt-6 text-center text-3xl font-extrabold text-slate-100">
            Sign in to Admin Account
          </h2>
        </div>
        <form class="mt-8 space-y-6" onSubmit={handleSubmit} method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
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
              <a
                href="#"
                class="font-medium text-violet-600 hover:text-violet-500"
              >
                Forgot your password?
              </a>
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
  );
};

export default AdminLogin;
