import { useState } from "react";
import TodoForm from './TodoForm';

function Todo({todo, completeTodo, deleteTodo, updateItems}) {
  const [updateToggle, setUpdateToggle] = useState(false);
  return (
    <li>
       {!updateToggle ?
            
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
      <button 
                onClick={() => setUpdateToggle(prevToggle => ! prevToggle)} 
                className="Btn
            -2">Update</button>
      </div>
      :
      <div className="checkItem">
      <TodoForm
      todo={todo}
      setUpdateToggle={setUpdateToggle}
      submit = {updateItems}/>
      <button className="closeBtn" onClick={() => setUpdateToggle(prevToggle => ! prevToggle)}>Close</button>
      </div>} 
    </li>
  );
}
export default Todo;
