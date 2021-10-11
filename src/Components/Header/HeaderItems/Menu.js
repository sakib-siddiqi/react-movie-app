import React from "react";
import { Nav } from "react-bootstrap";
const Menu = () => {
  return (
    <Nav className="ms-auto">
      <Nav.Link
        href="#home"
        className="text-light rounded-3 px-3 mx-1 this-active "
      >
        Home
      </Nav.Link>
      <Nav.Link href="#link" className="text-light rounded-3 px-3 mx-1">
        Link
      </Nav.Link>
    </Nav>
  );
};

export default Menu;
