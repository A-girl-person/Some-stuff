import categories from "./categories";
import Tag from "./tag";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function TagList({
  onClick,
  setUnwantedMovies,
  currentCategory,
  trashCategory,
}) {
  return (
    <Container className="tag-list genre">
      <Row>
        {categories.map((myCategory) => (
          <Tag
            key={categories.id}
            myCategory={myCategory}
            onClick={onClick}
            currentCategory={currentCategory}
            setUnwantedMovies={setUnwantedMovies}
            trashCategory={trashCategory}
          />
        ))}
      </Row>
    </Container>
  );
}

export default TagList;
