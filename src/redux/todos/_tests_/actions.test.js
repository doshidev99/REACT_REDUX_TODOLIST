import {
  toggleTodoAction,
  addTodoAction,
  getTodoListAction,
  removeTodoAction,
  editTodoAction
} from '../actions';

describe('Todo action', () => {
  it('should create an action to TOGGLE_TODO_ACTION', () => {
    expect(toggleTodoAction(123456)).toEqual({
      type: toggleTodoAction.type,
      payload: 123456
    });
  });
  it('should create an action to DELETE_TODO_ACTION', () => {
    expect(removeTodoAction(123456)).toEqual({
      type: removeTodoAction.type,
      payload: 123456
    });
  });
  it('should create an action to ADD_TODO_ACTION', () => {
    expect(addTodoAction(123456)).toEqual({
      type: addTodoAction.type,
      payload: 123456
    });
  });
  it('should create an action to ADD_TODO_ACTION', () => {
    expect(getTodoListAction([])).toEqual({
      type: getTodoListAction.type,
      payload: []
    });
  });
  it('should create an action to ADD_TODO_ACTION', () => {
    expect(editTodoAction({ id: 0, updates: '1' })).toEqual({
      type: editTodoAction.type,
      payload: { id: 0, updates: '1' }
    });
  });
});
