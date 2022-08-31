import React, { useState } from "react";
import PropTypes from "prop-types";
// Import React Bootstrap Components
import { Container, Card, Button, Col, Row, Form } from 'react-bootstrap';
import "./login-view.scss";

export function LoginView(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
        props.onLoggedIn(username);
    };

    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Card className="login">
                        <Card.Body>
                            <Card.Title>Log in</Card.Title>
                            <Form>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control
                                        type="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" onClick={handleSubmit}>
                                    Submit
                                </Button>
                                <Card.Title>Need an account?</Card.Title>
                                <Button
                                    onClick={() => {
                                        window.location.href = 'registration-view.jsx';
                                    }}
                                    variant="link"
                                    type="button"
                                >
                                    Sign up
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
}

// prop-types
// Give informational warnings in browser if data does not match required shape
LoginView.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    }),
    onLoggedIn: PropTypes.func.isRequired,
};