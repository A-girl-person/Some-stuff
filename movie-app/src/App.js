import logo from './logo.svg';
import './App.css';
import NavBar from './navbar';
import movies from './Movie/movies';
import Slider from './Slider';
import MovieList from './Movie/MovieList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <MovieList />
    </div>
  );
}

export default App;
