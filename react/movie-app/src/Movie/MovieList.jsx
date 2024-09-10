import MovieItem from "./MovieItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function MovieList({ unwantedMovies }) {
  return (
    <div className="movie-list">
      <Container>
        <Row className="gap">
          {unwantedMovies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default MovieList;
