import React from 'react';
import axios from 'axios';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


//class component
class MainView extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
      registered: true
    };
  }

  keypressCallback(event) {
    console.log(event.key);
  }

  componentDidMount() {
    axios
      .get("https://jessica-chastain-movies.herokuapp.com/movies")
      .then((response) => {
        this.setState({
          movies: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` property to that movie
  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie,
    });
  }

  // When a user successfully logs in, this function updates the `user` property in state to that particular user
  onLoggedIn(user) {
    this.setState({
      user,
    });
  }

  registered(newUser) {
    this.setState({
        newUser
    });
  }

  render() {
    const { movies, selectedMovie, user } = this.state;

    
    
    

    // If there is no user, the LoginView is rendered. If there is a user logged in, the user details are passed as a prop to the LoginView
    if (!user)
      return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} 
      registered={(newUser) => this.registered(newUser)}/>;

    if (selectedMovie)
      return (

<Container>
  {/* <Container>
         <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
          <MainView />
        </Container> */}
  
          <Row className="justify-content-md-center">
              <Col md={8}>
                  <MovieView
                      movie={selectedMovie}
                      onBackClick={(newSelectedMovie) => {
                      this.setSelectedMovie(newSelectedMovie);
                      }}
                  />
              </Col>
          </Row>
</Container>
      );

    if (movies.length === 0) {
      // Before the movies have been loaded
      return <div className="main-view"></div>;
    } else {
      return (
        <div className="main-view">
          <Row className="justify-content-md-center">
              {movies.map((movie) => (
                <Col md={3}>
                    <MovieCard
                      key={movie._id}
                      movie={movie}
                      onMovieClick={(newSelectedMovie) => {
                        this.setSelectedMovie(newSelectedMovie);
                      }}
                    />
                </Col>
              ))}
          </Row>
        </div>
      );
    }
  }
}

export default MainView;