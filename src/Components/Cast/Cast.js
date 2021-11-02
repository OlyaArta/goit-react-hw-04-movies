import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { FetchActors } from "../../services/api";
import Spinner from "../Loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w300${profile_path}`
                    : `http://placekitten.com/200/300`
                }
                alt={name}
              />
              <h3>{name}</h3>
              <h4>Character: {character}</h4>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
