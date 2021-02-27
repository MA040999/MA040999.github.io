import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import uuidv4 from "uuid/dist/v4";
const Form = ({
  setInputText,
  inputText,
  todos,
  setTodos,
  setFilterStatus,
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText !== "") {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: uuidv4(),
          deleted: false,
        },
      ]);
    }
    setInputText("");
  };

  const filterHandler = (e) => {
    setFilterStatus(e.target.value);
  };

  return (
    <form>
      <div className="shadow">
        <input
          value={inputText || ""}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
        />
        <button onClick={submitHandler} type="submit" className="todo-button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="select">
        <select onClick={filterHandler} className="filter">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
