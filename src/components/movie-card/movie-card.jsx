import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './movie-card.scss';


export const MovieCard = ({ movie }) => {

  return (
    <Card className="mt-3 masonry-with-flex">
      <Card.Img variant="top" className="movie-card" src={movie.ImagePath} />
      <Card.Body className="movie-card">
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Description}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button variant="success">
            Open</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

MovieCard.PropTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    ImagePath: PropTypes.string.isRequired
  }).isRequired
};