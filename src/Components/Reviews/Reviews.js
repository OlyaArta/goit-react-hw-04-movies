import { FetchReviews } from "../../services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Reviews() {
  const [spinner, setSpinner] = useState(false);
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        setSpinner(true);
        const result = await FetchReviews(movieId);
        setReviews(result);
      } catch (error) {
        toast.error(error.message, { theme: "colored" });
      } finally {
        setSpinner(false);
        window.scrollTo({
          top: 700,
          behavior: "smooth",
        });
      }
    }
    getReviews();
  }, [movieId]);

  const emptyMessage = "Ooops, it`s empty!";

  return (
    <>
      {spinner && <Spinner />}

      {reviews && (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {!reviews && !spinner && emptyMessage}
    </>
  );
}
