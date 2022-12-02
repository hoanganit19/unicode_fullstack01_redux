import React from "react";
import { useSelector } from "react-redux";

export default function ShowTodos() {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <h1>Todos</h1>
      <div>
        {todos.map((todo, index) => (
          <h2 key={index}>{todo}</h2>
        ))}
      </div>
    </div>
  );
}
