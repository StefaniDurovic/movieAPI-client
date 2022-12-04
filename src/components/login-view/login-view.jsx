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

//function component
export function LoginView(props) {
  //useState hook
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    /* Send a request to the server for authentication */
    props.onLoggedIn(username);
  };

  return (
    <Container>
        <Row className="justify-content-center">
            <Col md={4}>
                <CardGroup style={{width:'22rem'}}>
                    <Card style={{marginTop:'9.375rem'}}>
                        <Card.Body>
                            <Card.Title style={{marginBottom:'1.25rem'}}>Login</Card.Title>
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
                                Submit
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