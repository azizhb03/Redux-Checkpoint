import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Task = ({ task, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggleTask = () => {
    dispatch({ type: "TOGGLE_TASK", payload: task.id });
  };

  const handleEditTask = () => {
    onEdit(newDescription);
    setIsEditing(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={handleToggleTask}
      />
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEditTask}>Save</button>
        </div>
      ) : (
        <div>
          {task.description}
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Task;
