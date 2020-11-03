import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = ({ storeItems }) => {
	return (
		<div className="item-list">
			<h3 className="item-list__header">Items for sale</h3>
			<ul className="item-list__list">
				{storeItems.map((item) => {
					return (
						<li
							className="item-list__list_item"
							key={'store_item' + item.id}
						>
							<div className="item-list__list_item_property">
								{item.content}
							</div>
							<Link
								to={`${item.id}`}
								className="item-list__list_item_link"
							>
								Details
							</Link>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default ItemList
