import { Card, CardHeader } from "react-bootstrap";
import movies from "../Movie/movies";
import Col from "react-bootstrap/Col";

function Tag({ myCategory, onClick, setUnwantedMovies, currentCategory }) {
  const onCategoryClick = () => {
    onClick(myCategory.category);

    const unWantedMovies = movies.filter(
      (movie) => movie.genre === currentCategory
    );

    setUnwantedMovies(unWantedMovies);
  };

  return (
    <Col>
      <Card onClick={onCategoryClick}>
        <CardHeader>{myCategory.category}</CardHeader>
      </Card>
    </Col>
  );
}

export default Tag;
