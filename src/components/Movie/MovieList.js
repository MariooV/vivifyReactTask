import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import MoviesContext from '../../movieList/movies-context';

const getMovies = movies => {
  const movieCtx = useContext(MoviesContext);

  const onRemoveHandler = id => {};

  return (
    <div className="card-deck">
      {movieCtx.items.map(movie => (
        <MovieCard key={movie.id} movie={movie} onRemove={onRemoveHandler} />
      ))}
    </div>
  );
};

const MovieList = ({ movies }) => <div>{getMovies()}</div>;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
