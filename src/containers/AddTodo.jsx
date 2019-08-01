import React, { useEffect, createRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodoAction, getTodoListAction } from '../redux/todos/actions';

const AddTodo = ({ getTodoList, addTodo }) => {
  const input = createRef('null');
  useEffect(() => {
    if (!localStorage.getItem('todos')) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      const array = JSON.parse(localStorage.getItem('todos'));
      getTodoList(array);
    }
  });
  const handleSubmit = e => {
    e.preventDefault();
    if (input.current.value.trim()) {
      let array = JSON.parse(localStorage.getItem('todos'));
      array = [
        {
          id: Date.now(),
          text: input.current.value,
          completed: false,
        },
        ...array,
      ];
      localStorage.setItem('todos', JSON.stringify(array));
      addTodo(input.current.value);
      input.current.value = '';
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={input} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  getTodoList: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};

export default connect(
  null,
  dispatch => ({
    addTodo: text => {
      dispatch(addTodoAction(text));
    },
    getTodoList: array => {
      dispatch(getTodoListAction(array));
    },
  }),
)(AddTodo);
