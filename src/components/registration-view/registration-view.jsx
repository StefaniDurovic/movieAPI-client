import React, { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./registration-view.scss";
import axios from "axios";

export function RegistrationView() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post("https://jessica-chastain-movies.herokuapp.com/users", {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday,
      })
      .then((response) => {
        const data = response.data;
        console.log(data);
        alert("Successfully registered, please sign in.");
        window.open("/login", "_self");
      })
      .catch((error) => {
        console.log("SignUp failed! ", error);
        alert("Signup failed");
      });
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <CardGroup style={{ width: "22rem" }}>
            <Card className="mt-5">
              <Card.Body>
                <Card.Title
                  className="justify-content-center"
                  style={{ marginBottom: "1.50rem" }}
                >
                  Jessica Chastain Movies Database
                </Card.Title>
                <Form>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBirthday">
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    variant="success"
                    style={{ marginTop: "1.25rem" }}
                    type="submit"
                    onClick={handleSignup}
                  >
                    Sign up
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}

RegistrationView.propTypes = {
  registered: PropTypes.func.isRequired,
};
