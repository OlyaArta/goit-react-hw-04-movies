import PropTypes from "prop-types";
import s from "./MovieInfo.module.css";

export default function MovieInfo({
  poster,
  title,
  overview,
  releaseDate,
  popularity,
  vote,
  genres,
}) {
  return (
    <>
      <div className={s.movieBox}>
        <div className={s.imgBox}>
          <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt={title} />
        </div>
        <div className={s.imgBox}>
          <h2>
            {title}({releaseDate ? releaseDate.split("-")[0] : ""})
          </h2>
          <h3>Vote</h3>
          <span>{vote}</span>
          <h2>Overview: </h2>
          <span>{overview}</span>
          <h3>Popularity: </h3>
          <span>{popularity}</span>
          <h3>Genres: </h3>
          <span>{genres}</span>
        </div>
      </div>
    </>
  );
}

MovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired,
  vote: PropTypes.number.isRequired,
  genres: PropTypes.string.isRequired,
};
