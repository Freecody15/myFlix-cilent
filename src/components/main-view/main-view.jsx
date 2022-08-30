import React from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginView } from '../login-view/login-view.jsx';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';

export class MainView extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null,
            registered: null
        };
    }

    getMovies(token) {
        axios.get('https://dp-movie-api.herokuapp.com/movies', {
            headers: { Authorization: `Bearer${token}` }
        })
            .then(response => {
                // Assign the result to the state
                this.setState({
                    movies: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        let accessToken = localStorage.getItem('token');
        if (accessToken !== null) {
            this.setState({
                user: localStorage.getItem('user')
            });
            this.getMovies(accessToken);
        }
    }

    onLoggedIn(authData) {
        console.log(authData);
        this.setState({
            user: authData.user.Username
        });

        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.getMovies(authData.token);
    }
    // to log out 
    onLoggedOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.setState({
            user: null
        });
    }

    setSelectedMovie(movie) {
        this.setState({
            selectedMovie: movie
        });
    }

    onRegistration(registered) {
        this.setState({
            registered
        });
    }

    render() {
        const { movies, user } = this.state;
        <button onClick={() => { this.onLoggedOut() }}>Logout</button> // log out button

        if (!user) return <Row>
            <Col>
                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
        </Row>
        if (movies.length === 0) return <div className="main-view" />;

        return (
            <Router>
                <Router>
                    <div className="main-view">
                        <Route exact path="/" render={/* welcome */} />
                        <Route exact path="/movies/:movieId" render={/* movie view */} />
                        <Route exact path="/genres/:name" render={/* genre view*/} />
                        <Route path="/directors/:name" render={({ match }) => {
                            if (movies.length === 0) return <div className="main-view" />;
                            return <Col md={8}>
                                <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} />
                            </Col>
                        }
                        } />
                    </div>
                </Router>
            </Router>
        );
    }
}