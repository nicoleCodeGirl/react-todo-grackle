import TodoListItem from "./TodoListItem";

function TodoList({ todoList, onRemoveTodo }) {
    return (
        <ul>
            {todoList.map((item) => (
                <TodoListItem key={item.id} title={item.title} onRemoveTodo={onRemoveTodo} />
            ))}
        </ul>
    );
}

export default TodoList;
