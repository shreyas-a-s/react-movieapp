import { useEffect, useState } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

// components
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com/?apikey=bdfab4f8"

const App = () => {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies("Avengers");
  }, []);

  return (
    <div className="app">
      <h1>Movie Fusion</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search icon"
        />
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              <MovieCard movie_one={movies[0]}/>
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;
