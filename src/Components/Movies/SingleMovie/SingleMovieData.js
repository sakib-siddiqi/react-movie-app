import React from "react";
import { Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import "./MovieData.css";
const SingleMovieData = ({ singleMovie }) => {
  const { title, vote_average, budget, overview, release_date } = singleMovie;
  return (
    <Row className="my-5">
      <Col sm={12} md={6}>
        <h3 className="movie-title py-2 px-3 l-s-1 fw-bold mb-4">{title}</h3>
        <article className="my-4">
          <h5 className="sub-title fw-bold pb-3">
            <i className="fas fa-money-check-alt this-primary"></i> Budget
          </h5>
          <div className="budget py-2 px-4 l-s-2 h4 text-light fw-bold bg-text-light my-3 rounded-3 d-inline-block">
            <i className="fas fa-dollar-sign"></i> {budget}
          </div>
        </article>
        <article className="my-4">
          <h5 className="sub-title fw-bold  pb-3">
            <i className="fas fa-star-half-alt  this-primary"></i> Rating
          </h5>
          <Rating
            initialRating={Math.round((vote_average / 10)*5)}
            readonly
            emptySymbol="far fa-star text-warning"
            fullSymbol="fas fa-star text-warning"
          />
        </article>
      </Col>
      {/* ---------------- */}
      <Col sm={12} md={6}>
        <article className="my-4">
          <h5 className="sub-title fw-bold pb-3">
            <i className="fas fa-clipboard this-primary"></i> Overview
          </h5>
          <div className="data">{overview}</div>
        </article>
        <article className="my-4">
          <h5 className="sub-title fw-bold  pb-3">
            <i className="far fa-calendar-alt this-primary"></i> Release Date
          </h5>
          <h5 className="this-secondary fw-bold l-s-2">{release_date}</h5>
        </article>
      </Col>
    </Row>
  );
};

export default SingleMovieData;
