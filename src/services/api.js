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

async function fetchMovies(query) {
  const results = await axios.get(
    `${BASE_URL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${cat}&page=1&include_adult=false`
  );
  return results;
}
