import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './movie-card.scss';

onMovieClick=(newSelectedMovie) => 
  this.setSelectedMovie(newSelectedMovie);


//class component
export class MovieCard extends React.Component {
  render() {
    const { movie, onMovieClick } = this.props;
    return (
          <Card className="mt-3 masonry-with-flex">
            <Card.Img variant="top" className="movie-card" src={movie.ImagePath} />
            <Card.Body  className="movie-card">
              <Card.Title>{movie.Title}</Card.Title>
              <Card.Text>{movie.Description}</Card.Text>
              <Button onClick={() => onMovieClick(movie)} variant="success">
                Open
              </Button>
            </Card.Body>
          </Card>
    );
  }
}

MovieCard.PropTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired,
    onMovieClick: PropTypes.func.isRequired
  };