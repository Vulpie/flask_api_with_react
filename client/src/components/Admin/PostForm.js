import React from 'react'

const PostForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault()
		const title = e.target['title'].value
		const content = e.target['content'].value
		fetch('/api/post/add', {
			method: 'POST',
			body: JSON.stringify({ title, content }),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((res) => res.json())
			.then((msg) => {
				console.log(msg)
				//setItemCount(itemCount + 1)
			})
	}
	return (
		<form onSubmit={(e) => handleSubmit(e)} className="admin__area_form">
			<label className="admin__area_form_label">Post title</label>
			<input
				className="admin__area_form_input"
				type="text"
				name="title"
				required
			/>
			<label className="admin__area_form_label">Post content</label>
			<textarea
				className="admin__area_form_textarea"
				type="text"
				name="content"
				required
			/>
			<input
				type="submit"
				value="Submit"
				className="admin__area_form_button"
			/>
		</form>
	)
}

export default PostForm
