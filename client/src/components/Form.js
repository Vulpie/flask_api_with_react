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
		<form onSubmit={(e) => handleSubmit(e)} class="item-form">
			<label className="item-form__label">Item description</label>
			<input
				className="item-form__input"
				type="text"
				value={userInput}
				onChange={(e) => handleChange(e)}
				required
			/>
			<input type="submit" value="Submit" className="item-form__button" />
		</form>
	)
}

export default Form
