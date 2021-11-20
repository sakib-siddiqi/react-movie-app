import React from "react";
import { Col, Row } from "react-bootstrap";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./signin.css";
const SigninWith = () => {
  //-------------------------
  const location = useLocation();
  const history = useHistory();
  const fromPath = location.state?.from?.pathname;
  const redirect = () => history.push(fromPath || "/");
  // ----------firebase
  const { handleGoogleSignin } = useAuth();
  return (
    <Row className="this-secondary h4 mt-4 mb-2">
      <Col>
        <i
          className="fab fa-google"
          onClick={() => handleGoogleSignin(redirect)}
        />
      </Col>
    </Row>
  );
};

export default SigninWith;
