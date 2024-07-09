import { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=bdfab4f8"

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
    </div>
  );
}

export default App;
