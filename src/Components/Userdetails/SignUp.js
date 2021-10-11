import React from "react";
import { useForm } from "react-hook-form";
import { Link, NavLink } from "react-router-dom";
import "./form.css";
import SigninWith from "./SigninWith";
const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="container center my-4">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="form py-4"
      >
        <h3 className="text-light">Signup</h3>
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
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </label>
        <label className="my-2">
          <p>Re-enter Password :</p>
          <input
            type="password"
            placeholder="Re-enter Password"
            {...register("rePassword", { required: true })}
          />
        </label>
        <span className="nav-link this-primary forget-pass">
          Forget Password ?
        </span>

        {/*
        -------------------------
         error messages
        ------------------------- 
        */}

        {errors.password !== errors.rePassword && (
          <span className="error p-2 my-3">Enter Password Currectly</span>
        )}
        {errors.email && (
          <span className="error p-2 my-3">Enter your valid email</span>
        )}
        <input
          className="my-btn py-1 px-3 rounded-pill my-3"
          type="submit"
          value="Signup"
        />
        <NavLink to="/login" className="my-btn-outline p-2 rounded-3">
          Have an account ?
        </NavLink>
      </form>
    </div>
  );
};

export default SignUp;
