import "./App.css";
import NavBar from "./navbar";
import movies from "./Movie/movies";
import Slider from "./Slider";
import MovieList from "./Movie/MovieList";
import TagList from "./Category/tagList";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [currentCategory, setCurrentCategory] = useState("");
  const [unwantedMovies, setUnwantedMovies] = useState(movies || []);
  const [trashCategory, clearCategory] = useState("");
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <TagList
        onClick={setCurrentCategory}
        setUnwantedMovies={setUnwantedMovies}
        currentCategory={currentCategory}
        trashCategory={trashCategory}
        clearCategory={clearCategory}
      />
      <Button variant="outline-info" onClick={clearCategory}>
        Clear
      </Button>
      <MovieList unwantedMovies={unwantedMovies} />
    </div>
  );
}

export default App;
