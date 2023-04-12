import React from "react";

const AddedTasks = ({ todos }) => {
  return (
    <div className="todosContainer">
      {todos && todos.length > 0 ? (
        todos.map((todo) => <li key={todo.id}>{todo.value}</li>)
      ) : (
        <p>No To Do List</p>
      )}
    </div>
  );
};

export default AddedTasks;
