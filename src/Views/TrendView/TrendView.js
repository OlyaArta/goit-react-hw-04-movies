import { useEffect, useState } from "react";
import { FetchTrend } from "../services/api";
import Spinner from ".";
import MovieList from "../../Components/MovieList/MovieList";

export default function TrendView() {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setLoader(true);
        const movies = await FetchTrend();
        setMovies(movies);
      } catch (error) {
      } finally {
        setLoader(false);
      }
    }
    getMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {loader && <Spinner />}

      {movies && <MovieList movies={movies} />}
    </>
  );
}
