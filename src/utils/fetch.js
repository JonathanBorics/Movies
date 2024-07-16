import axios from "axios";
import { filterVideos } from "./functions";

//Setting defaults for axios
axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;
axios.defaults.headers.common["Authorization"] = `Bearer ${
  import.meta.env.VITE_APP_API_READ_ACCESS_TOKEN
}`;

//Movies
export const fetchTrendingMovies = async (timeWindow) => {
  return await axios.get(`/trending/movie/${timeWindow}`);
};

export const fetchMovies = async () => {
  return await axios.get(
    `/discover/movie?language=en-US&page=1&sort_by=popularity.desc`
  );
};

export const fetchTvshows = async () => {
  return await axios.get(
    `/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc`
  );
};

export const fetchMovieTrailers = async (movieId) => {
  return await axios.get(`/movie/${movieId}?append_to_response=videos`);
};

export const fetchMoviesWithTrailers = async () => {
  const { data } = await fetchTrendingMovies("week");

  data.results.map(async (movie) => {
    const { data } = await fetchMovieTrailers(movie.id);

    const trailer = filterVideos(data.videos.results);
    movie.trailer = trailer ?? null;
  });

  return [...data.results];
};

export const fetchMovieDetails = async (movieId) => {
  return await axios.get(`/movie/${movieId}?append_to_response=videos,credits`);
};

//Tv Shows
export const fetchTvDetails = async (tvId) => {
  return await axios.get(`/tv/${tvId}?append_to_response=videos,credits`);
};

//People
export const fetchPopularPeople = async (page = 1) => {
  return await axios.get(`/person/popular?page=${page}`);
};

export const fetchActorDetails = async (actorId) => {
  return await axios.get(
    `/person/${actorId}?append_to_response=combined_credits`
  );
};

//Search
export const fetchAllByKeyword = async (keyword) => {
  return await axios.get(`/search/multi?query=${keyword}`);
};
