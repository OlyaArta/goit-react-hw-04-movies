import { useEffect, useState, lazy, Suspense } from "react";
import {
  Route,
  useParams,
  useRouteMatch,
  Link,
  useLocation,
  useHistory,
} from "react-router-dom";
import { useRef } from "react";
import { FetchAboutMovie } from "../../services/api";
import Spinner from "../../Components/Loader/Loader";
import MovieInfo from "../../Components/MovieInfo/MovieInfo";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reviews = lazy(() => import("../../Components/Reviews/Reviews"));
const Cast = lazy(() => import("../../Components/Cast/Cast"));

export default function AboutMovie() {
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const currentState = useRef(location.state?.from).current;

  useEffect(() => {
    async function AboutMoviePage() {
      try {
        setSpinner(true);
        const result = await FetchAboutMovie(movieId);
        setMovie({ ...result });
      } catch (error) {
        toast.error(error.message, { theme: "colored" });
      } finally {
        setSpinner(false);
      }
    }
    AboutMoviePage();
  }, [movieId]);

  const BackBtn = () => {
    history.push(currentState ?? "/");
  };

  return (
    <>
      {spinner && <Spinner />}
      <button type="button" onClick={BackBtn}>
        Back to movies
      </button>
      {movie && (
        <MovieInfo
          title={movie.title}
          overview={movie.overview}
          poster={movie.poster_path}
          releaseDate={movie.release_date}
          popularity={movie.popularity}
          genres={movie.genres.map((genre) => genre.name).join(", ")}
          vote={movie.vote_average}
        />
      )}
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to={`${url}/cast`}>
            <p>Cast</p>
          </Link>
        </li>
        <li>
          <Link to={`${url}/reviews`}>
            <p>Reviews</p>
          </Link>
        </li>
      </ul>
      <Suspense fallback={<Spinner />}>
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </Suspense>
    </>
  );
}
