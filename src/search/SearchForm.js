import React, { Component } from 'react'

export default class SearchForm extends Component {
	render() {
		return (
			<form>
				<label>
					<span>Search which chamber?</span>
					<select 
					value={this.props.chamber}
					onChange={this.props.handleChamberChange}
					>
						<option value=""></option>
						<option value="house">House of Representatives</option>
						<option value="senate">Senate</option>
					</select>
				</label>
			</form>
		)
	}
}
