import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function UpdateUser(setUsername, setPassword, setEmail, setBirthday, editUser) {
    return (
        <Container>
          <Row>
            <Col md={4}>
              <CardGroup style={{ width: '22rem' }}>
                <Card className="mt-5">
                  <Card.Body>
                    <Card.Title className="justify-content-center" style={{ marginBottom: '1.50rem' }}>Update personal info</Card.Title>
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

                    <Button variant="success" style={{ marginTop: '1.25rem' }} type="submit" onClick={editUser}>Sign up</Button>

                     </Form>
                  </Card.Body>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
    );
  }

    
