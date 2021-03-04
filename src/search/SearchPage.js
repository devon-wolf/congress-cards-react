import React, { Component } from 'react'
import SearchForm from './SearchForm.js'

export default class SearchPage extends Component {
	state = {
		chamber: ''
	}

	handleSearchClick = async e => {
		
	}

	render() {
		// console.log(this.state);
		return (
			<main>
				<h1>SEARCH</h1>
				<SearchForm 
					chamber={this.state.chamber}
					handleChamberChange={e => this.setState({chamber: e.target.value})}
					handleSearchClick={e => console.log(this.state)}
				/>
			</main>
		)
	}
}
