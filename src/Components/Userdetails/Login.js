import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./form.css";
import SigninWith from "./SigninWith";
const Login = () => {
  const { firebase,handleSignin } = useAuth();
  const [wait, setWait] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //-------------------------
  const location = useLocation();
  const history = useHistory();
  const fromPath = location.state?.from?.pathname;
  const redirect = () => history.push(fromPath || "/");

  return (
    <div className="container center my-4">
      <form
        onSubmit={handleSubmit((data) => {
          setWait("loading...")
          handleSignin(
            { email: data.email, password: data.password },
            redirect,
            () => setWait("")
          );
          reset();
        })}
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
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </label>
        <span className="nav-link this-primary forget-pass">
          Forget Password ?
        </span>
        {(errors.password || errors.email) && (
          <span className="error p-2 my-3">This field is required</span>
        )}
        {(firebase.error) && (
          <span className="error p-2 my-3">{firebase.error}</span>
        )}
        <input
          className="my-btn py-1 px-3 rounded-pill my-3"
          type="submit"
          value={wait || "Login"}
        />
        <NavLink to="/signup" className="my-btn-outline p-2 rounded-3">
          Create New Account
        </NavLink>
      </form>
    </div>
  );
};

export default Login;
