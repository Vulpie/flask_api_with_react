import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Post from './Post'

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
					{blog.length !== 0 &&
						blog.map((post) => (
							<Post
								key={'post' + post.id}
								title={post.title}
								content={post.content}
								createdAt={post.createdAt}
								modifiedAt={post.modifiedAt}
							/>
						))}
				</div>
			</div>
		</>
	)
}

export default Home
