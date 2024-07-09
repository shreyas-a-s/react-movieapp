import { useEffect } from "react";

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
    <h1>App</h1>
  );
}

export default App;
