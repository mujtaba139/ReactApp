import React, { useState } from 'react';
import './App.css';
import TodoInput from './todoapplication/TodoInput';
import TodoList from './todoapplication/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoSubmit = (event) => {
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
        <TodoInput newTodo={newTodo} handleNewTodoChange={handleNewTodoChange} handleNewTodoSubmit={handleNewTodoSubmit} />
        <TodoList todos={todos} handleTodoToggle={handleTodoToggle} handleTodoDelete={handleTodoDelete} />
      </div>
    </div>
  );
}

export default App;
