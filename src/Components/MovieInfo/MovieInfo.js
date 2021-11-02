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
      <div>
        <div>
          <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt={title} />
        </div>
        <div>
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
