import React from "react";
import Todo from "./Components/todo/Todo";
import PopUp from "./Components/PopUp/PopUp";
import AddedTasks from "./Components/AddedTasks/AddedTasks";
import "./App.css";

const App = () => {
  return (
    <div className="mainContiner">
      <Todo />
      <AddedTasks />
    </div>
  );
};

export default App;
