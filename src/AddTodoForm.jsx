import { useState } from "react";

function AddTodoForm({ onAddTodo }) {
    const [todoTitle, setTodoTitle] = useState('');

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value; // Retrieve input value from event object
        
        // Call the state setter to update the todo title
        setTodoTitle(newTodoTitle);
        console.log(newTodoTitle);
    }

    function handleAddTodo(event) {
        event.preventDefault();

        const newTodo = {
            title: todoTitle,
            id: Date.now()
        };

        onAddTodo(newTodo);

        console.log(event.target);

        setTodoTitle("");
    }

    return (
        <form id="todoForm" onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input 
                type="text" 
                id="todoTitle" 
                name="title" 
                value={todoTitle} 
                onChange={handleTitleChange}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;
