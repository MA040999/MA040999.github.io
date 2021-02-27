import React from "react";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(
      todos.map((x) => {
        if (x.id === todo.id) {
          return { ...x, deleted: !x.deleted };
        }
        return x;
      })
    );

    setTimeout(() => {
      setTodos(todos.filter((x) => x.id !== todo.id));
    }, 500);
  };

  const completeHandler = () => {
    setTodos(
      todos.map((x) => {
        if (x.id === todo.id) {
          return { ...x, completed: !x.completed };
        }
        return x;
      })
    );
  };
  return (
    <div
      className={`todo ${todo.completed ? "completed" : ""} ${
        todo.deleted ? "delete" : ""
      }`}
    >
      <li>{text}</li>
      <button onClick={completeHandler} className="check">
        <FontAwesomeIcon className="fa-check" icon={faCheck} />
      </button>
      <button onClick={deleteHandler} className="trash">
        <FontAwesomeIcon className="fa-trash" icon={faTrash} />
      </button>
    </div>
  );
};

export default Todo;
