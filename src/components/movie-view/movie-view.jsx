import React from 'react';
import PropTypes from 'prop-types';

//class component
export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick } = this.props;

        return (
            <div className="movie-view">
              <div className="movie-poster">
                <img src={movie.ImagePath} />
              </div>
              <div className="movie-title">
                <span className="label">Title: </span>
                <span className="value">{movie.Title}</span>
              </div>
              <div className="movie-description">
                <span className="label">Description: </span>
                <span className="value">{movie.Description}</span>
              </div>

              <button onClick={() => { onBackClick(null); }}>Back</button>

            </div>

          );
    }
}

MovieView.PropTypes = {
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
    onBackClick: PropTypes.func.isRequired
  };