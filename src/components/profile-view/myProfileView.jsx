import React from "react";
import { FavoriteMovies } from "../profile-view/favorite-movies";
import { UserInfo } from "../profile-view/user-info";
import { UpdateUser } from "../profile-view/update-user";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./profile-view.scss";

export function MyProfileView(props) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={3}>
          <h2 className="profile-text d-flex align-items-center justify-content-center mt-4">
            Your info
          </h2>
        </Col>
      </Row>

      <Row>
        <Col>
          <UserInfo
            Username={props.user.Username}
            Email={props.user.Email}
            Birthday={props.user.Birthday}
          />
        </Col>
      </Row>

      <Row>
        <Col className="profile-text d-flex align-items-center justify-content-center mt-5">
          <h4>Favorite movies</h4>
        </Col>
      </Row>

      <Row>
        <Col>
          <FavoriteMovies all_movies={props.movies} />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col className="profile-text d-flex align-items-center justify-content-center mt-5">
          <h4>Want to change something?</h4>
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
