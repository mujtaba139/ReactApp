import React from 'react';

function TodoItem({ todo, handleTodoToggle, handleTodoDelete }) {
  return (
    <li className='ulli' key={todo.id}>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <input id='checkbox' type="checkbox" checked={todo.completed} onChange={() => handleTodoToggle(todo.id)} />
      <button id='debutton' onClick={() => handleTodoDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
