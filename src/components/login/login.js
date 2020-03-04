import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export default function Login() {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const history = useHistory();

    const handleEmail = e => {
        setEmail(email = e.target.value);
    }
    
    const handlePassword = e => {
        setPassword(password = e.target.value);
    }

    const onLogin = e => {
        e.preventDefault();
        if (email === "admin" &&
            password === "admin123"
        ) {
            history.push('/home');
        } else {
            alert("Email or password not found.")
        }
    }

    return (
        <div className="container">
            <div className="login-wrapper">
                <div className="login-header">
                    <h2>ACS</h2>
                    <p>Login using your account</p>
                </div>
                <div className="login-form">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control 
                                type="email" 
                                placeholder="Enter email" 
                                onChange={handleEmail}
                                value={email}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                onChange={handlePassword}
                                value={password}
                            />
                        </Form.Group>
                        <Button 
                            variant="primary" 
                            type="submit" 
                            onClick={onLogin}
                        >
                            Login
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
