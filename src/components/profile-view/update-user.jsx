import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function UpdateUser({ Username, Email, Birthday, Password }) {
  const [username, setUsername] = useState(Username);
  const [password, setPassword] = useState(Password);
  const [email, setEmail] = useState(Email);
  const [birthday, setBirthday] = useState(Birthday);

  const editUser = (e) => {
    e.preventDefault();
    axios
      .put(
        "https://jessica-chastain-movies.herokuapp.com/users/" + Username,
        {
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthday,
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((response) => {
        const data = response.data;
        console.log(data);
        alert("Successfully updated, please log in again.");
        onLoggedOut();
      })
      .catch((error) => {
        console.log("Update failed", error);
        alert("Update failed.");
      });
  };

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Row>
        <Col md={4}>
          <CardGroup style={{ width: "22rem" }}>
            <Card className="mt-4 mb-5">
              <Card.Body>
                <Card.Title
                  className="justify-content-center"
                  style={{ marginBottom: "1.50rem" }}
                >
                  Update personal info
                </Card.Title>
                <Form>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={username}
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
                      placeholder={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formBirthday">
                    <Form.Label>Birthday:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </Form.Group>

                  <Button
                    variant="success"
                    style={{ marginTop: "1.25rem" }}
                    type="submit"
                    onClick={editUser}
                  >
                    Save changes
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
