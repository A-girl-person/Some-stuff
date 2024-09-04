import './App.css';
import NavBar from './navbar';
import movies from './Movie/movies';
import Slider from './Slider';
import MovieList from './Movie/MovieList';
import TagList from './Category/tagList';
import {useState} from 'react';

function App() {
  const [currentCategory, setCurrentCategory] = useState("");
  const [unwantedMovies, setUnwantedMovies] = useState(movies || []);

  return (
    <div className="App">
      <NavBar />
      <Slider />
      <TagList onClick={setCurrentCategory} setUnwantedMovies={setUnwantedMovies} currentCategory={currentCategory} />
      <MovieList unwantedMovies={unwantedMovies}/>
    </div>
  );
}

export default App;
