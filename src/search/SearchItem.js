import React, { Component } from 'react'

export default class SearchItem extends Component {
	render() {
		return (
			<li>
				<h5>{this.props.name}</h5>
			</li>
		)
	}
}
