function TodoList () {
    return (
        <div>
        <h1>List of Todos</h1>
        <ul style={{listStyle: "none"}}>
            <li><input type="checkbox"></input>Food shopping</li>
            <li><input type="checkbox"></input>Gym</li>
            <li><input type="checkbox"></input>Car wash</li>
            <li><input type="checkbox"></input>Go to bank</li>
        </ul>
      </div>
    )
};
export default TodoList;