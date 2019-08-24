import { createAction } from 'redux-starter-kit';

export const toggleTodoAction = createAction('TOGGLE_TODO');

export const getTodoListAction = createAction('GET_TODO_LIST');
export const addTodoAction = createAction('ADD_TODO');

export const removeTodoAction = createAction('REMOVE_TODO');

export const editTodoAction = createAction('EDIT_TODO');
