import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Item/Banner";
import AllMovies from "./Item/AllMovies";
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
