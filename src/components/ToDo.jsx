import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ToDo({ task, onToggle, onEdit, onDelete, updateTask }) {

  const [updatedName, setUpdatedName] = useState(task.name);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateTask(task.id, updatedName);
  };

  return (
    <div className="todo-task">
      {task.isUpdating ? (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
            className="todo-input"
          />
          <button type="submit" className="save-btn">
            Save
          </button>
        </form>
      ) : (
        <>
          <p
            className={task.done ? "completed" : "incompleted"}
            onClick={() => onToggle(task.id)}
          >
            {task.name}
          </p>
          <div>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="edit"
              onClick={() => onEdit(task)}
            />
            <FontAwesomeIcon
              icon={faTrash}
              className="delete"
              onClick={() => onDelete(task.id)}
            />
          </div>
        </>
      )}
    </div>
  );
}
