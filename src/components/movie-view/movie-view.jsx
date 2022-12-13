import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './movie-view.scss';

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m._id === movieId)

  return (
    <Container>
      <Row className="mt-4 d-flex align-items-center">
        <Col md={4} className="text-center">
          <img src={movie.ImagePath} className="ps-md-5 mb-4" />
        </Col>
        <Col md={7}>
          <div className="movie-description">
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
          <Link to='/'>
            <Button variant="success" className="my-4" type="button">Back</Button>
          </Link>
        </Col>
      </Row>
    </Container>


    // <div className="movie-view mt-3">

    //   <div className="d-flex align-items-center">
    //     <div className="movie-poster flex-shrink-0">
    //       <img src={movie.ImagePath} />
    //     </div>
    //     <div className="flex-grow-1 ms-5">
    //       <div className="movie-title mt-3">
    //         <span className="label bold-text">Title: </span>
    //         <span className="value">{movie.Title}</span>
    //       </div>
    //       <div className="movie-description">
    //         <span className="label bold-text">Description: </span>
    //         <span className="value">{movie.Description}</span>
    //       </div>
    //       <div className="movie-description">
    //         <span className="label bold-text">Released: </span>
    //         <span className="value">{movie.Released}</span>
    //       </div>
    //       <div className="movie-description">
    //         <span className="label bold-text">Genre: </span>
    //         <span className="value">{movie.Genre.Name}</span>
    //       </div>
    //       <div className="movie-description">
    //         <span className="label bold-text">Director: </span>
    //         <span className="value">{movie.Director.Name}</span>
    //       </div>
    //       <div className="movie-description">
    //         <span className="label bold-text">Actors: </span>
    //         <span className="value">{movie.Actors}</span>
    //       </div>
    //       <Link to='/'>
    //         <Button variant="success" className="my-4" type="button">Back</Button>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  )
}


MovieView.PropTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
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
  )
};