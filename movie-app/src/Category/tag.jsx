import { Card, CardHeader } from "react-bootstrap";
import categories from "./categories";
import movies from '../Movie/movies';

function Tag({myCategory, onClick, setUnwantedMovies, currentCategory}) {
    const onCategoryClick = () => {
        onClick(myCategory.category);
        
        const unWantedMovies = movies.filter((movie) => movie.genre === currentCategory);
        
        setUnwantedMovies(unWantedMovies);
    }

    return (
        <Card
            onClick={onCategoryClick}
            >
            <CardHeader>{myCategory.category}</CardHeader>
        </Card>
);}


export default Tag;