import React from 'react';
import Movie from '../Movie/Movie';

const MoviesList = ({ movies }) =>
  movies.map((movie) => <Movie movie={movie} key={movie.rank} />);

export default MoviesList;
