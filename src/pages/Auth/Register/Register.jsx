import React from "react";
import { useForm } from "react-hook-form";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = (data) => {
    console.log(data);
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
                please fill the email field
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
              <p className="text-red-500 text-sm">password field not filled</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500 text-sm">
                Password must be 6 carecter longer
              </p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Register;
