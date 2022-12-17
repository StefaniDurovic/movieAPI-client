import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import './profile-view.scss';
// import UserInfo from './user-info';
// import FavoriteMovies from './favorite-movies';
// import UpdateUser from './update-user';


export function ProfileView (props) {
    // const [user, setUser] = useState ('');
    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');
    // const [birthday, setBirthday] = useState('');
    const { user, movies } = props;
    const favMovies= JSON.parse(user).FavoriteMovies;

    const favMoviesList = movies.filter(movie => favMovies.includes(movie._id));
    console.log(favMoviesList);

    // getUser = (token) => {
    //     const user = localStorage.getItem("user");
    //     const token = localStorage.getItem("token");
    //     axios
    //       .get(`https://jessica-chastain-movies.herokuapp.com/users/${user}`, {
    //         headers: { Authorization: `Bearer ${token}` },
    //       })
    //       .then((response) => {
    //         this.setState({
    //           Username: response.data.Username,
    //           Password: response.data.Password,
    //           Email: response.data.Email,
    //           Birthday: response.data.Birthday,
    //           FavoriteMovies: response.data.FavoriteMovies,
    //         });
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   };

    // onRemoveFavorite = (movie) => {
    //     const user = localStorage.getItem("user");
    //     const token = localStorage.getItem("token");
    //     console.log(movie)
    //     axios
    //       .delete(
    //         `https://jessica-chastain-movies.herokuapp.com/users/${user}/movies/${movie}`,
    //         { headers: { Authorization: `Bearer ${token}` } }
    //       )
    //       .then((response) => {
    //         console.log(response);
    //         alert("Movie was removed from favorites.");
    //         this.componentDidMount();
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   };

    // onLoggedOut() {
    //     localStorage.removeItem("token");
    //     localStorage.removeItem("user");
    //     this.setState({
    //       user: null,
    //     });
    //     window.open("/login", "_self");
    //   };

    const editUser = (e) => {
        e.preventDefault();
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        axios
          .put(
            `https://jessica-chastain-movies.herokuapp.com/users/${user}`,
            {
              Username: user.Username,
              Password: user.Password,
              Email: user.Email,
              Birthday: user.Birthday,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((response) => {
            console.log(response)
            this.setState({
              Username: response.data.Username,
              Password: response.data.Password,
              Email: response.data.Email,
              Birthday: response.data.Birthday,
            });
    
    //         localStorage.setItem("user", this.state.Username);
    //         const data = response.data;
    //         console.log(data);
    //         console.log(this.state.Username);
    //         alert("Profile is updated!");
    //         window.open(`/users/${user}`, "_self");
    //       })
    //       .catch(function (error) {
    //         console.error(error);
    //       });
    //   };

    // //   setUsername(value) {
    // //     const [username, setUsername] = useState('');
    // //   }
    
    // //   setPassword(value) {
    // //     const [password, setPassword] = useState('');
    // //   }
    
    // //   setEmail(value) {
    // //     const [email, setEmail] = useState('');
    // //   }
    
    // //   setBirthday(value) {
    // //     const [birthday, setBirthday] = useState('');
    // //   }

    // onDeleteUser() {
    //     const Username = localStorage.getItem("user");
    //     const token = localStorage.getItem("token");
    
    //     axios
    //       .delete(`https://jessica-chastain-movies.herokuapp.com/users/${Username}`, {
    //         headers: { Authorization: `Bearer ${token}` },
    //       })
    //       .then((response) => {
    //         console.log(response);
    //         alert("Profile has been deleted!");
    //         localStorage.removeItem("user");
    //         localStorage.removeItem("token");
    //         window.open(`/`, "_self");
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   };

      return (
        <Container>
            <Row>
                <Col xs={12} sm={4}>
                    <Card>
                        <Card.Body>
                            <UserInfo username={user.Username} email={user.Email}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={8}>
                    <Card>
                        <Card.Body>
                            <UpdateUser editUser={editUser} setUsername={setUsername} setPassword={setPassword} setEmail={setEmail} setBirthday={setBirthday}/>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
                <FavoriteMovies favMoviesList={favMoviesList}/>
        </Container>
      )










}
