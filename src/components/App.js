import React, { useState, useEffect } from 'react';

import Header from './Header';
import Movies from './Movie/Movies';
import MovieForm from './NewMovie/MovieForm';
import MovieService from '../services/MovieService';
import MoviesProvider from '../movieList/MoviesProvider';

const title = 'React Movie Cards';
const App = () => {
  return (
    <div>
      <MoviesProvider>
        <Header title={title} />
        <MovieForm />
        <div className="mt-5">
          <Movies />
        </div>
      </MoviesProvider>
    </div>
  );
};

export default App;
