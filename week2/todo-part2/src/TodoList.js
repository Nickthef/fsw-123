function TodoList (props) {
    // console.log(props)
    return (
        <div>
        <h1>List of Todos</h1>
        {/* <ul style={{listStyle: "none"}}>
            <li><input type="checkbox"></input>Food shopping</li>
            <li><input type="checkbox"></input>Gym</li>
            <li><input type="checkbox"></input>Car wash</li>
            <li><input type="checkbox"></input>Go to bank</li>
        </ul> */}
        <ul>
            {props.todoList.map(function (todo, index) {
                console.log(todo.text)
                return (
                    <li
                    key = {index}><input type="checkbox"></input>{todo.text}</li> 
                )
            })}
        </ul>
      </div>
    )
};
export default TodoList;