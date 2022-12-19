import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function UserInfo({ Username, Email, Birthday }) {
  return (
    <>
      <Container>
        <Row className="mt-4 d-flex align-items-center">
          <Col md={7}>
            <div className="movie-description">
              <span className="label bold-text">Name: </span>
              <span className="value">{Username}</span>
            </div>
            <div className="movie-description">
              <span className="label bold-text">E-mail: </span>
              <span className="value">{Email}</span>
            </div>
            <div className="movie-description">
              <span className="label bold-text">Birthday: </span>
              <span className="value">{Birthday}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
