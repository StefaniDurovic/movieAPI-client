import React from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((m) => m._id === movieId);
  const username = JSON.parse(localStorage.getItem("user")).Username;

  const favorite = (e, movie_id) => {
    console.log(movie_id);
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    axios
      .post(
        `https://jessica-chastain-movies.herokuapp.com/users/${user.Username}/movies/${movie_id}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        user.FavoriteMovies.push(movie_id);
        localStorage.setItem("user", JSON.stringify(user));
        console.log(response);
        alert(
          `Movie has been added to ${user.Username}\'s favorite movie list!`
        );
        window.open("/profile", "_self");
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <span className="value">{movie.Actors.join(", ")}</span>
          </div>
          <Link to="/">
            <Button variant="success" className="my-4" type="button">
              Back
            </Button>
          </Link>

          <Button
            variant="success"
            type="button"
            className="ms-2"
            onClick={(event) => favorite(event, movie._id)}
          >
            Add to Favorites
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

MovieView.PropTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Released: PropTypes.number.isRequired,
      Genre: PropTypes.shape({
        Name: PropTypes.string.isRequired,
      }).isRequired,
      Director: PropTypes.shape({
        Name: PropTypes.string.isRequired,
      }).isRequired,
      Actors: PropTypes.array.isRequired,
      ImagePath: PropTypes.string.isRequired,
    }).isRequired
  ),
};
