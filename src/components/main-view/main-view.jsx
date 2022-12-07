import React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { NavigationHeader } from '../NavigationHeader/NavigationHeader';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import './main-view.scss';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


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
          <NavigationHeader/>

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

        <Container>
          <NavigationHeader/>
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
        </Container>
      );
    }
  }
}

export default MainView;