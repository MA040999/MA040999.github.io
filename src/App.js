import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Info from "./components/Info";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocal();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocal();
  }, [todos, filterStatus]);

  const filterHandler = () => {
    if (filterStatus === "completed")
      setFilteredTodos(todos.filter((x) => x.completed === true));
    else if (filterStatus === "incomplete")
      setFilteredTodos(todos.filter((x) => x.completed === false));
    else setFilteredTodos(todos);
  };

  const saveLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  };

  return (
    <div className="app">
      <div className="block">
        <Info />
        <div className="todo-container">
          <header>
            <h1>My Todo List</h1>
          </header>
          <Form
            inputText={inputText}
            todos={todos}
            setTodos={setTodos}
            setInputText={setInputText}
            setFilterStatus={setFilterStatus}
          />
          <TodoList todos={filteredTodos} setTodos={setTodos} />
        </div>
      </div>
      <div className="mini1"></div>
      <div className="mini2"></div>
    </div>
  );
};

export default App;
