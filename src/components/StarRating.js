import React from 'react';
import PropTypes from 'prop-types';

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

const StarRating = ({ rating, ratings }) => {
  const containerStyle = { width: `${cropWidth(ratings)}px` };

  return (
    <div>
      <div style={styles.starsOuter}>
        <div style={containerStyle}>
          <div style={styles.starsEmptyInner}>
            <i className="fa fa-star-o fa-lg" style={styles.star}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star}></i>
            <i className="fa fa-star-o fa-lg" style={styles.star}></i>
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
