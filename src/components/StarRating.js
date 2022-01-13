import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import MoviesContext from '../movieList/movies-context';

const width = 110;

const styles = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  starsOuter: {
    overflow: 'hidden',
  },
  star: {
    padding: '1px',
  },
};

const cropWidth = ratings => {
  let sum = 0;
  if (ratings.length > 0) {
    ratings.forEach(item => (sum = sum + item));
    let total = sum / ratings.length;
    return Math.floor((total * width) / 5);
  } else {
    return Math.floor((0 * width) / 5);
  }
};

const StarRating = ({ rating, ratings, id, custom }) => {
  const moviesCtx = useContext(MoviesContext);
  const containerStyle = { width: `${cropWidth(ratings)}px` };

  const onClickHandler = event => {
    event.preventDefault();

    if (!custom) return;

    const movieIndex = moviesCtx.items.findIndex(item => item.id == id);
    const movie = moviesCtx.items[movieIndex];
    const number = event.target.getAttribute('href');

    // Ideja koja nije implenetirana, da se u ratings niz doda vrednost koja je pritisnuta, gde bi se zatim pozvala funkcija koja bi opet renderovala ukupnu ocenu i zvezdice. Gde se ukupna ocena racuna kao suma ratings niza / ratings.length
  };

  return (
    <div>
      <div style={styles.starsOuter}>
        <div style={containerStyle}>
          <div onClick={onClickHandler} style={styles.starsEmptyInner}>
            <a href="1" className="fa fa-star-o fa-lg star-hover" style={styles.star}></a>
            <a href="2" className="fa fa-star-o fa-lg star-hover" style={styles.star}></a>
            <a href="3" className="fa fa-star-o fa-lg star-hover" style={styles.star}></a>
            <a href="4" className="fa fa-star-o fa-lg star-hover" style={styles.star}></a>
            <a href="5" className="fa fa-star-o fa-lg star-hover" style={styles.star}></a>
          </div>
          <div style={styles.starsInner}>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
            <i className="fa fa-star fa-lg" style={styles.star}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

StarRating.defaultProps = {
  rating: 0,
};

StarRating.propTypes = {
  rating: PropTypes.number,
};

export default StarRating;
