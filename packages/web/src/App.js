import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MoviesList from './components/MoviesList/MoviesList';

const moviesUrl = 'http://localhost:5000/movies';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(moviesUrl).then(({ data: movies }) => setMovies(movies));
  }, []);

  return (
    <div>
      <h1>Top Rated Movies:</h1>
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;
