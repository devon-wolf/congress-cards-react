import React, { Component } from 'react'
import SearchItem from './SearchItem.js'
import style from './Search.module.css'
import { addFavorite, getFavorites } from './api-search-utils'

export default class SearchList extends Component {
	state = {
		collection: []
	}

	componentDidMount = async () => {
		const collection = await getFavorites(this.props.token);
		this.setState({ collection });
	}

	handleCollectClick = async (item) => {
		await addFavorite(item, this.props.token);
		const collection = await getFavorites(this.props.token);
		this.setState({ collection });
	}

	checkCollection = (item) => {
		const collected = this.state.collection.some(i => {
			return i.db_id === item.id;
		});
		return collected;
	}

	render() {
		console.log(this.state.collection);
		return (
			<ul className={style.results}>
				{this.props.items.map(item => 
				<SearchItem 
				name={item.first_name + ' ' + item.last_name} 
				state={item.state} key={item.id + item.party}
				party={item.party}
				collected={this.checkCollection(item)}
				handleCollectClick={() => this.handleCollectClick(item)}
				/>)}
			</ul>
		)
	}
}
