import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NotFoundSVG from "../../SVG/NotFoundSVG";

const NotFound = () => {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col sm={12} md={6}>
          <NotFoundSVG />
        </Col>
        <Col sm={12} md={6} className="text-end">
          <h1 className="text-light mb-5">
            This <spna className="this-primary">Page</spna> Does not exist !
          </h1>
          <NavLink to="/home" className="py-2 px-4 my-btn rounded-3">
            Back to Home
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
