import React, { useState } from "react";
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './registration-view.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export function RegistrationView(props) {
    //useState hook
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ birthday, setBirthday ] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(username, password, email, birthday);
      props.registered(username);
    };
  
    return (
      <Container>
        <Row className="justify-content-center">
          <Col md={4}>
            <CardGroup style={{ width: '22rem' }}>
              <Card style={{ marginTop: '9.375rem' }}>
                <Card.Body>
                <Card.Title className="justify-content-center" style={{ marginBottom: '1.50rem' }}>Jessica Chastain Movies Database</Card.Title>
                  <Form>
                    
                    <Form.Group controlId="formUsername">
                      <Form.Label>Username:</Form.Label>
                      <Form.Control type="text" onChange={e => setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                      <Form.Label>Password:</Form.Label>
                      <Form.Control type="text" onChange={e => setPassword(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                      <Form.Label>Email:</Form.Label>
                      <Form.Control type="text" onChange={e => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBirthday">
                      <Form.Label>Birthday:</Form.Label>
                      <Form.Control type="text" onChange={e => setBirthday(e.target.value)} />
                    </Form.Group>

                    <Button variant="success" style={{ marginTop: '1.25rem' }} type="submit" onClick={handleSubmit}></Button>
                    
                  </Form>
                </Card.Body>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }

RegistrationView.PropTypes = {
    registered: PropTypes.func.isRequired
};