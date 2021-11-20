import React from "react";
import { Row } from "react-bootstrap";
import useMovies from "../../../../Hooks/useMovies";
import { SekeletonMovieCard } from "../../../../Shared/SkeletonLoading";
import Movie from "./Movie";

const AllMovies = () => {
  const { moviesData } = useMovies();
  return (
    <>
      {moviesData.error ? (
        <h1 className="text-muted">{moviesData.error}</h1>
      ) : (
        <Row className="g-4">
          {moviesData.movies.length ? (
            <>
              {moviesData.movies.map((movie) => (
                <Movie movie={movie} key={movie.id} />
              ))}
            </>
          ) : (
            <>
              {[...Array(12)].map((e, i) => (
                <SekeletonMovieCard key={i} />
              ))}
            </>
          )}
        </Row>
      )}
    </>
  );
};

export default AllMovies;
