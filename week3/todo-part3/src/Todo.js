function Todo({todo, completeTodo, deleteTodo}) {
    
  return (
    <li>
      <input
      onChange = {function () {
        completeTodo(todo.id)
      }}
       type="checkbox"
       checked = {todo.isCompleted}
       ></input>
      {todo.text}
      <button className="deletebtn" onClick={() => deleteTodo(todo.id)}>X</button>
    </li>
  );
}
export default Todo;
