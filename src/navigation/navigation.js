import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import Login from '../login/login'
import 'bootstrap/dist/css/bootstrap.min.css';
import './navigation.css';

class Navigation extends Component {
    render() {
        const loggedIn = this.checkLoggedIn();
        if(loggedIn){
            return (
                <Navbar bg="dark">
                    <Navbar.Brand><Link to='/' className="link">GigHub</Link></Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link><Link to='/login' className="link">Logout</Link></Nav.Link>
                    </Nav>
                </Navbar>
            );
        } else {
            return (
                <Navbar bg="dark">
                    <Navbar.Brand><Link to='/' className="link">GigHub</Link></Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Login className="link"></Login>
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