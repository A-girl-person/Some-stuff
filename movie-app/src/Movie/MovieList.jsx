import movies from "./movies";
import MovieItem from "./MovieItem";

function MovieList() {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
