import React from 'react';
import PropTypes from 'prop-types';

//class component
export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;
    return <div className="movie-card" onClick={() => { onMovieClick(movie); }}>{movie.Title}</div>;
  }
}

MovieCard.PropTypes = {
    movie: PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Released: PropTypes.number.isRequired,
      Genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Description: PropTypes.string
      }).isRequired,
      Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
        Bio: PropTypes.string,
        Birth: PropTypes.number,
        Death: PropTypes.number
      }).isRequired,
      Actors: PropTypes.array.isRequired,
      ImagePath: PropTypes.string.isRequired,
      Featured: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };