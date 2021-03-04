import React, { Component } from 'react'
import { loginOrSignup } from './auth-utils.js'

export default class AuthForm extends Component {
	state = {
		email: '',
		password: ''
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		
		const { email, password } = this.state;
		const user = await loginOrSignup(email, password);
		console.log(user);
		this.props.handleFormSubmit(user);
	}

	render() {
		const { email, password } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					<span>Email</span>
					<input 
						value={email}
						onInput={e => this.setState({email: e.target.value})}
					/>
				</label>
				<label>
					<span>Password</span>
					<input 
						value={password}
						onInput={e => this.setState({password: e.target.value})}
					/>
				</label>
				<button>Submit</button>
			</form>
		)
	}
}
