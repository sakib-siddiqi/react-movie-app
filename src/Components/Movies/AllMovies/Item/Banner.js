import React from "react";
import { Link } from "react-router-dom";
import useMovies from "../../../../Hooks/useMovies";

const Banner = () => {
  const { moviesData } = useMovies();
  const img = moviesData.movies[0]?.backdrop_path;
  const poster = `#071a2f60 url("https://image.tmdb.org/t/p/w1280${img}")`;
  return (
    <div
      className="banner"
      style={{
        background: poster,
      }}
    >
      <h1 className=" text-center banner-title">
        {moviesData.movies[0]?.title}
      </h1>
      <button className="my-btn p-2 banner-play center">
        <Link to={`/movies/${moviesData.movies[0]?.id}`}>
          <i className="far fa-play-circle fa-2x text-white"></i>
        </Link>
      </button>
    </div>
  );
};

export default Banner;
