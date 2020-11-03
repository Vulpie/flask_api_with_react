import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/store">Store</Link>
			<Link to="/admin/home">Admin Panel</Link>
		</div>
	)
}

export default NavBar
