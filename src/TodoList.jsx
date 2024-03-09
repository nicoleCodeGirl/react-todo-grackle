
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
        <>
            <ul>{todoList.map((item) => {
                return <li key={item.id}>{item.title}</li>
            })}</ul>
        </>
    )

}

export default TodoList;