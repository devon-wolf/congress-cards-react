import React, { Component } from 'react'
import SearchForm from './SearchForm.js'
import SearchList from './SearchList.js'
import { getCongressfolk } from './api-search-utils'
// import style from './Search.module.css'


export default class SearchPage extends Component {
	state = {
		chamber: '',
		results: [],
	}

	handleSearchClick = async e => {
		const results = await getCongressfolk(this.state.chamber, this.props.token);

		this.setState({ results });
	}

	render() {
		console.log(this.state);
		return (
			<main>
				<h1>SEARCH</h1>
				<SearchForm 
					chamber={this.state.chamber}
					handleChamberChange={e => this.setState({chamber: e.target.value})}
					handleSearchClick={this.handleSearchClick}
				/>

				<SearchList
				items={this.state.results}
				token={this.props.token} 
				/>
			</main>
		)
	}
}
