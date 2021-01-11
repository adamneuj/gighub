import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';

class Navigation extends Component {
    render() {
        const loggedIn = this.checkLoggedIn();
        if(loggedIn){
            return (
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">GigHub</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#login">Logout</Nav.Link>
                    </Nav>
                </Navbar>
            );
        } else {
            return (
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">GigHub</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#login">Login</Nav.Link>
                    </Nav>
                </Navbar>
            );
        }

    }

    checkLoggedIn() {
        const loggedIn = false;
        return loggedIn;
    }
}

export default Navigation;