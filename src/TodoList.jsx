import TodoListItem from "./TodoListItem";

function TodoList({ todoList }) {
    return (
        <ul>
            {todoList.map((item) => (
                <TodoListItem key={item.id} title={item.title} />
            ))}
        </ul>
    );
}

export default TodoList;
