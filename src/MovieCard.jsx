import React from "react"

const MovieCard = ({ movie_one }) => {
  return (
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
  )
}

export default MovieCard
