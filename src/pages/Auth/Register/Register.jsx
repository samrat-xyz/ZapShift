import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";

function Register() {
  const { createUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl ">
      <div className="card-body">
        <form onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500 text-sm">
                {" "}
                Email Required
              </p>
            )}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              {...register("password", { required: true, minLength: 6 })}
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500 text-sm">Password Required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm">
                Password must be 6 carecter longer
              </p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>

             <p className="text-center text-md font-bold mt-3">already have an account in  zapShift ? <Link className="text-secondary underline ml-1" to='/login'>Login</Link></p>
          </fieldset>
          
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
}

export default Register;
