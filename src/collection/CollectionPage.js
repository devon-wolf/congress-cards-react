import React, { Component } from 'react'
import { getFavorites, deleteFavorite } from '../search/api-search-utils'

export default class CollectionPage extends Component {
	state = {
		collection: []
	}

	componentDidMount = async () => {
		const collection = await getFavorites(this.props.token);
		this.setState({ collection });
	}

	handleDeleteClick = async (item) => {
		await deleteFavorite(item.id, this.props.token);
		const collection = await getFavorites(this.props.token);
		this.setState({ collection });
	}

	render() {
		return (
			<main>
				<h1>COLLECTION</h1>
				<ul>
					{this.state.collection.map(item =>
						<>
						<li 
						key={item.db_id + item.party}
						>
							{item.name}
						</li>

						<button 
						key={item.id + item.party}
						onClick={() => this.handleDeleteClick(item)}
						>Remove?
						</button>
						</>
					)}
				</ul>
			</main>
		)
	}
}
