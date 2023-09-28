import { SHORT_DURATION } from "./constants";

export function filterShortMovies(movies) {
  return movies.filter((movie) => movie.duration <= SHORT_DURATION);
}

export function filterSearchQueryMovies(movies, searchQuery) {
  const correctSearchQuery = searchQuery.trim().toLowerCase();
  const moviesList = movies.filter((movie) => {
    const correctNameRU = movie.nameRU.toLowerCase().trim();
    const correctNameEN = movie.nameEN.toLowerCase().trim();
    return (
      correctNameRU.includes(correctSearchQuery) ||
      correctNameEN.includes(correctSearchQuery)
    )
  });
  return moviesList;
}