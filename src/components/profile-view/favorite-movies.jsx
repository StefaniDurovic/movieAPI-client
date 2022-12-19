import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./profile-view.scss";

export function FavoriteMovies(props) {
  const unfavorite = (e, movie_id) => {
    console.log(movie_id);
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    axios
      .delete(
        `https://jessica-chastain-movies.herokuapp.com/users/${user.Username}/movies/${movie_id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        arr = props.favoriteMoviesList.filter((item) => item._id !== movie_id);
        user.FavoriteMovies = arr;
        localStorage.setItem("user", JSON.stringify(user));
        console.log(response);
        alert(
          `Movie has been removed from ${user.Username}\'s favorite movie list!`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container className="d-flex align-items-center justify-content-center">
      
      {props.favoriteMoviesList.map((movie) => {
        return (
          <Col md={3} className="d-flex align-items-center justify-content-center">
            <Card className="mt-3 flex-fill">
              <Card.Img
                variant="top"
                className="movie-card"
                src={movie.ImagePath}
              />
              <Card.Body className="movie-card">
                <Card.Title>{movie.Title}</Card.Title>
                <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
                  <Button variant="success" className="mt-2">Open</Button>
                </Link>

                <Button
                  variant="success"
                  type="button"
                  className="mt-2"
                  onClick={(event) => unfavorite(event, movie._id)}
                >
                  Remove from Favorites
                </Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Container>
  );
}
