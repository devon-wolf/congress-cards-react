import React, { Component } from 'react'
import style from './Search.module.css'

export default class SearchItem extends Component {
	render() {
		return (
			<li className={style.searchItem}>
				<h4>{this.props.name}</h4>
				<p>{this.props.state}</p>
				<p>{this.props.party}</p>
				
				{
					this.props.collected
					? <p><em>collected</em></p>
					: <button onClick={this.props.handleCollectClick}>
						Collect
					</button>
				}
				
			</li>
		)
	}
}