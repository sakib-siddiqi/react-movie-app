import { useEffect, useState } from "react";
import apikey from "../Api/ApiKey";
const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apikey}`;
const useMovies = () => {
  // movie's list  state
  const [movies, setMovies] = useState([]);

  // fatching data
  useEffect(() => {
    //   Calling Api + setting movies data
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  /*
  ----------
  returns
  ----------
  */
  return {
    movies,
  };
};
export default useMovies;
