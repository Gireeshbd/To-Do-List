import { React, useState } from "react";
import AddTask from "../addTask/AddTask";
import StatusFilter from "../StatusFilter/StatusFilter";

import "./todo.css";
const Todo = () => {
  return (
    <div className="todoContainer">
      <div className="todoHeading">TODO LIST</div>
      <div className="addFilter">
        <AddTask />
        <StatusFilter />
      </div>
    </div>
  );
};

export default Todo;
