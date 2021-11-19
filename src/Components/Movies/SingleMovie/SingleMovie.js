import React from "react";
import { Container } from "react-bootstrap";
import { NavLink, useParams } from "react-router-dom";
import useSingleMovie from "../../../Hooks/useSignleMovie";
import SingleBanner from "./SingleBanner";
import SingleMovieData from "./SingleMovieData";
const SingleMovie = () => {
  const { id } = useParams();
  const { singleMovie } = useSingleMovie(id);
  return (
    <Container className="py-5">
      <SingleBanner poster={singleMovie?.backdrop_path} />
      <SingleMovieData singleMovie={singleMovie} />
      {/* ------ */}
      <div className="text-center">
        <NavLink to="/movies" className="my-btn-outline py-2 px-4 rounded-3">
          <i className="fas fa-arrow-left"></i> Go Back
        </NavLink>
      </div>
    </Container>
  );
};

export default SingleMovie;
