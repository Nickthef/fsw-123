import TodoList from './TodoList';
import {todos as data} from './STORE.js';
import {useState} from "react";
import './App.css';

function App() {

  const [todos, setTodos] = useState(data);
  // console.log(todos)
  function completeTodo(id) {
    const copy = [...todos];

    copy.forEach(function (todo) {
      if (todo.id === id) {
       const newValue = !todo.isCompleted;
       todo.isCompleted = newValue;
      } return todo
    })
    setTodos(copy);
  }

  const deleteTodo = id => {
    const tempTodo = [...todos];
    const newTodos = tempTodo.filter((todos) => todos.id !== id);
    console.log(newTodos)
    setTodos(newTodos);
  }


  return (
    <div>
      <TodoList 
      todoList = {todos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
      />

    </div>
  );
}

export default App;
