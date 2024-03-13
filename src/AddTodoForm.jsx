function AddTodoForm(props) {

    function handleAddTodo(event) {
        event.preventDefault();

        const todoTitle = event.target.title.value;

        console.log(todoTitle);

        props.onAddTodo(todoTitle);

        event.target.reset();


    }

    return (

        <form id="todoForm" onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input type="text" id="todoTitle" name="title"></input>
            <button type="submit">Add</button>
        </form>

    );


}


export default AddTodoForm;