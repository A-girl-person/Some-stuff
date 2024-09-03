import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MovieItem({ movie }) {
    return (
        <Container>
        <Row>
            <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.poster} />
                <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Button variant="primary">Watch</Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
    );
}
export default MovieItem;