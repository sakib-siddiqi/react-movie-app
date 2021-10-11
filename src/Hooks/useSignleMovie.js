import { useEffect, useState } from "react";

const useSingleMovie = (id) => {
  const [singleMovie, setSingleMovie] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=04c35731a5ee918f014970082a0088b1`
    )
      .then((res) => res.json())
      .then((data) => setSingleMovie(data));
  }, [id]);
  return { singleMovie };
};
export default useSingleMovie;
