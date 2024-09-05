import categories from './categories';
import Tag from './tag';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function TagList({onClick, setUnwantedMovies, currentCategory}) {
    return (
        <div>
            {categories.map((myCategory) => (
            <Tag key={categories.id} myCategory={myCategory} onClick={onClick} currentCategory={currentCategory} setUnwantedMovies={setUnwantedMovies}/>
        ))}``
        </div>
    );
}

export default TagList;