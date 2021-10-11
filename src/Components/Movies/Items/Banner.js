import React from "react";
import useMovies from "../../../Hooks/useMovies";

const Banner = () => {
  const { movies } = useMovies();
  const img = movies[0]?.backdrop_path;
  const poster = `#071a2f60 url("https://image.tmdb.org/t/p/w1280${img}")`;
  return (
    <div
      className="banner"
      style={{
        background: poster,
      }}
    >
      <h1 className=" text-center banner-title">Danger</h1>
      <button className="my-btn p-2 banner-play center">
        <i className="far fa-play-circle fa-2x"></i>
      </button>
    </div>
  );
};

export default Banner;
