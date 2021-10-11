import React from "react";

const SingleBanner = ({ poster }) => {
  const single_poster = `#071a2f60 url("https://image.tmdb.org/t/p/w1280${poster}")`;
  return (
    <div
      className="single_banner"
      style={{
        background: single_poster,
      }}
    ></div>
  );
};

export default SingleBanner;
