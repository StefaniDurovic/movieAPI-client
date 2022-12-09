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
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

//function component
export function LoginView(props) {
  //useState hook
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

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
        const data = response.data;
        props.onLoggedIn(data);
      })
      .catch((error) => {
        console.log("no such user", error);
      });
  };

    // props.onLoggedIn(username);

  return (
    <Container>
        <Row className="justify-content-center">
          <Col md={4}>
                <CardGroup style={{width:'22rem'}}>
                    <Card style={{marginTop:'9.375rem'}}>
                        <Card.Body>
                            <Card.Title className="justify-content-center" style={{marginBottom:'1.50rem'}}>Jessica Chastain Movies Database</Card.Title>
                            <Form>
                              <Form.Group controlId="formUsername">
                                <Form.Label>Username:</Form.Label>
                                <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
                              </Form.Group>
                              <Form.Group controlId="formPassword">
                                <Form.Label style={{marginTop:'0.625rem'}}>Password:</Form.Label>
                                <Form.Control type="password" onChange={e => setPassword(e.target.value)} />
                              </Form.Group>
                              <Button variant="success" style={{marginTop:'1.25rem'}} type="submit" onClick={handleSubmit}>
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

LoginView.PropTypes = {
    onLoggedIn: PropTypes.func.isRequired
};