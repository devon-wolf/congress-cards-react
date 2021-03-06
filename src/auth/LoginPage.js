import React, { Component } from 'react'
import AuthForm from './AuthForm.js'

export default class LoginPage extends Component {
	
	handleFormSubmit = (user) => {
		this.props.handleUserChange(user);
		this.props.history.push('/search');
	}

	render() {
		return (
			<main>
				<h1>Login</h1>
				<p><em>if you don't have an account, one will be created for you automatically</em></p>
				<AuthForm 
				handleFormSubmit={this.handleFormSubmit}/>
			</main>
		)
	}
}
