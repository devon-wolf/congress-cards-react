import React, { Component } from 'react'
import SearchItem from './SearchItem.js'

export default class SearchList extends Component {
	render() {
		return (
			<ul>
				{this.props.items.map(item => <SearchItem name={item.first_name + ' ' + item.last_name} key={item.id}/>)}
			</ul>
		)
	}
}
