import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Movies.css";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2 className="title">Movies</h2>
      <div className="movie-container">
        {movies.map((movie, idx) => (
          <div className="movie-card" key={movie.id + idx}>
            <h2 className="movie-title">{movie.name}</h2>
            <div className="movie-info">
              <p>Rating: {movie.rating}</p>
              <p>Released Date: {movie.releasedDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;
