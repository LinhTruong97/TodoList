import React from 'react'

function AddTaskForm({ newTask, handleSubmit, handleInputChange }) {
    return (
        <form onSubmit={handleSubmit} className="form">
            <label htmlFor="new-item">Add to the Todo list</label>
            <input type="text" id="new-item" value={newTask} onChange={handleInputChange} />
            <button type="submit">Add Item</button>
        </form>
    )
}

export default AddTaskForm
