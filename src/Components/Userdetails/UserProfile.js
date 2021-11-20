import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./profile.css";
const UserProfile = () => {
  const { firebase, handleSignOut } = useFirebase();
  return (
    <Container>
      <Row className="justify-content-center">
        <Col sm={12} md={6} className="text-center">
          {firebase.user.uid && (
            <>
              {firebase.user?.photoURL ? (
                <img
                  src={firebase.user.photoURL}
                  alt={`${firebase.user.displayName}`}
                  className="mb-3 rounded-pill profileAvter"
                />
              ) : (
                <i className="fas fa-firebase-tie fa-3x my-3 text-light"></i>
              )}
              <h5 className="text-light">{firebase.user.displayName}</h5>
              <p className="this-secondary">{firebase.user.email}</p>
              <NavLink
                to="/home"
                className="my-btn py-2 px-4"
                onClick={handleSignOut}
              >
                Sign Out
              </NavLink>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
