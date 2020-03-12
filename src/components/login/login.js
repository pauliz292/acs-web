import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import auth from '../../_services/authService';

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
        if (email && password) {
            auth.login(email, password)
            .then(() => {
                history.push('/main')
            })
            .catch(err => {
                alert("Email or password not found.")
                console.log(err.message);
            })
        }
    }

    return (
        <div className="container" style={bg_style}>
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
                            className="button-primary" 
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

let imgUrl = '../../static/images/bg.jpg';
let bg_style = {
    backgroundImage: `url(${ imgUrl })`,
    backgroundRepeat  : 'no-repeat',
    backgroundPosition: 'center',
}