import { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=bdfab4f8"

const movie_one = {
  "Title": "The Avengers",
  "Year": "2012",
  "imdbID": "tt0848228",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
}

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
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

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie_one.Year}</p>
          </div>

          <div>
            <img
              src={ movie_one.Poster !== 'N/A' ? movie_one.Poster : 'https://via.placeholder.com/400'}
              alt={movie_one.Title}
            />
          </div>

          <div>
            <span>{movie_one.Type}</span>
            <h3>{movie_one.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
