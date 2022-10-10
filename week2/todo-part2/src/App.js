import TodoList from './TodoList';
import {todos} from './STORE.js'
import './App.css';

function App() {
  return (
    <div>
      <TodoList todoList = {todos}/>

    </div>
  );
}

export default App;
