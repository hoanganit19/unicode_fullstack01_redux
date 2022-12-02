import { todoReducer } from "./Reducers/todoReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  todos: todoReducer,
});
