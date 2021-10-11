import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Logo from "./HeaderItems/Logo";
import Menu from "./HeaderItems/Menu";
import LoginSignup from "./HeaderItems/LoginSignup";
import HeaderProfile from "./HeaderItems/HeaderProfile";
import "./Header.css";
const Header = () => {
  return (
    <Navbar className="bg-this-dark shadow-sm" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Menu />
          <LoginSignup />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
