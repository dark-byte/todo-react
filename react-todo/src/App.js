import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  
  useEffect(() =>{
    getLocalTodos();
  }, []);
  
  useEffect(()=>{
    saveLocalTodos();
  }, [todos]);

  const saveLocalTodos = () =>{
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () =>{
    if (localStorage.getItem("todos" === null)){
      localStorage.setItem("todos". JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };

  return (
    <div className="App">
      <header>
        <h1 className="heading">My To-do List</h1>
        <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
        <TodoList todos={todos} setTodos={setTodos} inputText={inputText}/>
      </header>
    </div>
  );
}

export default App;
