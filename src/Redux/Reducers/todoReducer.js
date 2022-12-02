const initialState = {
  todoList: [],
  msg: "",
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todos/add":
      return { ...state, todoList: state.todoList.concat(action.payload) };

    case "todos/fetch":
      return { ...state, todoList: action.payload };

    default:
      // throw new Error("Không tồn tại action " + action.type);
      //console.error("Không tồn tại action " + action.type);
      return state;
  }
};
