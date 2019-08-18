import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import './App.css';

import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
	return (
		<Router>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand as={Link} to="/">Share Note</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
					</Nav>
					<Button as={Link} to="sign-in" variant="light">SIGN IN</Button>
					<Button as={Link} to="sign-up" variant="primary">SIGN UP</Button>
				</Navbar.Collapse>
			</Navbar>
			<Route exact path="/" component={Home} />
			<Route path="/sign-in" component={Signin} />
			<Route path="/sign-up" component={Signup} />
		</Router>
	);
}

export default App;
