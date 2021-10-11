import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import "./form.css";
import SigninWith from "./SigninWith";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="container center my-4">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="form py-4"
      >
        <h3 className="text-light">Login</h3>
        <SigninWith />
        <label className="my-2">
          <p>Email : </p>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </label>
        <label className="my-2">
          <p>Password :</p>
          <input
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </label>
        <span className="nav-link this-primary forget-pass">
          Forget Password ?
        </span>
        {errors.password && (
          <span className="error p-2 my-3">This field is required</span>
        )}
        <input className="my-btn py-1 px-3 rounded-pill my-3" type="submit" />
        <NavLink to="/signup" className="my-btn-outline p-2 rounded-3">
          Create New Account
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
