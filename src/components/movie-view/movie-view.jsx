import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import './movie-view.scss';


//class component
export class MovieView extends React.Component {

    render() {
        const { movie, onBackClick } = this.props;

        return (
            <div className="movie-view mt-3">

              <div className="d-flex align-items-center">
                <div className="movie-poster flex-shrink-0">
                  <img src={movie.ImagePath} />
                </div>
                <div className="flex-grow-1 ms-5">
                  <div className="movie-title mt-3">
                    <span className="label bold-text">Title: </span>
                    <span className="value">{movie.Title}</span>
                  </div>
                  <div className="movie-description">
                    <span className="label bold-text">Description: </span>
                    <span className="value">{movie.Description}</span>
                  </div>
                  <div className="movie-description">
                    <span className="label bold-text">Released: </span>
                    <span className="value">{movie.Released}</span>
                  </div>
                  <div className="movie-description">
                    <span className="label bold-text">Genre: </span>
                    <span className="value">{movie.Genre.Name}</span>
                  </div>
                  <div className="movie-description">
                    <span className="label bold-text">Director: </span>
                    <span className="value">{movie.Director.Name}</span>
                  </div>
                  <div className="movie-description">
                    <span className="label bold-text">Actors: </span>
                    <span className="value">{movie.Actors}</span>
                  </div>
                  <Button variant="success" className="my-4" type="button" onClick={() => { onBackClick(null); }}>Back</Button>
                </div>
              </div>

              {/* <button onClick={() => { onBackClick(null); }}>Back</button> */}

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
      Name: PropTypes.string.isRequired
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
    }).isRequired,
    Actors: PropTypes.array.isRequired,
    ImagePath: PropTypes.string.isRequired,
  }).isRequired,
    onBackClick: PropTypes.func.isRequired
  };