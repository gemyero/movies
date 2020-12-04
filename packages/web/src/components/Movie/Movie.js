import React from 'react';

const Movie = ({ movie }) => (
  <div>
    <p>
      {movie.rank}. {movie.name} ({movie.year}) -{' '}
      <i className="fas fa-star" style={{ color: 'yellow' }}></i> {movie.rate.toFixed(1)}
    </p>
  </div>
);

export default Movie;
