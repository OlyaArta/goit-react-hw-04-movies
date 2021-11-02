import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FetchActors } from "../../services/api";
import Spinner from "../Loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "../Cast/Cast.module.css";

export default function Cast() {
  const [credits, setCredits] = useState(null);
  const [loader, setLoader] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getActors() {
      try {
        setLoader(true);
        const cast = await FetchActors(movieId);
        setCredits(cast);
      } catch (error) {
        toast.error(error.message, { theme: "colored" });
      } finally {
        setLoader(false);
        window.scrollTo({
          top: 700,
          behavior: "smooth",
        });
      }
      const cast = await FetchActors(movieId);
      setCredits(cast);
    }
    getActors();
  }, [movieId]);

  return (
    <>
      {loader && <Spinner />}
      {credits && (
        <ul>
          {credits.map(({ id, name, character, profile_path }) => (
            <li key={id} className={s.item}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : `http://placekitten.com/200/300`
                }
                alt={name}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
