import React from "react";
import { Row } from "react-bootstrap";
import useMovies from "../../../../Hooks/useMovies";
import { SekeletonMovieCard } from "../../../../Shared/SkeletonLoading";
import Movie from "./Movie";

const AllMovies = () => {
  const { movies } = useMovies();
  return (
    <Row className="g-4">
      {movies.length ? (
        <>
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </>
      ) : (
        <>
          {[...Array(12)].map((e,i) => (
            <SekeletonMovieCard key={i}/>
          ))}
        </>
      )}
    </Row>
  );
};

export default AllMovies;
