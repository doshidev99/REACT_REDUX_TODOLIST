import { TODO } from './constant';

export const toggleTodo = id => ({
  type: TODO.TOGGLE,
  id
});

export const getTodoList = array => ({
  type: TODO.GET,
  array
});

export const addTodo = text => ({
  type: TODO.ADD,
  id: Date.now(),
  text
});

export const removeTodo = id => ({
  type: TODO.REMOVE,
  id
});

export const editTodo = (id, updates) => ({
  type: TODO.EDIT,
  id,
  updates
});
