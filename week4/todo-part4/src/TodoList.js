import Todo from "./Todo.js";
import TodoForm from "./TodoForm.js"; 

function TodoList (props) {
    // console.log(props)
    return (
        <div>
        <h1>List of Todos</h1>
        <TodoForm addTodo={props.addTodo}/>
        <ul>
            {props.todoList.map(function (todo, index) {
                
                return (
                    <Todo
                    key = {index}
                    todo = {todo}
                    completeTodo = {props.completeTodo}
                    deleteTodo={props.deleteTodo}
                    />
                )
            })}
        </ul>
      </div>
    )
};
export default TodoList;