import { TodoTypes } from './actions';
import { makeReducerCreator } from '../../utils/reduxUtils';

export const initialState = [];

export const getTodo = (state, { array }) => [...array];

export const addTodo = (state, { id, text }) => [
  {
    id,
    text,
    completed: false,
  },
  ...state,
];

export const editTodo = (state, { id, updates }) => state.map(todo => (todo.id === id ? { ...todo, updates } : todo));

export const removeTodo = (state, { id }) => state.filter(todo => todo.id !== id);

export const toggleTodo = (state, { id }) => state.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));

export default makeReducerCreator(initialState, {
  [TodoTypes.GET_TODO_LIST]: getTodo,
  [TodoTypes.ADD_TODO]: addTodo,
  [TodoTypes.EDIT_TODO]: editTodo,
  [TodoTypes.REMOVE_TODO]: removeTodo,
  [TodoTypes.TOGGLE_TODO]: toggleTodo,
});
