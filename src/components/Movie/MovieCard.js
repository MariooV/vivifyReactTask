import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import StarRating from '../StarRating';
import MoviesContext from '../../movieList/movies-context';

const MovieCard = ({ movie }) => {
  const moviesCtx = useContext(MoviesContext);
  const [isHidden, setIsHidden] = useState(false);

  const movieCardClass = movie.custom ? 'movie-card card movie-cardH' : `movie-card card`;

  const deleteMovieHandler = () => {
    moviesCtx.removeItem(movie.id);
  };

  const showButtonHandler = event => {
    if (movie.custom) setIsHidden(true);
  };

  const hideButtonHandler = event => {
    if (movie.custom) setIsHidden(false);
  };

  return (
    <div onMouseEnter={showButtonHandler} onMouseLeave={hideButtonHandler} className="movie-card">
      {!isHidden && (
        <div className={movieCardClass}>
          <img className="card-img-top" src={movie.imageUrl} alt="" />
          <div className="card-body">
            <h4 className="card-title">{movie.title}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{movie.subtitle}</h6>
            <p className="text-justify" style={{ fontSize: '14px' }}>
              {movie.description}
            </p>
          </div>
          <div className="card-footer">
            <div className="clearfix">
              <div className="float-left mt-1">
                <StarRating rating={movie.rating} ratings={movie.ratings} id={movie.id} custom={movie.custom} />
              </div>
              <div className="card-footer-badge float-right badge badge-primary badge-pill">{movie.rating}</div>
            </div>
          </div>
        </div>
      )}
      {isHidden && (
        <div className="movie-card card">
          <div className="button-card">
            <button onClick={deleteMovieHandler} className="button button-remove">
              Remove this movie
            </button>
          </div>
          <div className="card-footer card-bottom">
            <div className="clearfix">
              <div className="float-left mt-1">
                <StarRating rating={movie.rating} ratings={movie.ratings} id={movie.id} custom={movie.custom} />
              </div>
              <div className="card-footer-badge float-right badge badge-primary badge-pill">{movie.rating}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

MovieCard.defaultProps = {
  movie: {},
};

MovieCard.propTypes = {
  movie: PropTypes.object,
};

export default MovieCard;
