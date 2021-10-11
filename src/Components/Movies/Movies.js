import React from "react";
import { Container } from "react-bootstrap";
import AllMovies from "./Items/AllMovies";
import Banner from "./Items/Banner";
import "./Movies.css";
const Movies = () => {
  return (
    <Container className="py-5">
      <Banner />
      <div className="py-5">
        <AllMovies />
      </div>
    </Container>
  );
};

export default Movies;
