import React, { useContext } from 'react';

import useValidation from '../../hooks/use-validation';
import MoviesContext from '../../movieList/movies-context';

const textValidation = input => input.trim() !== '';
const urlValidation = input => input.trim() !== '' && input.includes('/');
const yearValidation = input => {
  return input > 1900 && input < 2023;
};

const MovieForm = props => {
  const movieCtx = useContext(MoviesContext);

  const {
    value: inputTitle,
    isInputValid: isTitleValid,
    error: titleHasError,
    valueChangedHandler: inputTitleChange,
    inputBlurHandler: inputTitleBlur,
    reset: titleReset,
  } = useValidation(textValidation);

  const {
    value: inputSubtitle,
    isInputValid: isSubtitleValid,
    error: subtitleHasError,
    valueChangedHandler: inputSubtitleChange,
    inputBlurHandler: inputSubtitleBlur,
    reset: subtitleReset,
  } = useValidation(textValidation);

  const {
    value: inputDescription,
    isInputValid: isDescriptionValid,
    error: descriptionHasError,
    valueChangedHandler: inputDescriptionChange,
    inputBlurHandler: inputDescriptionBlur,
    reset: descriptionReset,
  } = useValidation(textValidation);

  const {
    value: inputYear,
    isInputValid: isYearValid,
    error: yearHasError,
    valueChangedHandler: inputYearChange,
    inputBlurHandler: inputYearBlur,
    reset: yearReset,
  } = useValidation(yearValidation);

  const {
    value: inputURL,
    isInputValid: isURLValid,
    error: urlHasError,
    valueChangedHandler: inputURLChange,
    inputBlurHandler: inputURLBlur,
    reset: urlReset,
  } = useValidation(urlValidation);

  const formValid = isTitleValid && isSubtitleValid && isDescriptionValid && isYearValid && isURLValid;

  const titleInputClass = titleHasError ? 'form--error form--error-input' : '';
  const subtitleInputClass = subtitleHasError ? 'form--error form--error-input' : '';
  const descriptionInputClass = descriptionHasError ? 'form--error form--error-input' : '';
  const yearInputClass = yearHasError ? 'form--error form--error-input' : '';
  const urlInputClass = urlHasError ? 'form--error form--error-input' : '';

  const resetForm = () => {
    titleReset();
    subtitleReset();
    descriptionReset();
    yearReset();
    urlReset();
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    const movie = {
      id: (movieCtx.totalAmount + 1) * 100,
      title: inputTitle,
      subtitle: inputSubtitle,
      description: inputDescription,
      year: inputYear,
      imageUrl: inputURL,
      rating: 0,
      ratings: [],
      custom: true,
    };
    movieCtx.addItem(movie);
  };

  return (
    <div className="container-fluid wrapper">
      <form className="form" onSubmit={formSubmitHandler}>
        <h2 className="form-headline">Add a new movie!</h2>
        <div>
          <label htmlFor="title">Title</label>
          <input
            className={titleInputClass}
            onBlur={inputTitleBlur}
            onChange={inputTitleChange}
            value={inputTitle}
            type="text"
            id="title"
          />
          {titleHasError && <p className="form--error">Title can't be empty!</p>}
        </div>

        <div>
          <label htmlFor="subtitle">Subtitle</label>
          <input
            className={subtitleInputClass}
            onBlur={inputSubtitleBlur}
            onChange={inputSubtitleChange}
            value={inputSubtitle}
            type="text"
            id="subtitle"
          />
          {subtitleHasError && <p className="form--error">Subtitle can't be empty!</p>}
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            className={descriptionInputClass}
            onBlur={inputDescriptionBlur}
            onChange={inputDescriptionChange}
            value={inputDescription}
            rows="5"
            type="text"
            id="description"
          />
          {descriptionHasError && <p className="form--error">Description can't be empty!</p>}
        </div>

        <div>
          <label htmlFor="year">Year</label>
          <input
            className={yearInputClass}
            onBlur={inputYearBlur}
            onChange={inputYearChange}
            value={inputYear}
            type="number"
            min="1901"
            max="2022"
            id="year"
          />
          {yearHasError && <p className="form--error">Year can't be empty! Range is from 1901 to 2022</p>}
        </div>

        <div>
          <label htmlFor="image">image URL</label>
          <input
            className={urlInputClass}
            onBlur={inputURLBlur}
            onChange={inputURLChange}
            value={inputURL}
            type="text"
            id="image"
          />
          {urlHasError && <p className="form--error">Invalid URL</p>}
        </div>
        <div className="form-action">
          <button disabled={!formValid} className="button button-add">
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
