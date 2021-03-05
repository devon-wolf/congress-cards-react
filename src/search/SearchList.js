import React, { Component } from 'react'
import SearchItem from './SearchItem.js'
import style from './Search.module.css'

export default class SearchList extends Component {
	state = {
		collection: []
	}

	handleCollectClick = (item) => {
		let collection = [];
		collection.push(...this.state.collection, item);
		this.setState({ collection });
	}

	render() {
		console.log(this.state);
		return (
			<ul className={style.results}>
				{this.props.items.map(item => 
				<SearchItem 
				name={item.first_name + ' ' + item.last_name} 
				state={item.state} key={item.id + item.party}
				party={item.party}
				handleCollectClick={() => this.handleCollectClick(item)}
				/>)}
			</ul>
		)
	}
}
