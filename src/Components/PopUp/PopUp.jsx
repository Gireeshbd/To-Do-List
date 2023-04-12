import React, { useEffect, useState } from "react";
import "./popUp.css";
import AddedTasks from "../AddedTasks/AddedTasks";
const PopUp = ({ handle }) => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [statusValue, setStatusValue] = useState("Yet To Start");
  const handleSubmit = (event) => {
    setInputValue(event.target.value);
  };
  const handleAddTasks = () => {
    setTodos((prevTodos) => {
      [
        ...prevTodos,
        { value: inputValue, id: Date.now(), status: statusValue },
      ];
    });

    setInputValue("");
    setStatusValue("Yet To Start");

    // console.log(todos); line is executed before the state update from setTodos is complete.
    //The state update in react is asynchrnous
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  const handleStatusChange = (event) => {
    setStatusValue(event.target.value);
  };
  const renderAddedTaskComponent = (todos) => {
    return <AddedTasks todos={todos} />;
  };

  return (
    <div className="popUpContainer">
      <div className="box">
        <div className="inputContainer">
          <h2>TO DO</h2>
          <div className="task">
            <h3>Task</h3>
            <input
              type="text"
              value={inputValue}
              onChange={handleSubmit}
              className="taskInput"
            />
          </div>
          <div className="taskStatus">
            <h3>Status</h3>
            <select
              id=""
              value={statusValue}
              onChange={handleStatusChange}
              className="selectStatus"
            >
              <option value="Yet To Start">Yet To Start</option>
              <option value="Completed">Completed</option>
              <option value="In progress">In progress</option>
            </select>
          </div>
          <div className="buttons">
            <button className="addTaskButton2" onClick={handleAddTasks}>
              Add Task
            </button>
            <button className="cancel" onClick={handle}>
              Cancel
            </button>
          </div>
        </div>
        <button className="close" onClick={handle}>
          X
        </button>
      </div>
      {renderAddedTaskComponent(todos)}
    </div>
  );
};

export default PopUp;
