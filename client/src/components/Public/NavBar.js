import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
	return (
		<div className="navbar">
			<Link to="/" className="navbar__item">
				Home
			</Link>
			<Link to="/store" className="navbar__item">
				Store
			</Link>
			<Link to="/admin/index" className="navbar__item">
				Admin Panel
			</Link>
		</div>
	)
}

export default NavBar
