import React from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';

const Movies = props => {
  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={props.movies} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
