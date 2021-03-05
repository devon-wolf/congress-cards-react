import React, { Component } from 'react'
import { getFavorites } from '../search/api-search-utils'

export default class CollectionPage extends Component {
	state = {
		collection: []
	}

	componentDidMount = async () => {
		const collection = await getFavorites(this.props.token);
		this.setState({ collection });
	}


	render() {
		return (
			<main>
				<h1>COLLECTION</h1>
				<ul>
					{this.state.collection.map(item =>
						<li key={item.id + item.party}>{item.name}</li>
					)}
				</ul>
			</main>
		)
	}
}
