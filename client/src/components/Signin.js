import React, { Component } from 'react';

class Signin extends Component {
	constructor() {
		super();
		this.state = {
			userInfo: ''
		}
	}

	componentDidMount() {
		fetch('/signin')
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

export default Signin;