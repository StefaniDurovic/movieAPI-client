import React, { useState, useEffect } from "react";
import axios from "axios";
import { RegistrationView } from "../registration-view/registration-view";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
// import { ProfileView } from '../profile-view/profile-view';
import { MyProfileView } from "../profile-view/myProfileView";
import { NavigationHeader } from "../NavigationHeader/NavigationHeader";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./main-view.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [moviesDefault, setMoviesDefault] = useState([]);
  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const results = moviesDefault.filter((movie) =>
      movie.Title.toLowerCase().includes(searchTerm)
    );
    setMovies(results);
  }, [searchTerm]);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) setUser(user);
    // get movies from server without a token as it is not required for the endpoint.
    axios
      .get("https://jessica-chastain-movies.herokuapp.com/movies")
      .then((response) => {
        setMovies(response.data);
        setMoviesDefault(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // When a user successfully logs in, this function updates the `user` property in state to that particular user
  const onLoggedIn = (user) => {
    setUser(user);
  };

  const onLoggedOut = (user) => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <BrowserRouter>
          <NavigationHeader user={user} onLoggedOut={() => onLoggedOut()} />
          <Routes>
            <Route
              path="/signup"
              element={<>{user ? <Navigate to="/" /> : <RegistrationView />}</>}
            />

            <Route
              path="/login"
              element={
                <>
                  {user ? (
                    <Navigate to="/" />
                  ) : (
                    <LoginView onLoggedIn={(user) => onLoggedIn(user)} />
                  )}
                </>
              }
            />

            <Route
              path="/"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : (
                    <>
                      <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleChange}
                      />
                      {movies.map((movie) => (
                        <Col md={3} key={movie._id}>
                          <MovieCard movie={movie} />
                        </Col>
                      ))}
                    </>
                  )}
                </>
              }
            />

            <Route
              path="/profile"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : (
                    <MyProfileView user={user} movies={movies} />
                  )}
                </>
              }
            />

            <Route
              path="/movies/:movieId"
              element={
                <>
                  {!user ? (
                    <Navigate to="/login" replace />
                  ) : movies.length === 0 ? (
                    <Col>The list is empty!</Col>
                  ) : (
                    <Col>
                      <MovieView movies={movies} />
                    </Col>
                  )}
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </Row>
    </Container>
  );
};

export default MainView;
