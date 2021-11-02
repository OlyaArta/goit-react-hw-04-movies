import { FetchMovies } from "../../services/api";
import Searchbar from "../../Components/Searchbar/Searchbar";
import Spinner from "../../Components/Loader/Loader";
import MovieList from "../../Components/MovieList/MovieList";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function MovieView() {
  const [loader, setLoader] = useState(false);
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState("");

  const location = useLocation();
  const history = useHistory();
  const queryUrl = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (!queryUrl) {
      setMovies(null);
      return;
    }
    async function getMovieView() {
      try {
        setLoader(true);
        const data = await FetchMovies(queryUrl ?? query);
        const { results } = data;
        setMovies(results);
      } catch (error) {
        toast.error("No such results", { theme: "colored" });
      } finally {
        setLoader(false);
      }
    }
    getMovieView();
  }, [query, queryUrl]);

  const onSubmit = (value) => {
    setQuery(value);
    history.push({ ...location, search: `query=${value}` });
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      {loader && <Spinner />}
      {movies && <MovieList movies={movies} />}
    </>
  );
}
