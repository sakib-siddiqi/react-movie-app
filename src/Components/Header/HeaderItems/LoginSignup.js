import React from "react";
import { NavLink } from "react-router-dom";
const LoginSignup = () => {
  return (
    <div className="ms-auto">
      <NavLink
        to="/login"
        className="my-btn-outline py-1 px-3 me-3 rounded-pill"
      >
        Login
      </NavLink>
      <button className="my-btn py-1 px-3 rounded-pill">Signup</button>
    </div>
  );
};

export default LoginSignup;
