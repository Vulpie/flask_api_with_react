import React from 'react'
import AdminNavBar from './AdminNavBar'
import PostForm from './PostForm'
const AdminHome = () => {
	return (
		<div className="admin">
			<AdminNavBar />
			<div className="admin__area">
				<PostForm />
			</div>
		</div>
	)
}

export default AdminHome
