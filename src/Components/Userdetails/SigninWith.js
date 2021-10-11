import React from "react";
import { Col, Row } from "react-bootstrap";
import "./signin.css";
const SigninWith = () => {
  return (
    <Row className="this-secondary h4 mt-4 mb-2">
      <Col>
        <i className="fab fa-google" />
      </Col>
      <Col>
        <i className="fab fa-github" />
      </Col>
      <Col>
        <i className="fab fa-facebook" />
      </Col>
      <Col>
        <i className="fab fa-twitter" />
      </Col>
    </Row>
  );
};

export default SigninWith;
