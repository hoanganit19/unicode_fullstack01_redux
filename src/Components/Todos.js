import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ShowTodos from "./ShowTodos";
//import { todoSelector } from "../Redux/Selectors/todoSelector";
//import { addTodo, fetchTodos } from "../Redux/Actions/todoActions";
import { todoSelector, todoActions, fetchTodos, deleteTodo } from "./todoSlice";
import todoStyles from "./Todos.module.scss";
//import normalStyles from "./Normal.module.scss";
import clsx from "clsx";
import logo from "../logo.svg";
import logo2 from "../Images/UNICODE_logo.png";

// console.log(logo);
// console.log(logo2);

const { "btn-success": btnSuccess, btn } = todoStyles;
//console.log(normalStyles);

const logoPublic = process.env.PUBLIC_URL + "/logo192.png";

// if (process.env.NODE_ENV === "developement") {
//   //Call api sandbox
// } else {
//   //Call api live
// }

export default function Todos() {
  const { addTodo, removeTodo } = todoActions;

  const dispatch = useDispatch();

  const todos = useSelector(todoSelector);

  //console.log(todos);

  const { todoList } = todos;

  // console.log(todoList);

  const handleClick = () => {
    //dispatch(addTodo("ABC"));
    // dispatch(fetchTodos());
    dispatch(addTodo("ABC"));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const handleRemove = (id) => {
    //dispatch(removeTodo(index));
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <img src={logo2} />
      <img src={logoPublic} />
      <button
        type="button"
        className={clsx(btn, btnSuccess)}
        onClick={handleClick}
      >
        Add
      </button>
      <div>
        {todos.status == "pending" ? (
          <p>Đang tải...</p>
        ) : todos.status == "failed" ? (
          <p>Đã có lỗi xảy ra</p>
        ) : (
          todoList.map((todo, index) => (
            <h2 key={todo.id}>
              {todo.title}{" "}
              <span
                onClick={() => {
                  handleRemove(todo.id);
                }}
              >
                Xóa
              </span>
            </h2>
          ))
        )}
      </div>
      <hr />
      {/* <ShowTodos /> */}
    </div>
  );
}
