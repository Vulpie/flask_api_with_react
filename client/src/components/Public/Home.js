import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const Home = () => {
	const [blog, setBlog] = useState([])

	useEffect(() => {
		fetch('/api/post/all')
			.then((res) => res.json())
			.then((data) => setBlog(data))
	}, [])
	return (
		<>
			<NavBar />
			<div className="home">
				<h2>Home Page</h2>
				<div className="home__blog">
					{blog.map((post) => (
						<div key={'post' + post.id}>
							{post.title} : {post.content} : {post.createdAt} :{' '}
							{post.modifiedAt}
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default Home
