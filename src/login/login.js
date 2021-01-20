import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <Nav>
            <Button
                onClick={() => loginWithRedirect()}
            >
                Login
            </Button>
        </Nav>
    )
}

export default Login;