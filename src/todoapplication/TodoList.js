import React from 'react';
import TodoItem from './TodoItem.js';

function TodoList({ todos, handleTodoToggle, handleTodoDelete }) {
  return (
    <ul id='list-container'>
      {todos.map(todo  => (
        <TodoItem key={todo.id} todo={todo} handleTodoToggle={handleTodoToggle} handleTodoDelete={handleTodoDelete} />
      ))}
    </ul>
  );
}

export default TodoList;
