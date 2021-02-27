import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-list">
      {todos.map((x) => (
        <Todo
          todo={x}
          setTodos={setTodos}
          todos={todos}
          key={x.id}
          text={x.text}
        />
      ))}
    </div>
  );
};

export default TodoList;
