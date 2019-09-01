import { createReducer } from 'redux-starter-kit';
import {
  toggleTodoAction,
  addTodoAction,
  getTodoListAction,
  removeTodoAction,
  editTodoAction
} from './actions';

export const initialState = [];

export const getTodo = (state, { payload }) => [...payload];
export const addTodo = (state, { payload }) => [
  {
    id: Date.now(),
    text: payload,
    completed: false
  },
  ...state
];

export const editTodo = (state, { payload: { id, updates } }) =>
  state.map(todo => (todo.id === id ? { ...todo, text: updates } : todo));
export const removeTodo = (state, { payload }) =>
  state.filter(todo => todo.id !== payload);

export const toggleTodo = (state, { payload }) =>
  state.map(todo =>
    todo.id === payload ? { ...todo, completed: !todo.completed } : todo
  );

export default createReducer(initialState, {
  [getTodoListAction.type]: getTodo,
  [addTodoAction.type]: addTodo,
  [editTodoAction.type]: editTodo,
  [removeTodoAction.type]: removeTodo,
  [toggleTodoAction.type]: toggleTodo
});
