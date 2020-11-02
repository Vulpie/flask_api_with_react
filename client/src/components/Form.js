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
		<form onSubmit={(e) => handleSubmit(e)}>
			<input
				type="text"
				value={userInput}
				onChange={(e) => handleChange(e)}
				required
			/>
			<input type="submit" value="Submit" />
		</form>
	)
}

export default Form
