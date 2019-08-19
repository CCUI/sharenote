import React, { Component } from 'react';

class Signup extends Component {
	constructor() {
		super();
		this.state = {
			userInfo: ''
		}
	}

	componentDidMount() {
		fetch('/signup')
			.then(response => response.json())
			.then(data => this.setState({ userInfo: data.userInfo }))
	}

	render() {
		return (
			<div>
				{this.state.userInfo}
			</div>
		)
	}
}

export default Signup;