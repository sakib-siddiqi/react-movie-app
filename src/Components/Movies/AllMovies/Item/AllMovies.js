import React from "react";
import { Row } from "react-bootstrap";
import useMovies from "../../../../Hooks/useMovies";
import Movie from "./Movie";

const AllMovies = () => {
  const { movies } = useMovies();
  return (
    <Row className="g-4">
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </Row>
  );
};

export default AllMovies;
