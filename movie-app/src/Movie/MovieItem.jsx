import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function MovieItem({ movie }) {
    return (
            <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.poster} width={286} height={452.81} />
                <Card.Body>
                <Card.Title >{movie.title}</Card.Title>
                <Card.Text className='txt-left'>Directed by: {movie.director}</Card.Text>
                <Card.Text className='txt-left'>{movie.year}</Card.Text>
                <a href={movie.link}><Button variant="primary">Watch</Button></a>
                </Card.Body>
                </Card>
            </Col>
    );
}
export default MovieItem;