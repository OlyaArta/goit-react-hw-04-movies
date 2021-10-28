import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "e17f5f6673d6cd4c9fa8d6770ccbc14c";

// main page, most popular films
async function fetchTrend() {
  const results = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
  console.log(results);
  return results;
}

// fetch by search
async function fetchMovies(query) {
  const results = await axios.get(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return results;
}

// get all about film
async function fetchAboutMovie(id) {
  const results = await axios.get(
    `${BASE_URL}/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return results;
}

// get about actors
async function fetchActors(id) {
  const results = await axios.get(
    `${BASE_URL}/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return results;
}

// get reviews of films
async function fetchReviews(id) {
  const results = await axios.get(
    `${BASE_URL}/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return results;
}

const api = {
  fetchTrend,
  fetchMovies,
  fetchAboutMovie,
  fetchActors,
  fetchReviews,
};

export default api;
