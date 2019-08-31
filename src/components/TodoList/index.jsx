import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../Todo';

const TodoList = ({ todos, toggleTodo, removeTodo, editTodo }) => (
  <ul>
    {todos.map((todo, index) => {
      const { text, completed } = todo;
      return (
        <Todo
          key={todo.id}
          text={text}
          completed={completed}
          toggleId={() => toggleTodo(todo.id)}
          removeId={() => {
            const array = JSON.parse(localStorage.getItem('todos'));
            array.splice(index, 1);
            localStorage.setItem('todos', JSON.stringify(array));
            removeTodo(todo.id);
          }}
          onSave={e => {
            const array = JSON.parse(localStorage.getItem('todos'));
            array[index].text = e;
            localStorage.setItem('todos', JSON.stringify(array));
            editTodo(todo.id, e);
          }}
        />
      );
    })}
  </ul>
);

TodoList.propTypes = {
  editTodo: PropTypes.func,
  removeTodo: PropTypes.func,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ),
  toggleTodo: PropTypes.func
};

TodoList.defaultProps = {
  editTodo: () => {},
  removeTodo: () => {},
  todos: [],
  toggleTodo: () => {}
};

export default TodoList;
