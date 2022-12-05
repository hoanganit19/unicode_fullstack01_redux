import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  msg: "",
  status: "pending",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
    },
    // removeTodo: (state, action) => {
    //   state.todoList.splice(action.payload, 1);
    // },
    // fetchTodos: (state, action) => {
    //   state.todoList = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        //console.log(fetchTodos.fulfilled);
        state.todoList = action.payload;
        state.status = "success";
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
      })
      .addCase(fetchTodos.pending, (state, action) => {
        //console.log("pending");
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        //Xóa xong => cập nhật lại state
        if (action.payload) {
          const index = state.todoList.findIndex(
            (todo) => todo.id == action.payload
          );

          state.todoList.splice(index, 1);
        }
      });
  },
});

//Selector
export const todoSelector = (state) => state.todos;

//Actions
//export const { addTodo, removeTodo } = todoSlice.actions;
export const todoActions = todoSlice.actions;
console.log(todoActions);

//Redux Thunk
// export const fetchTodos = () => {
//   return async (dispatch, getState) => {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await res.json();
//     dispatch(todoActions.fetchTodos(data));
//   };
// };

export const fetchTodos = createAsyncThunk(
  `${todoSlice.name}/fetchTodos`,
  async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data;
  }
);

export const deleteTodo = createAsyncThunk(
  `${todoSlice.name}/deleteTodo`,
  async (id) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      return id;
    }

    return false;
  }
);

// console.log(fetchTodos.pending.type); //todos/fetchTodosStatus/pending
// console.log(fetchTodos.fulfilled.type); //todos/fetchTodosStatus/fulfilled

export default todoSlice.reducer;
