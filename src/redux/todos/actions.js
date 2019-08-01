import { makeConstantCreator, makeActionCreator } from '../../utils/reduxUtils';

export const TodoTypes = makeConstantCreator(
  'GET_TODO_LIST',
  'ADD_TODO',
  'REMOVE_TODO',
  'EDIT_TODO',
  'TOGGLE_TODO',
);

export const toggleTodoAction = id => makeActionCreator(TodoTypes.TOGGLE_TODO, { id });

export const getTodoListAction = array => makeActionCreator(TodoTypes.GET_TODO_LIST, { array });

export const addTodoAction = text => makeActionCreator(TodoTypes.ADD_TODO, { id: Date.now(), text });

export const removeTodoAction = id => makeActionCreator(TodoTypes.REMOVE_TODO, { id });

export const editTodoAction = (id, updates) => makeActionCreator(TodoTypes.EDIT_TODO, { id, updates });
