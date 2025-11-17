import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

function Login() {
  const { signInUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500 text-sm">Email Required</p>
            )}

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500 text-sm">Password Required</p>
            )}

            {/* Forgot password */}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {/* Login Button */}
            <button className="btn btn-neutral mt-4">Login</button>

            {/* Register Link */}
            <p className="text-center text-md font-bold mt-3">
              New to zapShift?{" "}
              <Link className="text-secondary underline ml-1" to="/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>

        {/* Social Login (outside form to avoid validation trigger) */}
        <SocialLogin />
      </div>
    </div>
  );
}

export default Login;
