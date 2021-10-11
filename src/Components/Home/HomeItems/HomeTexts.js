import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col } from "react-bootstrap";
import "../home.css";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const HomeTexts = () => {
  return (
    <Col xs={12} md={7}>
      <div className="heading this-primary">
        Movie
        <br />
        <span className="heading text-light">Night</span>
      </div>

      <p className="this-secondary mb-4">
        It’s a web App by <span className="this-primary">react.js</span> for
        Movies details.
      </p>
      <NavLink to="/movies" className="my-btn-outline rounded-2 py-2 px-4">
        Take a Look <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </NavLink>
    </Col>
  );
};

export default HomeTexts;
