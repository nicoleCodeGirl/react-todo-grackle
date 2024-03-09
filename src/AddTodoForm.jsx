function AddTodoForm () {
    return (
        <>
        <form>
            <label>Title</label>
            <input type="text" id="todoTitle" htmlFor="todoTitle"></input>
            <button type="submit">Add</button>
        </form>
        </>
    )


}


export default AddTodoForm;