function Todo({todo, completeTodo, deleteTodo}) {
    
  return (
    <li>
      <div className="checkItem">
      <input
      onChange = {function () {
        completeTodo(todo.id)
      }}
       type="checkbox"
       checked = {todo.isCompleted}
       ></input>
       <span style={{textDecoration: todo.isComplete ? "line-through" : ""}}>
      {/* {todo.text} */}
      <label className="todoLabel" htmlFor={"todo-" + todo.id}>{todo.text}</label>
      </span>
      <button className="deletebtn" onClick={() => deleteTodo(todo.id)}>X</button>
      </div>
    </li>
  );
}
export default Todo;
