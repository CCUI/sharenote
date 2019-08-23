import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

class Signup extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			repeatedPassword: '',
			isRegistered: false,
			isValidPassword: true,
			message: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if(this.verifyPassword()) {
			const api = "/signup?email=" + this.state.email + "&password=" + this.state.password;
			fetch(api)
				.then(res => res.json())
				.then(data => {
					this.setState({
						isRegistered: data.isRegistered,
						message: data.message
					})
				});
		} else {
			window.alert("Please use the same password");
		}
	}

	handleReset = (event) => {
		event.preventDefault();
		this.resetState();
	}

	resetState = () => {
		this.setState({
			email: '',
			password: '',
			repeatedPassword: '',
			isRegistered: false,
			isValidPassword: true,
			message: ''
		});
	}

	verifyPassword = () => {
		return this.state.password === this.state.repeatedPassword;
	}

	handleChange = (event) => {
		const targetId = event.currentTarget.id;
		const value = event.currentTarget.value;
		if(targetId === 'formBasicEmail') {
			this.setState({
				email: value
			});
		} else if(targetId === 'formPassword') {
			this.setState({
				password: value
			});
		} else if(targetId === 'formRepeatedPassword') {
			this.setState({
				repeatedPassword: value
			});
		}
	}

	renderMessage = () => {
		return (
			<div>
				{this.state.message}
			</div>
		)
	}

	render() {
		return (
			<div>
				<Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
					<Form.Group as={Row} controlId="formBasicEmail" className='justify-content-md-center'>
						<Form.Label column sm="1">Email address:</Form.Label>
						<Col sm="3">
							<Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formPassword" className='justify-content-md-center'>
						<Form.Label column sm="1">Password:</Form.Label>
						<Col sm="3">
							<Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
						</Col>
					</Form.Group>

					<Form.Group as={Row} controlId="formRepeatedPassword" className='justify-content-md-center'>
						<Form.Label column sm="1">Password:</Form.Label>
						<Col sm="3">
							<Form.Control type="password" placeholder="Password" value={this.state.repeatedPassword} onChange={this.handleChange} />
						</Col>
					</Form.Group>

					<Form.Group as={Row} className='justify-content-md-center'>
						<Col md={{ span: 2, offset: 4 }}>
							<Button variant="primary" type="submit">Sign Up</Button>
							<Button variant="primary" type="reset">Cancel</Button>
						</Col>
					</Form.Group>
				</Form>
				{this.renderMessage()}
			</div>
		)
	}
}

export default Signup;