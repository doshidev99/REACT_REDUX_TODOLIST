import { connect } from 'react-redux';
import {
  toggleTodoAction,
  removeTodoAction,
  editTodoAction,
} from '../redux/todos/actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

export default connect(
  state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter),
  }),
  dispatch => ({
    toggleTodo: id => dispatch(toggleTodoAction(id)),
    removeTodo: id => dispatch(removeTodoAction(id)),
    editTodo: (id, updates) => dispatch(editTodoAction(id, updates)),
  }),
)(TodoList);
