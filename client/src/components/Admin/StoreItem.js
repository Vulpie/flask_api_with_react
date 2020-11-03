import React from 'react'
import { Link } from 'react-router-dom'

const StoreItem = ({ content, id, updateCount }) => {
	const deleteItem = () => {
		fetch(`/api/item/delete/${id}`, {
			method: 'POST',
			body: JSON.stringify({ id: id }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				updateCount()
			})
	}

	return (
		<div className="admin__area_list_item">
			<p className="admin__area_list_item_property">{content}</p>
			<Link to={`${id}`} className="admin__area_list_item_link">
				Details
			</Link>
			<p
				className="admin__area_list_item_link"
				onClick={() => deleteItem()}
			>
				Delete
			</p>
		</div>
	)
}

export default StoreItem
