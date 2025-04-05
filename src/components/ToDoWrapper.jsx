import React from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoWrapper() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        name: taskName,
        done: false,
        isUpdating: false,
      },
    ]);
  };

  const onToggle = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };


  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const onEdit = (task) => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, isUpdating: !t.isUpdating } : t
      )
    );
  };

  
const updateTask = (id, updatedName) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, name: updatedName, isUpdating: false } : task
    )
  );
};

  return (
    <div className="todo-wrapper">
      <center>
        <h1>Get organized, Be efficient !</h1>
      </center>
      <ToDoForm addTask={addTask} />
      {tasks.map((task) => (
        <ToDo key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} onEdit={onEdit} updateTask={updateTask} />
      ))}
    </div>
  );
}
