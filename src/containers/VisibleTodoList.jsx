import { connect } from 'react-redux';
import {
  toggleTodoAction,
  removeTodoAction,
  editTodoAction
} from '../redux/todos/actions';
import TodoList from '../components/TodoList';
import getVisibleTodos from '../redux/filter/selectors';

export default connect(
  state => ({
    todos: getVisibleTodos(state)
  }),
  dispatch => ({
    toggleTodo: id => dispatch(toggleTodoAction(id)),
    removeTodo: id => dispatch(removeTodoAction(id)),
    editTodo: (id, updates) => dispatch(editTodoAction({ id, updates }))
  })
)(TodoList);
