import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./profile-view.scss";

export function UserInfo({ Username, Email, Birthday }) {
  return (
    <>
      <Container>
        <Row className="d-flex align-items-center justify-content-center mt-4">
          <Col md={4}>
            <div className="profile-text d-flex align-items-center">
              <span className="label bold-text">Name: </span>
              <span className="value">{Username}</span>
            </div>
            <div className="profile-text d-flex align-items-center">
              <span className="label bold-text">E-mail: </span>
              <span className="value">{Email}</span>
            </div>
            <div className="profile-text d-flex align-items-center">
              <span className="label bold-text">Birthday: </span>
              <span className="value">{Birthday}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
