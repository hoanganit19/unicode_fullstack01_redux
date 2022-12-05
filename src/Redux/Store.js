//import { legacy_createStore as createStore, applyMiddleware } from "redux";
//import { rootReducer } from "./rootReducer";
//import thunk from "redux-thunk";
//import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { todoSlice } from "../Components/todoSlice";

//const middlewares = [thunk];

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middlewares))
// );

const rootReducer = {};
rootReducer[todoSlice.name] = todoReducer; //todos

export const store = configureStore({
  reducer: rootReducer,
});
