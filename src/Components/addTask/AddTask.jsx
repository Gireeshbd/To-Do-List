import React, { useState } from "react";
import PopUp from "../PopUp/PopUp";
import "./addTask.css";
const AddTask = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="addTaskContainer">
      <button className="addTaskButton" onClick={() => setIsOpen(!isOpen)}>
        Add Task
      </button>
      {isOpen && (
        <PopUp
          handle={() => {
            handleClick();
          }}
        />
      )}
    </div>
  );
};

export default AddTask;
