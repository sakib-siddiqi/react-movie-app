import React from "react";

const SingleBanner = ({ poster }) => {
  const single_poster = `https://image.tmdb.org/t/p/w1280${poster}`;
  return (
    <img src={single_poster} alt="" className="img-fluid rounded-3 shadow" />
  );
};

export default SingleBanner;
