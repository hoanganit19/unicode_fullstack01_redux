import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShowTodos from "./ShowTodos";
import { todoSelector } from "../Redux/Selectors/todoSelector";
import { addTodo, fetchTodos } from "../Redux/Actions/todoActions";

export default function Todos() {
  const dispatch = useDispatch();

  const todos = useSelector(todoSelector);

  const { todoList } = todos;

  console.log(todoList);

  const handleClick = () => {
    //dispatch(addTodo("ABC"));
    // dispatch(fetchTodos());
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Add
      </button>
      <div>
        {todoList.map((todo, index) => (
          <h2 key={todo.id}>{todo.title}</h2>
        ))}
      </div>
      <hr />
      {/* <ShowTodos /> */}
    </div>
  );
}
