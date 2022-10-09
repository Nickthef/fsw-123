import './App.css';
import Card from './Card';

function App() {
  return (
    <div id="container">
      <Card bgColor = "red" description = "Hello World 1!" subtitle = "sub title 1" title = "title 1" width = "250px"/>
      <Card bgColor = "orange" description = "Hello World 2!" subtitle = "sub title 2" title = "title 2" width = "250px"/>
      <Card bgColor = "yellow" description = "Hello World 3!" subtitle = "sub title 3" title = "title 3" width = "250px"/>
      <Card bgColor = "green" description = "Hello World 4!" subtitle = "sub title 4" title = "title 4" width = "250px"/>
    </div>
  );
}

export default App;
