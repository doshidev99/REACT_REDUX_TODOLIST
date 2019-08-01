import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, removeTodo, editTodo }) => (
  <ul>
    {todos.map((todo, index) => (
      <Todo
        key={todo.id}
        {...todo}
        toggleId={() => toggleTodo(todo.id)}
        removeId={() => {
          const array = JSON.parse(localStorage.getItem('todos'));
          array.splice(index, 1);
          localStorage.setItem('todos', JSON.stringify(array));
          removeTodo(todo.id);
        }}
        onSave={text => {
          const array = JSON.parse(localStorage.getItem('todos'));
          array[index].text = text;
          localStorage.setItem('todos', JSON.stringify(array));
          editTodo(todo.id, text);
        }}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  editTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;