import React from 'react';

function TodoInput({ newTodo, handleNewTodoChange, handleNewTodoSubmit }) {
  return (
    <div className='row'>
      <input type="text" value={newTodo} onChange={handleNewTodoChange} />
      <button onClick={handleNewTodoSubmit} type="submit">Add Todo</button>
    </div>
  );
}

export default TodoInput;