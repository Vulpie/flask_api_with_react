import React from 'react'
import { useHistory } from 'react-router-dom'

const Manage = ({ id }) => {
	const history = useHistory()
	const deleteItem = () => {
		fetch(`/api/${id}`, {
			method: 'POST',
			body: JSON.stringify({ id: id }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
				history.push('/')
			})
	}
	return <button onClick={() => deleteItem()}>Delete</button>
}

export default Manage
