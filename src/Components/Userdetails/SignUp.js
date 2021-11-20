import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./form.css";
import SigninWith from "./SigninWith";

const SignUp = () => {
  // -----------firebase
  const { firebase,handleSignup } = useAuth();
  // ----------hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //---------States
  const [passNotMatched, setPassNotMatched] = useState(false);
  const [wait, setWait] = useState("");
  //-------------------------
  const location = useLocation();
  const history = useHistory();
  const fromPath = location.state?.from?.pathname;
  const redirect = () => history.push(fromPath || "/");
  //---------handler
  const handler = (data) => {
    if (data.password === data.rePassword) {
      setWait("loading...");
      handleSignup(
        { userName: data.name, email: data.email, password: data.password },
        redirect,
        () => setWait("")
      );
      reset();
      setPassNotMatched(false);
    } else {
      setPassNotMatched(true);
    }
  };
  return (
    <div className="container center my-4">
      <form onSubmit={() => handleSubmit(handler)} className="form py-4">
        <h3 className="text-light">Signup</h3>
        {/* popup signin */}
        <SigninWith />
        <label className="my-2">
          <p>Your Name : </p>
          <input
            type="text"
            placeholder="Enter Name"
            {...register("name", { required: true })}
          />
        </label>
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

        {passNotMatched && (
          <span className="error p-2 mt-3">Enter Password Currectly</span>
        )}
        {Object.keys(errors).length && (
          <span className="error p-2 mt-3">please check this field</span>
        )}
         {(firebase.error) && (
          <span className="error p-2 my-3">{firebase.error}</span>
        )}
        <input
          className="my-btn py-1 px-3 rounded-pill mb-3"
          type="submit"
          value={wait || "Signup"}
        />
        <NavLink to="/login" className="my-btn-outline p-2 rounded-3">
          Have an account ?
        </NavLink>
      </form>
    </div>
  );
};

export default SignUp;
