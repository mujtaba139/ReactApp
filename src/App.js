import React, { useState } from 'react';
import './App.css';
function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const handleTodoToggle = (id) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleTodoDelete = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className='container'>
    <div className='todoapp'>
      <h1>Todo App</h1>
   
        <div className='row'>
        <input type="text" value={newTodo} onChange={handleNewTodoChange} />
        <button onClick={handleNewTodoSubmit} type="submit">Add Todo</button>
        </div>
    
      <ul id='list-container'>
        {todos.map(todo => (
          <li className='ulli' key={todo.id}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <input id='checkbox' type="checkbox" checked={todo.completed} onChange={() => handleTodoToggle(todo.id)} />
            <button id='debutton' onClick={() => handleTodoDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>'
    </div>
  );
}

export default App;