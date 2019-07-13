import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { addTodo, getTodoList } from '../redux/todos/action';

const AddTodo = ({ getTodoList, addTodo }) => {
  let input;
  useEffect(() => {
    if (!localStorage.getItem('todos')) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      const array = JSON.parse(localStorage.getItem('todos'));
      getTodoList(array);
    }
  });
  const handleSubmit = e => {
    console.log('abc');

    e.preventDefault();
    if (input.value.trim()) {
      let array = JSON.parse(localStorage.getItem('todos'));
      array = [
        {
          id: Date.now(),
          text: input.value,
          completed: false,
        },
        ...array,
      ];
      localStorage.setItem('todos', JSON.stringify(array));
      addTodo(input.value);
      input.value = '';
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect(
  null,
  dispatch => ({
    addTodo: text => {
      dispatch(addTodo(text));
    },
    getTodoList: array => {
      dispatch(getTodoList(array));
    },
  }),
)(AddTodo);
