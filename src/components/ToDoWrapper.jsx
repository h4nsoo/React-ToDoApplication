import React from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";


export default function TodoWrapper() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, {
        id : uuidv4(),
        name : taskName,
        done : false,
        isUpdating : false
    }]);
  };

  return (
    <div className="todo-wrapper">
      <ToDoForm addTask={addTask} />
      {
        tasks.map((task) => (
          <ToDo key={task.id} task={task} />
        ))
      }
    </div>
  );
}
