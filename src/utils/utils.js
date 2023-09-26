export function filterShortMovies(movies) {
  return movies.filter((movie) => movie.duration <= 40);
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