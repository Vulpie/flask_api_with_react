import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavBar = () => {
	return (
		<div className="admin__navbar">
			<h3 className="admin__navbar_header">Admin Navigation</h3>
			<Link to="/" className="admin__navbar_item">
				Website
			</Link>
			<Link to="/admin/index" className="admin__navbar_item">
				Admin Home
			</Link>
			<Link to="/admin/manage/store" className="admin__navbar_item">
				Manage Store
			</Link>
			<Link to="/admin/manage/home" className="admin__navbar_item">
				Manage Home Page
			</Link>
		</div>
	)
}

export default AdminNavBar
