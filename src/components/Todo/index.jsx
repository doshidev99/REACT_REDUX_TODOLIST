import React from 'react';
import PropTypes from 'prop-types';
import check from '../../assets/images/check.png';
import checked from '../../assets/images/checked.png';
import EditTodo from '../EditTodo';

const Todo = ({ toggleId, completed, text, removeId, onSave }) => (
  <li>
    <img
      src={completed ? checked : check}
      onClick={toggleId}
      alt="todos"
      role="presentation"
    />
    <EditTodo text={text} completed={completed} onSave={onSave} />
    <button type="button" onClick={removeId}>
      Remove
    </button>
  </li>
);

Todo.propTypes = {
  completed: PropTypes.bool,
  text: PropTypes.string,
  toggleId: PropTypes.func,
  removeId: PropTypes.func,
  onSave: PropTypes.func
};

Todo.defaultProps = {
  completed: false,
  text: '',
  toggleId: () => {},
  removeId: () => {},
  onSave: () => {}
};

export default Todo;
