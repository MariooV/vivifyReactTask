import React, { useReducer } from 'react';

import MoviesContext from './movies-context';
import MovieService from '../services/MovieService';

const defaultMovies = {
  items: MovieService.getMovies(),
  totalAmount: MovieService.getMovies().length,
};

const moviesReducer = (state, action) => {
  if (action.type === 'ADD') {
    state.items.push(action.item);
    state.totalAmount++;
    return {
      items: state.items,
      totalAmount: state.totalAmount,
    };
  } else if (action.type === 'REMOVE') {
    const movies = state.items.filter(item => item.id !== action.id);
    state.totalAmount--;
    return {
      items: movies,
      totalAmount: state.totalAmount,
    };
  }

  return;
};

const MoviesProvider = props => {
  const [moviesState, dispatchMovies] = useReducer(moviesReducer, defaultMovies);

  const addMovieHandler = movie => {
    dispatchMovies({ type: 'ADD', item: movie });
  };

  const removeMovieHandler = id => {
    dispatchMovies({ type: 'REMOVE', id: id });
  };

  const moviesContext = {
    items: moviesState.items,
    totalAmount: moviesState.totalAmount,
    addItem: addMovieHandler,
    removeItem: removeMovieHandler,
  };

  return <MoviesContext.Provider value={moviesContext}>{props.children}</MoviesContext.Provider>;
};

export default MoviesProvider;
