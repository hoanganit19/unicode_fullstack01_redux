import logo from "./logo.svg";
import "./App.css";
import Todos from "./Components/Todos";
import Login from "./Components/Login";
import Products from "./Components/Products";
import { useState } from "react";

function App() {
  const loginToken = localStorage.getItem("login");

  const [token, setToken] = useState(null);

  const handleDataLogin = (token) => {
    setToken(token);
  };

  return (
    <>{loginToken ? <Products /> : <Login onDataLogin={handleDataLogin} />}</>
  );
}

export default App;
