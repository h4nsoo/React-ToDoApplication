import React, { useState } from "react";

export default function ToDoForm({ addTask }) {
  const [task, setTask] = useState("");

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (f) => {
    f.preventDefault();

    if (task.trim() === "") {
      alert("Please enter a task.");
      return;
    }

    addTask(task);
    setTask("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter a task ✅"
        onChange={handleInput}
        value={task}
      />
      <button className="todo-btn">
        <svg
          viewBox="0 0 24 24"
          className="arr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
        <span className="text">Add Task</span>
        <span className="circle"></span>
        <svg
          viewBox="0 0 24 24"
          className="arr-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
        </svg>
      </button>
    </form>
  );
}
