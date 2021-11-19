import React from "react";
import { NavLink } from "react-router-dom";
const HeaderProfile = ({ user }) => {
  return (
    <div>
      <NavLink to="/profile">
        <button className="my-btn rounded-pill p-0">
          {user.photoURL ? (
            <img src={user.photoURL} alt="" className="Avtar rounded-pill" />
          ) : (
            <i className="fas fa-user-tie"></i>
          )}
        </button>
      </NavLink>
    </div>
  );
};

export default HeaderProfile;
