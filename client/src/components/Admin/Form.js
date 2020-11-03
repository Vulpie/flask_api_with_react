import React from 'react'

const Form = ({ userInput, onFormChange, handleFormSubmit }) => {
	const handleChange = (e) => {
		onFormChange(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		handleFormSubmit()
	}
	return (
		<form
			onSubmit={(e) => handleSubmit(e)}
			className="admin__area_item-form"
		>
			<label className="admin__area_item-form_label">
				Item description
			</label>
			<input
				className="admin__area_item-form_input"
				type="text"
				value={userInput}
				onChange={(e) => handleChange(e)}
				required
			/>
			<input
				type="submit"
				value="Submit"
				className="admin__area_item-form_button"
			/>
		</form>
	)
}

export default Form
