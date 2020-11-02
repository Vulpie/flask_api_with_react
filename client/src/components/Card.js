import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ storeItems }) => {
	return (
		<>
			{storeItems.map((item) => {
				return (
					<ul key={'store_item' + item.id}>
						<li>
							<Link to={`${item.id}`}>{item.content}</Link>
						</li>
					</ul>
				)
			})}
		</>
	)
}

export default Card
