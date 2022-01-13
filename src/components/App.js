import React, { useState, useEffect } from 'react';

import Header from './Header';
import Movies from './Movie/Movies';
import MovieForm from './NewMovie/MovieForm';
import MovieService from '../services/MovieService';

const title = 'React Movie Cards';
const App = () => {
  const [movies, setMovies] = useState([]);

  const onSubmitHandler = movie => {
    setMovies(prevState => [...prevState, movie]);
  };

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  return (
    <div>
      <Header title={title} />
      <MovieForm onAddMovie={onSubmitHandler} movieCount={movies.length} />
      <div className="mt-5">
        <Movies movies={movies} />
      </div>
    </div>
  );
};

export default App;
