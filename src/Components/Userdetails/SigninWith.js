import React from "react";
import { Col, Row } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";
import "./signin.css";
const SigninWith = () => {
  // ----------firebase
  const { handleGoogleSignin } =
    useFirebase();
  return (
    <Row className="this-secondary h4 mt-4 mb-2">
      <Col>
        <i className="fab fa-google" onClick={ handleGoogleSignin} />
      </Col>
    </Row>
  );
};

export default SigninWith;
