import React, { useState, useEffect } from 'react';
import { Button, Modal, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LandingPage({ onLogin }) {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    useEffect(() => {
        document.title = "My Blossom App 🌸";
    }, []);

    // ... rest of your code

    // Form input states
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [registerUsername, setRegisterUsername] = useState('');
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://put-unemployment-passage-crm.trycloudflare.com/login.php', {
                email: loginEmail,
                password: loginPassword
            });
            console.log(response.data);
            if (response.data.message === "Login successful") {
                onLogin(response.data.user);
                navigate('/home');
            } else {
                alert('Login failed: ' + (response.data.message || 'Unknown error'));
            }
        } catch (error) {
            console.error(error);
            alert('Login error');
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://put-unemployment-passage-crm.trycloudflare.com/register.php', {
                username: registerUsername,
                email: registerEmail,
                password: registerPassword
            });
            console.log(response.data);
            alert(response.data.message);
            setShowRegister(false);
            setShowLogin(true);
        } catch (error) {
            console.error(error);
            alert('Registration error');
        }
    };

    return (
        <div
          style={{
            background: 'linear-gradient(to bottom, #ffe4e1, #ffccd5)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '20px'
          }}
        >
            <Container>
                <h1 style={{ fontFamily: 'cursive', color: '#822659', marginBottom: '40px' }}>
                    Welcome to My Blossom App 🌸
                </h1>
                <div>
                    <Button 
                      variant="light" 
                      size="lg" 
                      className="m-3"
                      style={{
                        backgroundColor: '#f9d5e5',
                        color: '#822659',
                        border: 'none',
                        padding: '10px 30px',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        borderRadius: '30px',
                        boxShadow: '2px 2px 8px rgba(0,0,0,0.2)'
                      }}
                      onClick={() => setShowLogin(true)}
                    >
                      Login
                    </Button>

                    <Button 
                      variant="light" 
                      size="lg" 
                      className="m-3"
                      style={{
                        backgroundColor: '#fde2e4',
                        color: '#822659',
                        border: 'none',
                        padding: '10px 30px',
                        fontWeight: 'bold',
                        fontSize: '1.2rem',
                        borderRadius: '30px',
                        boxShadow: '2px 2px 8px rgba(0,0,0,0.2)'
                      }}
                      onClick={() => setShowRegister(true)}
                    >
                      Register
                    </Button>
                </div>
            </Container>

            {/* Login Modal */}
            <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
                <Modal.Header closeButton style={{ backgroundColor: '#f9d5e5' }}>
                    <Modal.Title style={{ color: '#822659' }}>Login</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleLoginSubmit}>
                    <Modal.Body style={{ backgroundColor: '#fff0f5' }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={loginEmail}
                                onChange={(e) => setLoginEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={loginPassword}
                                onChange={(e) => setLoginPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer style={{ backgroundColor: '#fff0f5' }}>
                        <Button variant="secondary" onClick={() => setShowLogin(false)}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>

            {/* Register Modal */}
            <Modal show={showRegister} onHide={() => setShowRegister(false)} centered>
                <Modal.Header closeButton style={{ backgroundColor: '#fde2e4' }}>
                    <Modal.Title style={{ color: '#822659' }}>Register</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleRegisterSubmit}>
                    <Modal.Body style={{ backgroundColor: '#fff0f5' }}>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                value={registerUsername}
                                onChange={(e) => setRegisterUsername(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={registerEmail}
                                onChange={(e) => setRegisterEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={registerPassword}
                                onChange={(e) => setRegisterPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer style={{ backgroundColor: '#fff0f5' }}>
                        <Button variant="secondary" onClick={() => setShowRegister(false)}>
                            Close
                        </Button>
                        <Button variant="success" type="submit">
                            Register
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}

export default LandingPage;
