import { TODO } from "./constant";

export default (state = [], action) => {
  switch (action.type) {
    case TODO.GET:
      return [...action.array];
    case TODO.ADD:
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        },
        ...state
      ];
    case TODO.EDIT:
      let text = action.updates;
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text } : todo
      );
    case TODO.REMOVE:
      return state.filter(todo => todo.id !== action.id);
    case TODO.TOGGLE:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};
