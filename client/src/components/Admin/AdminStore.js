import React, { useState, useEffect } from 'react'
import AdminNavBar from './AdminNavBar'
import Form from './Form'
import StoreItem from './StoreItem'

const AdminStore = () => {
	const [store, setStore] = useState([])
	const [addItem, setAddItem] = useState('')
	const [itemCount, setItemCount] = useState(0)

	useEffect(() => {
		fetch('/api')
			.then((res) => {
				if (res.ok) {
					return res.json()
				}
			})
			.then((data) => {
				setStore(data)
				setItemCount(data.length)
			})
	}, [itemCount])

	const handleFormChange = (inputValue) => {
		setAddItem(inputValue)
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
			.then((msg) => {
				console.log(msg)
				setItemCount(itemCount + 1)
			})
	}

	return (
		<div className="admin">
			<AdminNavBar />
			<div className="admin__area">
				<Form
					userInput={addItem}
					onFormChange={handleFormChange}
					handleFormSubmit={handleFormSubmit}
				/>
				<div className="admin__area_list">
					{store.map((item) => (
						<StoreItem content={item.content} id={item.id} />
					))}
				</div>
			</div>
		</div>
	)
}

export default AdminStore
