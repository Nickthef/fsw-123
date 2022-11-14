import TodoList from "./TodoList";
import { todos as data } from "./STORE.js";
import { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";

function App() {
  const [todos, setTodos] = useState(data);
  // console.log(todos)

  function completeTodo(id) {
    const copy = [...todos];
    const complete = copy.findIndex(todos => todos.id === id);
    copy[complete].isCompleted = !copy[complete].isCompleted;
    setTodos(copy);
  }

  const deleteTodo = (id) => {
    const tempTodo = [...todos];
    const newTodos = tempTodo.filter((todos) => todos.id !== id);
    console.log(newTodos);
    setTodos(newTodos);
  };

  const addTodo = (text) => {
    var addedTodo = { text: text, id: uuid(), isCompleted: false };
    const updatedList = [...todos, addedTodo];
    setTodos(updatedList);
  };

  const updateItems = (update, todoId) => {
    console.log(update, todoId)
        setTodos((prevTodos) =>
          [...prevTodos].map((todo) => {
            return todo.id === todoId ? {...todo, text: update} : todo;
          })
        );
      };

  return (
    <div>
      <TodoList
        todoList={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        addTodo={addTodo}
        updateItems={updateItems}
      />
    </div>
  );
}

export default App;
