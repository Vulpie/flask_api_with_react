import React, { useState, useEffect } from 'react'
import AdminNavBar from './AdminNavBar'
import ItemForm from './ItemForm'
import StoreItem from './StoreItem'

const AdminStore = () => {
	const [store, setStore] = useState([])
	const [addItem, setAddItem] = useState('')
	const [itemCount, setItemCount] = useState(0)

	useEffect(() => {
		fetch('/api/item/all')
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
		fetch('/api/item/add', {
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

	const updateCount = () => {
		setItemCount(itemCount - 1)
	}

	return (
		<div className="admin">
			<AdminNavBar />
			<div className="admin__area">
				<ItemForm
					userInput={addItem}
					onFormChange={handleFormChange}
					handleFormSubmit={handleFormSubmit}
				/>
				<div className="admin__area_list">
					{store.map((item) => (
						<StoreItem
							key={'store_item' + item.id}
							content={item.content}
							id={item.id}
							updateCount={updateCount}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default AdminStore
