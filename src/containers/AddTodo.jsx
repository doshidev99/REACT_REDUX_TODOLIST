import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodoAction, getTodoListAction } from '../redux/todos/actions';
import { useInput } from '../hooks';

const AddTodo = ({ getTodoList, addTodo }) => {
  const { value, setValue, onChange } = useInput('');
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
    if (value.trim()) {
      let array = JSON.parse(localStorage.getItem('todos'));
      array = [
        {
          id: Date.now(),
          text: value,
          completed: false
        },
        ...array
      ];
      localStorage.setItem('todos', JSON.stringify(array));
      addTodo(value);
      setValue('');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={onChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  getTodoList: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired
};

export default connect(
  null,
  dispatch => ({
    addTodo: text => {
      dispatch(addTodoAction(text));
    },
    getTodoList: array => {
      dispatch(getTodoListAction(array));
    }
  })
)(AddTodo);
