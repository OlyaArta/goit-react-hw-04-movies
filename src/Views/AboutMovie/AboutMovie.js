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
import s from "./AboutMovie.module.css";
import GoBackBtn from "../../Components/Button/Button";

const Reviews = lazy(() => import("../../Components/Reviews/Reviews"));
const Cast = lazy(() => import("../../Components/Cast/Cast"));

export default function AboutMovie() {
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const currentRef = useRef(location.state?.from).current;
  console.log(currentRef);

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

  const backBtn = () => {
    history.push(currentRef ?? "/");
  };

  return (
    <>
      {spinner && <Spinner />}
      <GoBackBtn backBtn={backBtn} />
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
          <Link to={`${url}/cast`} className={s.menu}>
            <p>Cast</p>
          </Link>
        </li>
        <li>
          <Link to={`${url}/reviews`} className={s.menu}>
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
