export const addTodo = (todo) => {
  return {
    type: "todos/add",
    payload: todo,
  };
};

export const fetchTodos = () => {
  return async (dispatch) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    dispatch({
      type: "todos/fetch",
      payload: data,
    });
  };
};
