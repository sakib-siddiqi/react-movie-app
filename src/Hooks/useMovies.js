import { useEffect, useState } from "react";
import apikey from "../Api/ApiKey";
const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apikey}`;
const useMovies = () => {
  // movie's list  state
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  // fatching data
  useEffect(() => {
    //   Calling Api + setting movies data
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setError("");
      })
      .catch((err) => setError(err.code));
  }, []);

  /*
  ----------
  returns
  ----------
  */
  return {
    moviesData: { movies, error },
  };
};
export default useMovies;
