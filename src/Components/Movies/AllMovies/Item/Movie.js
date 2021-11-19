import React from "react";
import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Movie = ({ movie }) => {
  const { title, poster_path, id } = movie;
  return (
    <Col xs={6} md={4} lg={3}>
      <div className="card-body bg-this-primary p-0 rounded-1">
        <img
          src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
          className="img-fluid card-img-top poster"
          alt=""
        />
        <div className="card-body d-flex center justify-content-between">
          <h5 className="text-dark fw-bold m-0 flex-grow-1 card-name me-2">
            {title}
          </h5>
          <NavLink to={`/movies/${id}`}>
            <i className="far fa-play-circle fa-2x text-light"></i>
          </NavLink>
        </div>
      </div>
    </Col>
  );
};

export default Movie;
