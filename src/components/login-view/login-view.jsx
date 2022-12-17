import React, { useState } from 'react'; //useState hook
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './login-view.scss';
import axios from 'axios';

//function component
export function LoginView({ onLoggedIn }) {
  //useState hook
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /* Send a request to the server for authentication */
    axios.post("https://jessica-chastain-movies.herokuapp.com/login", {
      Username: username,
      Password: password,
    }, {
      'Content-Type': 'application/json',
    })
      .then((response) => {
        let { user, token } = response.data;
        // user = {
        //   "_id": user._id,
        //   "Username": user.Username,
        //   "Email": user.Email,
        //   "favouriteMovies":user.FavoriteMovies
        // }
        localStorage.setItem('token', token);
        localStorage.setItem('user', user);
        onLoggedIn(user);
      })
      .catch((error) => {
        console.log("Login failed! ", error);
        alert("Login failed");
      });
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <CardGroup style={{ width: '22rem' }}>
            <Card className="mt-5">
              <Card.Body>
                <Card.Title className="justify-content-center" style={{ marginBottom: '1.50rem' }}>Jessica Chastain Movies Database</Card.Title>
                <Form>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
                  </Form.Group>
                  <Form.Group controlId="formPassword">
                    <Form.Label style={{ marginTop: '0.625rem' }}>Password:</Form.Label>
                    <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
                  </Form.Group>
                  <Button variant="success" style={{ marginTop: '1.25rem' }} type="submit" onClick={handleSubmit}>
                    Log in
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

LoginView.propTypes = {
  onLoggedIn: PropTypes.func.isRequired
};