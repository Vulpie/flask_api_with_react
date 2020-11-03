import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList'
import AdminNavBar from './AdminNavBar'
import Form from './Form'

const AdminStore = () => {
	const [store, setStore] = useState([])
	const [addItem, setAddItem] = useState('')

	useEffect(() => {
		fetch('/api')
			.then((res) => {
				if (res.ok) {
					return res.json()
				}
			})
			.then((data) => setStore(data))
	}, [])

	const handleFormChange = (inputValue) => {
		setAddItem(inputValue)
		console.log(addItem)
	}

	const handleFormSubmit = () => {
		fetch('/api/create', {
			method: 'POST',
			body: JSON.stringify({ content: addItem }),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((res) => res.json())
			.then((msg) => console.log(msg))
	}

	return (
		<>
			<AdminNavBar />
			<div className="admin__area">
				<Form
					userInput={addItem}
					onFormChange={handleFormChange}
					handleFormSubmit={handleFormSubmit}
				/>
				<ItemList storeItems={store} />
			</div>
		</>
	)
}

export default AdminStore