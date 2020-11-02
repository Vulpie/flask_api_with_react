import React, { useState, useEffect } from 'react'
import Card from './Card'

const Page = () => {
	const [todo, setTodo] = useState([])

	useEffect(() => {
		fetch('/api')
			.then((res) => {
				if (res.ok) {
					return res.json()
				}
			})
			.then((data) => console.log(data))
	}, [])
	return (
		<>
			<Card />
		</>
	)
}

export default Page
