import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList (props) {
    // console.log(props)
    return (
        <div>
        <h1>List of Todos</h1>
        <TodoForm submit={props.addTodo}/>
        <ul>
            {props.todoList.map(function (todo, index) {
                
                return (
                    <Todo
                    key = {index}
                    todo = {todo}
                    completeTodo = {props.completeTodo}
                    deleteTodo={props.deleteTodo}
                    updateItems={props.updateItems}
                    />
                )
            })}
        </ul>
      </div>
    )
};
export default TodoList;