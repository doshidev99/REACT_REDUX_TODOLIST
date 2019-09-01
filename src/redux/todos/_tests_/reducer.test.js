import reducer from '../reducer';
import {
  toggleTodoAction,
  addTodoAction,
  getTodoListAction,
  removeTodoAction,
  editTodoAction
} from '../actions';

describe('Add todos reducer', () => {
  it('should handle GET_TODO', () => {
    expect(
      reducer([], {
        type: getTodoListAction.type,
        payload: [
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          }
        ]
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ]);
  });
  it('should handle GET_TODO', () => {
    expect(
      reducer([], {
        type: getTodoListAction.type,
        payload: [
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          }
        ]
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ]);
  });
  // -------------ADD_TODO-----------------
  it('should handle ADD_TODO', () => {
    expect(
      reducer([], {
        type: addTodoAction.type,
        payload: 'Run the tests'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: Date.now()
      }
    ]);

    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: addTodoAction.type,
          payload: 'Run the tests'
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: Date.now()
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ]);
  });
  it('should handle DELETE_TODO', () => {
    expect(
      reducer(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          }
        ],
        {
          type: removeTodoAction.type,
          payload: 0
        }
      )
    ).toEqual([]);
  });

  it('should handle TOGGLE_TODO', () => {
    expect(
      reducer(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          }
        ],
        {
          type: toggleTodoAction.type,
          payload: 0
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: true,
        id: 0
      }
    ]);
  });
  // ---------------EDIT_TODO-------------
  it('should handle EDIT_TODO', () => {
    expect(
      reducer(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 0
          }
        ],
        {
          type: editTodoAction.type,
          payload: { id: 0, updates: 'ABC' }
        }
      )
    ).toEqual([
      {
        text: 'ABC',
        completed: false,
        id: 0
      }
    ]);
  });
});
