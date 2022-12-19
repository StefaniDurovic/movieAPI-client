import React, { useState, useEffect } from "react";
import { FavoriteMovies } from "../profile-view/favorite-movies";
import { UserInfo } from "../profile-view/user-info";
import { UpdateUser } from "../profile-view/update-user";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function MyProfileView(props) {
  console.log(props.movies);

  let fav_id_list = props.user.FavoriteMovies ? props.user.FavoriteMovies : [];
  let movie_list = props.movies;

  const fav_movies = movie_list.filter((x) => fav_id_list.includes(x._id));

  console.log(fav_movies);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={3}>
          <h2>Your info</h2>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col>
          <UserInfo
            Username={props.user.Username}
            Email={props.user.Email}
            Birthday={props.user.Birthday}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col >
          <FavoriteMovies favoriteMoviesList={fav_movies} />
        </Col>
      </Row>

      <Row>
        <Col>
          <UpdateUser
            Username={props.user.Username}
            Email={props.user.Email}
            Birthday={props.user.Birthday}
            Password={props.user.Password}
          />
        </Col>
      </Row>
    </Container>
  );
}
