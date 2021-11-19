import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <Nav className="ms-auto">
      <div className="nav-item">
        <NavLink
          to="/home"
          className="text-light rounded-3 px-3 mx-1 td-none me-3 my-sm-2 my-lg-0 nav-link"
          activeClassName="this-active"
        >
          Home
        </NavLink>
      </div>
      <div className="nav-item">
        <NavLink
          to="/movies"
          className="text-light rounded-3 px-3 mx-1 td-none me-3 my-sm-2 my-lg-0 nav-link"
          activeClassName=" this-active"
        >
          Movies
        </NavLink>
      </div>
    </Nav>
  );
};

export default Menu;
