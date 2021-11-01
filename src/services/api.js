import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "e17f5f6673d6cd4c9fa8d6770ccbc14c";

// main page, most popular films
export async function FetchTrend() {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );

  return data.results;
}

// fetch by search
export async function FetchMovies(query) {
  const { data } = await axios.get(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return data;
}

// get all about film
export async function FetchAboutMovie(movieId) {
  const { data } = await axios.get(
    `${BASE_URL}/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return data;
}

// get about actors
export async function FetchActors(movieId) {
  const { data } = await axios.get(
    `${BASE_URL}/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data.cast;
}

// get reviews of films
export async function FetchReviews(movieId) {
  const { data } = await axios.get(
    `${BASE_URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data.results;
}
