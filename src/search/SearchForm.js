import React, { Component } from 'react'

export default class SearchForm extends Component {
	

	render() {
		return (
		<div>	
			<label>
				<span>Pick a chamber: </span>
					<select 
						value={this.props.chamber}
						onChange={this.props.handleChamberChange}
					>
						<option value=""></option>
						<option value="house">House of Representatives</option>
						<option value="senate">Senate</option>
					</select>
			</label>
			<button
				onClick={this.props.handleSearchClick}
			>
				Get Some Congressfolk
			</button>
		</div>	
		)
	}
}
