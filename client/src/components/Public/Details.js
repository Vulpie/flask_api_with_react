import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Details = () => {
	const [item, setItem] = useState([])
	const { id } = useParams()
	useEffect(() => {
		fetch(`/api/${id}`)
			.then((res) => res.json())
			.then((data) => setItem(data))
	}, [id])
	return (
		<div>
			{item.length > 0 &&
				item.map((data) => (
					<>
						<div key={'details_' + id}>{data.content}</div>
						<Link to="/">Back to the store</Link>
					</>
				))}
		</div>
	)
}

export default Details
