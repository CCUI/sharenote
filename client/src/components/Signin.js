import React, { Component } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password:'',
			isLoggedIn: false,
			logMessage:''
		}
	}

	handleChange = (event) => {
		const target = event.target;
		this.setState({
			[target.type]: target.value
		})
	}

 	handleSubmit = () => {
		const api = "/signin?email=" + this.state.email + "&password=" + this.state.password;
		fetch(api)
		.then(res => res.json())
		.then(data => {
			this.setState({
				isLoggedIn: data.isLoggedIn,
				logMessage: data.logMessage
			})
		})
	}

	renderLogMessage () {
		if(this.state.isLoggedIn) {
			return(
				<div>
					{this.state.logMessage}
				</div>
			)
		} else {
			return(
				<div>
					{this.state.logMessage}
				</div>
			)
		}
	}

	render() {
		return (
			<div>
			<Form>
				<Form.Group as={Row} controlId="formBasicEmail" className='justify-content-md-center'>
					<Form.Label column sm="1">Email address:</Form.Label>
					<Col sm="3">
						<Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange}/>
					</Col>
				</Form.Group>

				<Form.Group as={Row} controlId="formBasicPassword" className='justify-content-md-center'>
					<Form.Label column sm="1">Password:</Form.Label>
					<Col sm="3">
						<Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
					</Col>
				</Form.Group>

				<Form.Group as={Row} className='justify-content-md-center'>
					<Col md={{ span: 2, offset: 4 }}>
						<Button variant="primary" onClick={this.handleSubmit}>Sign In</Button>
						<Button variant="primary" type="cancel">Cancel</Button>
					</Col>
				</Form.Group>
			</Form>
			{this.renderLogMessage()}
			</div>
		)
	}
}

export default Signin;