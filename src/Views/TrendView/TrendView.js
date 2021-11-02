import { useEffect, useState } from "react";
import { FetchTrend } from "../../services/api";
import Spinner from "../../Components/Loader/Loader";
import MovieList from "../../Components/MovieList/MovieList";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function TrendView() {
  const [movies, setMovies] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setSpinner(true);
        const movies = await FetchTrend();
        setMovies(movies);
      } catch (error) {
        toast.error(error.message, { theme: "colored" });
      } finally {
        setSpinner(false);
      }
    }
    getMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {spinner && <Spinner />}

      {movies && <MovieList movies={movies} />}
    </>
  );
}
