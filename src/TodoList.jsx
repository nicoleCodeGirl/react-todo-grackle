import TodoListItem from "./TodoListItem";
const todoList = [

    {
      id: 1,
      title: "do coding homework",
    },
    {
      id: 2,
      title: "Pack for my trip",
    },
    {
    id: 3,
    title: "watch Udemy videos",
    }
  ];

function TodoList() {
    return (
        
            <ul>{todoList.map((item) => {
                return <TodoListItem key={item.id} title={item.title}/>
            })}</ul>
      
    )

}

export default TodoList;