import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList'
import NavBar from './NavBar'

const Store = () => {
	const [store, setStore] = useState([])

	useEffect(() => {
		fetch('/api')
			.then((res) => {
				if (res.ok) {
					return res.json()
				}
			})
			.then((data) => setStore(data))
	}, [])

	return (
		<>
			<NavBar />
			<ItemList storeItems={store} />
		</>
	)
}

export default Store
