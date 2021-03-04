import React, { Component } from 'react'
import AuthForm from './AuthForm.js'

export default class LoginPage extends Component {
	render() {
		return (
			<main>
				<h1>Login</h1>
				<h3>(or sign up)</h3>
				<AuthForm handleFormSubmit={this.props.handleFormSubmit}/>
			</main>
		)
	}
}
