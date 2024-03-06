// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  return (
    <div className="app">
      <h1 className="title">Todo List</h1>
      <div className="input-field">
        <input value={input} onChange={e => setInput(e.target.value)} />
        <button onClick={handleAddTodo}>Add Names
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <input 
              type="text" 
              value={todo.text} 
              onChange={e => handleEditTodo(todo.id, e.target.value)} 
            />
            <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
