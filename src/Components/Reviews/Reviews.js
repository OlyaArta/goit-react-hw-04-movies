import { FetchReviews } from "../../services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Loader/Loader";

export default function Reviews() {
  const [loader, setLoader] = useState(false);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        setLoader(true);
        const result = await FetchReviews(movieId);
        setReviews(result);
      } catch (error) {
      } finally {
        setLoader(false);
        window.scrollTo({
          top: 700,
          behavior: "smooth",
        });
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <>
      {loader && <Spinner />}

      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {!reviews && <h3>Ooops, it`s empty!.</h3>}
    </>
  );
}
